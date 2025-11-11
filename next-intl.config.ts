// web/next-intl.config.ts
import {getRequestConfig} from 'next-intl/server';

export const locales = ['ar', 'en'] as const;
export const defaultLocale = 'ar' as const;

// Optional: يوفر الرسائل أثناء SSR/الـ RSC
export default getRequestConfig(async ({locale}) => ({
  messages: (await import(`./messages/${locale}.json`)).default
}));
