import { PageShell } from '@/components/page-shell';
import { SectionHeading } from '@/components/section-heading';
import { metrics } from '@/lib/data/robotics';

export default function DataPage() {
  return (
    <PageShell>
      <main className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Market Data"
          title="产业数据"
          description="第一版展示关键指标预览，后续扩展为出货量、成本结构、政策地图、零部件价格和市场规模看板。"
        />
        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <article
              key={metric.name}
              className="rounded-lg border border-white/10 bg-white/[0.04] p-5"
            >
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
                {metric.region}
              </div>
              <h2 className="mt-4 min-h-12 text-sm font-medium leading-6 text-slate-300">
                {metric.name}
              </h2>
              <div className="mt-4 text-3xl font-semibold tracking-tight text-white">
                {metric.value}
              </div>
              <div className="mt-2 flex items-center justify-between text-sm">
                <span className="text-slate-500">{metric.period}</span>
                <span className="text-amber-200">{metric.change}</span>
              </div>
            </article>
          ))}
        </section>
      </main>
    </PageShell>
  );
}
