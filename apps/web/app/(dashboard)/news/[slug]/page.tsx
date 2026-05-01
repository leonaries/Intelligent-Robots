import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { PageShell } from '@/components/page-shell';
import { HotTerms } from '@/components/hot-terms';
import { getRoboticsContent } from '@/lib/data/robotics';
import { getLocale } from '@/lib/i18n/config';
import type { Locale } from '@/lib/i18n/settings';

type NewsDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function findNewsItem(locale: Locale, slug: string) {
  const content = getRoboticsContent(locale);
  return content.newsItems.find((item) => item.slug === slug);
}

export function generateStaticParams() {
  return getRoboticsContent('zh').newsItems.map((item) => ({
    slug: item.slug
  }));
}

export async function generateMetadata({ params }: NewsDetailPageProps) {
  const locale = await getLocale();
  const { slug } = await params;
  const item = findNewsItem(locale, slug);

  if (!item) {
    return {};
  }

  return {
    title: `${item.title} | ${getRoboticsContent(locale).brand}`,
    description: item.summary
  };
}

export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
  const locale = await getLocale();
  const content = getRoboticsContent(locale);
  const { slug } = await params;
  const item = findNewsItem(locale, slug);

  if (!item) {
    notFound();
  }

  return (
    <PageShell>
      <main className="mx-auto grid max-w-[1500px] gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[minmax(0,1fr)_340px] lg:px-8">
        <article className="min-w-0 overflow-hidden rounded-lg border border-theme-border bg-theme-panel">
          <div className="relative min-h-[300px] overflow-hidden bg-theme-bg sm:min-h-[420px]">
            <img
              src={item.image}
              alt={content.labels.newsImageAlt}
              className="absolute inset-0 h-full w-full object-cover opacity-72 grayscale-[12%]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,color-mix(in_srgb,var(--theme-bg)_8%,transparent),color-mix(in_srgb,var(--theme-bg)_86%,transparent))]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_20%,color-mix(in_srgb,var(--theme-accent)_22%,transparent),transparent_34%)]" />
            <div className="relative flex min-h-[300px] flex-col justify-end p-5 sm:min-h-[420px] sm:p-8">
              <Link
                href="/news"
                className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-theme-border bg-theme-panel-strong px-3 py-2 text-sm text-theme-text-soft transition hover:border-theme-border-strong hover:text-theme-text"
              >
                <ArrowLeft className="size-4" />
                {content.pages.news.title}
              </Link>
              <div className="mb-4 flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-theme-text-soft">
                <span className="rounded-full bg-theme-accent px-3 py-1 text-theme-accent-foreground">
                  {item.category}
                </span>
                <span>{item.source}</span>
                <span>{item.time}</span>
                <span>{item.readTime}</span>
              </div>
              <h1 className="max-w-4xl text-3xl font-semibold leading-tight text-theme-text sm:text-5xl">
                {item.title}
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-7 text-theme-text-soft sm:text-lg">
                {item.summary}
              </p>
            </div>
          </div>

          <div className="grid gap-8 p-5 sm:p-8 xl:grid-cols-[minmax(0,1fr)_280px]">
            <div className="min-w-0">
              <section className="rounded-lg border border-theme-border bg-theme-bg/30 p-5">
                <div className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-theme-accent">
                  {content.labels.keyTakeaways}
                </div>
                <div className="grid gap-3">
                  {item.takeaways.map((takeaway, index) => (
                    <div
                      key={takeaway}
                      className="grid grid-cols-[2rem_1fr] gap-3 text-sm leading-6 text-theme-text-soft"
                    >
                      <span className="font-mono font-semibold text-theme-accent">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span>{takeaway}</span>
                    </div>
                  ))}
                </div>
              </section>

              <div className="mt-8 flex flex-col gap-5 text-base leading-8 text-theme-text-soft">
                {item.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <aside className="flex flex-col gap-4">
              <section className="rounded-lg border border-theme-border bg-theme-bg/30 p-5">
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-theme-accent">
                  {content.labels.signalScore}
                </div>
                <div className="mt-4 text-5xl font-semibold tracking-tight text-theme-text">
                  {item.signalScore}
                </div>
              </section>

              <section className="rounded-lg border border-theme-border bg-theme-bg/30 p-5">
                <div className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-theme-accent">
                  {content.labels.relatedCompanies}
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.companies.map((company) => (
                    <span
                      key={company}
                      className="rounded-full border border-theme-border px-2.5 py-1 text-xs text-theme-text-soft"
                    >
                      {company}
                    </span>
                  ))}
                </div>
              </section>

              <section className="rounded-lg border border-theme-border bg-theme-bg/30 p-5">
                <div className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-theme-accent">
                  {content.labels.relatedModules}
                </div>
                <div className="flex flex-col gap-2">
                  {item.related.map((module) => (
                    <div
                      key={module}
                      className="flex items-center justify-between rounded-md border border-theme-border bg-theme-panel px-3 py-2 text-sm text-theme-text-soft"
                    >
                      <span>{module}</span>
                      <ExternalLink className="size-3.5 text-theme-accent" />
                    </div>
                  ))}
                </div>
              </section>
            </aside>
          </div>
        </article>

        <aside className="flex flex-col gap-4 lg:sticky lg:top-24 lg:h-fit">
          <HotTerms title={content.home.hotTermsTitle} terms={content.hotTerms} />
        </aside>
      </main>
    </PageShell>
  );
}
