import { Sparkles } from 'lucide-react';
import { PageShell } from '@/components/page-shell';
import { SectionHeading } from '@/components/section-heading';
import { getRoboticsContent } from '@/lib/data/robotics';
import { getLocale } from '@/lib/i18n/config';

export default async function AiPage() {
  const locale = await getLocale();
  const content = getRoboticsContent(locale);
  const page = content.pages.ai;

  return (
    <PageShell>
      <main className="mx-auto grid max-w-7xl gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[minmax(0,1fr)_360px] lg:px-8">
        <section className="flex flex-col gap-6">
          <SectionHeading
            eyebrow={page.eyebrow}
            title={page.title}
            description={page.description}
          />
          <div className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="flex size-10 items-center justify-center rounded-lg border border-cyan-200/30 bg-cyan-200/10 text-cyan-100">
                <Sparkles className="size-5" />
              </div>
              <div>
                <h2 className="font-semibold text-white">{page.assistantTitle}</h2>
                <p className="text-sm text-slate-500">{page.assistantSubtitle}</p>
              </div>
            </div>
            <div className="mt-5 flex h-28 items-center rounded-lg border border-white/10 bg-slate-950/50 px-4 text-slate-500">
              {page.inputPlaceholder}
            </div>
          </div>
        </section>
        <aside className="flex flex-col gap-4">
          {content.assistantPrompts.map((item) => (
            <article
              key={item.prompt}
              className="rounded-lg border border-white/10 bg-white/[0.04] p-5"
            >
              <h3 className="text-sm font-semibold leading-6 text-cyan-100">
                {item.prompt}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                {item.answer}
              </p>
            </article>
          ))}
        </aside>
      </main>
    </PageShell>
  );
}
