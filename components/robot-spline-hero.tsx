'use client';

import { useEffect, useState } from 'react';
import { SplineScene } from '@/components/ui/splite';
import { cn } from '@/lib/utils';

const ROBOTICS_SCENE =
  'https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode';

type NavigatorWithConnection = Navigator & {
  connection?: {
    saveData?: boolean;
  };
};

type RobotSplineHeroProps = {
  className?: string;
  eyebrow: string;
  title: string;
  meta: string;
};

export function RobotSplineHero({
  className,
  eyebrow,
  title,
  meta
}: RobotSplineHeroProps) {
  const [shouldRenderScene, setShouldRenderScene] = useState<boolean | null>(
    null
  );

  useEffect(() => {
    const wideViewport = window.matchMedia('(min-width: 1024px)');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const saveData = (window.navigator as NavigatorWithConnection).connection
      ?.saveData;

    setShouldRenderScene(
      wideViewport.matches && !reducedMotion.matches && !saveData
    );
  }, []);

  return (
    <div
      className={cn(
        'relative min-h-[300px] overflow-hidden border-t border-white/10 bg-[#05080b] sm:min-h-[360px] lg:min-h-[620px] lg:border-l lg:border-t-0',
        className
      )}
    >
      {shouldRenderScene === false ? (
        <img
          src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=900&q=85"
          alt="机器人与未来科技场景"
          className="absolute inset-0 h-full w-full object-cover opacity-75 grayscale-[15%]"
        />
      ) : null}

      <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(7,9,11,0.98)_0%,rgba(7,9,11,0.56)_52%,rgba(7,9,11,0.92)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_52%_38%,rgba(103,232,249,0.24),transparent_38%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.08),transparent_28%)]" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#07090b] to-transparent" />

      {shouldRenderScene === true ? (
        <div className="absolute inset-x-0 -top-10 bottom-0 translate-x-6 scale-[1.08] opacity-95 xl:-top-14 xl:translate-x-8 xl:scale-[1.14]">
          <SplineScene scene={ROBOTICS_SCENE} />
        </div>
      ) : null}

      <div className="absolute left-4 top-4 rounded-md border border-white/10 bg-slate-950/60 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-300">
        {eyebrow}
      </div>
      <div className="absolute bottom-4 left-4 right-4 rounded-md border border-cyan-200/25 bg-slate-950/70 p-3 shadow-[0_0_34px_rgba(34,211,238,0.12)] backdrop-blur lg:bottom-6 lg:left-6 lg:right-6">
        <div className="flex items-center justify-between gap-3">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">
              {title}
            </div>
            <div className="mt-1 text-sm text-slate-300">
              {meta}
            </div>
          </div>
          <div className="grid size-11 place-items-center rounded-full border border-cyan-200/25 bg-cyan-200/10">
            <span className="size-2 rounded-full bg-cyan-200 shadow-[0_0_20px_rgba(103,232,249,0.9)]" />
          </div>
        </div>
      </div>
    </div>
  );
}
