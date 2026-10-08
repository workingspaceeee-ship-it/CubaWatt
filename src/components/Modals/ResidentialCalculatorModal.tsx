import React from 'react';
import { Language, translations } from '../../i18n/translations';
import { X, Sun } from 'lucide-react';
import { ResidentialCalculator } from '../Calculator/ResidentialCalculator';

interface ResidentialCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  onProceedToQuote: (calculatedData?: {
    dailyKwh: number;
    solarKw: number;
    batteryKwh: number;
    inverterKw: number;
    tier: string;
  }) => void;
}

export const ResidentialCalculatorModal: React.FC<ResidentialCalculatorModalProps> = ({
  isOpen,
  onClose,
  lang,
  onProceedToQuote,
}) => {
  const t = translations[lang];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl border border-slate-200 my-6 overflow-hidden max-h-[92vh] flex flex-col">
        
        {/* Header */}
        <div className="bg-[#0B1F3A] text-white p-5 sm:p-6 relative shrink-0 border-b border-white/10">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="inline-flex items-center gap-1.5 bg-red-500/20 text-red-300 border border-red-500/30 px-3 py-1 rounded-full text-xs font-black tracking-wider uppercase mb-2">
            <Sun className="w-3.5 h-3.5 text-amber-300" />
            <span>CubaWatt™ Residential Solar & Battery Sizing Engine</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
            Residential Solar & Battery Calculator
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm mt-1 font-normal max-w-2xl">
            Live technical sizing dynamically calibrated to Caribbean solar irradiance and Cuban residential blackout autonomy.
          </p>
        </div>

        {/* Scrollable Body hosting the 2-column ResidentialCalculator */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 bg-[#FAFCFF]">
          <ResidentialCalculator
            lang={lang}
            isModal={true}
            onProceedToQuote={(data) => {
              onClose();
              onProceedToQuote(data);
            }}
          />
        </div>

      </div>
    </div>
  );
};
