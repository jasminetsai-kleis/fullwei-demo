'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { posts, CATEGORIES, CATEGORY_COLORS, type CategoryId } from '@/data/posts';
import t from '@/i18n/translations';

const PER_PAGE = 6;

function formatDate(iso: string, lang: string) {
  const d = new Date(iso);
  if (lang === 'zh') return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`;
  if (lang === 'ja') return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

export default function BlogContent() {
  const { lang } = useLanguage();
  const b = t[lang].blog;
  const [active, setActive] = useState<CategoryId | 'all'>('all');
  const [page, setPage] = useState(1);

  const filtered = active === 'all' ? posts : posts.filter((p) => p.category === active);
  const visible = filtered.slice(0, page * PER_PAGE);
  const hasMore = visible.length < filtered.length;

  function selectCategory(id: CategoryId | 'all') {
    setActive(id);
    setPage(1);
  }

  function getCategoryLabel(id: CategoryId) {
    const cat = CATEGORIES.find((c) => c.id === id);
    if (!cat) return id;
    return cat[lang as 'zh' | 'en' | 'vi' | 'ja'] ?? cat.zh;
  }

  return (
    <>
      {/* Hero */}
      <section className="border-b border-[#E8E4DC] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <p className="mb-4 font-mono text-xs tracking-[0.3em] text-[#064d8f]">{b.heroEyebrow}</p>
          <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight text-black lg:text-5xl">
            {b.heroTitle}
          </h1>
        </div>
      </section>

      {/* Filter */}
      <section className="sticky top-[72px] z-40 border-b border-[#E8E4DC] bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center gap-2 overflow-x-auto px-6 py-4 lg:px-12">
          <button
            onClick={() => selectCategory('all')}
            className={`shrink-0 border px-4 py-1.5 text-xs font-medium transition-colors ${
              active === 'all'
                ? 'border-[#064d8f] bg-[#064d8f] text-white'
                : 'border-[#E8E4DC] text-[#767676] hover:border-[#064d8f] hover:text-[#064d8f]'
            }`}
          >
            {b.allCategories}
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => selectCategory(cat.id)}
              className={`shrink-0 border px-4 py-1.5 text-xs font-medium transition-colors ${
                active === cat.id
                  ? 'border-[#064d8f] bg-[#064d8f] text-white'
                  : 'border-[#E8E4DC] text-[#767676] hover:border-[#064d8f] hover:text-[#064d8f]'
              }`}
            >
              {cat[lang as 'zh' | 'en' | 'vi' | 'ja'] ?? cat.zh}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-12 lg:py-20">
        <div className="grid gap-px bg-[#E8E4DC] sm:grid-cols-2">
          {visible.map((post) => (
            <article key={post.id} className="group bg-white transition-colors hover:bg-[#F8F6F2]">
              {/* Thumbnail */}
              <div className={`relative h-44 overflow-hidden ${CATEGORY_COLORS[post.category]}`}>
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                    backgroundSize: '18px 18px',
                  }}
                />
                <span className="absolute bottom-4 left-6 font-mono text-[10px] tracking-[0.25em] text-white/50 uppercase">
                  {getCategoryLabel(post.category)}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3 p-6">
                <span className="inline-block border border-[#E8E4DC] px-2.5 py-0.5 font-mono text-[10px] tracking-[0.15em] text-[#064d8f]">
                  {getCategoryLabel(post.category)}
                </span>
                <h2 className="text-base font-bold leading-snug text-black group-hover:text-[#064d8f] transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm leading-relaxed text-[#767676] line-clamp-2">{post.excerpt}</p>
                <div className="mt-2 flex items-center justify-between">
                  <time className="font-mono text-xs text-[#767676]/60">{formatDate(post.date, lang)}</time>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="font-mono text-xs text-[#064d8f] opacity-0 transition-opacity group-hover:opacity-100"
                    aria-label={`Read ${post.title}`}
                  >
                    →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load more */}
        {hasMore && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setPage((p) => p + 1)}
              className="border border-[#064d8f] px-8 py-3 text-sm font-medium text-[#064d8f] transition-all hover:bg-[#064d8f] hover:text-white"
            >
              {b.loadMore}
            </button>
          </div>
        )}

        {/* Empty state */}
        {visible.length === 0 && (
          <div className="py-24 text-center font-mono text-sm text-[#767676]/60">— 0 —</div>
        )}
      </section>
    </>
  );
}
