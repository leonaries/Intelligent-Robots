'use server';

import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';
import { LOCALE_COOKIE, type Locale, isLocale } from '@/lib/i18n/settings';

export async function setLocale(locale: Locale, pathname = '/') {
  if (!isLocale(locale)) {
    return;
  }

  (await cookies()).set(LOCALE_COOKIE, locale, {
    httpOnly: false,
    maxAge: 60 * 60 * 24 * 365,
    sameSite: 'lax',
    path: '/'
  });

  revalidatePath(pathname);
}
