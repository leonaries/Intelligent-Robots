import { PublicHeader } from '@/components/public-header';

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#07090b] text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_80%_0%,rgba(102,234,219,0.14),transparent_32%),radial-gradient(circle_at_10%_15%,rgba(244,200,106,0.08),transparent_28%),linear-gradient(180deg,#07090b,#090c0f)]" />
      <PublicHeader />
      {children}
    </div>
  );
}
