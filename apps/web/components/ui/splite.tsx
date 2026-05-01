'use client';

import { Suspense, lazy } from 'react';
import { cn } from '@/lib/utils';

const Spline = lazy(() => import('@splinetool/react-spline'));

interface SplineSceneProps {
  scene: string;
  className?: string;
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  return (
    <Suspense
      fallback={
        <div className="flex h-full w-full items-center justify-center">
          <span className="size-8 rounded-full border border-theme-border-strong border-t-theme-accent animate-spin" />
        </div>
      }
    >
      <Spline scene={scene} className={cn('h-full w-full', className)} />
    </Suspense>
  );
}
