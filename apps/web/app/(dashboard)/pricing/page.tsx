import { Check } from 'lucide-react';
import { PageShell } from '@/components/page-shell';
import { SectionHeading } from '@/components/section-heading';
import { Button } from '@/components/ui/button';
import { getRoboticsContent } from '@/lib/data/robotics';
import { getLocale } from '@/lib/i18n/config';

export default async function PricingPage() {
  const locale = await getLocale();
  const content = getRoboticsContent(locale);
  const page = content.pages.pricing;

  return (
    <PageShell>
      <main className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-12 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={page.eyebrow}
          title={page.title}
          description={page.description}
        />
        <section className="grid gap-4 md:grid-cols-2">
          {content.plans.map((plan) => (
            <article
              key={plan.name}
              className="rounded-lg border border-theme-border bg-theme-panel p-6"
            >
              <h2 className="text-2xl font-semibold text-theme-text">{plan.name}</h2>
              <p className="mt-2 text-sm leading-6 text-theme-text-muted">
                {plan.description}
              </p>
              <div className="mt-6 text-4xl font-semibold tracking-tight text-theme-text">
                {plan.price}
              </div>
              <ul className="mt-6 flex flex-col gap-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm text-theme-text-soft"
                  >
                    <Check className="size-4 text-theme-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                className="mt-8 w-full rounded-full bg-theme-accent text-theme-accent-foreground hover:bg-theme-accent/85"
                disabled={plan.isComingSoon}
              >
                {plan.isComingSoon
                  ? content.labels.comingSoon
                  : content.labels.startUsing}
              </Button>
            </article>
          ))}
        </section>
      </main>
    </PageShell>
  );
}
