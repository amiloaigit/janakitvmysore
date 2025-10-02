'use client';

import type { ReactNode } from 'react';
import { createContext, useState, useMemo } from 'react';
import { translations, type Language, type TranslationKey } from '@/lib/translations';

interface TranslationContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: TranslationKey) => string;
}

export const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export function TranslationProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: TranslationKey): string => {
    return translations[language][key] || translations['en'][key];
  };

  const contextValue = useMemo(() => ({
    language,
    setLanguage,
    t,
  }), [language]);

  return (
    <TranslationContext.Provider value={contextValue}>
      {children}
    </TranslationContext.Provider>
  );
}
