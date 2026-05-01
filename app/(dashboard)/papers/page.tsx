import { PageShell } from '@/components/page-shell';
import { SectionHeading } from '@/components/section-heading';
import { papers } from '@/lib/data/robotics';

export default function PapersPage() {
  return (
    <PageShell>
      <main className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Paper Radar"
          title="技术论文"
          description="聚合机器人学习、VLA、运动控制、操作、感知和数据集方向论文，提供中文解读入口。"
        />
        <section className="grid gap-4">
          {papers.map((paper) => (
            <article
              key={paper.title}
              className="rounded-lg border border-white/10 bg-white/[0.04] p-5"
            >
              <div className="mb-3 flex flex-wrap gap-2">
                <span className="rounded-full border border-cyan-200/20 bg-cyan-200/10 px-2.5 py-1 text-xs text-cyan-100">
                  {paper.direction}
                </span>
                <span className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-slate-400">
                  {paper.venue}
                </span>
                <span className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-slate-400">
                  {paper.date}
                </span>
              </div>
              <h2 className="text-lg font-semibold leading-7 text-white">
                {paper.title}
              </h2>
              <p className="mt-1 text-sm text-slate-500">{paper.authors}</p>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                {paper.summary}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {paper.tags.map((tag) => (
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
