import type {Metadata} from 'next';
import {NextIntlClientProvider} from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';
import {getMessages} from '@/i18n/getMessages';
import {defaultLocale, isRTL, Locale, locales} from '@/i18n/config';
import '@/styles/globals.css';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export const metadata: Metadata = {
  title: 'Haweya',
  description: 'B2B Food Supply & Auctions'
};

export function generateStaticParams() {
  return locales.map((l) => ({locale: l}));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const loc = (locale ?? defaultLocale) as Locale;

  unstable_setRequestLocale(loc);
  const messages = await getMessages(loc);
  const dir = isRTL(loc) ? 'rtl' : 'ltr';

  return (
    <html lang={loc} dir={dir}>
      <body>
        <NextIntlClientProvider locale={loc} messages={messages}>
          <header className="header container">
            <div className="logo">
              <span className="logo-mark" />
              <span>{messages.appName as string}</span>
            </div>
            <div className="nav-actions">
              <a className="btn ghost" href={`/${loc}/auth/login?role=client`}>
                {messages.cta_client as string}
              </a>
              <a className="btn ghost" href={`/${loc}/auth/login?role=supplier`}>
                {messages.cta_supplier as string}
              </a>
              <LanguageSwitcher />
            </div>
          </header>
          <main className="container">{children}</main>
          <footer className="container">© {new Date().getFullYear()} Haweya</footer>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
