import { PageShell } from '@/components/page-shell';
import { SectionHeading } from '@/components/section-heading';
import { companies } from '@/lib/data/robotics';

export default function CompaniesPage() {
  return (
    <PageShell>
      <main className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Company Graph"
          title="公司数据库"
          description="第一版展示种子企业档案，后续接入 Drizzle 表后支持筛选、详情页、融资关联和生态关系图。"
        />
        <section className="grid gap-4 lg:grid-cols-2">
          {companies.map((company) => (
            <article
              key={company.name}
              className="rounded-lg border border-white/10 bg-white/[0.04] p-5"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h2 className="text-xl font-semibold text-white">
                    {company.name}
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">
                    {company.englishName}
                  </p>
                </div>
                <span className="rounded-full border border-cyan-200/20 bg-cyan-200/10 px-3 py-1 text-xs text-cyan-100">
                  {company.stage}
                </span>
              </div>
              <div className="mt-4 grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
                <div>
                  <span className="text-slate-500">地区</span>
                  <div>{company.location}</div>
                </div>
                <div>
                  <span className="text-slate-500">方向</span>
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
