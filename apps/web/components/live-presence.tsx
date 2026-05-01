'use client';

import { useEffect, useMemo, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Activity } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Locale } from '@/lib/i18n/settings';

const VISITOR_STORAGE_KEY = 'ir_visitor_id';
const HEARTBEAT_INTERVAL_MS = 15_000;

function createVisitorId() {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    return crypto.randomUUID();
  }

  return `${Date.now().toString(36)}-${Math.random()
    .toString(36)
    .slice(2, 14)}`;
}

function getVisitorId() {
  const existing = window.localStorage.getItem(VISITOR_STORAGE_KEY);

  if (existing) {
    return existing;
  }

  const visitorId = createVisitorId();
  window.localStorage.setItem(VISITOR_STORAGE_KEY, visitorId);

  return visitorId;
}

type LivePresenceProps = {
  locale: Locale;
};

export function LivePresence({ locale }: LivePresenceProps) {
  const pathname = usePathname();
  const [online, setOnline] = useState<number | null>(null);
  const [isConnected, setIsConnected] = useState(false);

  const label = useMemo(() => {
    if (!isConnected) {
      return '--';
    }

    if (online === null) {
      return locale === 'zh' ? '统计中' : 'syncing';
    }

    return locale === 'zh' ? `${online} 人在线` : `${online} online`;
  }, [isConnected, locale, online]);
  const statusLabel = locale === 'zh' ? '实时' : 'Live';

  useEffect(() => {
    let isMounted = true;

    async function heartbeat() {
      try {
        const response = await fetch('/api/presence', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            visitorId: getVisitorId(),
            pathname
          })
        });

        if (!response.ok) {
          throw new Error('Presence heartbeat failed');
        }

        const data = (await response.json()) as {
          online?: number;
          available?: boolean;
        };

        if (isMounted) {
          setOnline(typeof data.online === 'number' ? data.online : null);
          setIsConnected(data.available !== false);
        }
      } catch {
        if (isMounted) {
          setIsConnected(false);
        }
      }
    }

    heartbeat();
    const interval = window.setInterval(heartbeat, HEARTBEAT_INTERVAL_MS);

    return () => {
      isMounted = false;
      window.clearInterval(interval);
    };
  }, [pathname]);

  return (
    <div className="hidden items-center gap-2 rounded-full border border-theme-border bg-theme-panel px-3 py-2 text-xs font-medium text-theme-text-soft md:flex">
      <span
        className={cn(
          'size-1.5 rounded-full',
          isConnected
            ? 'bg-theme-accent shadow-[0_0_16px_color-mix(in_srgb,var(--theme-accent)_90%,transparent)]'
            : 'bg-theme-text-muted/60'
        )}
      />
      <Activity className="size-3.5 text-theme-accent" />
      <span className="font-semibold uppercase tracking-[0.16em] text-theme-accent">
        {statusLabel}
      </span>
      <span>{label}</span>
    </div>
  );
}
