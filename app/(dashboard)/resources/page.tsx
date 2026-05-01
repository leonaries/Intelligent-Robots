import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { PageShell } from '@/components/page-shell';
import { SectionHeading } from '@/components/section-heading';
import { resourceCategories, resources } from '@/lib/data/robotics';

export default function ResourcesPage() {
  return (
    <PageShell>
      <main className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Resource Map"
          title="机器人产业资源导航"
          description="把导航站能力放在单独模块中：公司、零部件、实验室、开源项目、数据集、会议、媒体社区和投资机构。"
        />
        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {resourceCategories.map((category) => (
            <div
              key={category.name}
              className="rounded-lg border border-white/10 bg-white/[0.04] p-5"
            >
              <category.icon className="mb-4 size-5 text-cyan-200" />
              <h2 className="font-semibold text-white">{category.name}</h2>
              <p className="mt-2 text-sm text-slate-400">
                {category.count}+ 个已整理资源
              </p>
            </div>
          ))}
        </section>
        <section className="grid gap-4 lg:grid-cols-3">
          {resources.map((resource) => (
            <article
              key={resource.name}
              className="rounded-lg border border-white/10 bg-white/[0.04] p-5"
            >
              <div className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
                {resource.category}
              </div>
              <h2 className="text-lg font-semibold text-white">
                {resource.name}
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                {resource.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {resource.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href={resource.url}
                target="_blank"
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-cyan-100"
              >
                访问资源
                <ExternalLink className="size-4" />
              </Link>
            </article>
          ))}
        </section>
      </main>
    </PageShell>
  );
}
