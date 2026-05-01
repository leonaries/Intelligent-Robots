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
            <section className="overflow-hidden rounded-lg border border-theme-border bg-theme-panel">
              <div className="grid lg:grid-cols-[minmax(0,1fr)_520px] xl:grid-cols-[minmax(0,1fr)_620px] 2xl:grid-cols-[minmax(0,1fr)_700px]">
                <div className="flex flex-col justify-center gap-6 p-6 sm:p-8 lg:p-9 xl:p-10">
                  <div className="flex w-fit items-center gap-2 rounded-full border border-theme-border-strong bg-theme-accent-soft px-3 py-1 text-xs font-medium text-theme-accent">
                    <span className="size-1.5 rounded-full bg-theme-accent shadow-[0_0_18px_color-mix(in_srgb,var(--theme-accent)_80%,transparent)]" />
                    {home.badge}
                  </div>
                  <div className="flex flex-col gap-4">
                    <h1 className="max-w-3xl text-[34px] font-semibold leading-[1.12] tracking-tight text-theme-text sm:text-[40px] lg:text-[42px] xl:text-[46px]">
                      {home.title[0]}
                      <br />
                      {home.title[1]}
                    </h1>
                    <p className="max-w-3xl text-base leading-7 text-theme-text-soft sm:text-lg">
                      {home.description}
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Button
                      asChild
                      className="rounded-full bg-theme-accent text-theme-accent-foreground hover:bg-theme-accent/85"
                    >
                      <Link href="/resources">
                        {home.primaryCta}
                        <ArrowRight className="size-4" />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="rounded-full border-theme-border bg-theme-panel text-theme-text hover:bg-theme-panel/80"
                    >
                      <Link href="/news">{home.secondaryCta}</Link>
                    </Button>
                  </div>
                  <div className="grid gap-2 rounded-lg border border-theme-border bg-theme-panel-strong p-3 sm:grid-cols-3">
                    {content.searchHints.map((hint) => (
                      <div
                        key={hint.label}
                        className="flex items-center gap-2 rounded-md bg-theme-panel px-3 py-2 text-sm text-theme-text-soft"
                      >
                        <hint.icon className="size-4 text-theme-accent" />
                        {hint.label}
                      </div>
                    ))}
                  </div>
                </div>
                <RobotSplineHero
                  eyebrow={home.robotEyebrow}
                  title={home.robotTitle}
                  meta={home.robotMeta}
                  fallbackAlt={home.robotFallbackAlt}
                />
              </div>
            </section>

            <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {content.platformStats.map((stat) => (
                <Card
                  key={stat.label}
                  className="border-theme-border bg-theme-panel py-0 shadow-none"
                >
                  <CardContent className="p-5">
                    <div className="text-3xl font-semibold tracking-tight text-theme-text">
                      {stat.value}
                    </div>
                    <div className="mt-2 text-sm font-medium text-theme-text-soft">
                      {stat.label}
                    </div>
                    <p className="mt-2 text-sm leading-6 text-theme-text-muted/70">
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
              actionLabel={content.labels.readFullArticle}
              imageAlt={content.labels.newsImageAlt}
              signals={content.latestSignals}
            />
            <HotTerms title={home.hotTermsTitle} terms={content.hotTerms} />
          </aside>
        </section>
      </main>
    </PageShell>
  );
}
