// web/next-intl.config.ts
export const locales = ['ar', 'en'] as const;
export const defaultLocale = 'ar' as const;

// 👉 next-intl يتوقع default export كـ Object
export default {
  locales,
  defaultLocale
};
