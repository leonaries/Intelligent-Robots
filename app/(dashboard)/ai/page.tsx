import { Sparkles } from 'lucide-react';
import { PageShell } from '@/components/page-shell';
import { SectionHeading } from '@/components/section-heading';
import { assistantPrompts } from '@/lib/data/robotics';

export default function AiPage() {
  return (
    <PageShell>
      <main className="mx-auto grid max-w-7xl gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[minmax(0,1fr)_360px] lg:px-8">
        <section className="flex flex-col gap-6">
          <SectionHeading
            eyebrow="Research Copilot"
            title="AI 助手"
            description="v1 先展示静态研究问答样例。后续可接入真实模型，并基于公司、融资、论文、资讯和资源库回答问题。"
          />
          <div className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="flex size-10 items-center justify-center rounded-lg border border-cyan-200/30 bg-cyan-200/10 text-cyan-100">
                <Sparkles className="size-5" />
              </div>
              <div>
                <h2 className="font-semibold text-white">机器人产业研究助手</h2>
                <p className="text-sm text-slate-500">基于智库数据生成分析</p>
              </div>
            </div>
            <div className="mt-5 flex h-28 items-center rounded-lg border border-white/10 bg-slate-950/50 px-4 text-slate-500">
              Ask about companies, funding, papers, or robotics trends...
            </div>
          </div>
        </section>
        <aside className="flex flex-col gap-4">
          {assistantPrompts.map((item) => (
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
