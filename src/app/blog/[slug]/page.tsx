import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ArticleContent from '@/components/ArticleContent';
import { posts, CATEGORIES } from '@/data/posts';
import { getPostContent } from '@/data/post-content';

// ─── Static generation ────────────────────────────────────────────────────────

export function generateStaticParams() {
  return Object.keys({
    'progressive-die-five-keys':                          true,
    'spcc-vs-spfh590-automotive':                         true,
    'iatf-16949-ppap-checklist':                          true,
    'ev-transition-metal-stamping':                       true,
    'tier1-exhaust-system-manufacturing-guide':           true,
    'how-to-choose-exhaust-welding-manufacturer':         true,
    'low-distortion-thin-wall-stainless-exhaust-welding': true,
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

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const content = getPostContent(slug);
  if (!content) notFound();

  return (
    <>
      <PostJsonLd post={post} faq={content.faq} />
      <Navbar />
      <main className="pt-[72px]">
        <ArticleContent post={post} content={content} />
      </main>
      <Footer />
    </>
  );
}
