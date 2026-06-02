import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogContent from '@/components/BlogContent';
import { posts, CATEGORIES } from '@/data/posts';

export const metadata = {
  title: 'Engineering Notes | Blog — Fullwei Industrial',
  description:
    '來自富惟製造現場的技術筆記：製程技術、選型比較、採購標準、產業觀點。Technical insights from 60+ years of metal stamping and automotive manufacturing.',
};

const siteUrl = 'https://fullwei-demo.vercel.app';

function BlogJsonLd() {
  const blogLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Fullwei Engineering Notes',
    url: `${siteUrl}/blog`,
    description:
      'Technical notes and engineering insights from Fullwei Industrial — precision metal stamping, welding, and tube processing for the automotive industry.',
    publisher: {
      '@type': 'Organization',
      name: 'Fullwei Industrial Co., Ltd.',
      url: siteUrl,
    },
    blogPost: posts.map((p) => ({
      '@type': 'BlogPosting',
      headline: p.title,
      url: `${siteUrl}/blog/${p.slug}`,
      datePublished: p.date,
      description: p.excerpt,
      keywords: CATEGORIES.find((c) => c.id === p.category)?.en ?? p.category,
      author: {
        '@type': 'Organization',
        name: 'Fullwei Industrial Co., Ltd.',
      },
    })),
  };

  const listLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Fullwei Engineering Notes',
    url: `${siteUrl}/blog`,
    numberOfItems: posts.length,
    itemListElement: posts.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `${siteUrl}/blog/${p.slug}`,
      name: p.title,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(listLd) }}
      />
    </>
  );
}

export default function BlogPage() {
  return (
    <>
      <BlogJsonLd />
      <Navbar />
      <main className="pt-[72px]">
        <BlogContent />
      </main>
      <Footer />
    </>
  );
}
