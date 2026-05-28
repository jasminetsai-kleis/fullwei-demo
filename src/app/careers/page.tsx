import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CareersContent from '@/components/CareersContent';

export const metadata = {
  title: '加入我們 | Careers at Fullwei Industrial',
  description:
    'Join Fullwei Industrial — a 60-year precision manufacturer building a brand-new smart factory in Pingtung, Taiwan. Open positions in manufacturing engineering, quality, R&D, and smart manufacturing.',
};

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[72px]">
        <CareersContent />
      </main>
      <Footer />
    </>
  );
}
