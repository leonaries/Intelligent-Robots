import { latestSignals } from '@/lib/data/robotics';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function SignalList() {
  return (
    <Card className="border-white/10 bg-white/[0.04] py-0 shadow-none">
      <CardHeader className="border-b border-white/10 px-5 py-4">
        <CardTitle className="text-base text-white">最新行业资讯</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col px-5 py-0">
        {latestSignals.map((signal) => (
          <article
            key={signal.title}
            className="border-b border-white/10 py-4 last:border-b-0"
          >
            <div className="mb-2 flex flex-wrap items-center gap-2 text-xs text-slate-500">
              <span className="text-cyan-200">{signal.category}</span>
              <span>{signal.source}</span>
              <span>{signal.time}</span>
            </div>
            <h3 className="text-sm font-semibold leading-6 text-white">
              {signal.title}
            </h3>
            <p className="mt-1 text-sm leading-6 text-slate-400">
              {signal.summary}
            </p>
          </article>
        ))}
      </CardContent>
    </Card>
  );
}
