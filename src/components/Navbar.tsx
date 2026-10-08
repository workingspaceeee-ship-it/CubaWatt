import React, { useState, useEffect } from 'react';
import { Language, translations } from '../i18n/translations';
import { Menu, X, Globe, FileCode2 } from 'lucide-react';

interface NavbarProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenQuote: () => void;
  onOpenResCalc?: () => void;
  onOpenComCalc?: () => void;
  onOpenCompliance: () => void;
  onOpenHowItWorks: () => void;
  onOpenCode: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onLanguageChange,
  onOpenQuote,
  onOpenResCalc,
  onOpenComCalc,
  onOpenCompliance,
  onOpenHowItWorks,
  onOpenCode,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');
  const t = translations[lang];

  const navItems = [
    { id: 'home', label: t.nav.home },
    { id: 'about-us-page', label: t.nav.about },
    { id: 'services-page-section', label: t.nav.services },
    { id: 'how-it-works-page', label: t.nav.howItWorks },
    { id: 'residential-page-section', label: t.nav.residential },
    { id: 'commercial-solutions', label: t.nav.commercial },
    { id: 'us-regulatory-compliance-section', label: t.nav.compliance },
    { id: 'contact-us-section', label: t.nav.contact },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id)).filter(Boolean);
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 shadow-xs transition-colors duration-200 w-full overflow-hidden" style={{ background: '#FFFFFF', backdropFilter: 'none' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', padding: '0 24px', width: '100%', boxSizing: 'border-box', height: '80px', background: '#FFFFFF' }}>
        
        {/* Left: Logo */}
        <div className="flex items-center justify-start">
          <a href="#home" onClick={() => setActiveSection('home')} className="flex items-center group select-none shrink-0 py-1 bg-white" style={{ background: '#FFFFFF', boxShadow: 'none' }}>
            <img
              src="/logo.jpeg"
              alt="CubaWatt Logo"
              style={{
                height: '60px',
                width: 'auto',
                objectFit: 'contain',
                filter: 'contrast(105%) brightness(102%)',
                mixBlendMode: 'multiply',
                backgroundColor: '#FFFFFF',
              }}
              className="block"
            />
          </a>
        </div>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center justify-center text-[13px] font-medium text-[#1E293B] whitespace-nowrap" style={{ gap: '2rem' }}>
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setActiveSection(item.id)}
                className={`py-2 transition-colors cursor-pointer ${
                  isActive
                    ? 'border-b-2 border-blue-900 font-semibold text-[#0E336A]'
                    : 'text-gray-700 hover:text-[#0E336A]'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right: Action & Language Switcher */}
        <div className="hidden xl:flex items-center justify-end space-x-3 shrink-0">
          {/* Language Switcher Pill (EN | ES) */}
          <div
            className="hidden xl:flex items-center bg-slate-100 p-1 rounded-full border border-slate-200 text-xs font-semibold shadow-inner"
            role="group"
            aria-label="Language selector"
          >
            <button
              onClick={() => onLanguageChange('en')}
              className={`px-3 py-1 rounded-full transition-all flex items-center gap-1.5 cursor-pointer ${
                lang === 'en'
                  ? 'bg-[#0E336A] text-white font-bold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
              title="Switch to English"
              aria-label="Switch to English"
              aria-pressed={lang === 'en'}
            >
              <Globe className="w-3 h-3" />
              <span>EN</span>
            </button>
            <button
              onClick={() => onLanguageChange('es')}
              className={`px-3 py-1 rounded-full transition-all flex items-center gap-1.5 cursor-pointer ${
                lang === 'es'
                  ? 'bg-[#0E336A] text-white font-bold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
              title="Cambiar a Español"
              aria-label="Cambiar a Español"
              aria-pressed={lang === 'es'}
            >
              <Globe className="w-3 h-3" />
              <span>ES</span>
            </button>
          </div>

          {/* CTA Get a Quote Button */}
          <button
            onClick={onOpenQuote}
            className="bg-[#E52535] hover:bg-[#C91A2A] text-white text-sm font-bold px-4 lg:px-5 py-2.5 rounded-md transition-all shadow-sm hover:shadow-md flex items-center gap-1.5 active:scale-95 cursor-pointer"
            data-i18n="common.getQuote"
          >
            <span>{t.common.getQuote}</span>
          </button>
        </div>

        {/* Mobile Menu Toggle & Mobile Lang Switcher */}
        <div className="flex items-center gap-3 xl:hidden ml-auto">
          {/* Mobile Lang Selector Pill */}
          <div
            className="flex items-center bg-slate-100 p-1 rounded-full border border-slate-200 text-xs font-semibold shadow-inner"
            role="group"
            aria-label="Mobile language selector"
          >
            <button
              onClick={() => onLanguageChange('en')}
              className={`px-3 py-1 rounded-full transition-all flex items-center gap-1.5 cursor-pointer ${
                lang === 'en'
                  ? 'bg-[#0E336A] text-white font-bold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
              title="Switch to English"
              aria-label="Switch to English"
              aria-pressed={lang === 'en'}
            >
              <Globe className="w-3 h-3" />
              <span>EN</span>
            </button>
            <button
              onClick={() => onLanguageChange('es')}
              className={`px-3 py-1 rounded-full transition-all flex items-center gap-1.5 cursor-pointer ${
                lang === 'es'
                  ? 'bg-[#0E336A] text-white font-bold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
              title="Cambiar a Español"
              aria-label="Cambiar a Español"
              aria-pressed={lang === 'es'}
            >
              <Globe className="w-3 h-3" />
              <span>ES</span>
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg focus:outline-hidden cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-1 gap-1 text-base font-medium text-slate-700">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => {
                  setActiveSection(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`px-3 py-2 rounded-lg transition-colors ${
                  activeSection === item.id ? 'bg-blue-50 text-[#0E336A] font-semibold' : 'hover:bg-slate-50 text-slate-700'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenQuote(); }}
              className="w-full bg-[#E52535] text-white font-bold py-3 rounded-lg text-center shadow-sm"
            >
              {t.common.getQuote}
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenCode(); }}
              className="w-full border border-slate-300 text-slate-700 font-medium py-2.5 rounded-lg text-xs flex items-center justify-center gap-1.5"
            >
              <FileCode2 className="w-4 h-4" />
              <span>Standalone Source Code</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
