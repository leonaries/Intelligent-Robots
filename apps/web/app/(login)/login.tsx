'use client';

import Link from 'next/link';
import { useActionState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Bot, Loader2 } from 'lucide-react';
import { signIn, signUp } from './actions';
import { ActionState } from '@/lib/auth/middleware';

export function Login({ mode = 'signin' }: { mode?: 'signin' | 'signup' }) {
  const searchParams = useSearchParams();
  const redirect = searchParams.get('redirect');
  const priceId = searchParams.get('priceId');
  const inviteId = searchParams.get('inviteId');
  const [state, formAction, pending] = useActionState<ActionState, FormData>(
    mode === 'signin' ? signIn : signUp,
    { error: '' }
  );

  return (
    <div className="flex min-h-[100dvh] flex-col justify-center bg-theme-bg px-4 py-12 text-theme-text sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <div className="flex size-12 items-center justify-center rounded-xl border border-theme-border-strong bg-theme-accent-soft text-theme-accent">
            <Bot className="size-6" />
          </div>
        </div>
        <h2 className="mt-6 text-center text-3xl font-semibold tracking-tight text-theme-text">
          {mode === 'signin' ? '登录机器人产业智库' : '创建智库账户'}
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <form
          className="flex flex-col gap-6 rounded-xl border border-theme-border bg-theme-panel p-6"
          action={formAction}
        >
          <input type="hidden" name="redirect" value={redirect || ''} />
          <input type="hidden" name="priceId" value={priceId || ''} />
          <input type="hidden" name="inviteId" value={inviteId || ''} />
          <div>
            <Label
              htmlFor="email"
              className="block text-sm font-medium text-theme-text-soft"
            >
              Email
            </Label>
            <div className="mt-1">
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                defaultValue={state.email}
                required
                maxLength={50}
                className="relative block w-full rounded-full border-theme-border bg-theme-panel-strong px-3 py-2 text-theme-text placeholder:text-theme-text-muted/60 focus-visible:ring-theme-accent/30 sm:text-sm"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div>
            <Label
              htmlFor="password"
              className="block text-sm font-medium text-theme-text-soft"
            >
              Password
            </Label>
            <div className="mt-1">
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete={
                  mode === 'signin' ? 'current-password' : 'new-password'
                }
                defaultValue={state.password}
                required
                minLength={8}
                maxLength={100}
                className="relative block w-full rounded-full border-theme-border bg-theme-panel-strong px-3 py-2 text-theme-text placeholder:text-theme-text-muted/60 focus-visible:ring-theme-accent/30 sm:text-sm"
                placeholder="Enter your password"
              />
            </div>
          </div>

          {state?.error && (
            <div className="text-red-500 text-sm">{state.error}</div>
          )}

          <div>
            <Button
              type="submit"
              className="flex w-full items-center justify-center rounded-full border border-transparent bg-theme-accent px-4 py-2 text-sm font-medium text-theme-accent-foreground shadow-sm hover:bg-theme-accent/85"
              disabled={pending}
            >
              {pending ? (
                <>
                  <Loader2 className="mr-2 size-4 animate-spin" />
                  处理中...
                </>
              ) : mode === 'signin' ? (
                '登录'
              ) : (
                '注册'
              )}
            </Button>
          </div>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-theme-border" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-theme-bg px-2 text-theme-text-muted/70">
                {mode === 'signin' ? '还没有账户？' : '已经有账户？'}
              </span>
            </div>
          </div>

          <div className="mt-6">
            <Link
              href={`${mode === 'signin' ? '/sign-up' : '/sign-in'}${
                redirect ? `?redirect=${redirect}` : ''
              }${priceId ? `&priceId=${priceId}` : ''}`}
              className="flex w-full justify-center rounded-full border border-theme-border bg-theme-panel px-4 py-2 text-sm font-medium text-theme-text-soft shadow-sm hover:bg-theme-panel/80"
            >
              {mode === 'signin' ? '创建账户' : '登录已有账户'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
