'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import type { Lang } from '@/i18n/translations';
import SiteSwitcher from '@/components/SiteSwitcher';

const langLabels: Record<Lang, string> = { zh: '中', en: 'EN', vi: 'VI', ja: '日' };
const langNames: Record<Lang, string> = { zh: '中文', en: 'English', vi: 'Tiếng Việt', ja: '日本語' };
// 越南站語言選單：越南文排第一
const ALL_LANGS: Lang[] = ['vi', 'en', 'zh', 'ja'];

const brandSub: Record<Lang, string> = {
  zh: '越南富惟',
  en: 'Fullwei Vietnam',
  vi: 'Fullwei Việt Nam',
  ja: 'ベトナム富惟',
};
const contactLabel: Record<Lang, string> = {
  zh: '聯絡我們',
  en: 'Contact',
  vi: 'Liên hệ',
  ja: 'お問い合わせ',
};

function VnLangDropdown() {
  const { lang, setLang } = useLanguage();
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
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex items-center gap-1 text-xs font-medium text-[#767676] transition-colors hover:text-black"
      >
        {langLabels[lang]}
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
        <div className="absolute right-0 top-full z-50 mt-2 w-32 border border-[#E8E4DC] bg-white shadow-sm">
          {ALL_LANGS.map((code) => (
            <button
              key={code}
              onClick={() => {
                setLang(code);
                setOpen(false);
              }}
              className={`w-full px-4 py-2 text-left text-xs ${
                lang === code
                  ? 'bg-[#F8F6F2] font-medium text-[#064d8f]'
                  : 'text-[#767676] hover:bg-[#F8F6F2] hover:text-black'
              }`}
            >
              {langNames[code]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function VnNavbar() {
  const { lang, setLang } = useLanguage();

  // 越南站預設語言為越南文（進站時套用；之後使用者仍可自由切換）
  useEffect(() => {
    setLang('vi');
  }, [setLang]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#E8E4DC] bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 lg:px-12">
        {/* Logo */}
        <Link href="/vn" className="flex items-baseline gap-3">
          <span className="text-xl font-bold tracking-[0.15em] text-[#C8102E]">FULLWEI</span>
          <span className="text-sm text-[#767676]">{brandSub[lang]}</span>
        </Link>

        {/* Right controls */}
        <div className="flex items-center gap-4">
          <SiteSwitcher current="vn" />
          <span className="h-4 w-px bg-[#E8E4DC]" />
          <VnLangDropdown />
          <a
            href="#contact"
            className="hidden border border-[#064d8f] px-4 py-2 text-xs font-medium text-[#064d8f] transition-all duration-200 hover:bg-[#064d8f] hover:text-white sm:inline-block"
          >
            {contactLabel[lang]}
          </a>
        </div>
      </div>
    </nav>
  );
}
