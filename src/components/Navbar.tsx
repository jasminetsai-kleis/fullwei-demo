'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import { useQuote } from '@/context/QuoteContext';
import t from '@/i18n/translations';
import type { Lang } from '@/i18n/translations';
import SiteSwitcher from '@/components/SiteSwitcher';
import QuoteIcon from '@/components/QuoteIcon';

const langLabels: Record<Lang, string> = { zh: '中', en: 'EN', vi: 'VI', ja: '日' };
const langNames: Record<Lang, string> = { zh: '中文', en: 'English', vi: 'Tiếng Việt', ja: '日本語' };

const homepageOnlyLangs: Lang[] = ['vi', 'ja'];

function LangDropdown({ isHome, className }: { isHome: boolean; className?: string }) {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onMouseDown(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', onMouseDown);
    return () => document.removeEventListener('mousedown', onMouseDown);
  }, []);

  function handleSelect(code: Lang) {
    if (homepageOnlyLangs.includes(code) && !isHome) return;
    setLang(code);
    setOpen(false);
  }

  return (
    <div className={`relative ${className ?? ''}`} ref={ref}>
      <button
        onClick={() => setOpen(o => !o)}
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
          {(['zh', 'en', 'vi', 'ja'] as Lang[]).map(code => {
            const disabled = homepageOnlyLangs.includes(code) && !isHome;
            return (
              <button
                key={code}
                onClick={() => handleSelect(code)}
                disabled={disabled}
                className={`w-full px-4 py-2 text-left text-xs ${
                  lang === code
                    ? 'bg-[#F8F6F2] font-medium text-[#064d8f]'
                    : disabled
                    ? 'cursor-default text-[#D0CCC4]'
                    : 'text-[#767676] hover:bg-[#F8F6F2] hover:text-black'
                }`}
              >
                {langNames[code]}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const { lang } = useLanguage();
  const { totalCount, openModal } = useQuote();
  const pathname = usePathname();
  const isHome = pathname === '/';
  const n = t[lang].nav;

  const quoteLabel =
    lang === 'zh' ? '詢價單' : lang === 'vi' ? 'Báo giá' : lang === 'ja' ? '見積依頼' : 'Quote Request';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#E8E4DC] bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 lg:px-12">
        {/* Logo */}
        <Link href="/" className="flex items-baseline gap-3">
          <span className="text-xl font-bold tracking-[0.15em] text-[#C8102E]">FULLWEI</span>
          <span className="text-sm text-[#767676]">{n.brandSub}</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 md:flex">
          {[
            { label: n.products,     href: '/#products'      },
            { label: n.capabilities, href: '/#capabilities'  },
            { label: n.smartFactory, href: '/#smart-factory' },
            { label: n.about,        href: '/about'          },
            { label: n.careers,      href: '/careers'        },
            { label: n.blog,         href: '/blog'           },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[#767676] transition-colors duration-200 hover:text-black"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <SiteSwitcher current="tw" />
          <span className="h-4 w-px bg-[#E8E4DC]" />
          <LangDropdown isHome={isHome} />

          {/* Quote Request */}
          <button
            onClick={openModal}
            className="flex items-center gap-2 border border-[#064d8f] px-4 py-2 text-xs font-medium text-[#064d8f] transition-all duration-200 hover:bg-[#064d8f] hover:text-white"
          >
            <QuoteIcon size={14} />
            {quoteLabel}
            {totalCount > 0 && (
              <span className="font-mono">({totalCount})</span>
            )}
          </button>
        </div>

        {/* Mobile: site switcher + lang dropdown + quote icon + hamburger */}
        <div className="flex items-center gap-3 md:hidden">
          <SiteSwitcher current="tw" />
          <LangDropdown isHome={isHome} />
          <button
            onClick={openModal}
            className="flex items-center gap-1.5 border border-[#E8E4DC] px-3 py-2 text-xs font-medium text-[#767676] transition-colors hover:border-[#064d8f] hover:text-[#064d8f]"
            aria-label="Quote request"
          >
            <QuoteIcon size={14} />
            {totalCount > 0 && (
              <span className="font-mono">({totalCount})</span>
            )}
          </button>
          <button className="flex flex-col gap-1.5 p-2">
            <span className="h-px w-6 bg-black" />
            <span className="h-px w-4 bg-black" />
            <span className="h-px w-6 bg-black" />
          </button>
        </div>
      </div>
    </nav>
  );
}
