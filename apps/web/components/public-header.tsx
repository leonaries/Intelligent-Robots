import Link from 'next/link';
import { Bot, LayoutDashboard } from 'lucide-react';
import { LanguageSwitcher } from '@/components/language-switcher';
import { LivePresence } from '@/components/live-presence';
import { Button } from '@/components/ui/button';
import { getRoboticsContent } from '@/lib/data/robotics';
import { getLocale } from '@/lib/i18n/config';

export async function PublicHeader() {
  const locale = await getLocale();
  const content = getRoboticsContent(locale);

  return (
    <header className="sticky top-0 z-30 border-b border-theme-border bg-theme-bg/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <div className="flex size-9 items-center justify-center rounded-lg border border-theme-border-strong bg-theme-accent-soft text-theme-accent">
            <Bot className="size-5" />
          </div>
          <div className="min-w-0">
            <div className="truncate text-base font-semibold tracking-wide text-theme-text">
              {content.brand}
            </div>
            {content.tagline ? (
              <div className="truncate text-xs text-theme-text-muted">
                {content.tagline}
              </div>
            ) : null}
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {content.navItems.slice(0, 7).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm text-theme-text-soft transition hover:bg-theme-panel hover:text-theme-text"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LivePresence locale={locale} />
          <LanguageSwitcher locale={locale} />
          <Button asChild className="rounded-full bg-theme-accent text-theme-accent-foreground hover:bg-theme-accent/85">
            <Link href="/dashboard">
              <LayoutDashboard className="size-4" />
              {content.header.dashboard}
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
