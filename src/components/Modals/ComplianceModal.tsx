import React from 'react';
import { Language, translations } from '../../i18n/translations';
import { X, ShieldCheck, Scale, FileCheck, CheckCircle2 } from 'lucide-react';

interface ComplianceModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const ComplianceModal: React.FC<ComplianceModalProps> = ({
  isOpen,
  onClose,
  lang,
}) => {
  const t = translations[lang];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 my-8 overflow-hidden">
        
        {/* Header */}
        <div className="bg-[#0E336A] text-white p-6 sm:p-7 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
                    <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
            <ShieldCheck className="w-4 h-4" />
            <span>
              {lang === 'es'
                ? 'Cumplimiento Legal y Normativas'
                : 'Legal Compliance & Regulations'}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight" data-i18n="complianceModal.title">
            {t.complianceModal.title}
          </h3>
          <p className="text-slate-200 text-xs sm:text-sm mt-1 font-light" data-i18n="complianceModal.subtitle">
            {t.complianceModal.subtitle}
          </p>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto space-y-4">
          
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-slate-700 text-xs sm:text-sm leading-relaxed space-y-3">
            <p data-i18n="complianceModal.p1">{t.complianceModal.p1}</p>
            <p data-i18n="complianceModal.p2">{t.complianceModal.p2}</p>
            <p data-i18n="complianceModal.p3">{t.complianceModal.p3}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="p-3 bg-blue-50 border border-blue-100 rounded-xl flex items-start gap-2.5">
              <FileCheck className="w-5 h-5 text-[#0E336A] shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold text-[#0E336A] block">31 CFR § 515.582</span>
                <span className="text-[11px] text-slate-600">
                  {lang === 'es'
                    ? 'Autoriza transacciones que apoyan a emprendedores privados y cuentapropistas independientes en Cuba.'
                    : 'Authorizes transactions supporting independent private Cuban entrepreneurs and cuentapropistas.'}
                </span>
              </div>
            </div>

            <div className="p-3 bg-blue-50 border border-blue-100 rounded-xl flex items-start gap-2.5">
              <Scale className="w-5 h-5 text-[#0E336A] shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold text-[#0E336A] block">BIS EAR 15 CFR § 740.19</span>
                <span className="text-[11px] text-slate-600">
                  {lang === 'es'
                    ? 'Autorización de las Regulaciones de Administración de Exportaciones para hardware de energía limpia renovable.'
                    : 'Export Administration Regulations authorization for renewable clean energy hardware.'}
                </span>
              </div>
            </div>
          </div>

          <div className="pt-4 text-center">
            <button
              onClick={onClose}
              className="w-full sm:w-auto bg-[#0E336A] hover:bg-[#071d3d] text-white font-bold px-8 py-3 rounded-xl transition-all shadow-md text-sm cursor-pointer"
            >
              {t.complianceModal.close}
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
