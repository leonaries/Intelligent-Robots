import { PageShell } from '@/components/page-shell';
import { SectionHeading } from '@/components/section-heading';
import { getRoboticsContent } from '@/lib/data/robotics';
import { getLocale } from '@/lib/i18n/config';

export default async function CompaniesPage() {
  const locale = await getLocale();
  const content = getRoboticsContent(locale);
  const page = content.pages.companies;

  return (
    <PageShell>
      <main className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={page.eyebrow}
          title={page.title}
          description={page.description}
        />
        <section className="grid gap-4 lg:grid-cols-2">
          {content.companies.map((company) => (
            <article
              key={company.name}
              className="rounded-lg border border-white/10 bg-white/[0.04] p-5"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h2 className="text-xl font-semibold text-white">
                    {company.name}
                  </h2>
                </div>
                <span className="rounded-full border border-cyan-200/20 bg-cyan-200/10 px-3 py-1 text-xs text-cyan-100">
                  {company.stage}
                </span>
              </div>
              <div className="mt-4 grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
                <div>
                  <span className="text-slate-500">{content.labels.location}</span>
                  <div>{company.location}</div>
                </div>
                <div>
                  <span className="text-slate-500">{content.labels.focus}</span>
                  <div>{company.focus}</div>
                </div>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-400">
                {company.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {company.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-slate-300"
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
