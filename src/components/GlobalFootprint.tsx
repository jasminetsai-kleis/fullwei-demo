'use client';

import { useLanguage } from '@/context/LanguageContext';
import t from '@/i18n/translations';

export default function GlobalFootprint() {
  const { lang } = useLanguage();
  const f = t[lang].footprint;

  return (
    <section className="bg-[#F5F3EE] py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-16">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-[#064d8f]" />
            <span className="font-mono text-xs tracking-[0.2em] text-[#064d8f]">{f.eyebrow}</span>
          </div>
          <h2 className="text-4xl font-bold text-black lg:text-5xl">{f.heading}</h2>
        </div>

        <div className="grid gap-px bg-[#E8E4DC] lg:grid-cols-3">
          {f.locations.map((loc) => (
            <div key={loc.code} className="group bg-white p-8 transition-colors duration-300 hover:bg-[#F5F3EE]">
              <div className="mb-6 flex items-start justify-between">
                <span className="font-mono text-xs text-[#767676]">{loc.code}</span>
                <span className="font-mono text-xs text-[#767676]/60">{loc.coords}</span>
              </div>
              <div className="mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="10" r="4" stroke="#064d8f" strokeWidth="1.5" />
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="#064d8f" strokeWidth="1.5" fill="none" />
                </svg>
              </div>
              <h3 className="mb-1 text-2xl font-bold text-black">
                {loc.city}{loc.label}
              </h3>
              <p className="mb-4 text-sm text-[#767676]">{loc.country}</p>
              <span className="mb-4 inline-block border border-[#064d8f]/20 px-3 py-1 text-xs text-[#064d8f]">
                {loc.role}
              </span>
              <p className="mt-2 text-sm leading-relaxed text-[#767676]">{loc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
