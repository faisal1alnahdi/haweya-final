// web/next.config.mjs
import createNextIntlPlugin from 'next-intl/plugin';

// ✅ مرّر ملف request اللي يصدّر getRequestConfig (الموجود عندك)
const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

export default withNextIntl({
  experimental: {
    typedRoutes: true
  }
});
