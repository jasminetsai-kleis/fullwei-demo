import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutContent from '@/components/AboutContent';

export const metadata = {
  title: '關於富惟 | About Fullwei Industrial',
  description:
    "Since 1964, Fullwei Industrial has built precision metal components for the world's most demanding automotive brands. Learn our story, values, and partnerships.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[72px]">
        <AboutContent />
      </main>
      <Footer />
    </>
  );
}
