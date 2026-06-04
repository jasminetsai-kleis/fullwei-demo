'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import type { Lang } from '@/i18n/translations';

type SiteId = 'tw' | 'vn';

const SITE_LABEL: Record<SiteId, Record<Lang, string>> = {
  tw: { zh: '台灣富惟', en: 'Fullwei Taiwan', vi: 'Fullwei Đài Loan', ja: '台湾富惟' },
  vn: { zh: '越南富惟', en: 'Fullwei Vietnam', vi: 'Fullwei Việt Nam', ja: 'ベトナム富惟' },
};
const SITE_HREF: Record<SiteId, string> = { tw: '/', vn: '/vn' };
const HEADING: Record<Lang, string> = {
  zh: '切換網站',
  en: 'Switch site',
  vi: 'Chuyển trang',
  ja: 'サイト切替',
};

const SITES: SiteId[] = ['tw', 'vn'];

export default function SiteSwitcher({ current, className }: { current: SiteId; className?: string }) {
  const { lang } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onDown(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', onDown);
    return () => document.removeEventListener('mousedown', onDown);
  }, []);

  return (
    <div className={`relative ${className ?? ''}`} ref={ref}>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label={HEADING[lang]}
        className="flex items-center gap-1.5 text-xs font-medium text-[#767676] transition-colors hover:text-black"
      >
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" className="shrink-0">
          <circle cx="12" cy="12" r="9.25" stroke="currentColor" strokeWidth="1.5" />
          <path d="M3 12h18" stroke="currentColor" strokeWidth="1.3" />
          <path d="M12 2.75c2.6 2.4 2.6 16.1 0 18.5M12 2.75c-2.6 2.4-2.6 16.1 0 18.5" stroke="currentColor" strokeWidth="1.3" />
        </svg>
        <span className="hidden sm:inline">{SITE_LABEL[current][lang]}</span>
        <svg
          width="8"
          height="5"
          viewBox="0 0 8 5"
          fill="none"
          className={`transition-transform duration-150 ${open ? 'rotate-180' : ''}`}
        >
          <path d="M1 1l3 3 3-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 top-full z-50 mt-2 w-48 border border-[#E8E4DC] bg-white shadow-sm">
          <p className="border-b border-[#F0EDE7] px-4 py-2 font-mono text-[10px] uppercase tracking-wider text-[#9aa0a6]">
            {HEADING[lang]}
          </p>
          {SITES.map((id) => (
            <Link
              key={id}
              href={SITE_HREF[id]}
              onClick={() => setOpen(false)}
              className={`flex items-center justify-between px-4 py-2.5 text-xs ${
                id === current
                  ? 'bg-[#F8F6F2] font-medium text-[#064d8f]'
                  : 'text-[#767676] hover:bg-[#F8F6F2] hover:text-black'
              }`}
            >
              {SITE_LABEL[id][lang]}
              {id === current && <span className="h-1.5 w-1.5 rounded-full bg-[#064d8f]" />}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
