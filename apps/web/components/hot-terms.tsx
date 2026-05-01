import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type HotTermsProps = {
  title: string;
  terms: {
    term: string;
    count: number;
  }[];
};

export function HotTerms({ title, terms }: HotTermsProps) {
  return (
    <Card className="border-theme-border bg-theme-panel py-0 shadow-none">
      <CardHeader className="border-b border-theme-border px-5 py-4">
        <CardTitle className="text-base text-theme-text">{title}</CardTitle>
      </CardHeader>
      <CardContent className="px-5 py-4">
        <div className="flex flex-col gap-3">
          {terms.map((item, index) => (
            <div
              key={item.term}
              className="grid grid-cols-[2rem_1fr_3rem] items-center gap-3 text-sm"
            >
              <span className="font-semibold text-theme-accent">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="text-theme-text-soft">{item.term}</span>
              <span className="text-right font-mono text-theme-text-muted">
                {item.count}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
