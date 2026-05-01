'use client';

import { useTransition } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Globe2 } from 'lucide-react';
import { setLocale } from '@/app/actions/locale';
import { Button } from '@/components/ui/button';
import { type Locale, otherLocale } from '@/lib/i18n/settings';

type LanguageSwitcherProps = {
  locale: Locale;
};

export function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const nextLocale = otherLocale(locale);

  return (
    <Button
      type="button"
      variant="outline"
      className="rounded-full border-white/15 bg-white/5 px-3 text-white hover:bg-white/10"
      disabled={isPending}
      aria-label={locale === 'zh' ? 'Switch to English' : '切换到中文'}
      onClick={() => {
        startTransition(async () => {
          await setLocale(nextLocale, pathname);
          router.refresh();
        });
      }}
    >
      <Globe2 className="size-4" />
      <span className="hidden sm:inline">{locale === 'zh' ? 'EN' : '中'}</span>
    </Button>
  );
}
