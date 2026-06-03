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
    <div className="animate-toast-in fixed right-4 top-20 z-[200] w-[340px]">
      <div className="border border-[#252A30] bg-[#1A1D21] shadow-2xl">
        {/* Header row */}
        <div className="flex items-start justify-between gap-3 px-4 pt-4 pb-2">
          <div className="flex items-center gap-2">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="shrink-0 text-[#1E5A8A]">
              <circle cx="7.5" cy="7.5" r="6.5" stroke="currentColor" strokeWidth="1" />
              <path d="M4.5 7.5L6.5 9.5L10.5 5.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-xs font-semibold tracking-wide text-white">
              {lang === 'zh' ? '已加入詢價單' : 'Added to Quote Request'}
            </span>
          </div>
          <button onClick={dismissToast} aria-label="dismiss"
            className="mt-0.5 shrink-0 text-[#5A6070] transition-colors hover:text-[#A8A4A0]">
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
              <path d="M1.5 1.5L9.5 9.5M9.5 1.5L1.5 9.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Product name */}
        <p className="truncate px-4 pb-4 text-xs text-[#6B6F76]">{title}</p>

        {/* CTA button */}
        <div className="border-t border-[#252A30] px-4 py-3">
          <button
            onClick={() => { dismissToast(); openModal(); }}
            className="w-full border border-[#1E5A8A] py-2 text-xs font-medium text-[#1E5A8A] transition-colors hover:bg-[#1E5A8A] hover:text-white"
          >
            {lang === 'zh' ? '查看詢價單' : 'View Quote Request List'}
          </button>
        </div>
      </div>
    </div>
  );
}
