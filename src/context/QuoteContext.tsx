'use client';

import { createContext, useContext, useState, useEffect, useCallback, useRef, ReactNode } from 'react';

export interface QuoteItem {
  slug: string;
  titleZh: string;
  titleEn: string;
  categoryZh: string;
  categoryEn: string;
}

export interface ToastInfo {
  titleZh: string;
  titleEn: string;
}

interface QuoteContextType {
  items: QuoteItem[];
  addToQuote: (item: QuoteItem) => void;
  removeFromQuote: (slug: string) => void;
  clearQuote: () => void;
  totalCount: number;
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  toast: ToastInfo | null;
  dismissToast: () => void;
}

const QuoteCtx = createContext<QuoteContextType>({
  items: [],
  addToQuote: () => {},
  removeFromQuote: () => {},
  clearQuote: () => {},
  totalCount: 0,
  isModalOpen: false,
  openModal: () => {},
  closeModal: () => {},
  toast: null,
  dismissToast: () => {},
});

const STORAGE_KEY = 'fullwei_quote_v2';
const EXPIRY_MS = 7 * 24 * 60 * 60 * 1000;
const TOAST_MS = 4500;

interface StorageShape {
  items: QuoteItem[];
  savedAt: number;
}

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<QuoteItem[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toast, setToast] = useState<ToastInfo | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed: StorageShape = JSON.parse(raw);
        if (Date.now() - parsed.savedAt < EXPIRY_MS) {
          setItems(parsed.items);
        } else {
          localStorage.removeItem(STORAGE_KEY);
        }
      }
    } catch {}
  }, []);

  useEffect(() => {
    try {
      const data: StorageShape = { items, savedAt: Date.now() };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch {}
  }, [items]);

  const addToQuote = useCallback((item: QuoteItem) => {
    setItems(prev => {
      if (prev.some(i => i.slug === item.slug)) return prev;
      return [...prev, item];
    });
    if (timerRef.current) clearTimeout(timerRef.current);
    setToast({ titleZh: item.titleZh, titleEn: item.titleEn });
    timerRef.current = setTimeout(() => setToast(null), TOAST_MS);
  }, []);

  const removeFromQuote = useCallback((slug: string) => {
    setItems(prev => prev.filter(i => i.slug !== slug));
  }, []);

  const clearQuote = useCallback(() => setItems([]), []);
  const openModal = useCallback(() => setIsModalOpen(true), []);
  const closeModal = useCallback(() => setIsModalOpen(false), []);
  const dismissToast = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setToast(null);
  }, []);

  return (
    <QuoteCtx.Provider value={{
      items, addToQuote, removeFromQuote, clearQuote,
      totalCount: items.length,
      isModalOpen, openModal, closeModal,
      toast, dismissToast,
    }}>
      {children}
    </QuoteCtx.Provider>
  );
}

export function useQuote() {
  return useContext(QuoteCtx);
}
