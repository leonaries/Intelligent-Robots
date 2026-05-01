'use client';

import { useEffect, useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { Globe2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  LOCALE_COOKIE,
  type Locale,
  otherLocale
} from '@/lib/i18n/settings';

type LanguageSwitcherProps = {
  locale: Locale;
};

export function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [optimisticLocale, setOptimisticLocale] = useState(locale);
  const nextLocale = otherLocale(optimisticLocale);

  useEffect(() => {
    setOptimisticLocale(locale);
  }, [locale]);

  return (
    <Button
      type="button"
      variant="outline"
      className="rounded-full border-white/15 bg-white/5 px-3 text-cyan-100 shadow-none hover:border-cyan-200/40 hover:bg-cyan-200/10 hover:text-cyan-50 focus-visible:border-cyan-200/50 focus-visible:ring-cyan-200/30"
      aria-busy={isPending}
      aria-label={optimisticLocale === 'zh' ? 'Switch to English' : '切换到中文'}
      onClick={() => {
        setOptimisticLocale(nextLocale);
        document.cookie = `${LOCALE_COOKIE}=${nextLocale}; path=/; max-age=31536000; samesite=lax`;
        startTransition(() => {
          router.refresh();
        });
      }}
    >
      <Globe2 className="size-4" />
      <span className="hidden sm:inline">
        {optimisticLocale === 'zh' ? 'EN' : '中'}
      </span>
    </Button>
  );
}
