// web/middleware.ts
import createMiddleware from 'next-intl/middleware';
import {locales, defaultLocale} from './next-intl.config';

export default createMiddleware({
  locales,
  defaultLocale,
  localeDetection: true
});

export const config = {
  matcher: ['/((?!_next|.*\\..*).*)']
};
