'use client';

import { usePathname } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import { useQuote } from '@/context/QuoteContext';
import t from '@/i18n/translations';
import type { Lang } from '@/i18n/translations';

export default function Navbar() {
  const { lang, setLang } = useLanguage();
  const { totalCount, openModal } = useQuote();
  const pathname = usePathname();
  const isHome = pathname === '/';
  const n = t[lang].nav;

  function handleLangClick(code: Lang) {
    if (code === 'vi' && !isHome) return;
    setLang(code);
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#E8E4DC] bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 lg:px-12">
        {/* Logo */}
        <a href="/" className="flex items-baseline gap-3">
          <span className="text-xl font-bold tracking-[0.15em] text-[#C8102E]">FULLWEI</span>
          <span className="text-sm text-[#767676]">{n.brandSub}</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 md:flex">
          {[
            { label: n.products,     href: '/#products'      },
            { label: n.capabilities, href: '/#capabilities'  },
            { label: n.smartFactory, href: '/#smart-factory' },
            { label: n.about,        href: '/about'          },
            { label: n.careers,      href: '/careers'        },
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
          {/* Language toggle */}
          <div className="flex items-center gap-1 text-xs font-medium">
            {(['zh', 'en', 'vi'] as Lang[]).map((code, i) => (
              <span key={code} className="flex items-center gap-1">
                {i > 0 && <span className="text-[#E8E4DC]">/</span>}
                <button
                  onClick={() => handleLangClick(code)}
                  aria-label={`Switch to ${code}`}
                  className={
                    lang === code
                      ? 'text-[#064d8f]'
                      : code === 'vi' && !isHome
                      ? 'cursor-default text-[#E8E4DC]'
                      : 'text-[#767676] transition-colors hover:text-black'
                  }
                >
                  {code === 'zh' ? '中' : code.toUpperCase()}
                </button>
              </span>
            ))}
          </div>

          {/* Quote Request */}
          <button
            onClick={openModal}
            className="flex items-center gap-2 border border-[#064d8f] px-4 py-2 text-xs font-medium text-[#064d8f] transition-all duration-200 hover:bg-[#064d8f] hover:text-white"
          >
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <rect x="1" y="3" width="11" height="9" rx="0.5" stroke="currentColor" strokeWidth="1.2" />
              <path d="M4 3V2a2.5 2.5 0 015 0v1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              <path d="M4 7h5M4 9.5h3" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
            </svg>
            {lang === 'zh' ? '詢價單' : lang === 'vi' ? 'Báo giá' : 'Quote Request'}
            {totalCount > 0 && (
              <span className="font-mono">({totalCount})</span>
            )}
          </button>
        </div>

        {/* Mobile: lang + quote icon + hamburger */}
        <div className="flex items-center gap-3 md:hidden">
          <div className="flex items-center gap-1 text-xs font-medium">
            {(['zh', 'en', 'vi'] as Lang[]).map((code, i) => (
              <span key={code} className="flex items-center gap-1">
                {i > 0 && <span className="text-[#E8E4DC]">/</span>}
                <button
                  onClick={() => handleLangClick(code)}
                  className={
                    lang === code
                      ? 'text-[#064d8f]'
                      : code === 'vi' && !isHome
                      ? 'cursor-default text-[#E8E4DC]'
                      : 'text-[#767676]'
                  }
                >
                  {code === 'zh' ? '中' : code.toUpperCase()}
                </button>
              </span>
            ))}
          </div>
          <button
            onClick={openModal}
            className="relative flex h-9 w-9 items-center justify-center border border-[#E8E4DC] text-[#767676] transition-colors hover:border-[#064d8f] hover:text-[#064d8f]"
            aria-label="Quote request"
          >
            <svg width="14" height="14" viewBox="0 0 13 13" fill="none">
              <rect x="1" y="3" width="11" height="9" rx="0.5" stroke="currentColor" strokeWidth="1.2" />
              <path d="M4 3V2a2.5 2.5 0 015 0v1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              <path d="M4 7h5M4 9.5h3" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
            </svg>
            {totalCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center bg-[#C8102E] font-mono text-[9px] text-white">
                {totalCount}
              </span>
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
