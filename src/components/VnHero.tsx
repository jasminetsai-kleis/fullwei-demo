'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import type { Lang } from '@/i18n/translations';

type Stat = { value: string; label: string; sub: string };
type HeroContent = {
  eyebrow: string;
  h1lead: string;
  h1accent: string;
  sub: string;
  cta1: string;
  cta2: string;
  stats: Stat[];
};

const content: Record<Lang, HeroContent> = {
  zh: {
    eyebrow: 'FULLWEI VIETNAM · 北寧 · 峴港',
    h1lead: '機車與汽車金屬零組件，',
    h1accent: '越南在地製造。',
    sub: '富惟集團越南據點，涵蓋北寧與峴港生產基地，以機車為主、兼做汽車，\n服務台越集團客戶與在地供應鏈。',
    cta1: '聯絡越南團隊',
    cta2: '← 回台灣富惟',
    stats: [
      { value: '2', label: '生產基地', sub: '北寧 · 峴港' },
      { value: '3+', label: '越南子公司', sub: '富惟越南 · 富順全 · 富順風' },
      { value: '機車為主', label: '產品主軸', sub: '兼做汽車' },
      { value: '台越集團', label: '母子公司', sub: 'TW · VN' },
    ],
  },
  en: {
    eyebrow: 'FULLWEI VIETNAM · BẮC NINH · ĐÀ NẴNG',
    h1lead: 'Motorcycle & automotive metal components,',
    h1accent: 'made in Vietnam.',
    sub: "The Fullwei Group's Vietnam operations span plants in Bắc Ninh and Đà Nẵng —\nmotorcycle-led while also serving automotive, for the Taiwan–Vietnam group and local supply chains.",
    cta1: 'Contact Vietnam Team',
    cta2: '← Back to Fullwei Taiwan',
    stats: [
      { value: '2', label: 'Production bases', sub: 'Bắc Ninh · Đà Nẵng' },
      { value: '3+', label: 'Vietnam subsidiaries', sub: 'Fullwei VN · Fushunquan · Fushunfeng' },
      { value: 'Moto-led', label: 'Product focus', sub: 'also automotive' },
      { value: 'TW–VN', label: 'Parent–subsidiary group', sub: 'TW · VN' },
    ],
  },
  vi: {
    eyebrow: 'FULLWEI VIỆT NAM · BẮC NINH · ĐÀ NẴNG',
    h1lead: 'Linh kiện kim loại xe máy & ô tô,',
    h1accent: 'sản xuất tại Việt Nam.',
    sub: 'Hoạt động tại Việt Nam của Tập đoàn Fullwei gồm các nhà máy ở Bắc Ninh và Đà Nẵng —\nchủ lực xe máy đồng thời phục vụ ô tô, phục vụ tập đoàn Đài Loan–Việt Nam và chuỗi cung ứng nội địa.',
    cta1: 'Liên hệ đội ngũ Việt Nam',
    cta2: '← Về Fullwei Đài Loan',
    stats: [
      { value: '2', label: 'Cơ sở sản xuất', sub: 'Bắc Ninh · Đà Nẵng' },
      { value: '3+', label: 'Công ty con tại VN', sub: 'Fullwei VN · Phú Thuận Toàn · Phú Thuận Phong' },
      { value: 'Xe máy', label: 'Trọng tâm sản phẩm', sub: 'kèm ô tô' },
      { value: 'TW–VN', label: 'Tập đoàn mẹ–con', sub: 'TW · VN' },
    ],
  },
  ja: {
    eyebrow: 'FULLWEI VIETNAM · バクニン · ダナン',
    h1lead: '二輪・四輪の金属部品を、',
    h1accent: 'ベトナムで製造。',
    sub: '富惟グループのベトナム拠点はバクニンとダナンの工場を擁し、二輪を主体に四輪も手がけ、\n台越グループと現地サプライチェーンを支えます。',
    cta1: 'ベトナムチームへ連絡',
    cta2: '← 台湾富惟へ戻る',
    stats: [
      { value: '2', label: '生産拠点', sub: 'バクニン · ダナン' },
      { value: '3+', label: 'ベトナム子会社', sub: '富惟越南 · 富順全 · 富順風' },
      { value: '二輪主体', label: '製品の主軸', sub: '四輪も対応' },
      { value: '台越グループ', label: '親子会社', sub: 'TW · VN' },
    ],
  },
};

export default function VnHero() {
  const { lang } = useLanguage();
  const c = content[lang];

  return (
    <section id="contact" className="relative mt-[72px] flex min-h-[calc(100vh-72px)] flex-col overflow-hidden">
      {/* Hero background image */}
      <Image src="/page - banner - 1.png" alt="" fill priority className="object-cover object-center" />
      {/* Dark scrim */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/65 via-black/40 to-transparent" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col px-6 lg:px-12">
        <div className="flex flex-col justify-center py-20 lg:max-w-2xl lg:py-16">
          {/* Eyebrow */}
          <div className="animate-fade-up mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-[#C8102E]" />
            <span className="font-mono text-xs tracking-[0.2em] text-white/70">{c.eyebrow}</span>
          </div>

          {/* Headline */}
          <h1 className="animate-fade-up-delay-1 mb-6 text-4xl font-bold leading-[1.05] tracking-tight text-white lg:text-5xl xl:text-6xl">
            {c.h1lead}
            <br />
            <span className="text-[#C8102E]">{c.h1accent}</span>
          </h1>

          {/* Sub */}
          <p className="animate-fade-up-delay-2 mb-10 max-w-xl whitespace-pre-line text-base leading-relaxed text-white/70 lg:text-lg">
            {c.sub}
          </p>

          {/* CTAs */}
          <div className="animate-fade-up-delay-3 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-white px-7 py-3.5 text-sm font-semibold tracking-wide text-[#064d8f] transition-colors duration-200 hover:bg-[#F5F3EE]"
            >
              {c.cta1}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 border border-white/50 px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:border-white hover:bg-white/10"
            >
              {c.cta2}
            </Link>
          </div>
        </div>
      </div>

      {/* Stat strip */}
      <div className="relative border-t border-[#E8E4DC] bg-[#F5F3EE]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-[#E8E4DC] px-6 lg:grid-cols-4 lg:px-12">
          {c.stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-0.5 px-6 py-6 first:pl-0">
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
