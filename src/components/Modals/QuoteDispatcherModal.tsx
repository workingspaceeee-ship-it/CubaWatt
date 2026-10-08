import React from 'react';
import { X, Home, Building2, ArrowRight } from 'lucide-react';
import { Language, translations } from '../../i18n/translations';

interface QuoteDispatcherModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const QuoteDispatcherModal: React.FC<QuoteDispatcherModalProps> = ({
  isOpen,
  onClose,
  lang,
}) => {
  const t = translations[lang];

  if (!isOpen) return null;

  const handleSelect = (id: string) => {
    onClose();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col">
        
        {/* Header */}
        <div className="p-6 sm:p-8 border-b border-slate-100 relative">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-all cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
          
          <h3 className="text-2xl sm:text-3xl font-black text-[#0B1F3A] tracking-tight mb-2">
            {lang === 'es' ? 'Seleccione su Tipo de Propiedad' : 'Select Your Property Type'}
          </h3>
          <p className="text-slate-500 text-sm sm:text-base max-w-xl font-medium leading-relaxed">
            {lang === 'es' 
              ? 'Elija una opción a continuación para calcular su solución personalizada de energía solar y baterías.' 
              : 'Choose an option below to calculate your customized solar & battery energy solution.'}
          </p>
        </div>

        {/* Dispatcher Cards */}
        <div className="p-6 sm:p-8 bg-slate-50/50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Card 1: Residential */}
            <div 
              onClick={() => handleSelect('residential-calculator-section')}
              className="group bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 hover:border-[#E52535] hover:shadow-xl transition-all cursor-pointer flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Home className="w-8 h-8 text-[#E52535]" />
              </div>
              <h4 className="text-xl font-black text-[#0B1F3A] mb-2">
                {lang === 'es' ? 'Cotización Solar Residencial' : 'Residential Solar Quote'}
              </h4>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-1">
                {lang === 'es' 
                  ? 'Para viviendas unifamiliares, casas adosadas y edificios de apartamentos.' 
                  : 'For single-family homes, townhouses, and apartment buildings.'}
              </p>
              <div className="w-full py-3.5 px-6 rounded-xl bg-slate-900 text-white font-bold text-sm flex items-center justify-center gap-2 group-hover:bg-[#E52535] transition-colors">
                <span>{lang === 'es' ? 'Ir al Calculador Residencial' : 'Go to Residential Calculator'}</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            {/* Card 2: Commercial */}
            <div 
              onClick={() => handleSelect('commercial-calculator-section')}
              className="group bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 hover:border-[#E52535] hover:shadow-xl transition-all cursor-pointer flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Building2 className="w-8 h-8 text-[#E52535]" />
              </div>
              <h4 className="text-xl font-black text-[#0B1F3A] mb-2">
                {lang === 'es' ? 'Cotización Solar Comercial' : 'Commercial Solar Quote'}
              </h4>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-1">
                {lang === 'es' 
                  ? 'Para oficinas, tiendas minoristas, manufactura, hotelería e instalaciones.' 
                  : 'For offices, retail stores, manufacturing, hospitality, and facilities.'}
              </p>
              <div className="w-full py-3.5 px-6 rounded-xl bg-slate-900 text-white font-bold text-sm flex items-center justify-center gap-2 group-hover:bg-[#E52535] transition-colors">
                <span>{lang === 'es' ? 'Ir al Calculador Comercial' : 'Go to Commercial Calculator'}</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

          </div>
        </div>

        {/* Footer info */}
        <div className="p-4 bg-white text-center border-t border-slate-100">
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
            CubaWatt™ Energy Sizing Engine
          </p>
        </div>

      </div>
    </div>
  );
};
