'use client';

import { LanguageProvider } from '@/context/LanguageContext';
import { QuoteProvider } from '@/context/QuoteContext';
import QuoteModal from '@/components/QuoteModal';
import QuoteToast from '@/components/QuoteToast';
import { ReactNode } from 'react';

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <QuoteProvider>
        {children}
        <QuoteModal />
        <QuoteToast />
      </QuoteProvider>
    </LanguageProvider>
  );
}
