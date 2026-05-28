'use client';

import { createContext, useContext, useState, useEffect, useCallback, useRef, ReactNode } from 'react';

export interface QuoteItem {
  slug: string;
  titleZh: string;
  titleEn: string;
  categoryZh: string;
  categoryEn: string;
  qty: number;
}

export interface ToastInfo {
  titleZh: string;
  titleEn: string;
}

interface QuoteContextType {
  items: QuoteItem[];
  addToQuote: (item: Omit<QuoteItem, 'qty'>) => void;
  removeFromQuote: (slug: string) => void;
  setQty: (slug: string, qty: number) => void;
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
  setQty: () => {},
  clearQuote: () => {},
  totalCount: 0,
  isModalOpen: false,
  openModal: () => {},
  closeModal: () => {},
  toast: null,
  dismissToast: () => {},
});

const STORAGE_KEY = 'fullwei_quote_v1';
const TOAST_MS = 4500;

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<QuoteItem[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toast, setToast] = useState<ToastInfo | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch {}
  }, []);

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(items)); } catch {}
  }, [items]);

  const addToQuote = useCallback((item: Omit<QuoteItem, 'qty'>) => {
    setItems(prev => {
      const idx = prev.findIndex(i => i.slug === item.slug);
      if (idx >= 0) {
        const next = [...prev];
        next[idx] = { ...next[idx], qty: next[idx].qty + 1 };
        return next;
      }
      return [...prev, { ...item, qty: 1 }];
    });
    if (timerRef.current) clearTimeout(timerRef.current);
    setToast({ titleZh: item.titleZh, titleEn: item.titleEn });
    timerRef.current = setTimeout(() => setToast(null), TOAST_MS);
  }, []);

  const removeFromQuote = useCallback((slug: string) => {
    setItems(prev => prev.filter(i => i.slug !== slug));
  }, []);

  const setQty = useCallback((slug: string, qty: number) => {
    if (qty < 1) {
      setItems(prev => prev.filter(i => i.slug !== slug));
    } else {
      setItems(prev => prev.map(i => i.slug === slug ? { ...i, qty } : i));
    }
  }, []);

  const clearQuote = useCallback(() => setItems([]), []);
  const openModal = useCallback(() => setIsModalOpen(true), []);
  const closeModal = useCallback(() => setIsModalOpen(false), []);
  const dismissToast = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setToast(null);
  }, []);

  const totalCount = items.reduce((s, i) => s + i.qty, 0);

  return (
    <QuoteCtx.Provider value={{
      items, addToQuote, removeFromQuote, setQty, clearQuote,
      totalCount, isModalOpen, openModal, closeModal,
      toast, dismissToast,
    }}>
      {children}
    </QuoteCtx.Provider>
  );
}

export function useQuote() {
  return useContext(QuoteCtx);
}
