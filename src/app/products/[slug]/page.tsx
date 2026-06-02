'use client';

import { useParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { useQuote } from '@/context/QuoteContext';
import { products } from '@/data/products';
import type { ProductSlug, ProductLang } from '@/data/products';

// ─── Section nav labels ───────────────────────────────────────
const NAV_LABELS: Record<string, { zh: string; en: string }> = {
  overview:    { zh: '產品概覽', en: 'Overview' },
  specs:       { zh: '技術規格', en: 'Specifications' },
  custom:      { zh: '客製選項', en: 'Customization' },
  process:     { zh: '製程流程', en: 'Process' },
  qc:          { zh: '品質管控', en: 'Quality & Testing' },
  apps:        { zh: '應用場景', en: 'Applications' },
  eng:         { zh: '工程深度', en: 'Engineering' },
  faq:         { zh: '常見問答', en: 'FAQ' },
};

const SECTION_IDS = ['overview', 'specs', 'custom', 'process', 'qc', 'apps', 'eng', 'faq'];

const HERO_IMG: Record<ProductSlug, string> = {
  'exhaust-systems':     '/pdp-1.png',
  'motorcycle-frame':    '/pdp-2.png',
  'automotive-brackets': '/pdp-3.png',
};

// ─── FAQ accordion item ───────────────────────────────────────
function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#E8E4DC]">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="text-sm font-medium text-black">{q}</span>
        <span className={`shrink-0 text-[#064d8f] transition-transform duration-200 ${open ? 'rotate-45' : ''}`}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 3V13M3 8H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      {open && <p className="pb-5 text-sm leading-relaxed text-[#767676]">{a}</p>}
    </div>
  );
}

// ─── Main page ────────────────────────────────────────────────
export default function ProductPage() {
  const params = useParams();
  const slug = params.slug as ProductSlug;
  const { lang } = useLanguage();
  const { addToQuote, items } = useQuote();

  const product = products.find((p) => p.slug === slug);
  const cl = lang === 'en' ? 'en' : 'zh'; // safe content lang (product data only has zh/en)

  const [activeSection, setActiveSection] = useState('overview');
  const [justAdded, setJustAdded] = useState(false);
  const [showFloating, setShowFloating] = useState(false);
  const heroQuoteTriggerRef = useRef<HTMLDivElement>(null);

  const isInQuote = items.some(i => i.slug === slug);

  const handleAddToQuote = () => {
    if (!product) return;
    addToQuote({
      slug,
      titleZh: product.zh.title,
      titleEn: product.en.title,
      categoryZh: product.zh.category,
      categoryEn: product.en.category,
    });
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1500);
  };

  // Show floating button when inline hero button scrolls out of view
  useEffect(() => {
    const el = heroQuoteTriggerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setShowFloating(!entry.isIntersecting),
      { threshold: 0 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [slug]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { rootMargin: '-88px 0px -55% 0px', threshold: 0 },
    );
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [slug]);

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="flex min-h-screen items-center justify-center pt-[72px]">
          <p className="text-[#767676]">Product not found</p>
        </div>
      </>
    );
  }

  const c: ProductLang = product[cl];

  return (
    <>
      <Navbar />

      {/* ── Floating Add to Quote ── */}
      <div
        className={`fixed bottom-6 right-6 z-40 transition-all duration-300 ${
          showFloating ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'
        }`}
      >
        <button
          onClick={handleAddToQuote}
          className={`flex items-center gap-2.5 px-5 py-3 text-sm font-semibold shadow-xl transition-all duration-200 ${
            justAdded
              ? 'bg-[#0a5fa8] text-white'
              : 'bg-black text-white hover:bg-[#064d8f]'
          }`}
        >
          {justAdded ? (
            <>
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M2 6.5L5 9.5L11 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {lang === 'zh' ? '已加入' : 'Added'}
            </>
          ) : (
            <>
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M6.5 2V11M2 6.5H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              {lang === 'zh' ? '加入詢價單' : 'Add to Quote'}
              {isInQuote && (
                <span className="ml-0.5 font-mono text-xs text-white/70">
                  ({items.find(i => i.slug === slug)?.qty ?? 1})
                </span>
              )}
            </>
          )}
        </button>
      </div>

      {/* ── Hero ── */}
      <section className="border-b border-[#E8E4DC] bg-white pt-[72px]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12 lg:py-20">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
            {/* Left */}
            <div className="flex-1">
              <Link href="/" className="mb-8 inline-flex items-center gap-2 text-xs text-[#767676] transition-colors hover:text-black">
                {c.back}
              </Link>
              <p className="mb-3 font-mono text-xs tracking-[0.2em] text-[#064d8f]">{c.category}</p>
              <h1 className="mb-4 text-4xl font-bold leading-tight text-black lg:text-5xl">{c.title}</h1>
              <p className="mb-8 max-w-lg text-base leading-relaxed text-[#767676]">{c.subtitle}</p>

              {/* Badges */}
              <div className="mb-10 flex flex-wrap gap-2">
                {c.badges.map((b) => (
                  <span key={b} className="border border-[#E8E4DC] px-3 py-1 font-mono text-xs text-[#767676]">
                    {b}
                  </span>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-px bg-[#E8E4DC] sm:grid-cols-4">
                {c.stats.map((s) => (
                  <div key={s.label} className="bg-[#F5F3EE] px-4 py-5">
                    <p className="text-2xl font-bold text-black">{s.value}</p>
                    <p className="mt-0.5 text-xs text-[#767676]">{s.label}</p>
                  </div>
                ))}
              </div>

              {/* ── Add to Quote (hero inline) ── */}
              <div ref={heroQuoteTriggerRef} className="mt-6 flex items-center gap-4 border-t border-[#E8E4DC] pt-6">
                <button
                  onClick={handleAddToQuote}
                  className={`flex items-center gap-2 px-6 py-3 text-sm font-semibold transition-all duration-200 ${
                    justAdded
                      ? 'bg-[#0a5fa8] text-white'
                      : 'bg-[#064d8f] text-white hover:bg-[#0a5fa8]'
                  }`}
                >
                  {justAdded ? (
                    <>
                      <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                        <path d="M2 6.5L5 9.5L11 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {lang === 'zh' ? '已加入' : 'Added'}
                    </>
                  ) : (
                    <>
                      <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                        <path d="M6.5 2V11M2 6.5H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                      {lang === 'zh' ? '加入詢價單' : 'Add to Quote'}
                    </>
                  )}
                </button>
                {isInQuote && !justAdded && (
                  <span className="flex items-center gap-1.5 text-xs text-[#767676]">
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                      <circle cx="5.5" cy="5.5" r="4.5" stroke="#064d8f" strokeWidth="1" />
                      <path d="M3 5.5L5 7.5L8.5 4" stroke="#064d8f" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {lang === 'zh' ? '已在詢價單中' : 'Already in quote'}
                  </span>
                )}
              </div>
            </div>

            {/* Right: product image */}
            <div className="relative flex items-center justify-center lg:w-[420px]">
              <Image
                src={HERO_IMG[slug]}
                alt={c.title}
                width={420}
                height={420}
                className="h-auto w-full object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Body: sticky nav + content ── */}
      <div className="mx-auto flex max-w-7xl gap-0 px-6 lg:px-12">
        {/* Sticky sidebar */}
        <aside className="hidden shrink-0 lg:block" style={{ width: '200px' }}>
          <div className="sticky top-[72px] py-16 pr-8">
            <nav className="space-y-1">
              {SECTION_IDS.map((id) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className={`block py-1.5 text-xs transition-colors duration-150 ${
                    activeSection === id
                      ? 'font-semibold text-[#064d8f]'
                      : 'text-[#767676] hover:text-black'
                  }`}
                >
                  {NAV_LABELS[id][cl]}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main content */}
        <div className="min-w-0 flex-1">

          {/* ── Overview ── */}
          <section id="overview" className="border-b border-[#E8E4DC] py-16">
            <p className="mb-2 font-mono text-xs tracking-[0.2em] text-[#064d8f]">{NAV_LABELS.overview[cl]}</p>
            <h2 className="mb-8 text-3xl font-bold text-black">{c.overviewHeading}</h2>
            <div className="grid gap-12 lg:grid-cols-2">
              <p className="leading-relaxed text-[#767676]">{c.overviewBody}</p>
              <div className="space-y-0 bg-[#F5F3EE]">
                {c.keySpecs.map((s) => (
                  <div key={s.label} className="flex justify-between gap-4 border-b border-[#E8E4DC] px-5 py-3 last:border-0">
                    <span className="shrink-0 text-xs text-[#767676]">{s.label}</span>
                    <span className="text-right text-xs font-medium text-black">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── Specifications ── */}
          <section id="specs" className="border-b border-[#E8E4DC] bg-[#F5F3EE] py-16 lg:-mx-0">
            <p className="mb-2 font-mono text-xs tracking-[0.2em] text-[#064d8f]">{NAV_LABELS.specs[cl]}</p>
            <h2 className="mb-8 text-3xl font-bold text-black">{c.specsHeading}</h2>
            <div className="space-y-8">
              {c.specGroups.map((group) => (
                <div key={group.category}>
                  <h3 className="mb-3 text-xs font-semibold tracking-[0.15em] text-[#767676]">{group.category}</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full bg-white text-sm">
                      <tbody>
                        {group.rows.map((row, i) => (
                          <tr key={i} className="border-b border-[#E8E4DC] last:border-0">
                            <td className="w-48 shrink-0 px-5 py-3 text-xs text-[#767676]">{row.param}</td>
                            <td className="px-5 py-3 text-xs text-black">{row.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Customization ── */}
          <section id="custom" className="border-b border-[#E8E4DC] py-16">
            <p className="mb-2 font-mono text-xs tracking-[0.2em] text-[#064d8f]">{NAV_LABELS.custom[cl]}</p>
            <h2 className="mb-8 text-3xl font-bold text-black">{c.customHeading}</h2>
            <div className="grid gap-px bg-[#E8E4DC] sm:grid-cols-2">
              {c.customOptions.map((opt) => (
                <div key={opt.title} className="bg-white p-6">
                  <h3 className="mb-2 text-base font-bold text-black">{opt.title}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-[#767676]">{opt.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {opt.tags.map((tag) => (
                      <span key={tag} className="border border-[#E8E4DC] px-2 py-0.5 text-xs text-[#767676]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Process ── */}
          <section id="process" className="border-b border-[#E8E4DC] bg-[#F5F3EE] py-16">
            <p className="mb-2 font-mono text-xs tracking-[0.2em] text-[#064d8f]">{NAV_LABELS.process[cl]}</p>
            <h2 className="mb-8 text-3xl font-bold text-black">{c.processHeading}</h2>
            <div className="space-y-0">
              {c.processSteps.map((step, i) => (
                <div key={step.num} className="flex gap-6 border-b border-[#E8E4DC] bg-white px-6 py-5 last:border-0">
                  <div className="flex shrink-0 flex-col items-center gap-2 pt-0.5">
                    <span className="font-mono text-xs text-[#767676]">{step.num}</span>
                    {i < c.processSteps.length - 1 && (
                      <div className="mt-1 h-full w-px bg-[#E8E4DC]" />
                    )}
                  </div>
                  <div className="pb-2">
                    <h3 className="mb-1 text-sm font-bold text-black">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-[#767676]">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── QC & Testing ── */}
          <section id="qc" className="border-b border-[#E8E4DC] py-16">
            <p className="mb-2 font-mono text-xs tracking-[0.2em] text-[#064d8f]">{NAV_LABELS.qc[cl]}</p>
            <h2 className="mb-3 text-3xl font-bold text-black">{c.qcHeading}</h2>
            <p className="mb-8 max-w-2xl text-sm leading-relaxed text-[#767676]">{c.qcIntro}</p>
            <div className="grid gap-px bg-[#E8E4DC] sm:grid-cols-2 lg:grid-cols-3">
              {c.qcItems.map((item) => (
                <div key={item.title} className="bg-white p-5">
                  <div className="mb-3 h-0.5 w-6 bg-[#064d8f]" />
                  <h3 className="mb-2 text-sm font-bold text-black">{item.title}</h3>
                  <p className="mb-3 text-xs leading-relaxed text-[#767676]">{item.desc}</p>
                  <span className="font-mono text-xs text-[#767676]">{item.spec}</span>
                </div>
              ))}
            </div>
          </section>

          {/* ── Applications ── */}
          <section id="apps" className="border-b border-[#E8E4DC] bg-[#F5F3EE] py-16">
            <p className="mb-2 font-mono text-xs tracking-[0.2em] text-[#064d8f]">{NAV_LABELS.apps[cl]}</p>
            <h2 className="mb-8 text-3xl font-bold text-black">{c.appHeading}</h2>
            <div className="grid gap-px bg-[#E8E4DC] sm:grid-cols-2">
              {c.appItems.map((item) => (
                <div key={item.title} className="bg-white p-6">
                  <h3 className="mb-2 text-base font-bold text-black">{item.title}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-[#767676]">{item.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span key={tag} className="bg-[#F5F3EE] px-2 py-0.5 text-xs text-[#767676]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Engineering Deep-Dive ── */}
          <section id="eng" className="border-b border-[#E8E4DC] py-16">
            <p className="mb-2 font-mono text-xs tracking-[0.2em] text-[#064d8f]">{NAV_LABELS.eng[cl]}</p>
            <h2 className="mb-8 text-3xl font-bold text-black">{c.engHeading}</h2>
            <div className="space-y-8">
              {c.engArticles.map((article) => (
                <article key={article.title} className="border-l-2 border-[#064d8f] pl-6">
                  <h3 className="mb-3 text-base font-bold text-black">{article.title}</h3>
                  <p className="text-sm leading-relaxed text-[#767676]">{article.body}</p>
                </article>
              ))}
            </div>

            <div className="mt-10 border-t border-[#E8E4DC] pt-8">
              <p className="mb-4 text-xs font-semibold tracking-[0.15em] text-[#767676]">
                {lang === 'zh' ? '認證資質' : 'Certifications'}
              </p>
              <div className="flex flex-wrap gap-3">
                {c.engCerts.map((cert) => (
                  <span key={cert} className="border border-[#E8E4DC] px-3 py-1.5 text-xs text-[#767676]">
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* ── FAQ ── */}
          <section id="faq" className="border-b border-[#E8E4DC] bg-[#F5F3EE] py-16">
            <p className="mb-2 font-mono text-xs tracking-[0.2em] text-[#064d8f]">{NAV_LABELS.faq[cl]}</p>
            <h2 className="mb-8 text-3xl font-bold text-black">{c.faqHeading}</h2>
            <div className="max-w-2xl">
              {c.faqItems.map((item) => (
                <FAQItem key={item.q} q={item.q} a={item.a} />
              ))}
            </div>
          </section>

          {/* ── CTA ── */}
          <section className="bg-[#1A1A1A] py-16">
            <div className="max-w-2xl">
              <p className="mb-3 font-mono text-xs tracking-[0.2em] text-[#064d8f]">
                {lang === 'zh' ? '與我們合作' : 'PARTNER WITH US'}
              </p>
              <h2 className="mb-3 text-3xl font-bold text-white">{c.ctaHeading}</h2>
              <p className="mb-8 text-sm leading-relaxed text-[#767676]">{c.ctaSub}</p>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:flex-wrap">
                {/* Primary: Add to Quote */}
                <button
                  onClick={handleAddToQuote}
                  className={`inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold transition-all duration-200 ${
                    justAdded
                      ? 'bg-[#0a5fa8] text-white'
                      : 'bg-[#064d8f] text-white hover:bg-[#0a5fa8]'
                  }`}
                >
                  {justAdded ? (
                    <>{lang === 'zh' ? '✓ 已加入' : '✓ Added'}</>
                  ) : (
                    <>{lang === 'zh' ? '＋ 加入詢價單' : '+ Add to Quote'}</>
                  )}
                </button>
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white"
                >
                  {c.ctaBtn2}
                </a>
              </div>
            </div>
          </section>

        </div>
      </div>

      <Footer />
    </>
  );
}
