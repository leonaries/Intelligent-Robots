import { PageShell } from '@/components/page-shell';
import { SectionHeading } from '@/components/section-heading';
import { getRoboticsContent } from '@/lib/data/robotics';
import { getLocale } from '@/lib/i18n/config';

export default async function FundingPage() {
  const locale = await getLocale();
  const content = getRoboticsContent(locale);
  const page = content.pages.funding;

  return (
    <PageShell>
      <main className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={page.eyebrow}
          title={page.title}
          description={page.description}
        />
        <section className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.04]">
          <div className="grid grid-cols-[1.2fr_.8fr_.8fr_.8fr_1.4fr] border-b border-white/10 px-4 py-3 text-sm text-slate-500 max-lg:hidden">
            <span>{content.labels.company}</span>
            <span>{content.labels.round}</span>
            <span>{content.labels.amount}</span>
            <span>{content.labels.date}</span>
            <span>{content.labels.investors}</span>
          </div>
          {content.fundingEvents.map((event) => (
            <article
              key={`${event.company}-${event.date}`}
              className="grid gap-3 border-b border-white/10 px-4 py-4 last:border-b-0 lg:grid-cols-[1.2fr_.8fr_.8fr_.8fr_1.4fr]"
            >
              <div>
                <div className="font-semibold text-white">{event.company}</div>
                <div className="mt-1 text-xs text-slate-500">
                  {content.labels.valuation} {event.valuation}
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
