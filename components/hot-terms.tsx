import { hotTerms } from '@/lib/data/robotics';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function HotTerms() {
  return (
    <Card className="border-white/10 bg-white/[0.04] py-0 shadow-none">
      <CardHeader className="border-b border-white/10 px-5 py-4">
        <CardTitle className="text-base text-white">本周热词</CardTitle>
      </CardHeader>
      <CardContent className="px-5 py-4">
        <div className="flex flex-col gap-3">
          {hotTerms.map((item, index) => (
            <div
              key={item.term}
              className="grid grid-cols-[2rem_1fr_3rem] items-center gap-3 text-sm"
            >
              <span className="font-semibold text-cyan-200">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="text-slate-200">{item.term}</span>
              <span className="text-right font-mono text-slate-400">
                {item.count}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
