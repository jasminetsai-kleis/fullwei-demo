'use client';

import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import t from '@/i18n/translations';

export default function Hero() {
  const { lang } = useLanguage();
  const h = t[lang].hero;

  return (
    <section className="relative mt-[72px] flex min-h-[calc(100vh-72px)] flex-col overflow-hidden">
      {/* Hero background image */}
      <Image
        src="/home - hero banner - 1.png"
        alt=""
        fill
        priority
        className="object-cover object-center"
      />
      {/* Dark scrim — boosts contrast without hiding the photo */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/65 via-black/40 to-transparent" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col px-6 lg:px-12">
        <div className="flex flex-col justify-center py-20 lg:py-16 lg:max-w-2xl">
          {/* Eyebrow */}
          <div className="animate-fade-up mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-[#C8102E]" />
            <span className="font-mono text-xs tracking-[0.2em] text-white/70">{h.eyebrow}</span>
          </div>

          {/* Headline */}
          <h1 className="animate-fade-up-delay-1 mb-6 text-4xl font-bold leading-[1.05] tracking-tight text-white lg:text-5xl xl:text-6xl">
            {h.h1.map((line, i) =>
              i === h.accentLine ? (
                <span key={i}>
                  <span className="text-[#C8102E]">{line}</span>
                  <br />
                </span>
              ) : (
                <span key={i}>
                  {line}
                  <br />
                </span>
              )
            )}
          </h1>

          {/* Sub */}
          <p className="animate-fade-up-delay-2 mb-10 max-w-md whitespace-pre-line text-base leading-relaxed text-white/70 lg:text-lg">
            {h.sub}
          </p>

          {/* CTAs */}
          <div className="animate-fade-up-delay-3 flex flex-col gap-4 sm:flex-row">
            <a
              href="#capabilities"
              className="inline-flex items-center justify-center gap-2 bg-white px-7 py-3.5 text-sm font-semibold tracking-wide text-[#064d8f] transition-colors duration-200 hover:bg-[#F5F3EE]"
            >
              {h.cta1}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 border border-white/50 px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:border-white hover:bg-white/10"
            >
              {h.cta2}
            </a>
          </div>
        </div>
      </div>

      {/* Stat strip */}
      <div className="relative border-t border-[#E8E4DC] bg-[#F5F3EE]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-[#E8E4DC] px-6 lg:grid-cols-4 lg:px-12">
          {h.stats.map((stat) => (
            <div key={stat.value} className="flex flex-col gap-0.5 px-6 py-6 first:pl-0">
              <span className="text-2xl font-bold text-black">{stat.value}</span>
              <span className="text-xs text-[#767676]">{stat.label}</span>
              <span className="text-xs text-[#767676]/60">{stat.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
