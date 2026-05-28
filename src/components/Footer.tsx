'use client';

import { useLanguage } from '@/context/LanguageContext';
import t from '@/i18n/translations';

export default function Footer() {
  const { lang } = useLanguage();
  const f = t[lang].footer;

  return (
    <footer id="contact">
      {/* CTA band — deep blue */}
      <div className="bg-[#064d8f] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="mb-2 font-mono text-xs tracking-[0.2em] text-white/50">{f.eyebrow}</p>
              <h2 className="text-3xl font-bold text-white lg:text-4xl">{f.ctaHeading}</h2>
              <p className="mt-3 text-sm text-white/60">{f.ctaSub}</p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a href="#" className="inline-flex items-center justify-center gap-2 bg-white px-7 py-3.5 text-sm font-semibold text-[#064d8f] transition-colors hover:bg-white/90">
                {f.cta1}
              </a>
              <a href="#" className="inline-flex items-center justify-center gap-2 border border-white/35 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10">
                {f.cta2}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer nav — deep dark */}
      <div className="bg-[#1A1A1A] py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-4">
            <div className="lg:col-span-1">
              <p className="mb-1 text-xl font-bold tracking-[0.15em] text-white">
                FULL<span className="text-[#C8102E]">WEI</span>
              </p>
              <p className="mb-4 text-sm text-white/50">{f.brandSub}</p>
              <p className="whitespace-pre-line text-xs leading-relaxed text-white/30">{f.brandDesc}</p>
            </div>

            <div>
              <p className="mb-4 text-xs font-semibold tracking-[0.15em] text-white/50">{f.nav.products}</p>
              <ul className="space-y-2">
                {f.products.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-white/50 transition-colors hover:text-white">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-4 text-xs font-semibold tracking-[0.15em] text-white/50">{f.nav.company}</p>
              <ul className="space-y-2">
                {f.company.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-white/50 transition-colors hover:text-white">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-4 text-xs font-semibold tracking-[0.15em] text-white/50">{f.nav.contact}</p>
              <ul className="space-y-2 text-sm text-white/50">
                {f.locations.map((loc) => <li key={loc}>{loc}</li>)}
                <li className="pt-2">
                  <a href={`mailto:${f.email}`} className="text-[#C8102E] transition-colors hover:text-[#e0142e]">{f.email}</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/8 pt-8 sm:flex-row sm:items-center">
            <p className="text-xs text-white/25">{f.copyright}</p>
            <div className="flex gap-6">
              {f.certs.map((cert) => (
                <span key={cert} className="text-xs text-white/25">{cert}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
