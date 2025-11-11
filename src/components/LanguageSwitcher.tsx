'use client';
import {usePathname, useRouter} from 'next/navigation';
import {useLocale} from 'next-intl';
import type {Route} from 'next';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname() || '/ar';
  const locale = useLocale();

  const toggle = () => {
    const parts = pathname.split('/');
    parts[1] = locale === 'ar' ? 'en' : 'ar';
    const next = (parts.join('/') || '/ar') as Route;
    router.push(next);
  };

  return (
    <button className="btn ghost" onClick={toggle}>
      {locale === 'ar' ? 'EN' : 'AR'}
    </button>
  );
}
