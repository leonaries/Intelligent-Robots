import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

type SignalListProps = {
  title: string;
  actionLabel: string;
  imageAlt: string;
  signals: {
    title: string;
    category: string;
    source: string;
    time: string;
    summary: string;
  }[];
};

const signalImages = [
  'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1535378620166-273708d44e4c?auto=format&fit=crop&w=640&q=85',
  'https://images.unsplash.com/photo-1516192518150-0d8fee5425e3?auto=format&fit=crop&w=640&q=85'
];

export function SignalList({
  title,
  actionLabel,
  imageAlt,
  signals
}: SignalListProps) {
  const [featuredSignal, ...secondarySignals] = signals;

  return (
    <section className="relative overflow-hidden rounded-lg border border-theme-border bg-theme-bg-soft shadow-[0_0_40px_color-mix(in_srgb,var(--theme-accent)_5%,transparent)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,color-mix(in_srgb,var(--theme-accent)_16%,transparent),transparent_28%),radial-gradient(circle_at_100%_18%,color-mix(in_srgb,var(--theme-warm)_8%,transparent),transparent_24%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.22] [background-image:radial-gradient(color-mix(in_srgb,var(--theme-text-muted)_38%,transparent)_1px,transparent_1px)] [background-size:12px_12px]" />
      <div className="relative border-b border-theme-border px-5 py-4">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-base font-semibold text-theme-text">{title}</h2>
          <span className="size-2 rounded-full bg-theme-accent shadow-[0_0_18px_color-mix(in_srgb,var(--theme-accent)_90%,transparent)]" />
        </div>
      </div>
      <div className="relative flex flex-col gap-3 p-3">
        {featuredSignal ? (
          <article className="group relative min-h-[320px] overflow-hidden rounded-lg border border-theme-border bg-black/30 transition duration-300 hover:-translate-y-0.5 hover:border-theme-border-strong hover:shadow-[0_0_34px_color-mix(in_srgb,var(--theme-accent)_16%,transparent)]">
            <img
              src={signalImages[0]}
              alt={imageAlt}
              className="absolute inset-0 h-full w-full object-cover opacity-62 grayscale-[10%] transition duration-500 group-hover:scale-[1.04] group-hover:opacity-78"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,color-mix(in_srgb,var(--theme-bg)_10%,transparent)_0%,color-mix(in_srgb,var(--theme-bg)_48%,transparent)_42%,color-mix(in_srgb,var(--theme-bg)_94%,transparent)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_12%,color-mix(in_srgb,var(--theme-accent)_24%,transparent),transparent_30%)]" />
            <div className="relative flex min-h-[320px] flex-col justify-end p-4">
              <div className="mb-3 flex flex-wrap items-center gap-2 text-xs text-theme-text-soft">
                <span className="rounded-full bg-theme-accent px-2.5 py-1 font-semibold text-theme-accent-foreground">
                  {featuredSignal.category}
                </span>
                <span>{featuredSignal.source}</span>
                <span>{featuredSignal.time}</span>
              </div>
              <h3 className="text-lg font-semibold leading-6 text-theme-text">
                {featuredSignal.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-theme-text-soft">
                {featuredSignal.summary}
              </p>
              <Link
                href="/news"
                className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-theme-text px-4 py-2 text-sm font-semibold text-theme-accent-foreground transition hover:bg-theme-accent/85"
              >
                {actionLabel}
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </article>
        ) : null}

        {secondarySignals.map((signal, index) => (
          <article
            key={signal.title}
            className="group grid grid-cols-[92px_minmax(0,1fr)] gap-3 overflow-hidden rounded-lg border border-theme-border bg-black/25 p-3 transition duration-300 hover:-translate-y-0.5 hover:border-theme-border-strong hover:bg-theme-panel/80"
          >
            <div className="relative min-h-24 overflow-hidden rounded-md bg-theme-bg">
              <img
                src={signalImages[index + 1] ?? signalImages[0]}
                alt={imageAlt}
                className="h-full w-full object-cover opacity-70 transition duration-500 group-hover:scale-105 group-hover:opacity-90"
              />
              <div className="absolute inset-0 bg-[linear-gradient(135deg,color-mix(in_srgb,var(--theme-bg)_5%,transparent),color-mix(in_srgb,var(--theme-bg)_58%,transparent))]" />
            </div>
            <div className="min-w-0">
              <div className="mb-2 flex flex-wrap items-center gap-2 text-xs text-theme-text-muted/70">
                <span className="rounded-full bg-theme-accent/90 px-2 py-0.5 font-semibold text-theme-accent-foreground">
                  {signal.category}
                </span>
                <span>{signal.time}</span>
              </div>
              <h3 className="text-[13px] font-semibold leading-5 text-theme-text">
                {signal.title}
              </h3>
              <p className="mt-1 line-clamp-2 text-[13px] leading-5 text-theme-text-muted">
                {signal.summary}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
