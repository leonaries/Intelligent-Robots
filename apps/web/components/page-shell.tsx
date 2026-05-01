import { PublicHeader } from '@/components/public-header';

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-theme-bg text-theme-text">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_80%_0%,color-mix(in_srgb,var(--theme-accent)_14%,transparent),transparent_32%),radial-gradient(circle_at_10%_15%,color-mix(in_srgb,var(--theme-warm)_8%,transparent),transparent_28%),linear-gradient(180deg,var(--theme-bg),var(--theme-bg-soft))]" />
      <PublicHeader />
      {children}
    </div>
  );
}
