// web/next.config.mjs
import createNextIntlPlugin from 'next-intl/plugin';

// مرّر مسار ملف الكونفِج (ts أو js)
const withNextIntl = createNextIntlPlugin('./next-intl.config.ts');

export default withNextIntl({
  experimental: {
    typedRoutes: true
  }
});
