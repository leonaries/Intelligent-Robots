import Link from 'next/link';
import { ArrowRight, Search, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { HotTerms } from '@/components/hot-terms';
import { ModuleCard } from '@/components/module-card';
import { PageShell } from '@/components/page-shell';
import { SectionHeading } from '@/components/section-heading';
import { SignalList } from '@/components/signal-list';
import {
  assistantPrompts,
  platformModules,
  platformStats,
  searchHints
} from '@/lib/data/robotics';

export default function HomePage() {
  return (
    <PageShell>
      <main>
        <section className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[minmax(0,1fr)_360px] lg:px-8 lg:py-14">
          <div className="flex flex-col gap-8">
            <section className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.04]">
              <div className="grid lg:grid-cols-[minmax(0,1fr)_360px]">
                <div className="flex flex-col justify-center gap-6 p-6 sm:p-8 lg:p-10">
                  <div className="flex w-fit items-center gap-2 rounded-full border border-cyan-200/20 bg-cyan-200/10 px-3 py-1 text-xs font-medium text-cyan-100">
                    <span className="size-1.5 rounded-full bg-cyan-200 shadow-[0_0_18px_rgba(103,232,249,0.8)]" />
                    Robotics Intelligence Infrastructure
                  </div>
                  <div className="flex flex-col gap-4">
                    <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                      面向机器人产业的导航与智库入口
                    </h1>
                    <p className="max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
                      汇聚全球机器人行业资讯、企业档案、投融资事件、技术论文、产业指标和资源导航，
                      帮助创业者、投资人和工程师快速进入产业地图。
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Button
                      asChild
                      className="rounded-full bg-cyan-200 text-slate-950 hover:bg-cyan-100"
                    >
                      <Link href="/resources">
                        浏览产业导航
                        <ArrowRight className="size-4" />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="rounded-full border-white/15 bg-white/5 text-white hover:bg-white/10"
                    >
                      <Link href="/news">查看今日信号</Link>
                    </Button>
                  </div>
                  <div className="grid gap-2 rounded-lg border border-white/10 bg-slate-950/60 p-3 sm:grid-cols-3">
                    {searchHints.map((hint) => (
                      <div
                        key={hint.label}
                        className="flex items-center gap-2 rounded-md bg-white/[0.04] px-3 py-2 text-sm text-slate-300"
                      >
                        <hint.icon className="size-4 text-cyan-200" />
                        {hint.label}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative min-h-[260px] border-t border-white/10 lg:border-l lg:border-t-0">
                  <img
                    src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=900&q=85"
                    alt="机器人与未来科技场景"
                    className="object-cover opacity-80 grayscale-[15%]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07090b] via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 rounded-md border border-cyan-200/30 bg-slate-950/70 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">
                    Robotics Watch
                  </div>
                </div>
              </div>
            </section>

            <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {platformStats.map((stat) => (
                <Card
                  key={stat.label}
                  className="border-white/10 bg-white/[0.04] py-0 shadow-none"
                >
                  <CardContent className="p-5">
                    <div className="text-3xl font-semibold tracking-tight text-white">
                      {stat.value}
                    </div>
                    <div className="mt-2 text-sm font-medium text-slate-200">
                      {stat.label}
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {stat.detail}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </section>

            <section className="flex flex-col gap-5">
              <SectionHeading
                eyebrow="Platform Map"
                title="产业智库模块"
                description="首页是机器人产业导航图。资讯只是其中一个入口，真正的价值来自结构化公司、融资、论文、数据和资源沉淀。"
              />
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {platformModules.map((module) => (
                  <ModuleCard key={module.href} {...module} />
                ))}
              </div>
            </section>
          </div>

          <aside className="flex flex-col gap-4">
            <SignalList />
            <HotTerms />
            <Card className="border-white/10 bg-gradient-to-br from-cyan-200/10 to-amber-200/10 py-0 shadow-none">
              <CardHeader className="px-5 pt-5">
                <CardTitle className="flex items-center gap-2 text-base text-white">
                  <Sparkles className="size-4 text-cyan-200" />
                  AI 助手预览
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-3 px-5 pb-5">
                {assistantPrompts.slice(0, 2).map((item) => (
                  <Link
                    key={item.prompt}
                    href="/ai"
                    className="rounded-lg border border-white/10 bg-slate-950/50 p-3 text-sm leading-6 text-slate-300 transition hover:border-cyan-200/40"
                  >
                    {item.prompt}
                  </Link>
                ))}
              </CardContent>
            </Card>
          </aside>
        </section>
      </main>
    </PageShell>
  );
}
