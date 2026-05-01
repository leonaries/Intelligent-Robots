import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type NewsSignal = {
  title: string;
  category: string;
  source: string;
  time: string;
  summary: string;
  tags?: string[];
};

type NewsFeatureCardProps = {
  signal: NewsSignal;
  actionLabel: string;
  imageAlt: string;
  href?: string;
  variant?: 'featured' | 'compact';
};

const featureImage =
  'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=85';

export function NewsFeatureCard({
  signal,
  actionLabel,
  imageAlt,
  href = '#',
  variant = 'compact'
}: NewsFeatureCardProps) {
  const isFeatured = variant === 'featured';

  return (
    <article
      className={cn(
        'group relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] shadow-none transition duration-300 hover:border-cyan-200/35 hover:bg-white/[0.06]',
        isFeatured
          ? 'grid min-h-[360px] lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1fr)]'
          : 'flex min-h-[330px] flex-col'
      )}
    >
      {isFeatured ? (
        <div className="relative min-h-[220px] overflow-hidden bg-slate-950 lg:min-h-full">
          <img
            src={featureImage}
            alt={imageAlt}
            className="h-full w-full object-cover opacity-70 grayscale-[20%] transition duration-500 group-hover:scale-[1.03] group-hover:opacity-85"
          />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(7,9,11,0.08),rgba(7,9,11,0.82))]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(103,232,249,0.22),transparent_36%)]" />
        </div>
      ) : null}

      <div
        className={cn(
          'relative flex flex-1 flex-col p-5',
          isFeatured ? 'justify-center sm:p-7' : 'justify-between'
        )}
      >
        <div>
          <div className="mb-5 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
            <span className="rounded-full bg-cyan-200 px-3 py-1 text-slate-950">
              {signal.category}
            </span>
            <span>{signal.time}</span>
          </div>
          <h3
            className={cn(
              'font-semibold leading-tight text-white',
              isFeatured ? 'text-2xl sm:text-3xl' : 'text-xl'
            )}
          >
            {signal.title}
          </h3>
          <p
            className={cn(
              'mt-4 leading-7 text-slate-400',
              isFeatured ? 'text-base' : 'text-sm'
            )}
          >
            {signal.summary}
          </p>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {(signal.tags ?? [signal.source]).slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>
          <Link
            href={href}
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
          >
            {actionLabel}
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
