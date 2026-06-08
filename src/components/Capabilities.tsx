'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import t from '@/i18n/translations';

const CAPABILITY_SLUGS = ['metal-stamping', 'welding-assembly', 'tube-processing'];

export default function Capabilities() {
  const { lang } = useLanguage();
  const c = t[lang].capabilities;

  return (
    <section id="capabilities" className="bg-[#F5F3EE] py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        {/* Section header */}
        <div className="mb-24 flex items-end justify-between">
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

        {/* Process blocks */}
        <div>
          {c.items.map((cap, idx) => {
            const imageLeft = idx % 2 === 0;
            return (
              <div key={cap.num} className="border-t border-[#E8E4DC]">
                {/* Process index label */}
                <div className="flex items-center gap-4 py-6">
                  <span className="font-mono text-[10px] tracking-[0.3em] text-[#064d8f]">{cap.num}</span>
                  <span className="h-px flex-1 bg-[#E8E4DC]" />
                  {cap.subtitle && (
                    <span className="hidden font-mono text-[10px] tracking-[0.2em] text-[#767676]/60 lg:block">
                      {cap.subtitle.toUpperCase()}
                    </span>
                  )}
                </div>

                {/* Image + content */}
                <div className={`grid items-start gap-10 pb-20 lg:gap-16 lg:pb-24 ${imageLeft ? 'lg:grid-cols-[2fr_3fr]' : 'lg:grid-cols-[3fr_2fr]'}`}>
                  {/* Image */}
                  <div className={imageLeft ? '' : 'lg:order-2'}>
                    <Image
                      src={`/manuf-${idx + 1}.png`}
                      alt={cap.title}
                      width={800}
                      height={560}
                      className="w-full h-auto"
                      priority={idx === 0}
                    />
                  </div>

                  {/* Text */}
                  <div className={`flex flex-col justify-center ${imageLeft ? '' : 'lg:order-1'}`}>
                    <h3 className="mb-5 text-4xl font-bold leading-tight tracking-tight text-black lg:text-5xl">
                      {cap.title}
                    </h3>
                    <p className="mb-8 text-sm leading-relaxed text-[#767676]">{cap.desc}</p>

                    <ul className="mb-8 space-y-4 border-t border-[#E8E4DC] pt-8">
                      {cap.specs.map((s) => (
                        <li key={s} className="flex items-start gap-4 text-sm text-black">
                          <span className="mt-[9px] h-px w-5 shrink-0 bg-[#064d8f]" />
                          {s}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={`/capabilities/${CAPABILITY_SLUGS[idx]}`}
                      className="group/link mt-auto inline-flex items-center gap-2 self-start border-b border-[#064d8f] pb-px text-xs font-semibold tracking-wide text-[#064d8f] transition-colors hover:text-[#0a5fa8]"
                    >
                      {c.learnMore}
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="transition-transform group-hover/link:translate-x-0.5">
                        <path d="M2 6H10M7 3L10 6L7 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="border-t border-[#E8E4DC]" />
        </div>

      </div>
    </section>
  );
}
