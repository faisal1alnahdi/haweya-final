import {Suspense} from 'react';
import {Locale} from '@/i18n/config';
import {getMessages} from '@/i18n/getMessages';
import PhoneAuth from '@/components/PhoneAuth';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function LoginPage({
  params
}: {
  params: Promise<{locale: Locale}>;
}) {
  const {locale} = await params;
  const m = await getMessages(locale);

  return (
    <div>
      <h1>{m.login_title as string}</h1>
      {/* ✅ مطلوب في Next 15 لأي useSearchParams */}
      <Suspense fallback={<div style={{height: 48}} />} >
        <PhoneAuth locale={locale} />
      </Suspense>
    </div>
  );
}
