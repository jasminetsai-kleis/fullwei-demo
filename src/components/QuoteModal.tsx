'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { useQuote } from '@/context/QuoteContext';
import { useLanguage } from '@/context/LanguageContext';
import QuoteIcon from '@/components/QuoteIcon';

const SLUG_NUM: Record<string, string> = {
  'exhaust-systems':     '01',
  'motorcycle-frame':    '02',
  'automotive-brackets': '03',
};

const ACCEPTED = '.pdf,.dwg,.dxf,.step,.stp,.iges,.igs,.x_t,.jpg,.jpeg,.png,.zip';
const MAX_FILES = 5;
const MAX_BYTES = 50 * 1024 * 1024;

const PPAP_LEVELS = ['Level 1', 'Level 2', 'Level 3', 'Level 4', 'Level 5'];

const COUNTRY_CODES = [
  { code: '+886', label: 'TW +886' },
  { code: '+1',   label: 'US +1'   },
  { code: '+81',  label: 'JP +81'  },
  { code: '+84',  label: 'VN +84'  },
  { code: '+86',  label: 'CN +86'  },
];

const TXT = {
  zh: {
    title: '詢價單',
    itemsHeading: '詢價產品',
    clearAll: '清空',
    empty: '可以加入有興趣的產品',
    emptyHint: '可在產品頁點擊「加入詢價單」新增產品，或可不指定產品直接填寫表單',
    formHeading: '填寫資訊',
    company: '公司名稱',
    contact: '聯絡人',
    email: '電子郵件',
    phone: '電話（選填）',
    uploadLabel: '圖面 / 附件（選填）',
    uploadHint: '拖放或點選上傳，最多 5 個檔案，單檔 ≤ 50MB',
    uploadFormats: 'PDF · DWG · DXF · STEP · IGES · JPG · ZIP',
    addFile: '+ 新增檔案',
    ppapLevel: 'PPAP 等級',
    ppapTbd: '未確定 / TBD',
    annualVolume: '預估年用量',
    annualVolumePlaceholder: '例：120,000 件 / 年',
    targetDate: '目標交期',
    notes: '專案說明（選填）',
    notesHint: '車型 / 材質需求 / 其他備註',
    required: '必填',
    continueShopping: '繼續瀏覽',
    submit: '送出詢價',
    replyTime: '回覆時間：1 個工作天',
    successTitle: '詢價單已送出',
    successBody: '感謝您的詢問。業務團隊將於 1 個工作日內以您提供的 Email 回覆。',
    refLabel: '詢價編號',
    close: '關閉',
    remove: '移除',
    fileSizeError: '檔案超過 50MB',
  },
  en: {
    title: 'Quote Request',
    itemsHeading: 'Quoted Products',
    clearAll: 'Clear all',
    empty: 'Add products you’re interested in',
    emptyHint: 'Click "Add to Quote" on any product page, or just fill out the form without selecting products',
    formHeading: 'Fill Information',
    company: 'Company Name',
    contact: 'Contact Person',
    email: 'Email Address',
    phone: 'Phone (optional)',
    uploadLabel: 'Drawings / Files (optional)',
    uploadHint: 'Drag & drop or click to upload · max 5 files · 50MB each',
    uploadFormats: 'PDF · DWG · DXF · STEP · IGES · JPG · ZIP',
    addFile: '+ Add file',
    ppapLevel: 'PPAP Level',
    ppapTbd: 'TBD / Not specified',
    annualVolume: 'Est. Annual Volume',
    annualVolumePlaceholder: 'e.g. 120,000 pcs / year',
    targetDate: 'Target Delivery Date',
    notes: 'Project Notes (optional)',
    notesHint: 'Vehicle model / material requirements / other notes',
    required: 'required',
    continueShopping: 'Continue Browsing',
    submit: 'Submit Request',
    replyTime: 'Response time: 1 business day',
    successTitle: 'Quote Request Submitted',
    successBody: 'Thank you. Our sales team will reply within 1 business day at the email you provided.',
    refLabel: 'Reference No.',
    close: 'Close',
    remove: 'Remove',
    fileSizeError: 'File exceeds 50MB limit',
  },
};

interface FormState {
  company: string;
  contact: string;
  email: string;
  countryCode: string;
  phone: string;
  ppapLevel: string;
  annualVolume: string;
  targetDate: string;
  notes: string;
}

const EMPTY_FORM: FormState = {
  company: '', contact: '', email: '',
  countryCode: '+886', phone: '',
  ppapLevel: '', annualVolume: '', targetDate: '', notes: '',
};

export default function QuoteModal() {
  const { items, isModalOpen, closeModal, removeFromQuote, clearQuote } = useQuote();
  const { lang } = useLanguage();
  const tl = lang === 'en' ? 'en' : 'zh';
  const t = TXT[tl];

  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [files, setFiles] = useState<File[]>([]);
  const [fileError, setFileError] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const refNumRef = useRef('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!refNumRef.current) {
      refNumRef.current = `RFQ-${new Date().getFullYear()}-${Math.floor(Math.random() * 9000 + 1000)}`;
    }
  }, []);

  useEffect(() => {
    if (!isModalOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') handleClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isModalOpen]);

  const handleClose = () => {
    if (submitted) { clearQuote(); setSubmitted(false); }
    setForm(EMPTY_FORM);
    setErrors({});
    setFiles([]);
    setFileError('');
    closeModal();
  };

  const addFiles = useCallback((incoming: FileList | File[]) => {
    const arr = Array.from(incoming);
    setFileError('');
    setFiles(prev => {
      const valid = arr.filter(f => {
        if (f.size > MAX_BYTES) { setFileError(t.fileSizeError); return false; }
        return true;
      });
      const merged = [...prev, ...valid];
      return merged.slice(0, MAX_FILES);
    });
  }, [t.fileSizeError]);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    addFiles(e.dataTransfer.files);
  };

  const validate = () => {
    const e: Partial<Record<keyof FormState, string>> = {};
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

  const field = (key: keyof FormState, value: string) => {
    setForm(f => ({ ...f, [key]: value }));
    setErrors(err => ({ ...err, [key]: '' }));
  };

  if (!isModalOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[300] flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(26, 29, 33, 0.75)' }}
      onClick={e => { if (e.target === e.currentTarget) handleClose(); }}
    >
      <div
        className="animate-modal-in relative flex w-full max-w-4xl flex-col bg-white shadow-2xl"
        style={{ maxHeight: '92vh' }}
      >
        {/* ── Header ── */}
        <div className="flex shrink-0 items-center justify-between border-b border-[#E5E0D8] px-6 py-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs tracking-[0.2em] text-[#1E5A8A]">FULLWEI</span>
            <span className="text-[#D4CFC8]">/</span>
            <h2 className="text-sm font-semibold text-[#1A1D21]">{t.title}</h2>
          </div>
          <button onClick={handleClose} aria-label="close"
            className="flex h-8 w-8 items-center justify-center text-[#A8A4A0] transition-colors hover:text-[#1A1D21]">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1.5 1.5L12.5 12.5M12.5 1.5L1.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* ── Success ── */}
        {submitted ? (
          <div className="flex flex-1 flex-col items-center justify-center px-6 py-16 text-center">
            <div className="mb-6 flex h-14 w-14 items-center justify-center border border-[#1E5A8A]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#1E5A8A]">
                <path d="M5 12L9.5 16.5L19 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold text-[#1A1D21]">{t.successTitle}</h3>
            <p className="mb-6 max-w-sm text-sm leading-relaxed text-[#6B6F76]">{t.successBody}</p>
            <p className="mb-8 font-mono text-xs text-[#A8A4A0]">
              {t.refLabel} <span className="text-[#1E5A8A]">{refNumRef.current}</span>
            </p>
            <button onClick={handleClose}
              className="border border-[#1E5A8A] px-8 py-2.5 text-sm font-medium text-[#1E5A8A] transition-colors hover:bg-[#1E5A8A] hover:text-white">
              {t.close}
            </button>
          </div>
        ) : (
          <>
            {/* ── Body ── */}
            <div className="flex min-h-0 flex-1 overflow-hidden">

              {/* Left: product list */}
              <div className="flex w-full flex-col border-r border-[#E5E0D8] lg:w-[44%]">
                <div className="flex shrink-0 items-center justify-between border-b border-[#E5E0D8] px-6 py-3">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-[#A8A4A0]">{t.itemsHeading}</span>
                  {items.length > 0 && (
                    <button onClick={clearQuote}
                      className="font-mono text-[10px] text-[#A8A4A0] transition-colors hover:text-[#1A1D21]">
                      {t.clearAll}
                    </button>
                  )}
                </div>

                <div className="flex-1 overflow-y-auto">
                  {items.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-16 text-center">
                      <QuoteIcon size={80} strokeWidth={1.2} className="mb-4 text-[#D4CFC8]" />
                      <p className="mb-1 text-sm font-medium text-[#6B6F76]">{t.empty}</p>
                      <p className="max-w-[220px] text-xs text-[#A8A4A0]">{t.emptyHint}</p>
                    </div>
                  ) : (
                    <ul className="divide-y divide-[#E5E0D8]">
                      {items.map(item => {
                        const num = SLUG_NUM[item.slug] ?? '—';
                        return (
                          <li key={item.slug} className="flex gap-4 px-6 py-4">
                            {/* Thumbnail */}
                            <div className="flex h-16 w-16 shrink-0 items-center justify-center bg-[#1A1D21]">
                              <span className="font-mono text-sm text-[#1E5A8A]">{num}</span>
                            </div>
                            {/* Info */}
                            <div className="flex min-w-0 flex-1 flex-col justify-center">
                              <p className="mb-0.5 truncate text-sm font-semibold text-[#1A1D21]">
                                {lang === 'zh' ? item.titleZh : item.titleEn}
                              </p>
                              <p className="font-mono text-[10px] text-[#A8A4A0]">
                                {item.categoryZh} / {item.categoryEn}
                              </p>
                            </div>
                            {/* Remove */}
                            <button
                              onClick={() => removeFromQuote(item.slug)}
                              aria-label={t.remove}
                              className="shrink-0 self-center text-[#C8C4BC] transition-colors hover:text-[#1A1D21]"
                            >
                              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                <path d="M1.5 1.5L10.5 10.5M10.5 1.5L1.5 10.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                              </svg>
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>
              </div>

              {/* Right: form */}
              <div className="scrollbar-light hidden flex-1 flex-col overflow-y-auto lg:flex">
                <div className="shrink-0 border-b border-[#E5E0D8] px-6 py-3">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-[#A8A4A0]">{t.formHeading}</span>
                </div>

                <form id="rfq-form" onSubmit={handleSubmit} className="scrollbar-light flex-1 space-y-4 overflow-y-auto px-6 py-5">

                  {/* Company */}
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-[#6B6F76]">
                      {t.company} <span className="text-[#1E5A8A]">*</span>
                    </label>
                    <input type="text" value={form.company}
                      onChange={e => field('company', e.target.value)}
                      className={`w-full border px-3 py-2 text-sm text-[#1A1D21] outline-none transition-colors placeholder:text-[#C8C4BC] focus:border-[#1E5A8A] ${errors.company ? 'border-red-400' : 'border-[#E5E0D8]'}`}
                    />
                    {errors.company && <p className="mt-1 text-[10px] text-red-400">{errors.company}</p>}
                  </div>

                  {/* Contact */}
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-[#6B6F76]">
                      {t.contact} <span className="text-[#1E5A8A]">*</span>
                    </label>
                    <input type="text" value={form.contact}
                      onChange={e => field('contact', e.target.value)}
                      className={`w-full border px-3 py-2 text-sm text-[#1A1D21] outline-none transition-colors placeholder:text-[#C8C4BC] focus:border-[#1E5A8A] ${errors.contact ? 'border-red-400' : 'border-[#E5E0D8]'}`}
                    />
                    {errors.contact && <p className="mt-1 text-[10px] text-red-400">{errors.contact}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-[#6B6F76]">
                      {t.email} <span className="text-[#1E5A8A]">*</span>
                    </label>
                    <input type="email" value={form.email}
                      onChange={e => field('email', e.target.value)}
                      className={`w-full border px-3 py-2 text-sm text-[#1A1D21] outline-none transition-colors placeholder:text-[#C8C4BC] focus:border-[#1E5A8A] ${errors.email ? 'border-red-400' : 'border-[#E5E0D8]'}`}
                    />
                    {errors.email && <p className="mt-1 text-[10px] text-red-400">{errors.email}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-[#6B6F76]">{t.phone}</label>
                    <div className="flex gap-2">
                      <select value={form.countryCode}
                        onChange={e => field('countryCode', e.target.value)}
                        className="w-[100px] shrink-0 border border-[#E5E0D8] bg-white px-2 py-2 text-xs text-[#1A1D21] outline-none transition-colors focus:border-[#1E5A8A]">
                        {COUNTRY_CODES.map(c => (
                          <option key={c.code} value={c.code}>{c.label}</option>
                        ))}
                      </select>
                      <input type="tel" value={form.phone}
                        onChange={e => field('phone', e.target.value)}
                        placeholder="02 1234 5678"
                        className="flex-1 border border-[#E5E0D8] px-3 py-2 text-sm text-[#1A1D21] outline-none transition-colors placeholder:text-[#C8C4BC] focus:border-[#1E5A8A]"
                      />
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-[#E5E0D8] pt-1" />

                  {/* File upload */}
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-[#6B6F76]">{t.uploadLabel}</label>
                    {/* Drop zone */}
                    <div
                      onDragOver={e => { e.preventDefault(); setIsDragging(true); }}
                      onDragLeave={() => setIsDragging(false)}
                      onDrop={handleDrop}
                      onClick={() => files.length < MAX_FILES && fileInputRef.current?.click()}
                      className={`cursor-pointer border border-dashed px-4 py-5 text-center transition-colors ${
                        isDragging ? 'border-[#1E5A8A] bg-[#EEF4FA]' : 'border-[#D4CFC8] hover:border-[#1E5A8A]'
                      } ${files.length >= MAX_FILES ? 'cursor-default opacity-50' : ''}`}
                    >
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="mx-auto mb-2 text-[#A8A4A0]">
                        <path d="M10 13V4M10 4L7 7M10 4L13 7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M4 14v1a2 2 0 002 2h8a2 2 0 002-2v-1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                      </svg>
                      <p className="text-xs text-[#6B6F76]">{t.uploadHint}</p>
                      <p className="mt-1 font-mono text-[10px] text-[#A8A4A0]">{t.uploadFormats}</p>
                    </div>
                    <input ref={fileInputRef} type="file" multiple accept={ACCEPTED} className="hidden"
                      onChange={e => { if (e.target.files) addFiles(e.target.files); e.target.value = ''; }}
                    />
                    {fileError && <p className="mt-1 text-[10px] text-red-400">{fileError}</p>}
                    {/* File list */}
                    {files.length > 0 && (
                      <ul className="mt-2 space-y-1">
                        {files.map((f, i) => (
                          <li key={i} className="flex items-center gap-2 border border-[#E5E0D8] px-3 py-1.5">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="shrink-0 text-[#1E5A8A]">
                              <path d="M2 1h5.5L10 3.5V11H2V1z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
                              <path d="M7 1v3h3" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
                            </svg>
                            <span className="flex-1 truncate font-mono text-[10px] text-[#6B6F76]">{f.name}</span>
                            <button onClick={() => setFiles(prev => prev.filter((_, j) => j !== i))}
                              className="shrink-0 text-[#C8C4BC] hover:text-[#1A1D21]">
                              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                                <path d="M1.5 1.5L8.5 8.5M8.5 1.5L1.5 8.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                              </svg>
                            </button>
                          </li>
                        ))}
                        {files.length < MAX_FILES && (
                          <button onClick={() => fileInputRef.current?.click()}
                            className="font-mono text-[10px] text-[#1E5A8A] hover:text-[#2366A0]">
                            {t.addFile}
                          </button>
                        )}
                      </ul>
                    )}
                  </div>

                  {/* Divider */}
                  <div className="border-t border-[#E5E0D8] pt-1" />

                  {/* PPAP Level */}
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-[#6B6F76]">{t.ppapLevel}</label>
                    <select value={form.ppapLevel}
                      onChange={e => field('ppapLevel', e.target.value)}
                      className="w-full border border-[#E5E0D8] bg-white px-3 py-2 text-sm text-[#1A1D21] outline-none transition-colors focus:border-[#1E5A8A]">
                      <option value="">{t.ppapTbd}</option>
                      {PPAP_LEVELS.map(l => <option key={l} value={l}>{l}</option>)}
                    </select>
                  </div>

                  {/* Annual Volume */}
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-[#6B6F76]">{t.annualVolume}</label>
                    <input type="text" value={form.annualVolume}
                      onChange={e => field('annualVolume', e.target.value)}
                      placeholder={t.annualVolumePlaceholder}
                      className="w-full border border-[#E5E0D8] px-3 py-2 text-sm text-[#1A1D21] outline-none transition-colors placeholder:text-[#C8C4BC] focus:border-[#1E5A8A]"
                    />
                  </div>

                  {/* Target Date */}
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-[#6B6F76]">{t.targetDate}</label>
                    <input type="date" value={form.targetDate}
                      onChange={e => field('targetDate', e.target.value)}
                      className="w-full border border-[#E5E0D8] px-3 py-2 text-sm text-[#1A1D21] outline-none transition-colors focus:border-[#1E5A8A]"
                    />
                  </div>

                  {/* Notes */}
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-[#6B6F76]">{t.notes}</label>
                    <textarea rows={3} value={form.notes}
                      onChange={e => field('notes', e.target.value)}
                      placeholder={t.notesHint}
                      className="w-full resize-none border border-[#E5E0D8] px-3 py-2 text-sm text-[#1A1D21] outline-none transition-colors placeholder:text-[#C8C4BC] focus:border-[#1E5A8A]"
                    />
                  </div>
                </form>
              </div>
            </div>

            {/* ── Footer ── */}
            <div className="flex shrink-0 items-center justify-between border-t border-[#E5E0D8] px-6 py-4">
              <button onClick={handleClose}
                className="border border-[#D4CFC8] px-5 py-2.5 text-sm text-[#6B6F76] transition-colors hover:border-[#1A1D21] hover:text-[#1A1D21]">
                {t.continueShopping}
              </button>
              <div className="flex items-center gap-3">
                <span className="text-xs text-[#A8A4A0]">{t.replyTime}</span>
                <button form="rfq-form" type="submit"
                  className="bg-[#1E5A8A] px-7 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#2366A0]">
                  {t.submit}
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
