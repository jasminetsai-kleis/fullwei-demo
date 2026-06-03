'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { useQuote } from '@/context/QuoteContext';
import { processes } from '@/data/processes';
import type { ProcessSlug, ProcessLang } from '@/data/processes';

// ─── Section nav labels ───────────────────────────────────────
const NAV_LABELS: Record<string, { zh: string; en: string }> = {
  overview:  { zh: '製程能力', en: 'Overview' },
  range:     { zh: '能力範圍', en: 'Capability Range' },
  equipment: { zh: '設備與自動化', en: 'Equipment & Automation' },
  control:   { zh: '製程控制與檢驗', en: 'Process Control' },
  certs:     { zh: '認證與品質', en: 'Certifications' },
  visuals:   { zh: '紀實影像', en: 'Documentary Visuals' },
};

const SECTION_IDS = ['overview', 'range', 'equipment', 'control', 'certs', 'visuals'];

const HERO_IMG: Record<ProcessSlug, string> = {
  'metal-stamping':   '/manuf-1.png',
  'welding-assembly': '/manuf-2.png',
  'tube-processing':  '/manuf-3.png',
};

// ─── Main page ────────────────────────────────────────────────
export default function CapabilityPage() {
  const params = useParams();
  const slug = params.slug as ProcessSlug;
  const { lang } = useLanguage();
  const { openModal } = useQuote();

  const process = processes.find((p) => p.slug === slug);
  const cl = lang === 'en' ? 'en' : 'zh'; // process data carries zh/en; other langs fall back to zh

  const [activeSection, setActiveSection] = useState('overview');

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

  if (!process) {
    return (
      <>
        <Navbar />
        <div className="flex min-h-screen items-center justify-center pt-[72px]">
          <p className="text-[#767676]">Process not found</p>
        </div>
      </>
    );
  }

  const c: ProcessLang = process[cl];

  return (
    <>
      <Navbar />

      {/* ── Hero ── */}
      <section className="border-b border-[#E8E4DC] bg-white pt-[72px]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12 lg:py-20">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
            {/* Left */}
            <div className="flex-1">
              <Link href="/#capabilities" className="mb-8 inline-flex items-center gap-2 text-xs text-[#767676] transition-colors hover:text-black">
                {c.back}
              </Link>
              <p className="mb-3 font-mono text-xs tracking-[0.2em] text-[#064d8f]">{c.category}</p>
              <div className="mb-4 flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <h1 className="text-4xl font-bold leading-tight text-black lg:text-5xl">{c.title}</h1>
                {c.enName && (
                  <span className="font-mono text-lg tracking-tight text-[#767676]/50 lg:text-xl">{c.enName}</span>
                )}
              </div>
              <p className="mb-8 max-w-xl text-base leading-relaxed text-[#767676]">{c.subtitle}</p>

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
            </div>

            {/* Right: process visual */}
            <div className="relative flex items-center justify-center lg:w-[460px]">
              <Image
                src={HERO_IMG[slug]}
                alt={c.title}
                width={800}
                height={560}
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
        <aside className="hidden shrink-0 lg:block" style={{ width: '220px' }}>
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
              <div className="space-y-5">
                {c.overviewBody.map((para, i) => (
                  <p key={i} className="leading-relaxed text-[#767676]">{para}</p>
                ))}
              </div>
              <div className="h-fit space-y-0 bg-[#F5F3EE]">
                {c.keyFacts.map((s) => (
                  <div key={s.label} className="flex justify-between gap-4 border-b border-[#E8E4DC] px-5 py-3 last:border-0">
                    <span className="shrink-0 text-xs text-[#767676]">{s.label}</span>
                    <span className="text-right text-xs font-medium text-black">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── Capability Range ── */}
          <section id="range" className="border-b border-[#E8E4DC] bg-[#F5F3EE] py-16">
            <p className="mb-2 font-mono text-xs tracking-[0.2em] text-[#064d8f]">{NAV_LABELS.range[cl]}</p>
            <h2 className="mb-3 text-3xl font-bold text-black">{c.rangeHeading}</h2>
            <p className="mb-8 max-w-2xl text-sm leading-relaxed text-[#767676]">{c.rangeIntro}</p>
            <div className="space-y-8">
              {c.specGroups.map((group) => (
                <div key={group.category}>
                  <h3 className="mb-3 text-xs font-semibold tracking-[0.15em] text-[#767676]">{group.category}</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full bg-white text-sm">
                      <tbody>
                        {group.rows.map((row, i) => (
                          <tr key={i} className="border-b border-[#E8E4DC] last:border-0">
                            <td className="w-56 shrink-0 px-5 py-3 text-xs text-[#767676]">{row.param}</td>
                            <td className="px-5 py-3 text-xs tabular-nums text-black">{row.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Equipment & Automation ── */}
          <section id="equipment" className="border-b border-[#E8E4DC] py-16">
            <p className="mb-2 font-mono text-xs tracking-[0.2em] text-[#064d8f]">{NAV_LABELS.equipment[cl]}</p>
            <h2 className="mb-3 text-3xl font-bold text-black">{c.equipHeading}</h2>
            <p className="mb-8 max-w-2xl text-sm leading-relaxed text-[#767676]">{c.equipIntro}</p>
            <div className="grid gap-px bg-[#E8E4DC] sm:grid-cols-2">
              {c.equipItems.map((item) => (
                <div key={item.name} className="flex flex-col bg-white p-6">
                  <h3 className="mb-2 text-base font-bold text-black">{item.name}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-[#767676]">{item.desc}</p>
                  <span className="mt-auto font-mono text-xs text-[#064d8f]">{item.spec}</span>
                </div>
              ))}
            </div>
          </section>

          {/* ── Process Control & Inspection ── */}
          <section id="control" className="border-b border-[#E8E4DC] bg-[#F5F3EE] py-16">
            <p className="mb-2 font-mono text-xs tracking-[0.2em] text-[#064d8f]">{NAV_LABELS.control[cl]}</p>
            <h2 className="mb-3 text-3xl font-bold text-black">{c.controlHeading}</h2>
            <p className="mb-8 max-w-2xl text-sm leading-relaxed text-[#767676]">{c.controlIntro}</p>

            <div className="mb-8 grid gap-px bg-[#E8E4DC] sm:grid-cols-2">
              {c.controlItems.map((item) => (
                <div key={item.title} className="bg-white p-5">
                  <div className="mb-3 h-0.5 w-6 bg-[#064d8f]" />
                  <h3 className="mb-2 text-sm font-bold text-black">{item.title}</h3>
                  <p className="mb-3 text-xs leading-relaxed text-[#767676]">{item.desc}</p>
                  <span className="font-mono text-xs text-[#767676]">{item.spec}</span>
                </div>
              ))}
            </div>

            {/* Standards as plain on-page text — buyer search + AI citation signal */}
            <div className="border-t border-[#E8E4DC] pt-8">
              <p className="mb-4 text-xs font-semibold tracking-[0.15em] text-[#767676]">
                {cl === 'zh' ? '製程標準與資格' : 'Standards & Qualification'}
              </p>
              <div className="flex flex-wrap gap-2.5">
                {c.controlStandards.map((std) => (
                  <span key={std} className="border border-[#064d8f]/30 bg-white px-3 py-1.5 font-mono text-xs text-[#064d8f]">
                    {std}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* ── Certifications & Quality ── */}
          <section id="certs" className="border-b border-[#E8E4DC] py-16">
            <p className="mb-2 font-mono text-xs tracking-[0.2em] text-[#064d8f]">{NAV_LABELS.certs[cl]}</p>
            <h2 className="mb-3 text-3xl font-bold text-black">{c.certHeading}</h2>
            <p className="mb-8 max-w-2xl text-sm leading-relaxed text-[#767676]">{c.certIntro}</p>
            <div className="space-y-0 border-t border-[#E8E4DC]">
              {c.certs.map((cert) => (
                <div key={cert.name} className="flex flex-col gap-2 border-b border-[#E8E4DC] py-5 sm:flex-row sm:items-baseline sm:gap-8">
                  <span className="w-48 shrink-0 font-mono text-sm font-semibold text-black">{cert.name}</span>
                  <p className="text-sm leading-relaxed text-[#767676]">{cert.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── Documentary Visuals ── */}
          <section id="visuals" className="border-b border-[#E8E4DC] bg-[#F5F3EE] py-16">
            <p className="mb-2 font-mono text-xs tracking-[0.2em] text-[#064d8f]">{NAV_LABELS.visuals[cl]}</p>
            <h2 className="mb-3 text-3xl font-bold text-black">{c.visualsHeading}</h2>
            <p className="mb-8 max-w-2xl text-sm leading-relaxed text-[#767676]">{c.visualsIntro}</p>
            <div className="grid gap-px bg-[#E8E4DC] sm:grid-cols-3">
              {c.visuals.map((v, i) => (
                <figure key={v.title} className="bg-white">
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#1A1A1A]">
                    <Image
                      src={HERO_IMG[slug]}
                      alt={v.title}
                      fill
                      className="object-cover opacity-90"
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                    <span className="absolute left-3 top-3 font-mono text-[10px] tracking-[0.2em] text-white/70">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <figcaption className="p-5">
                    <h3 className="mb-1.5 text-sm font-bold text-black">{v.title}</h3>
                    <p className="text-xs leading-relaxed text-[#767676]">{v.desc}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>

          {/* ── Related products (cross-reference) ── */}
          <section className="border-b border-[#E8E4DC] py-16">
            <p className="mb-2 font-mono text-xs tracking-[0.2em] text-[#064d8f]">
              {cl === 'zh' ? '對應產品' : 'Related Products'}
            </p>
            <h2 className="mb-3 text-3xl font-bold text-black">{c.relatedHeading}</h2>
            <p className="mb-8 max-w-2xl text-sm leading-relaxed text-[#767676]">{c.relatedIntro}</p>
            <div className="grid gap-px bg-[#E8E4DC] sm:grid-cols-2">
              {c.related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/products/${r.slug}`}
                  className="group flex items-center justify-between gap-4 bg-white p-6 transition-colors hover:bg-[#F5F3EE]"
                >
                  <span className="text-base font-bold text-black">{r.label}</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 text-[#064d8f] transition-transform duration-200 group-hover:translate-x-1">
                    <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              ))}
            </div>
          </section>

          {/* ── CTA ── */}
          <section className="bg-[#1A1A1A] py-16">
            <div className="max-w-2xl">
              <p className="mb-3 font-mono text-xs tracking-[0.2em] text-[#064d8f]">
                {cl === 'zh' ? '與我們合作' : 'PARTNER WITH US'}
              </p>
              <h2 className="mb-3 text-3xl font-bold text-white">{c.ctaHeading}</h2>
              <p className="mb-8 text-sm leading-relaxed text-[#767676]">{c.ctaSub}</p>
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <button
                  onClick={openModal}
                  className="inline-flex items-center justify-center gap-2 border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white hover:text-[#1A1A1A]"
                >
                  {c.ctaBtn1}
                </button>
                <button
                  onClick={openModal}
                  className="inline-flex items-center justify-center gap-2 border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white"
                >
                  {c.ctaBtn2}
                </button>
                <button
                  onClick={openModal}
                  className="inline-flex items-center justify-center gap-2 border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white"
                >
                  {c.ctaBtn3}
                </button>
              </div>
            </div>
          </section>

        </div>
      </div>

      <Footer />
    </>
  );
}
