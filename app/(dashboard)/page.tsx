import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { HotTerms } from '@/components/hot-terms';
import { ModuleCard } from '@/components/module-card';
import { PageShell } from '@/components/page-shell';
import { RobotSplineHero } from '@/components/robot-spline-hero';
import { SectionHeading } from '@/components/section-heading';
import { SignalList } from '@/components/signal-list';
import { getRoboticsContent } from '@/lib/data/robotics';
import { getLocale } from '@/lib/i18n/config';

export default async function HomePage() {
  const locale = await getLocale();
  const content = getRoboticsContent(locale);
  const { home } = content;

  return (
    <PageShell>
      <main>
        <section className="mx-auto grid max-w-[1600px] gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[minmax(0,1fr)_360px] lg:px-8 lg:py-14">
          <div className="flex flex-col gap-8">
            <section className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.04]">
              <div className="grid lg:grid-cols-[minmax(0,1fr)_520px] xl:grid-cols-[minmax(0,1fr)_620px] 2xl:grid-cols-[minmax(0,1fr)_700px]">
                <div className="flex flex-col justify-center gap-6 p-6 sm:p-8 lg:p-9 xl:p-10">
                  <div className="flex w-fit items-center gap-2 rounded-full border border-cyan-200/20 bg-cyan-200/10 px-3 py-1 text-xs font-medium text-cyan-100">
                    <span className="size-1.5 rounded-full bg-cyan-200 shadow-[0_0_18px_rgba(103,232,249,0.8)]" />
                    {home.badge}
                  </div>
                  <div className="flex flex-col gap-4">
                    <h1 className="max-w-3xl text-[34px] font-semibold leading-[1.12] tracking-tight text-white sm:text-[40px] lg:text-[42px] xl:text-[46px]">
                      {home.title[0]}
                      <br />
                      {home.title[1]}
                    </h1>
                    <p className="max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
                      {home.description}
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Button
                      asChild
                      className="rounded-full bg-cyan-200 text-slate-950 hover:bg-cyan-100"
                    >
                      <Link href="/resources">
                        {home.primaryCta}
                        <ArrowRight className="size-4" />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="rounded-full border-white/15 bg-white/5 text-white hover:bg-white/10"
                    >
                      <Link href="/news">{home.secondaryCta}</Link>
                    </Button>
                  </div>
                  <div className="grid gap-2 rounded-lg border border-white/10 bg-slate-950/60 p-3 sm:grid-cols-3">
                    {content.searchHints.map((hint) => (
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
                <RobotSplineHero
                  eyebrow={home.robotEyebrow}
                  title={home.robotTitle}
                  meta={home.robotMeta}
                />
              </div>
            </section>

            <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {content.platformStats.map((stat) => (
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
                eyebrow={home.moduleEyebrow}
                title={home.moduleTitle}
                description={home.moduleDescription}
              />
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {content.platformModules.map((module) => (
                  <ModuleCard
                    key={module.href}
                    {...module}
                    actionLabel={home.moduleAction}
                  />
                ))}
              </div>
            </section>
          </div>

          <aside className="flex flex-col gap-4">
            <SignalList
              title={home.latestTitle}
              signals={content.latestSignals}
            />
            <HotTerms title={home.hotTermsTitle} terms={content.hotTerms} />
          </aside>
        </section>
      </main>
    </PageShell>
  );
}
