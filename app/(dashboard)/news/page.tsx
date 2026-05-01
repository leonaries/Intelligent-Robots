import { PageShell } from '@/components/page-shell';
import { SectionHeading } from '@/components/section-heading';
import { HotTerms } from '@/components/hot-terms';
import { latestSignals } from '@/lib/data/robotics';

const filters = ['全部', '人形机器人', '具身智能', '融资', '供应链', '论文', '政策'];
const sources = ['推特信号', '官网新闻', '公众号', '论文', '视频', 'B站'];

export default function NewsPage() {
  return (
    <PageShell>
      <main className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[180px_minmax(0,1fr)_300px] lg:px-8">
        <aside className="rounded-lg border border-white/10 bg-white/[0.04] p-2 lg:sticky lg:top-24 lg:h-fit">
          {sources.map((source, index) => (
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
                {index === 5 ? 'soon' : 20 + index * 7}
              </span>
            </div>
          ))}
        </aside>

        <section className="flex min-w-0 flex-col gap-5">
          <SectionHeading
            eyebrow="Live Signal Feed"
            title="行业资讯"
            description="按照 AI Signal 的信息流方式组织机器人产业信号，但组件风格保持产业智库的一致视觉。"
          />
          <div className="grid gap-3 md:grid-cols-3">
            {['今日洞察', '本周洞察', '趋势预判'].map((title, index) => (
              <div
                key={title}
                className="rounded-lg border border-white/10 bg-white/[0.04] p-4"
              >
                <div className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
                  {title}
                </div>
                <p className="text-sm leading-6 text-slate-300">
                  {
                    [
                      '工业场景和量产交付成为人形机器人主线。',
                      '融资集中于头部，执行器和真实数据成本升温。',
                      'VLA 与数据闭环会影响下一阶段竞争。'
                    ][index]
                  }
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex h-10 min-w-64 items-center justify-between rounded-md border border-white/10 bg-white/[0.04] px-3 text-sm text-slate-500">
              Search signals
              <span className="rounded border border-white/10 px-1.5 py-0.5 text-xs text-slate-400">
                K
              </span>
            </div>
            {filters.map((filter, index) => (
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
          <div className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.04]">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 text-sm">
              <span className="text-white">信号流 · 今日 28 条</span>
              <span className="text-slate-500">按最新发布</span>
            </div>
            {latestSignals.concat(latestSignals).map((signal, index) => (
              <article
                key={`${signal.title}-${index}`}
                className="grid gap-3 border-b border-white/10 p-4 last:border-b-0 md:grid-cols-[88px_1fr_auto]"
              >
                <div className="text-xs leading-6 text-slate-500">
                  {index % 2 === 0 ? '12:29' : '11:54'}
                  <br />
                  <span className="font-semibold text-cyan-200">
                    {signal.category}
                  </span>
                </div>
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-white">
                    {signal.title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    {signal.summary}
                  </p>
                </div>
                <button className="h-fit rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-slate-200">
                  原文
                </button>
              </article>
            ))}
          </div>
        </section>

        <aside className="flex flex-col gap-4">
          <HotTerms />
        </aside>
      </main>
    </PageShell>
  );
}
