'use client';

import { useState, useEffect, useRef } from 'react';
import { useQuote } from '@/context/QuoteContext';
import { useLanguage } from '@/context/LanguageContext';

// ── Product thumbnail colours per slug ───────────────────────
const SLUG_NUM: Record<string, string> = {
  'exhaust-systems':      '01',
  'motorcycle-frame':     '02',
  'automotive-brackets':  '03',
};

// ── Translations ─────────────────────────────────────────────
const TXT = {
  zh: {
    title: '詢價單',
    empty: '詢價單是空的',
    emptyHint: '在產品頁點擊「加入詢價單」以新增產品',
    continueShopping: '繼續瀏覽',
    submit: '送出詢價',
    clearAll: '清空清單',
    qty: '數量',
    remove: '移除',
    formHeading: '聯絡資訊',
    company: '公司名稱',
    contact: '聯絡人',
    email: '電子郵件',
    phone: '電話',
    notes: '專案說明（選填）',
    notesHint: '車型 / 年產量 / 材質需求 / 其他備註',
    required: '必填',
    successTitle: '詢價單已送出',
    successBody: '感謝您的詢問。業務團隊將於 1 個工作日內以您提供的 Email 回覆。',
    refLabel: '詢價編號',
    close: '關閉',
    alreadyInQuote: '已在詢價單中',
    itemsTitle: '詢價產品',
  },
  en: {
    title: 'Quote Request',
    empty: 'Your quote list is empty',
    emptyHint: 'Click "Add to Quote" on any product page to get started',
    continueShopping: 'Continue Browsing',
    submit: 'Submit Request',
    clearAll: 'Clear All',
    qty: 'Qty',
    remove: 'Remove',
    formHeading: 'Contact Information',
    company: 'Company Name',
    contact: 'Contact Person',
    email: 'Email Address',
    phone: 'Phone',
    notes: 'Project Notes (optional)',
    notesHint: 'Vehicle model / annual volume / material requirements / other notes',
    required: 'required',
    successTitle: 'Quote Request Submitted',
    successBody: 'Thank you. Our sales team will reply within 1 business day at the email you provided.',
    refLabel: 'Reference No.',
    close: 'Close',
    alreadyInQuote: 'In your quote',
    itemsTitle: 'Quoted Products',
  },
};

export default function QuoteModal() {
  const { items, isModalOpen, closeModal, removeFromQuote, setQty, clearQuote } = useQuote();
  const { lang } = useLanguage();
  const tl = lang === 'en' ? 'en' : 'zh';
  const t = TXT[tl];

  const [form, setForm] = useState({ company: '', contact: '', email: '', phone: '', notes: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const refNumRef = useRef<string>('');

  // Generate ref number once per mount
  useEffect(() => {
    if (!refNumRef.current) {
      refNumRef.current = `RFQ-${new Date().getFullYear()}-${Math.floor(Math.random() * 9000 + 1000)}`;
    }
  }, []);

  // Keyboard + scroll lock
  useEffect(() => {
    if (!isModalOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeModal(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [isModalOpen, closeModal]);

  const handleClose = () => {
    if (submitted) { clearQuote(); setSubmitted(false); }
    setForm({ company: '', contact: '', email: '', phone: '', notes: '' });
    setErrors({});
    closeModal();
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.company.trim()) e.company = t.required;
    if (!form.contact.trim()) e.contact = t.required;
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = t.required;
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSubmitted(true);
  };

  if (!isModalOpen) return null;

  return (
    // Overlay
    <div
      className="fixed inset-0 z-[300] flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(14, 17, 22, 0.75)' }}
      onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}
    >
      {/* Modal */}
      <div className="animate-modal-in relative flex w-full max-w-4xl flex-col bg-white shadow-2xl" style={{ maxHeight: '90vh' }}>

        {/* ── Header ── */}
        <div className="flex shrink-0 items-center justify-between border-b border-[#E5E0D8] px-6 py-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs tracking-[0.2em] text-[#1E5A8A]">FULLWEI</span>
            <span className="text-[#E5E0D8]">/</span>
            <h2 className="text-sm font-semibold text-[#1A1D21]">{t.title}</h2>
          </div>
          <button
            onClick={handleClose}
            className="flex h-8 w-8 items-center justify-center text-[#A8A4A0] transition-colors hover:text-[#1A1D21]"
            aria-label="close"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1.5 1.5L12.5 12.5M12.5 1.5L1.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* ── Success state ── */}
        {submitted ? (
          <div className="flex flex-1 flex-col items-center justify-center px-6 py-16 text-center">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-[#1E5A8A]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#1E5A8A]">
                <path d="M5 12L9.5 16.5L19 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold text-[#1A1D21]">{t.successTitle}</h3>
            <p className="mb-6 max-w-sm text-sm leading-relaxed text-[#6B6F76]">{t.successBody}</p>
            <p className="mb-8 font-mono text-xs text-[#A8A4A0]">
              {t.refLabel} <span className="text-[#1E5A8A]">{refNumRef.current}</span>
            </p>
            <button
              onClick={handleClose}
              className="border border-[#1E5A8A] px-8 py-2.5 text-sm font-medium text-[#1E5A8A] transition-colors hover:bg-[#1E5A8A] hover:text-white"
            >
              {t.close}
            </button>
          </div>
        ) : (
          <>
            {/* ── Body ── */}
            <div className="flex min-h-0 flex-1 overflow-hidden">

              {/* Left: product list */}
              <div className="flex w-full flex-col border-r border-[#E5E0D8] lg:w-[52%]">
                <div className="shrink-0 border-b border-[#E5E0D8] px-6 py-3">
                  <span className="text-xs font-semibold tracking-[0.15em] text-[#A8A4A0]">{t.itemsTitle}</span>
                  {items.length > 0 && (
                    <button
                      onClick={clearQuote}
                      className="float-right text-xs text-[#A8A4A0] transition-colors hover:text-[#1A1D21]"
                    >
                      {t.clearAll}
                    </button>
                  )}
                </div>

                <div className="flex-1 overflow-y-auto">
                  {items.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-16 text-center">
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="mb-4 text-[#D4CFC8]">
                        <rect x="8" y="12" width="24" height="20" rx="1" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M14 12V9a6 6 0 0112 0v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M15 22h10M15 27h6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                      </svg>
                      <p className="mb-1 text-sm font-medium text-[#6B6F76]">{t.empty}</p>
                      <p className="max-w-[220px] text-xs text-[#A8A4A0]">{t.emptyHint}</p>
                    </div>
                  ) : (
                    <ul className="divide-y divide-[#E5E0D8]">
                      {items.map((item) => {
                        const name = lang === 'zh' ? item.titleZh : item.titleEn;
                        const num = SLUG_NUM[item.slug] ?? '—';
                        return (
                          <li key={item.slug} className="flex gap-4 px-6 py-4">
                            {/* Thumbnail */}
                            <div className="flex h-16 w-16 shrink-0 items-center justify-center border border-[#2A3040] bg-[#1A1D21]">
                              <span className="font-mono text-sm text-[#1E5A8A]">{num}</span>
                            </div>

                            {/* Info */}
                            <div className="flex-1 min-w-0">
                              <p className="mb-0.5 text-sm font-medium text-[#1A1D21] truncate">{name}</p>
                              <p className="mb-2 font-mono text-xs text-[#A8A4A0]">{item.slug.toUpperCase()}</p>

                              {/* Qty + Remove */}
                              <div className="flex items-center gap-4">
                                <div className="flex items-center border border-[#E5E0D8]">
                                  <button
                                    onClick={() => setQty(item.slug, item.qty - 1)}
                                    className="flex h-7 w-7 items-center justify-center text-[#6B6F76] transition-colors hover:bg-[#F5F3EF] hover:text-[#1A1D21]"
                                    aria-label="decrease"
                                  >
                                    <svg width="10" height="2" viewBox="0 0 10 2"><path d="M1 1H9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" /></svg>
                                  </button>
                                  <span className="w-8 text-center text-xs font-medium text-[#1A1D21]">{item.qty}</span>
                                  <button
                                    onClick={() => setQty(item.slug, item.qty + 1)}
                                    className="flex h-7 w-7 items-center justify-center text-[#6B6F76] transition-colors hover:bg-[#F5F3EF] hover:text-[#1A1D21]"
                                    aria-label="increase"
                                  >
                                    <svg width="10" height="10" viewBox="0 0 10 10"><path d="M5 1V9M1 5H9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" /></svg>
                                  </button>
                                </div>
                                <button
                                  onClick={() => removeFromQuote(item.slug)}
                                  className="text-xs text-[#A8A4A0] transition-colors hover:text-[#1A1D21]"
                                >
                                  {t.remove}
                                </button>
                              </div>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>
              </div>

              {/* Right: contact form */}
              <div className="hidden flex-1 flex-col overflow-y-auto lg:flex">
                <div className="shrink-0 border-b border-[#E5E0D8] px-6 py-3">
                  <span className="text-xs font-semibold tracking-[0.15em] text-[#A8A4A0]">{t.formHeading}</span>
                </div>
                <form id="rfq-form" onSubmit={handleSubmit} className="flex-1 space-y-4 overflow-y-auto px-6 py-5">
                  {/* Company */}
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-[#6B6F76]">
                      {t.company} <span className="text-[#1E5A8A]">*</span>
                    </label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={e => { setForm(f => ({ ...f, company: e.target.value })); setErrors(err => ({ ...err, company: '' })); }}
                      className={`w-full border px-3 py-2 text-sm text-[#1A1D21] outline-none transition-colors placeholder:text-[#C8C4BC] focus:border-[#1E5A8A] ${errors.company ? 'border-red-400' : 'border-[#E5E0D8]'}`}
                    />
                    {errors.company && <p className="mt-1 text-xs text-red-400">{errors.company}</p>}
                  </div>

                  {/* Contact */}
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-[#6B6F76]">
                      {t.contact} <span className="text-[#1E5A8A]">*</span>
                    </label>
                    <input
                      type="text"
                      value={form.contact}
                      onChange={e => { setForm(f => ({ ...f, contact: e.target.value })); setErrors(err => ({ ...err, contact: '' })); }}
                      className={`w-full border px-3 py-2 text-sm text-[#1A1D21] outline-none transition-colors placeholder:text-[#C8C4BC] focus:border-[#1E5A8A] ${errors.contact ? 'border-red-400' : 'border-[#E5E0D8]'}`}
                    />
                    {errors.contact && <p className="mt-1 text-xs text-red-400">{errors.contact}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-[#6B6F76]">
                      {t.email} <span className="text-[#1E5A8A]">*</span>
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={e => { setForm(f => ({ ...f, email: e.target.value })); setErrors(err => ({ ...err, email: '' })); }}
                      className={`w-full border px-3 py-2 text-sm text-[#1A1D21] outline-none transition-colors placeholder:text-[#C8C4BC] focus:border-[#1E5A8A] ${errors.email ? 'border-red-400' : 'border-[#E5E0D8]'}`}
                    />
                    {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-[#6B6F76]">{t.phone}</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                      className="w-full border border-[#E5E0D8] px-3 py-2 text-sm text-[#1A1D21] outline-none transition-colors placeholder:text-[#C8C4BC] focus:border-[#1E5A8A]"
                    />
                  </div>

                  {/* Notes */}
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-[#6B6F76]">{t.notes}</label>
                    <textarea
                      rows={4}
                      value={form.notes}
                      onChange={e => setForm(f => ({ ...f, notes: e.target.value }))}
                      placeholder={t.notesHint}
                      className="w-full resize-none border border-[#E5E0D8] px-3 py-2 text-sm text-[#1A1D21] outline-none transition-colors placeholder:text-[#C8C4BC] focus:border-[#1E5A8A]"
                    />
                  </div>
                </form>
              </div>
            </div>

            {/* ── Footer ── */}
            <div className="flex shrink-0 items-center justify-between border-t border-[#E5E0D8] px-6 py-4">
              <button
                onClick={handleClose}
                className="text-sm text-[#6B6F76] transition-colors hover:text-[#1A1D21]"
              >
                {t.continueShopping}
              </button>
              <button
                form="rfq-form"
                type="submit"
                disabled={items.length === 0}
                className="bg-[#1E5A8A] px-7 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#2366A0] disabled:cursor-not-allowed disabled:opacity-40"
              >
                {t.submit}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
