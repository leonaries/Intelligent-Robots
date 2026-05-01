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
  const [featuredItem, ...newsItems] = content.newsItems;

  return (
    <PageShell>
      <main className="mx-auto grid max-w-[1600px] gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[210px_minmax(0,1fr)_340px] lg:px-8 2xl:grid-cols-[240px_minmax(0,1fr)_380px]">
        <aside className="rounded-lg border border-theme-border bg-theme-panel p-2 lg:sticky lg:top-24 lg:h-fit">
          {page.sources.map((source, index) => (
            <div
              key={source}
              className={`flex items-center justify-between rounded-md px-3 py-2 text-sm ${
                index === 0
                  ? 'border border-theme-border-strong bg-theme-accent-soft text-theme-text'
                  : 'text-theme-text-muted'
              }`}
            >
              <span>{source}</span>
              <span className="text-xs text-theme-text-muted/70">
                {index === 5 ? content.labels.comingSoon : 20 + index * 7}
              </span>
            </div>
          ))}
        </aside>

        <section className="flex min-w-0 flex-col gap-5">
          <div className="flex flex-col gap-4 rounded-lg border border-theme-border bg-theme-panel p-5">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <SectionHeading
                eyebrow={page.eyebrow}
                title={page.title}
                description={page.description}
              />
              <div className="rounded-full border border-theme-border-strong bg-theme-accent-soft px-3 py-1.5 text-xs font-semibold text-theme-accent">
                {content.labels.crawlerReady}
              </div>
            </div>
            <div className="grid gap-3 md:grid-cols-3">
              {page.insights.map((insight) => (
                <div
                  key={insight.title}
                  className="rounded-lg border border-theme-border bg-theme-bg/30 p-4"
                >
                  <div className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-theme-accent">
                    {insight.title}
                  </div>
                  <p className="text-sm leading-6 text-theme-text-soft">
                    {insight.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div className="flex h-10 min-w-64 items-center justify-between rounded-md border border-theme-border bg-theme-panel px-3 text-sm text-theme-text-muted/70">
              {page.searchPlaceholder}
              <span className="rounded border border-theme-border px-1.5 py-0.5 text-xs text-theme-text-muted">
                K
              </span>
            </div>
            {page.filters.map((filter, index) => (
              <span
                key={filter}
                className={`rounded-full border px-3 py-2 text-sm ${
                  index === 0
                    ? 'border-theme-accent bg-theme-accent text-theme-accent-foreground'
                    : 'border-theme-border bg-theme-panel text-theme-text-soft'
                }`}
              >
                {filter}
              </span>
            ))}
          </div>

          {featuredItem ? (
            <NewsFeatureCard
              signal={featuredItem}
              actionLabel={content.labels.readFullArticle}
              imageAlt={content.labels.newsImageAlt}
              variant="featured"
            />
          ) : null}

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {newsItems.map((signal) => (
              <NewsFeatureCard
                key={signal.slug}
                signal={signal}
                actionLabel={content.labels.readFullArticle}
                imageAlt={content.labels.newsImageAlt}
              />
            ))}
          </div>

        </section>

        <aside className="flex flex-col gap-4">
          <section className="rounded-lg border border-theme-border bg-theme-panel p-5">
            <div className="text-base font-semibold text-theme-text">
              {content.labels.signalScore}
            </div>
            <div className="mt-4 flex flex-col gap-3">
              {content.newsItems.slice(0, 4).map((item) => (
                <div
                  key={item.slug}
                  className="grid grid-cols-[2.5rem_1fr] gap-3 text-sm"
                >
                  <span className="font-mono font-semibold text-theme-accent">
                    {item.signalScore}
                  </span>
                  <span className="leading-5 text-theme-text-soft">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </section>
          <HotTerms title={content.home.hotTermsTitle} terms={content.hotTerms} />
        </aside>
      </main>
    </PageShell>
  );
}
