import type { Metadata } from 'next';
import VnNavbar from '@/components/VnNavbar';
import VnHero from '@/components/VnHero';

export const metadata: Metadata = {
  title: '越南富惟 Fullwei Vietnam | Linh kiện kim loại xe máy & ô tô',
  description:
    'Fullwei Vietnam — motorcycle and automotive metal components manufactured in Bắc Ninh and Đà Nẵng, part of the Taiwan–Vietnam Fullwei Group.',
};

export default function VnHome() {
  return (
    <>
      <VnNavbar />
      <main>
        <VnHero />
      </main>
    </>
  );
}
