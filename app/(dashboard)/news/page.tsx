import { PageShell } from '@/components/page-shell';
import { SectionHeading } from '@/components/section-heading';
import { HotTerms } from '@/components/hot-terms';
import { NewsFeatureCard } from '@/components/news-feature-card';
import { getRoboticsContent } from '@/lib/data/robotics';
import { getLocale } from '@/lib/i18n/config';

export default async function NewsPage() {
  const locale = await getLocale();
  const content = getRoboticsContent(locale);
  const page = content.pages.news;

  return (
    <PageShell>
      <main className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[180px_minmax(0,1fr)_300px] lg:px-8">
        <aside className="rounded-lg border border-white/10 bg-white/[0.04] p-2 lg:sticky lg:top-24 lg:h-fit">
          {page.sources.map((source, index) => (
            <div
              key={source}
              className={`flex items-center justify-between rounded-md px-3 py-2 text-sm ${
                index === 0
                  ? 'border border-cyan-200/30 bg-cyan-200/10 text-white'
                  : 'text-slate-400'
              }`}
            >
              <span>{source}</span>
              <span className="text-xs text-slate-500">
                {index === 5 ? content.labels.comingSoon : 20 + index * 7}
              </span>
            </div>
          ))}
        </aside>

        <section className="flex min-w-0 flex-col gap-5">
          <SectionHeading
            eyebrow={page.eyebrow}
            title={page.title}
            description={page.description}
          />
          <div className="grid gap-3 md:grid-cols-3">
            {page.insights.map((insight) => (
              <div
                key={insight.title}
                className="rounded-lg border border-white/10 bg-white/[0.04] p-4"
              >
                <div className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
                  {insight.title}
                </div>
                <p className="text-sm leading-6 text-slate-300">
                  {insight.body}
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex h-10 min-w-64 items-center justify-between rounded-md border border-white/10 bg-white/[0.04] px-3 text-sm text-slate-500">
              {page.searchPlaceholder}
              <span className="rounded border border-white/10 px-1.5 py-0.5 text-xs text-slate-400">
                K
              </span>
            </div>
            {page.filters.map((filter, index) => (
              <span
                key={filter}
                className={`rounded-full border px-3 py-2 text-sm ${
                  index === 0
                    ? 'border-cyan-200 bg-cyan-200 text-slate-950'
                    : 'border-white/10 bg-white/[0.04] text-slate-300'
                }`}
              >
                {filter}
              </span>
            ))}
          </div>
          <NewsFeatureCard
            signal={content.latestSignals[0]}
            actionLabel={content.labels.readFullArticle}
            imageAlt={content.labels.newsImageAlt}
            variant="featured"
          />

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {content.latestSignals.concat(content.latestSignals).map((signal, index) => (
              <NewsFeatureCard
                key={`${signal.title}-card-${index}`}
                signal={signal}
                actionLabel={content.labels.readFullArticle}
                imageAlt={content.labels.newsImageAlt}
              />
            ))}
          </div>

        </section>

        <aside className="flex flex-col gap-4">
          <HotTerms title={content.home.hotTermsTitle} terms={content.hotTerms} />
        </aside>
      </main>
    </PageShell>
  );
}
