import Link from 'next/link';
import { Bot, LayoutDashboard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { navItems } from '@/lib/data/robotics';

export function PublicHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-[#07090b]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <div className="flex size-9 items-center justify-center rounded-lg border border-cyan-300/50 bg-cyan-300/10 text-cyan-200">
            <Bot className="size-5" />
          </div>
          <div className="min-w-0">
            <div className="truncate text-base font-semibold tracking-wide text-white">
              机器人产业智库
            </div>
            <div className="truncate text-xs text-slate-400">
              Robotics Intelligence Platform
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.slice(0, 7).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            asChild
            variant="outline"
            className="hidden rounded-full border-white/15 bg-white/5 text-white hover:bg-white/10 sm:inline-flex"
          >
            <Link href="/ai">AI 助手</Link>
          </Button>
          <Button asChild className="rounded-full bg-cyan-200 text-slate-950 hover:bg-cyan-100">
            <Link href="/dashboard">
              <LayoutDashboard className="size-4" />
              控制台
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
