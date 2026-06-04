// Server component — emits Organization structured data sitewide so AI agents
// and search crawlers can read Fullwei's company-level facts (founding,
// locations, markets, certifications, product offers) without rendering JS.
// Mirrors the human-facing CompanyProfile spec sheet (see data/company.ts).

const SITE = 'https://fullwei-demo.vercel.app';

const organizationLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE}/#organization`,
  name: 'Fullwei Industrial Co., Ltd.',
  alternateName: '富惟工業股份有限公司',
  url: SITE,
  logo: `${SITE}/favicon.ico`,
  foundingDate: '1964',
  foundingLocation: 'Sanchung, New Taipei, Taiwan',
  description:
    'Since 1964, Fullwei Industrial has provided precision metal stamping, welding, and tube processing for the world’s leading automotive brands. A Tier 1 Honda supplier serving two-wheel and four-wheel vehicle platforms.',
  email: 'sales@fullwei.com',
  knowsAbout: [
    'Precision metal stamping',
    'Welding assembly',
    'Tube processing',
    'Automotive exhaust system components',
    'Body structural parts',
    'IATF 16949',
    'PPAP',
  ],
  areaServed: [
    { '@type': 'Place', name: 'Japan' },
    { '@type': 'Place', name: 'Europe' },
    { '@type': 'Place', name: 'North America' },
    { '@type': 'Place', name: 'Southeast Asia' },
    { '@type': 'Place', name: 'Taiwan' },
    { '@type': 'Place', name: 'China' },
  ],
  hasCredential: [
    { '@type': 'EducationalOccupationalCredential', credentialCategory: 'certification', name: 'IATF 16949' },
    { '@type': 'EducationalOccupationalCredential', credentialCategory: 'certification', name: 'ISO 14001' },
    { '@type': 'EducationalOccupationalCredential', credentialCategory: 'certification', name: 'ISO 45001' },
  ],
  location: [
    {
      '@type': 'Place',
      name: 'Taoyuan Headquarters',
      address: { '@type': 'PostalAddress', addressLocality: 'Taoyuan', addressCountry: 'TW' },
    },
    {
      '@type': 'Place',
      name: 'Pingtung Smart Factory',
      address: { '@type': 'PostalAddress', addressLocality: 'Pingtung', addressCountry: 'TW' },
    },
    {
      '@type': 'Place',
      name: 'Foshan Joint-Venture Plant',
      address: { '@type': 'PostalAddress', addressLocality: 'Foshan', addressRegion: 'Guangdong', addressCountry: 'CN' },
    },
  ],
  makesOffer: [
    { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Precision metal stampings' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Welded assemblies' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Tube-processed parts' } },
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'sales',
    email: 'sales@fullwei.com',
    availableLanguage: ['zh-Hant', 'en', 'ja', 'vi'],
  },
};

export default function OrganizationJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
    />
  );
}
