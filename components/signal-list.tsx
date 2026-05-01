type SignalListProps = {
  title: string;
  signals: {
    title: string;
    category: string;
    source: string;
    time: string;
    summary: string;
  }[];
};

export function SignalList({ title, signals }: SignalListProps) {
  return (
    <section className="relative overflow-hidden rounded-lg border border-white/10 bg-[#090d0f] shadow-[0_0_40px_rgba(34,211,238,0.05)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(103,232,249,0.16),transparent_28%),radial-gradient(circle_at_100%_18%,rgba(244,200,106,0.08),transparent_24%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.22] [background-image:radial-gradient(rgba(148,163,184,0.38)_1px,transparent_1px)] [background-size:12px_12px]" />
      <div className="relative border-b border-white/10 px-5 py-4">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-base font-semibold text-white">{title}</h2>
          <span className="size-2 rounded-full bg-cyan-200 shadow-[0_0_18px_rgba(103,232,249,0.9)]" />
        </div>
      </div>
      <div className="relative flex flex-col gap-3 p-3">
        {signals.map((signal) => (
          <article
            key={signal.title}
            className="group relative overflow-hidden rounded-lg border border-white/10 bg-black/25 p-4 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-200/45 hover:bg-white/[0.06] hover:shadow-[0_0_34px_rgba(34,211,238,0.16)]"
          >
            <div className="pointer-events-none absolute -left-8 top-1/2 h-16 w-16 -translate-y-1/2 rounded-full bg-cyan-200/10 blur-2xl transition duration-300 group-hover:bg-cyan-200/20" />
            <div className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/45 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
            <div className="relative mb-3 flex flex-wrap items-center gap-2 text-xs text-slate-500">
              <span className="rounded-full bg-cyan-200 px-2.5 py-1 font-semibold text-slate-950">
                {signal.category}
              </span>
              <span>{signal.source}</span>
              <span>{signal.time}</span>
            </div>
            <h3 className="relative text-[13px] font-semibold leading-5 text-white">
              {signal.title}
            </h3>
            <p className="relative mt-2 text-[13px] leading-5 text-slate-400">
              {signal.summary}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
