import React, { createContext, useContext, useState, useEffect, useMemo, ReactNode } from 'react';
import { Language, Translations, translations, spanishTranslationsMap, hindiTranslationsMap } from './translations';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translations;
  supportedLanguages: Array<{ code: Language; label: string; nativeName: string }>;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'user_selected_language';

export const SUPPORTED_LANGUAGES: Array<{ code: Language; label: string; nativeName: string }> = [
  { code: 'en', label: 'EN', nativeName: 'English' },
  { code: 'es', label: 'ES', nativeName: 'Español' },
  { code: 'hi', label: 'HI', nativeName: 'हिन्दी' },
];

export const getInitialLanguage = (): Language => {
  if (typeof window === 'undefined') return 'en';

  // 1. Check saved user preference in localStorage
  try {
    const saved = localStorage.getItem(STORAGE_KEY) || localStorage.getItem('preferred_language');
    if (saved === 'en' || saved === 'es' || saved === 'hi') {
      return saved as Language;
    }
  } catch (err) {
    console.warn('Unable to read language from localStorage:', err);
  }

  // 2. Detect browser language
  try {
    const browserLang = (navigator.language || (navigator as any).userLanguage || '').toLowerCase().split('-')[0];
    if (browserLang === 'es') return 'es';
    if (browserLang === 'hi') return 'hi';
  } catch (err) {
    console.warn('Unable to detect browser language:', err);
  }

  // 3. Fallback default to 'en'
  return 'en';
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [lang, setLangState] = useState<Language>(getInitialLanguage);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem(STORAGE_KEY, newLang);
      localStorage.setItem('preferred_language', newLang);
    } catch (err) {
      console.warn('Unable to save language to localStorage:', err);
    }
  };

  // Sync HTML lang attribute, document title, and SEO meta tags dynamically
  useEffect(() => {
    if (typeof document === 'undefined') return;

    // Update <html lang="...">
    document.documentElement.lang = lang;

    // Update document title and description
    const currentTranslation = translations[lang] || translations.en;
    if (currentTranslation.seo) {
      document.title = currentTranslation.seo.pageTitle;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', currentTranslation.seo.metaDescription);
      }
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) {
        ogTitle.setAttribute('content', currentTranslation.seo.pageTitle);
      }
      const ogDescription = document.querySelector('meta[property="og:description"]');
      if (ogDescription) {
        ogDescription.setAttribute('content', currentTranslation.seo.metaDescription);
      }
    } else {
      document.title = `${currentTranslation.nav.home} | CubaWatt™ - ${currentTranslation.nav.brandSubtext}`;
    }

    const activeMap = lang === 'es' ? spanishTranslationsMap : lang === 'hi' ? hindiTranslationsMap : null;

    if (activeMap) {
      const translateNode = (node: Node) => {
        if (node.nodeType === Node.TEXT_NODE) {
          const text = node.textContent?.trim();
          if (text && activeMap[text]) {
            node.textContent = activeMap[text];
          }
        } else {
          node.childNodes.forEach(translateNode);
        }
      };
      translateNode(document.body);

      const observer = new MutationObserver((mutations) => {
        mutations.forEach((m) => {
          m.addedNodes.forEach((node) => {
            translateNode(node);
          });
        });
      });
      observer.observe(document.body, { childList: true, subtree: true });
      return () => observer.disconnect();
    }
  }, [lang]);

  const value = useMemo(() => {
    const t = translations[lang] || translations.en;
    return {
      lang,
      setLang,
      t,
      supportedLanguages: SUPPORTED_LANGUAGES,
    };
  }, [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useTranslation = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    // Graceful fallback if used outside Provider
    const fallbackLang = getInitialLanguage();
    return {
      lang: fallbackLang,
      setLang: () => {},
      t: translations[fallbackLang] || translations.en,
      supportedLanguages: SUPPORTED_LANGUAGES,
    };
  }
  return context;
};

// Aliases for developer convenience
export const useLanguage = useTranslation;
export const useI18n = useTranslation;

export { t, spanishTranslationsMap, hindiTranslationsMap } from './translations';
