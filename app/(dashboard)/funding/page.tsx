import { PageShell } from '@/components/page-shell';
import { SectionHeading } from '@/components/section-heading';
import { fundingEvents } from '@/lib/data/robotics';

export default function FundingPage() {
  return (
    <PageShell>
      <main className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Funding Intel"
          title="投融资数据库"
          description="追踪轮次、金额、估值和投资机构，并与公司数据库和资讯信号关联。"
        />
        <section className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.04]">
          <div className="grid grid-cols-[1.2fr_.8fr_.8fr_.8fr_1.4fr] border-b border-white/10 px-4 py-3 text-sm text-slate-500 max-lg:hidden">
            <span>公司</span>
            <span>轮次</span>
            <span>金额</span>
            <span>日期</span>
            <span>投资方</span>
          </div>
          {fundingEvents.map((event) => (
            <article
              key={`${event.company}-${event.date}`}
              className="grid gap-3 border-b border-white/10 px-4 py-4 last:border-b-0 lg:grid-cols-[1.2fr_.8fr_.8fr_.8fr_1.4fr]"
            >
              <div>
                <div className="font-semibold text-white">{event.company}</div>
                <div className="mt-1 text-xs text-slate-500">
                  估值 {event.valuation}
                </div>
              </div>
              <div className="text-sm text-cyan-100">{event.round}</div>
              <div className="text-sm text-slate-200">{event.amount}</div>
              <div className="text-sm text-slate-400">{event.date}</div>
              <div className="text-sm leading-6 text-slate-400">
                {event.investors.join(' / ')}
              </div>
            </article>
          ))}
        </section>
      </main>
    </PageShell>
  );
}
