export const LOCALE_COOKIE = 'ir_locale';
export const locales = ['zh', 'en'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'zh';

export function isLocale(value: string | undefined): value is Locale {
  return value === 'zh' || value === 'en';
}

export function otherLocale(locale: Locale): Locale {
  return locale === 'zh' ? 'en' : 'zh';
}
