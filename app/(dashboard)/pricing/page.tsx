import { Check } from 'lucide-react';
import { PageShell } from '@/components/page-shell';
import { SectionHeading } from '@/components/section-heading';
import { Button } from '@/components/ui/button';

const plans = [
  {
    name: 'Research',
    price: 'Free',
    description: '适合早期浏览产业导航、资讯和公开数据库。',
    features: ['公开行业资讯', '资源导航', '公司/论文/融资预览', 'AI 助手示例问题']
  },
  {
    name: 'Intelligence',
    price: 'Soon',
    description: '面向需要深度数据库、收藏、监控和研究工作流的团队。',
    features: ['高级筛选与导出', '企业收藏与监控', '融资与论文提醒', '团队协作与权限']
  }
];

export default function PricingPage() {
  return (
    <PageShell>
      <main className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-12 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Plans"
          title="会员能力规划"
          description="模板保留了 Stripe 集成能力。v1 先隐藏真实支付，把价格页作为能力规划展示，等产品数据和权限边界稳定后再开启订阅。"
        />
        <section className="grid gap-4 md:grid-cols-2">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className="rounded-lg border border-white/10 bg-white/[0.04] p-6"
            >
              <h2 className="text-2xl font-semibold text-white">{plan.name}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                {plan.description}
              </p>
              <div className="mt-6 text-4xl font-semibold tracking-tight text-white">
                {plan.price}
              </div>
              <ul className="mt-6 flex flex-col gap-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm text-slate-300"
                  >
                    <Check className="size-4 text-cyan-200" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                className="mt-8 w-full rounded-full bg-cyan-200 text-slate-950 hover:bg-cyan-100"
                disabled={plan.price === 'Soon'}
              >
                {plan.price === 'Soon' ? '即将开放' : '开始使用'}
              </Button>
            </article>
          ))}
        </section>
      </main>
    </PageShell>
  );
}
