'use client';

import { useLanguage } from '@/context/LanguageContext';
import { companyProfile } from '@/data/company';

/**
 * Consolidated, machine-scannable company spec sheet.
 * Rendered as a semantic <dl> so AI agents and screen readers can parse
 * product range, markets, quality, warranty, samples, payment, and export
 * terms as discrete label/value pairs. Mirrored into Organization JSON-LD.
 */
export default function CompanyProfile({ id }: { id?: string }) {
  const { lang } = useLanguage();
  const c = companyProfile[lang];

  return (
    <section id={id} className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-14">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-[#064d8f]" />
            <span className="font-mono text-xs tracking-[0.2em] text-[#064d8f]">{c.eyebrow}</span>
          </div>
          <h2 className="text-3xl font-bold text-black lg:text-4xl">{c.heading}</h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#767676]">{c.intro}</p>
        </div>

        <dl className="border-t border-[#E8E4DC]">
          {c.rows.map((row) => (
            <div
              key={row.key}
              className="grid gap-2 border-b border-[#E8E4DC] py-6 lg:grid-cols-[260px_1fr] lg:gap-10"
            >
              <dt className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-[#064d8f] lg:pt-0.5">
                {row.label}
              </dt>
              <dd className="text-[15px] leading-relaxed text-black">{row.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
