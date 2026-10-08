import React, { useState } from 'react';
import { X, User, Users, MapPin, Phone, Mail, Heart, Send, CheckCircle2 } from 'lucide-react';
import { Language, translations } from '../../i18n/translations';

interface FamilyAbroadModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const FamilyAbroadModal: React.FC<FamilyAbroadModalProps> = ({
  isOpen,
  onClose,
  lang,
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const handleReset = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-white sticky top-0 z-10">
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-[#0B1F3A] tracking-tight">
              {lang === 'es' ? 'Apoyo a la Familia desde el Extranjero' : 'Supporting Family from Abroad'}
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm font-medium">
              {lang === 'es' ? 'Complete el formulario para coordinar su solución.' : 'Complete the form to coordinate your solution.'}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-all cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form Content */}
        <div className="p-6 sm:p-8 overflow-y-auto bg-slate-50/30">
          {isSuccess ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-12 h-12" />
              </div>
              <h4 className="text-2xl font-black text-slate-900 mb-2">
                {lang === 'es' ? '¡Solicitud Recibida!' : 'Request Received!'}
              </h4>
              <p className="text-slate-600 max-w-md mx-auto mb-8">
                {lang === 'es' 
                  ? 'Nuestro equipo se pondrá en contacto con usted pronto para ayudar a su familia en Cuba.' 
                  : 'Our team will contact you soon to help your family in Cuba.'}
              </p>
              <button
                onClick={handleReset}
                className="bg-[#0B1F3A] text-white font-bold px-8 py-3 rounded-xl transition-all shadow-md hover:bg-slate-800"
              >
                {lang === 'es' ? 'Cerrar' : 'Close'}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Section 1: Purchaser Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-[#E52535] font-black text-xs uppercase tracking-widest pb-1 border-b border-red-100">
                  <User className="w-4 h-4" />
                  <span>{lang === 'es' ? 'Información del Comprador' : 'Purchaser Info'}</span>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2">
                    <label className="block text-[11px] font-bold text-slate-500 uppercase mb-1.5 ml-1">Full Name</label>
                    <input required type="text" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#E52535] focus:ring-1 focus:ring-[#E52535] transition-all shadow-sm" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-[11px] font-bold text-slate-500 uppercase mb-1.5 ml-1">Address (Abroad)</label>
                    <input required type="text" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#E52535] focus:ring-1 focus:ring-[#E52535] transition-all shadow-sm" />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-500 uppercase mb-1.5 ml-1">Telephone</label>
                    <input required type="tel" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#E52535] focus:ring-1 focus:ring-[#E52535] transition-all shadow-sm" />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-500 uppercase mb-1.5 ml-1">Email</label>
                    <input required type="email" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#E52535] focus:ring-1 focus:ring-[#E52535] transition-all shadow-sm" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-[11px] font-bold text-slate-500 uppercase mb-1.5 ml-1">Relationship to Cuban Family</label>
                    <input required type="text" placeholder="e.g. Son, Daughter, Brother, Friend" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#E52535] focus:ring-1 focus:ring-[#E52535] transition-all shadow-sm" />
                  </div>
                </div>
              </div>

              {/* Section 2: Cuban Family Info */}
              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-2 text-[#0B1F3A] font-black text-xs uppercase tracking-widest pb-1 border-b border-slate-200">
                  <Users className="w-4 h-4" />
                  <span>{lang === 'es' ? 'Información de Familia / Amigo en Cuba' : 'Cuban Family / Friend Info'}</span>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2">
                    <label className="block text-[11px] font-bold text-slate-500 uppercase mb-1.5 ml-1">Full Name</label>
                    <input required type="text" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#0B1F3A] focus:ring-1 focus:ring-[#0B1F3A] transition-all shadow-sm" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-[11px] font-bold text-slate-500 uppercase mb-1.5 ml-1">Address in Cuba</label>
                    <input required type="text" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#0B1F3A] focus:ring-1 focus:ring-[#0B1F3A] transition-all shadow-sm" />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-500 uppercase mb-1.5 ml-1">Telephone (Cuba)</label>
                    <input type="tel" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#0B1F3A] focus:ring-1 focus:ring-[#0B1F3A] transition-all shadow-sm" />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-500 uppercase mb-1.5 ml-1">Email (If available)</label>
                    <input type="email" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#0B1F3A] focus:ring-1 focus:ring-[#0B1F3A] transition-all shadow-sm" />
                  </div>
                </div>
              </div>

              {/* Submit */}
              <div className="pt-4 sticky bottom-0 bg-transparent">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#E52535] hover:bg-[#C91A2A] text-white font-bold py-4 rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2 active:scale-[0.98] disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>{lang === 'es' ? 'Enviar Solicitud' : 'Submit Request'}</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
