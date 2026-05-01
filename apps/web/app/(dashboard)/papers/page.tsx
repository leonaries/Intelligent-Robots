import { PageShell } from '@/components/page-shell';
import { SectionHeading } from '@/components/section-heading';
import { getRoboticsContent } from '@/lib/data/robotics';
import { getLocale } from '@/lib/i18n/config';

export default async function PapersPage() {
  const locale = await getLocale();
  const content = getRoboticsContent(locale);
  const page = content.pages.papers;

  return (
    <PageShell>
      <main className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={page.eyebrow}
          title={page.title}
          description={page.description}
        />
        <section className="grid gap-4">
          {content.papers.map((paper) => (
            <article
              key={paper.title}
              className="rounded-lg border border-theme-border bg-theme-panel p-5"
            >
              <div className="mb-3 flex flex-wrap gap-2">
                <span className="rounded-full border border-theme-border-strong bg-theme-accent-soft px-2.5 py-1 text-xs text-theme-accent">
                  {paper.direction}
                </span>
                <span className="rounded-full border border-theme-border px-2.5 py-1 text-xs text-theme-text-muted">
                  {paper.venue}
                </span>
                <span className="rounded-full border border-theme-border px-2.5 py-1 text-xs text-theme-text-muted">
                  {paper.date}
                </span>
              </div>
              <h2 className="text-lg font-semibold leading-7 text-theme-text">
                {paper.title}
              </h2>
              <p className="mt-1 text-sm text-theme-text-muted/70">{paper.authors}</p>
              <p className="mt-3 text-sm leading-6 text-theme-text-muted">
                {paper.summary}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {paper.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-theme-border px-2.5 py-1 text-xs text-theme-text-soft"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </section>
      </main>
    </PageShell>
  );
}
