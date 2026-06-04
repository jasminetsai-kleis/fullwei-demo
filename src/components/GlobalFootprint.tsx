'use client';

import { useLanguage } from '@/context/LanguageContext';
import t from '@/i18n/translations';
import FootprintMap from '@/components/FootprintMap';

export default function GlobalFootprint() {
  const { lang } = useLanguage();
  const f = t[lang].footprint;

  return (
    <section className="bg-[#F5F3EE] py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-12 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-[#064d8f]" />
              <span className="font-mono text-xs tracking-[0.2em] text-[#064d8f]">{f.eyebrow}</span>
            </div>
            <h2 className="text-4xl font-bold text-black lg:text-5xl">{f.heading}</h2>
            <p className="mt-5 text-base leading-relaxed text-[#767676]">{f.intro}</p>
          </div>
          <a
            href="/about#group"
            className="group inline-flex shrink-0 items-center gap-2 self-start border border-[#064d8f] px-5 py-2.5 text-xs font-medium text-[#064d8f] transition-all duration-200 hover:bg-[#064d8f] hover:text-white"
          >
            {f.exploreGroup}
            <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
          </a>
        </div>

        <FootprintMap />
      </div>
    </section>
  );
}
