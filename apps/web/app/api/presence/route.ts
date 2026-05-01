import { and, count, eq, lt, sql } from 'drizzle-orm';
import { db } from '@/lib/db/drizzle';
import { visitorPresence } from '@/lib/db/schema';

const ACTIVE_WINDOW_SECONDS = 45;
const CLEANUP_WINDOW_MINUTES = 10;
const VISITOR_ID_PATTERN = /^[a-zA-Z0-9_-]{12,64}$/;

function normalizePathname(value: unknown) {
  if (typeof value !== 'string') {
    return '/';
  }

  const pathname = value.trim();

  if (!pathname.startsWith('/') || pathname.startsWith('//')) {
    return '/';
  }

  return pathname.slice(0, 240);
}

function activeSinceExpression() {
  return sql<Date>`now() - (${ACTIVE_WINDOW_SECONDS} || ' seconds')::interval`;
}

async function countActive(pathname: string) {
  const [row] = await db
    .select({ value: count() })
    .from(visitorPresence)
    .where(
      and(
        eq(visitorPresence.pathname, pathname),
        sql`${visitorPresence.lastSeenAt} >= ${activeSinceExpression()}`
      )
    );

  return row?.value ?? 0;
}

async function cleanupOldPresence() {
  await db
    .delete(visitorPresence)
    .where(
      lt(
        visitorPresence.lastSeenAt,
        sql<Date>`now() - (${CLEANUP_WINDOW_MINUTES} || ' minutes')::interval`
      )
    );
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const pathname = normalizePathname(url.searchParams.get('pathname'));

  try {
    const online = await countActive(pathname);
    return Response.json({ online });
  } catch {
    return Response.json({ online: 0, available: false });
  }
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const visitorId =
    typeof body?.visitorId === 'string' ? body.visitorId.trim() : '';
  const pathname = normalizePathname(body?.pathname);

  if (!VISITOR_ID_PATTERN.test(visitorId)) {
    return Response.json({ error: 'Invalid visitor id' }, { status: 400 });
  }

  try {
    await db
      .insert(visitorPresence)
      .values({
        visitorId,
        pathname,
        lastSeenAt: sql`now()`,
        createdAt: sql`now()`
      })
      .onConflictDoUpdate({
        target: [visitorPresence.visitorId, visitorPresence.pathname],
        set: {
          lastSeenAt: sql`now()`
        }
      });

    await cleanupOldPresence();

    const online = await countActive(pathname);

    return Response.json({ online });
  } catch {
    return Response.json({ online: 0, available: false });
  }
}
