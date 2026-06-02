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
              className="group grid bg-[#F5F3EE] transition-colors duration-300 hover:bg-white lg:grid-cols-12"
            >
              {/* Text content */}
              <div className="grid items-center gap-6 p-8 lg:col-span-9 lg:grid-cols-9 lg:gap-10 lg:pr-10">
                <div className="hidden lg:col-span-1 lg:block">
                  <span className="font-mono text-xs text-[#767676]/40">{item.num}</span>
                </div>
                <div className="lg:col-span-3">
                  <span className="mb-1 font-mono text-xs text-[#767676]/40 lg:hidden">{item.num}</span>
                  <h3 className="mb-1 text-2xl font-bold text-black">{item.title}</h3>
                  {item.subtitle && <p className="text-sm text-[#767676]">{item.subtitle}</p>}
                </div>
                <div className="lg:col-span-5">
                  <p className="mb-3 text-sm leading-relaxed text-[#767676]">{item.desc}</p>
                  <p className="font-mono text-xs text-[#767676]/60">{item.process}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span key={tag} className="border border-[#E8E4DC] px-2.5 py-1 text-xs text-[#767676]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="flex items-center border-t border-[#E8E4DC] px-8 py-6 lg:col-span-3 lg:border-l lg:border-t-0 lg:px-10 lg:py-0">
                <Link
                  href={`/products/${PRODUCT_SLUGS[idx]}`}
                  className="group/cta flex w-full items-center justify-between gap-4 bg-[#064d8f] px-6 py-4 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#0a5fa8]"
                >
                  {p.viewDetails}
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 transition-transform duration-200 group-hover/cta:translate-x-1">
                    <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
