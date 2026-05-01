import { cookies } from 'next/headers';
import { LOCALE_COOKIE, defaultLocale, isLocale } from '@/lib/i18n/settings';
import type { Locale } from '@/lib/i18n/settings';

export async function getLocale(): Promise<Locale> {
  const value = (await cookies()).get(LOCALE_COOKIE)?.value;

  return isLocale(value) ? value : defaultLocale;
}

export type { Locale } from '@/lib/i18n/settings';
