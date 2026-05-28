'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import t from '@/i18n/translations';

const PRODUCT_SLUGS = ['exhaust-systems', 'motorcycle-frame', 'automotive-brackets'];

export default function ProductPillars() {
  const { lang } = useLanguage();
  const p = t[lang].products;

  return (
    <section id="products" className="bg-white py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-16">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-[#064d8f]" />
            <span className="font-mono text-xs tracking-[0.2em] text-[#064d8f]">{p.eyebrow}</span>
          </div>
          <h2 className="text-4xl font-bold text-black lg:text-5xl">{p.heading}</h2>
        </div>

        <div className="space-y-px bg-[#E8E4DC]">
          {p.items.map((item, idx) => (
            <div
              key={item.num}
              className="group grid bg-[#F5F3EE] p-8 transition-colors duration-300 hover:bg-white lg:grid-cols-12 lg:gap-12"
            >
              <div className="mb-4 lg:col-span-1 lg:mb-0">
                <span className="font-mono text-xs text-[#767676]/40">{item.num}</span>
              </div>
              <div className="mb-6 lg:col-span-3 lg:mb-0">
                <h3 className="mb-1 text-2xl font-bold text-black">{item.title}</h3>
                {item.subtitle && <p className="text-sm text-[#767676]">{item.subtitle}</p>}
              </div>
              <div className="mb-6 lg:col-span-5 lg:mb-0">
                <p className="mb-4 text-sm leading-relaxed text-[#767676]">{item.desc}</p>
                <p className="font-mono text-xs text-[#767676]">{item.process}</p>
              </div>
              <div className="flex flex-col gap-4 lg:col-span-3 lg:items-end">
                <div className="flex flex-wrap gap-2 lg:justify-end">
                  {item.tags.map((tag) => (
                    <span key={tag} className="border border-[#E8E4DC] px-2.5 py-1 text-xs text-[#767676]">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link href={`/products/${PRODUCT_SLUGS[idx]}`} className="flex items-center gap-2 text-xs font-medium text-[#064d8f] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {p.viewDetails}
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6H10M7 3L10 6L7 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
