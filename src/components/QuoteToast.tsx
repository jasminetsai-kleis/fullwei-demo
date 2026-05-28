'use client';

import { useQuote } from '@/context/QuoteContext';
import { useLanguage } from '@/context/LanguageContext';

export default function QuoteToast() {
  const { toast, dismissToast, openModal } = useQuote();
  const { lang: rawLang } = useLanguage();
  const lang = rawLang === 'en' ? 'en' : 'zh';

  if (!toast) return null;

  const title = lang === 'zh' ? toast.titleZh : toast.titleEn;

  return (
    <div className="animate-toast-in fixed right-4 top-20 z-[200] w-[320px]">
      <div className="border border-[#252A30] bg-[#1A1D21] shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between gap-3 px-4 pt-4 pb-2">
          <div className="flex items-center gap-2">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="shrink-0 text-[#1E5A8A]">
              <circle cx="7.5" cy="7.5" r="6.5" stroke="currentColor" strokeWidth="1" />
              <path d="M4.5 7.5L6.5 9.5L10.5 5.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-xs font-semibold tracking-wide text-white">
              {lang === 'zh' ? '已加入詢價單' : 'Added to Quote'}
            </span>
          </div>
          <button
            onClick={dismissToast}
            className="shrink-0 text-[#5A6070] transition-colors hover:text-[#A8A4A0]"
            aria-label="dismiss"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M1.5 1.5L10.5 10.5M10.5 1.5L1.5 10.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Product name */}
        <p className="truncate px-4 pb-3 text-xs text-[#6B6F76]">{title}</p>

        {/* Divider + action */}
        <div className="border-t border-[#252A30] px-4 py-3">
          <button
            onClick={() => { dismissToast(); openModal(); }}
            className="flex items-center gap-1.5 text-xs font-medium text-[#1E5A8A] transition-colors hover:text-[#4A8AB8]"
          >
            {lang === 'zh' ? '查看詢價清單' : 'View Quote List'}
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M2 5H8M5.5 2.5L8 5L5.5 7.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
