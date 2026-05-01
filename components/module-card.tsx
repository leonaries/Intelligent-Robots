import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';

type ModuleCardProps = {
  title: string;
  description: string;
  href: string;
  meta: string;
  icon: LucideIcon;
};

export function ModuleCard({
  title,
  description,
  href,
  meta,
  icon: Icon
}: ModuleCardProps) {
  return (
    <Card className="group border-white/10 bg-white/[0.04] py-0 shadow-none transition hover:border-cyan-200/40 hover:bg-white/[0.07]">
      <CardHeader className="gap-4 px-5 pt-5">
        <div className="flex items-start justify-between gap-4">
          <div className="flex size-10 items-center justify-center rounded-lg border border-white/10 bg-slate-950/70 text-cyan-200">
            <Icon className="size-5" />
          </div>
          <span className="rounded-full border border-cyan-200/20 bg-cyan-200/10 px-2.5 py-1 text-xs font-medium text-cyan-100">
            {meta}
          </span>
        </div>
        <CardTitle className="text-lg text-white">{title}</CardTitle>
      </CardHeader>
      <CardContent className="px-5">
        <p className="text-sm leading-6 text-slate-400">{description}</p>
      </CardContent>
      <CardFooter className="px-5 pb-5 pt-3">
        <Link
          href={href}
          className="inline-flex items-center gap-2 text-sm font-medium text-cyan-100 transition group-hover:gap-3"
        >
          进入模块
          <ArrowRight className="size-4" />
        </Link>
      </CardFooter>
    </Card>
  );
}
