'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { posts, CATEGORIES, type CategoryId, type Post } from '@/data/posts';
import {
  getTocH2s,
  localizeContent,
  LONG_ARTICLE_THRESHOLD,
  type Block,
  type PostFullContent,
  type RelatedLink,
} from '@/data/post-content';
import CoverImage from '@/components/CoverImage';

// Slugs that have full article content (others are listing-only and 404 on click).
const CONTENT_SLUGS = [
  'progressive-die-five-keys',
  'spcc-vs-spfh590-automotive',
  'iatf-16949-ppap-checklist',
  'ev-transition-metal-stamping',
  'tier1-exhaust-system-manufacturing-guide',
  'how-to-choose-exhaust-welding-manufacturer',
  'low-distortion-thin-wall-stainless-exhaust-welding',
];

function formatDate(iso: string, lang: string) {
  const d = new Date(iso);
  if (lang === 'zh') return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`;
  if (lang === 'ja') return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

function RenderBlock({ block }: { block: Block }) {
  switch (block.t) {
    case 'h2':
      return (
        <h2 id={block.id} className="mb-4 mt-12 scroll-mt-28 text-xl font-bold text-black first:mt-0">
          {block.text}
        </h2>
      );
    case 'h3':
      return <h3 className="mb-3 mt-8 text-base font-bold text-black">{block.text}</h3>;
    case 'p':
      return <p className="mb-4 text-sm leading-[1.85] text-[#3a3a3a]">{block.text}</p>;
    case 'ul':
      return (
        <ul className="mb-4 space-y-2">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed text-[#3a3a3a]">
              <span className="mt-[6px] h-1 w-1 shrink-0 rounded-full bg-[#064d8f]" />
              {item}
            </li>
          ))}
        </ul>
      );
    case 'ol':
      return (
        <ol className="mb-4 space-y-2">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed text-[#3a3a3a]">
              <span className="mt-[3px] shrink-0 font-mono text-xs text-[#064d8f]">
                {String(i + 1).padStart(2, '0')}
              </span>
              {item}
            </li>
          ))}
        </ol>
      );
    case 'callout':
      return (
        <aside className="my-6 border-l-2 border-[#064d8f] bg-[#F0F5FB] px-5 py-4">
          <p className="text-sm leading-relaxed text-[#1a3a5c]">{block.text}</p>
        </aside>
      );
  }
}

function RelatedLinkCard({ label, href, desc }: RelatedLink) {
  return (
    <Link
      href={href}
      className="group flex items-start gap-4 border border-[#E8E4DC] p-5 transition-colors hover:border-[#064d8f]"
    >
      <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center border border-[#E8E4DC] text-[#064d8f] transition-colors group-hover:border-[#064d8f] group-hover:bg-[#064d8f] group-hover:text-white">
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
          <path d="M2 5H8M5.5 2.5L8 5L5.5 7.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div>
        <p className="text-sm font-medium text-black">{label}</p>
        <p className="mt-0.5 text-xs text-[#767676]">{desc}</p>
      </div>
    </Link>
  );
}

export default function ArticleContent({ post, content }: { post: Post; content: PostFullContent }) {
  const { lang } = useLanguage();
  const isZh = lang === 'zh';

  const title = isZh ? post.title : post.titleEn;
  const excerpt = isZh ? post.excerpt : post.excerptEn;
  const { blocks, relatedLinks, faq } = localizeContent(content, lang);

  const toc = getTocH2s(blocks);
  const hasToc = toc.length >= LONG_ARTICLE_THRESHOLD;
  const dateStr = formatDate(post.date, lang);

  const categoryLabel = (id: CategoryId) => {
    const cat = CATEGORIES.find((c) => c.id === id);
    return cat ? cat[lang] : id;
  };

  const L = isZh
    ? { home: '首頁', toc: '本文目錄', faq: '常見問題', relatedPages: '相關頁面', recommended: '推薦閱讀', allArticles: '所有文章 →' }
    : { home: 'Home', toc: 'In This Article', faq: 'FAQ', relatedPages: 'Related Pages', recommended: 'Recommended Reading', allArticles: 'All Articles →' };

  const relatedPosts = [...(content.relatedSlugs ?? []), ...CONTENT_SLUGS]
    .filter((s, i, arr) => s !== post.slug && arr.indexOf(s) === i)
    .filter((s) => CONTENT_SLUGS.includes(s))
    .slice(0, 3)
    .map((s) => posts.find((p) => p.slug === s))
    .filter((p): p is Post => p !== undefined);

  return (
    <>
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header */}
        <header className="mx-auto max-w-[720px] pb-10 pt-16">
          <nav aria-label="breadcrumb" className="mb-10 flex items-center gap-2 font-mono text-xs text-[#767676]">
            <Link href="/" className="transition-colors hover:text-black">{L.home}</Link>
            <span>/</span>
            <Link href="/blog" className="transition-colors hover:text-black">Blog</Link>
            <span>/</span>
            <span className="text-[#3a3a3a]">{title}</span>
          </nav>
          <h1 className="mb-6 text-3xl font-bold leading-tight tracking-tight text-black lg:text-4xl">
            {title}
          </h1>
          <div className="mb-6 flex items-center gap-4">
            <span className="inline-block border border-[#E8E4DC] px-2.5 py-0.5 font-mono text-[10px] tracking-[0.15em] text-[#064d8f]">
              {categoryLabel(post.category)}
            </span>
            <time className="font-mono text-xs text-[#767676]">{dateStr}</time>
          </div>
          <p className="text-base leading-relaxed text-[#767676]">{excerpt}</p>
          <div className="mt-8 h-px bg-[#E8E4DC]" />
        </header>

        {/* Body */}
        {hasToc ? (
          <div className="flex gap-16 pb-16">
            <aside className="hidden w-[220px] shrink-0 lg:block">
              <nav aria-label={L.toc} className="sticky top-[calc(72px+2rem)]">
                <p className="mb-3 font-mono text-[10px] tracking-[0.25em] text-[#767676]">{L.toc}</p>
                <ul className="space-y-1 border-l border-[#E8E4DC]">
                  {toc.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="block py-1 pl-3 text-xs leading-snug text-[#767676] transition-colors hover:text-[#064d8f]"
                      >
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>
            <div className="min-w-0 max-w-[720px] flex-1">
              {blocks.map((block, i) => <RenderBlock key={i} block={block} />)}
            </div>
          </div>
        ) : (
          <div className="mx-auto max-w-[720px] pb-16">
            {blocks.map((block, i) => <RenderBlock key={i} block={block} />)}
          </div>
        )}

        {/* FAQ */}
        {faq && faq.length > 0 && (
          <section className="mx-auto max-w-[720px] border-t border-[#E8E4DC] py-12">
            <p className="mb-8 font-mono text-[10px] tracking-[0.25em] text-[#767676]">{L.faq}</p>
            <div className="space-y-8">
              {faq.map((item, i) => (
                <div key={i}>
                  <h3 className="mb-2 text-sm font-bold text-black">{item.q}</h3>
                  <p className="text-sm leading-relaxed text-[#767676]">{item.a}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Related internal links */}
        {relatedLinks.length > 0 && (
          <section className="mx-auto max-w-[720px] border-t border-[#E8E4DC] py-12">
            <p className="mb-5 font-mono text-[10px] tracking-[0.25em] text-[#767676]">{L.relatedPages}</p>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {relatedLinks.map((link) => (
                <RelatedLinkCard key={link.href} {...link} />
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <section className="border-t border-[#E8E4DC] py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="mb-8 flex items-center justify-between">
              <p className="font-mono text-[10px] tracking-[0.25em] text-[#767676]">{L.recommended}</p>
              <Link href="/blog" className="font-mono text-xs text-[#064d8f] transition-colors hover:text-black">
                {L.allArticles}
              </Link>
            </div>
            <div className="grid gap-px bg-[#E8E4DC] sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((p) => (
                <Link key={p.id} href={`/blog/${p.slug}`} className="group block border border-[#E8E4DC] bg-white transition-colors hover:bg-[#F8F6F2]">
                  <CoverImage slug={p.slug} category={p.category} heightClass="h-24" />
                  <div className="p-5">
                    <span className="font-mono text-[10px] text-[#064d8f]">{categoryLabel(p.category)}</span>
                    <h3 className="mt-2 line-clamp-2 text-sm font-bold leading-snug text-black transition-colors group-hover:text-[#064d8f]">
                      {isZh ? p.title : p.titleEn}
                    </h3>
                    <time className="mt-3 block font-mono text-xs text-[#767676]/60">{formatDate(p.date, lang)}</time>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
