import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { posts, CATEGORIES, CATEGORY_COLORS, type CategoryId } from '@/data/posts';
import { getPostContent, getTocH2s, LONG_ARTICLE_THRESHOLD, type Block } from '@/data/post-content';

// ─── Static generation ────────────────────────────────────────────────────────

export function generateStaticParams() {
  return Object.keys({
    'progressive-die-five-keys':    true,
    'spcc-vs-spfh590-automotive':   true,
    'iatf-16949-ppap-checklist':    true,
    'ev-transition-metal-stamping': true,
  }).map((slug) => ({ slug }));
}

// ─── Metadata ────────────────────────────────────────────────────────────────

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  const catEn = CATEGORIES.find((c) => c.id === post.category)?.en ?? '';
  return {
    title: `${post.title} | Fullwei Engineering Notes`,
    description: post.excerpt,
    keywords: `${catEn}, metal stamping, automotive manufacturing, Fullwei Industrial`,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
    },
  };
}

// ─── JSON-LD ─────────────────────────────────────────────────────────────────

const SITE = 'https://fullwei-demo.vercel.app';

function PostJsonLd({ post, faq }: {
  post: (typeof posts)[number];
  faq?: { q: string; a: string }[];
}) {
  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    url: `${SITE}/blog/${post.slug}`,
    author: { '@type': 'Organization', name: 'Fullwei Industrial Co., Ltd.', url: SITE },
    publisher: {
      '@type': 'Organization',
      name: 'Fullwei Industrial Co., Ltd.',
      logo: { '@type': 'ImageObject', url: `${SITE}/favicon.ico` },
    },
    isPartOf: { '@type': 'Blog', name: 'Fullwei Engineering Notes', url: `${SITE}/blog` },
    keywords: CATEGORIES.find((c) => c.id === post.category)?.en,
    inLanguage: 'zh-TW',
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` },
      { '@type': 'ListItem', position: 3, name: post.title, item: `${SITE}/blog/${post.slug}` },
    ],
  };

  const faqLd = faq && faq.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  } : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      {faqLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />}
    </>
  );
}

// ─── Block renderer ───────────────────────────────────────────────────────────

function RenderBlock({ block }: { block: Block }) {
  switch (block.t) {
    case 'h2':
      return (
        <h2
          id={block.id}
          className="mb-4 mt-12 scroll-mt-28 text-xl font-bold text-black first:mt-0"
        >
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
              <span className="shrink-0 font-mono text-xs text-[#064d8f] mt-[3px]">
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

// ─── Subcomponents ────────────────────────────────────────────────────────────

function Breadcrumb({ post }: { post: (typeof posts)[number] }) {
  return (
    <nav aria-label="breadcrumb" className="mb-10 flex items-center gap-2 font-mono text-xs text-[#767676]">
      <Link href="/" className="transition-colors hover:text-black">首頁</Link>
      <span>/</span>
      <Link href="/blog" className="transition-colors hover:text-black">Blog</Link>
      <span>/</span>
      <span className="text-[#3a3a3a]">{post.title}</span>
    </nav>
  );
}

function CategoryTag({ categoryId }: { categoryId: CategoryId }) {
  const cat = CATEGORIES.find((c) => c.id === categoryId);
  return (
    <span className="inline-block border border-[#E8E4DC] px-2.5 py-0.5 font-mono text-[10px] tracking-[0.15em] text-[#064d8f]">
      {cat?.zh ?? categoryId}
    </span>
  );
}

function TocNav({ items }: { items: { id: string; text: string }[] }) {
  return (
    <nav aria-label="目錄" className="sticky top-[calc(72px+2rem)]">
      <p className="mb-3 font-mono text-[10px] tracking-[0.25em] text-[#767676]">本文目錄</p>
      <ul className="space-y-1 border-l border-[#E8E4DC]">
        {items.map((item) => (
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
  );
}

function RelatedLinkCard({ label, href, desc }: { label: string; href: string; desc: string }) {
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

function RelatedPostCard({ post }: { post: (typeof posts)[number] }) {
  const cat = CATEGORIES.find((c) => c.id === post.category);
  const d = new Date(post.date);
  const dateStr = `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`;
  return (
    <Link href={`/blog/${post.slug}`} className="group block border border-[#E8E4DC] bg-white transition-colors hover:bg-[#F8F6F2]">
      <div className={`h-24 ${CATEGORY_COLORS[post.category]} relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '18px 18px' }} />
      </div>
      <div className="p-5">
        <span className="font-mono text-[10px] text-[#064d8f]">{cat?.zh}</span>
        <h3 className="mt-2 text-sm font-bold leading-snug text-black group-hover:text-[#064d8f] transition-colors line-clamp-2">{post.title}</h3>
        <time className="mt-3 block font-mono text-xs text-[#767676]/60">{dateStr}</time>
      </div>
    </Link>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const content = getPostContent(slug);
  if (!content) notFound();

  const toc = getTocH2s(content.blocks);
  const hasToc = toc.length >= LONG_ARTICLE_THRESHOLD;

  const d = new Date(post.date);
  const dateStr = `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`;

  const CONTENT_SLUGS = [
    'progressive-die-five-keys',
    'spcc-vs-spfh590-automotive',
    'iatf-16949-ppap-checklist',
    'ev-transition-metal-stamping',
  ];
  const relatedPosts = CONTENT_SLUGS
    .filter((s) => s !== slug)
    .map((s) => posts.find((p) => p.slug === s))
    .filter((p): p is (typeof posts)[number] => p !== undefined);

  return (
    <>
      <PostJsonLd post={post} faq={content.faq} />
      <Navbar />
      <main className="pt-[72px]">
        {/* ── Article container ── */}
        <div className="mx-auto max-w-7xl px-6 lg:px-12">

          {/* ── Header (single column, max 720px) ── */}
          <header className="mx-auto max-w-[720px] pb-10 pt-16">
            <Breadcrumb post={post} />
            <h1 className="mb-6 text-3xl font-bold leading-tight tracking-tight text-black lg:text-4xl">
              {post.title}
            </h1>
            <div className="mb-6 flex items-center gap-4">
              <CategoryTag categoryId={post.category} />
              <time className="font-mono text-xs text-[#767676]">{dateStr}</time>
            </div>
            <p className="text-base leading-relaxed text-[#767676]">{post.excerpt}</p>
            <div className="mt-8 h-px bg-[#E8E4DC]" />
          </header>

          {/* ── Body: TOC sidebar + prose ── */}
          {hasToc ? (
            <div className="flex gap-16 pb-16">
              <aside className="hidden w-[220px] shrink-0 lg:block">
                <TocNav items={toc} />
              </aside>
              <div className="min-w-0 max-w-[720px] flex-1">
                {content.blocks.map((block, i) => <RenderBlock key={i} block={block} />)}
              </div>
            </div>
          ) : (
            <div className="mx-auto max-w-[720px] pb-16">
              {content.blocks.map((block, i) => <RenderBlock key={i} block={block} />)}
            </div>
          )}

          {/* ── FAQ ── */}
          {content.faq && content.faq.length > 0 && (
            <section className="mx-auto max-w-[720px] border-t border-[#E8E4DC] py-12">
              <p className="mb-8 font-mono text-[10px] tracking-[0.25em] text-[#767676]">常見問題</p>
              <div className="space-y-8">
                {content.faq.map((item, i) => (
                  <div key={i}>
                    <h3 className="mb-2 text-sm font-bold text-black">{item.q}</h3>
                    <p className="text-sm leading-relaxed text-[#767676]">{item.a}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* ── Related internal links ── */}
          {content.relatedLinks.length > 0 && (
            <section className="mx-auto max-w-[720px] border-t border-[#E8E4DC] py-12">
              <p className="mb-5 font-mono text-[10px] tracking-[0.25em] text-[#767676]">相關頁面</p>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {content.relatedLinks.map((link) => (
                  <RelatedLinkCard key={link.href} {...link} />
                ))}
              </div>
            </section>
          )}
        </div>

        {/* ── Related posts ── */}
        {relatedPosts.length > 0 && (
          <section className="border-t border-[#E8E4DC] py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
              <div className="mb-8 flex items-center justify-between">
                <p className="font-mono text-[10px] tracking-[0.25em] text-[#767676]">推薦閱讀</p>
                <Link href="/blog" className="font-mono text-xs text-[#064d8f] transition-colors hover:text-black">
                  所有文章 →
                </Link>
              </div>
              <div className="grid gap-px bg-[#E8E4DC] sm:grid-cols-2 lg:grid-cols-3">
                {relatedPosts.map((p) => <RelatedPostCard key={p.id} post={p} />)}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
