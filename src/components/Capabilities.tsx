'use client';

import { useLanguage } from '@/context/LanguageContext';
import t from '@/i18n/translations';

export default function Capabilities() {
  const { lang } = useLanguage();
  const c = t[lang].capabilities;

  return (
    <section id="capabilities" className="bg-[#F5F3EE] py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-16 flex items-end justify-between">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-[#064d8f]" />
              <span className="font-mono text-xs tracking-[0.2em] text-[#064d8f]">{c.eyebrow}</span>
            </div>
            <h2 className="text-4xl font-bold text-black lg:text-5xl">{c.heading}</h2>
          </div>
          <p className="hidden max-w-xs whitespace-pre-line text-right text-sm leading-relaxed text-[#767676] lg:block">
            {c.subtitle}
          </p>
        </div>

        <div className="grid gap-px bg-[#E8E4DC] lg:grid-cols-3">
          {c.items.map((cap) => (
            <div
              key={cap.num}
              className="group relative flex flex-col bg-white p-8 transition-colors duration-300 hover:bg-[#F5F3EE]"
            >
              <div className="absolute left-0 top-0 h-full w-0 bg-[#064d8f] transition-all duration-300 group-hover:w-0.5" />

              <span className="mb-6 font-mono text-xs text-[#767676]/40">{cap.num}</span>

              <div className="mb-6 h-12 w-12">
                <svg viewBox="0 0 48 48" fill="none">
                  <rect x="4" y="4" width="40" height="40" stroke="#E8E4DC" strokeWidth="0.5" />
                  <circle cx="24" cy="24" r="12" stroke="#064d8f" strokeWidth="1" opacity="0.5" />
                  <line x1="24" y1="4" x2="24" y2="44" stroke="#E8E4DC" strokeWidth="0.5" />
                  <line x1="4" y1="24" x2="44" y2="24" stroke="#E8E4DC" strokeWidth="0.5" />
                  <circle cx="24" cy="24" r="2" fill="#064d8f" />
                </svg>
              </div>

              <h3 className={`text-xl font-bold text-black ${cap.subtitle ? 'mb-1' : 'mb-4'}`}>{cap.title}</h3>
              {cap.subtitle && <p className="mb-4 text-sm text-[#767676]">{cap.subtitle}</p>}
              <p className="mb-6 text-sm leading-relaxed text-[#767676]">{cap.desc}</p>

              <ul className="mt-auto space-y-2 border-t border-[#E8E4DC] pt-6">
                {cap.specs.map((s) => (
                  <li key={s} className="flex items-start gap-2 text-xs text-[#767676]">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#064d8f]" />
                    {s}
                  </li>
                ))}
              </ul>

              <a href="#" className="mt-6 flex items-center gap-2 text-xs font-medium text-[#064d8f] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {c.learnMore}
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6H10M7 3L10 6L7 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
