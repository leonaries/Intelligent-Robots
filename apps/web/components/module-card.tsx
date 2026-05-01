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
  actionLabel: string;
};

export function ModuleCard({
  title,
  description,
  href,
  meta,
  icon: Icon,
  actionLabel
}: ModuleCardProps) {
  return (
    <Card className="group border-theme-border bg-theme-panel py-0 shadow-none transition hover:border-theme-border-strong hover:bg-theme-panel/80">
      <CardHeader className="gap-4 px-5 pt-5">
        <div className="flex items-start justify-between gap-4">
          <div className="flex size-10 items-center justify-center rounded-lg border border-theme-border bg-theme-panel-strong text-theme-accent">
            <Icon className="size-5" />
          </div>
          <span className="rounded-full border border-theme-border-strong bg-theme-accent-soft px-2.5 py-1 text-xs font-medium text-theme-accent">
            {meta}
          </span>
        </div>
        <CardTitle className="text-lg text-theme-text">{title}</CardTitle>
      </CardHeader>
      <CardContent className="px-5">
        <p className="text-sm leading-6 text-theme-text-muted">{description}</p>
      </CardContent>
      <CardFooter className="px-5 pb-5 pt-3">
        <Link
          href={href}
          className="inline-flex items-center gap-2 text-sm font-medium text-theme-accent transition group-hover:gap-3"
        >
          {actionLabel}
          <ArrowRight className="size-4" />
        </Link>
      </CardFooter>
    </Card>
  );
}
