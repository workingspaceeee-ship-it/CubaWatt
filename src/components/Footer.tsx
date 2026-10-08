import React from 'react';
import { Language, translations } from '../i18n/translations';
import { ShieldCheck, Mail, Phone, MapPin, Globe } from 'lucide-react';

interface FooterProps {
  lang: Language;
  onOpenQuote: () => void;
  onOpenResCalc?: () => void;
  onOpenComCalc?: () => void;
  onOpenCompliance: () => void;
  onOpenHowItWorks: () => void;
  onOpenCode: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  lang,
  onOpenQuote,
  onOpenResCalc,
  onOpenComCalc,
  onOpenCompliance,
  onOpenHowItWorks,
  onOpenCode,
}) => {
  const t = translations[lang];

  return (
    <footer className="bg-[#040f1f] text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          
          {/* Brand Info */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center bg-transparent">
              <img
                src="/logo.jpeg"
                alt="CubaWatt Logo"
                style={{ height: 'auto', maxHeight: '44px', objectFit: 'contain' }}
                className="w-auto block bg-transparent"
              />
            </div>
            <p className="text-slate-400 text-xs leading-relaxed" data-i18n="footer.tagline">
              {t.footer.tagline}
            </p>
            <div className="flex items-center gap-1.5 text-slate-400 text-[11px] pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>{t.nav.compliance}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3" data-i18n="footer.quickLinks">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="hover:text-white transition-colors" data-i18n="nav.home">
                  {t.nav.home}
                </a>
              </li>
              <li>
                <a href="#residential" className="hover:text-white transition-colors" data-i18n="nav.residential">
                  {t.nav.residential}
                </a>
              </li>
              <li>
                <a href="#commercial" className="hover:text-white transition-colors" data-i18n="nav.commercial">
                  {t.nav.commercial}
                </a>
              </li>
              <li>
                <button onClick={onOpenHowItWorks} className="hover:text-white transition-colors text-left" data-i18n="nav.services">
                  {t.nav.services}
                </button>
              </li>
              <li>
                <button onClick={onOpenQuote} className="hover:text-white transition-colors text-left" data-i18n="nav.contact">
                  {t.nav.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Solutions & Compliance */}
          <div className="space-y-2">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3">
              {t.footer.legal}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={onOpenHowItWorks} className="hover:text-white transition-colors text-left">
                  {t.common.howItWorks}
                </button>
              </li>
              <li>
                <button onClick={onOpenCompliance} className="hover:text-white transition-colors text-left" data-i18n="nav.compliance">
                  {t.nav.compliance}
                </button>
              </li>
              <li>
                <button onClick={onOpenQuote} className="hover:text-white transition-colors text-left">
                  {t.quoteModal.title}
                </button>
              </li>
              <li>
                <button onClick={onOpenCode} className="hover:text-white transition-colors text-left text-blue-400">
                  {t.nav.standaloneCode}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-2.5">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3" data-i18n="footer.contact">
              {t.footer.contact}
            </h4>
            <div className="flex items-center gap-2 text-slate-300">
              <Mail className="w-3.5 h-3.5 text-[#E52535]" />
              <span>support@cubawatt.com</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>+1 (800) 592-CUBA</span>
            </div>
            <div className="flex items-start gap-2 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
              <span>Miami, FL & Havana, Cuba</span>
            </div>
          </div>

        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <p className="max-w-2xl leading-relaxed" data-i18n="footer.disclaimer">
            {t.footer.disclaimer}
          </p>
          <p className="shrink-0 text-slate-400">
            © {new Date().getFullYear()} CubaWatt™. {t.footer.rights}
          </p>
        </div>

      </div>
    </footer>
  );
};
