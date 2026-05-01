import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { PageShell } from '@/components/page-shell';
import { SectionHeading } from '@/components/section-heading';
import { getRoboticsContent } from '@/lib/data/robotics';
import { getLocale } from '@/lib/i18n/config';

export default async function ResourcesPage() {
  const locale = await getLocale();
  const content = getRoboticsContent(locale);
  const page = content.pages.resources;

  return (
    <PageShell>
      <main className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={page.eyebrow}
          title={page.title}
          description={page.description}
        />
        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {content.resourceCategories.map((category) => (
            <div
              key={category.name}
              className="rounded-lg border border-theme-border bg-theme-panel p-5"
            >
              <category.icon className="mb-4 size-5 text-theme-accent" />
              <h2 className="font-semibold text-theme-text">{category.name}</h2>
              <p className="mt-2 text-sm text-theme-text-muted">
                {category.count}+ {content.labels.itemsOrganized}
              </p>
            </div>
          ))}
        </section>
        <section className="grid gap-4 lg:grid-cols-3">
          {content.resources.map((resource) => (
            <article
              key={resource.name}
              className="rounded-lg border border-theme-border bg-theme-panel p-5"
            >
              <div className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-theme-accent">
                {resource.category}
              </div>
              <h2 className="text-lg font-semibold text-theme-text">
                {resource.name}
              </h2>
              <p className="mt-2 text-sm leading-6 text-theme-text-muted">
                {resource.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {resource.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-theme-border px-2.5 py-1 text-xs text-theme-text-soft"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href={resource.url}
                target="_blank"
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-theme-accent"
              >
                {content.labels.visitResource}
                <ExternalLink className="size-4" />
              </Link>
            </article>
          ))}
        </section>
      </main>
    </PageShell>
  );
}
