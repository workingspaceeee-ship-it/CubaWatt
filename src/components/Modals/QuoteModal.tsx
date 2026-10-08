import React, { useState } from 'react';
import { Language, translations } from '../../i18n/translations';
import { X, CheckCircle2, Shield, Send, Sparkles } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  initialSystemType?: 'residential' | 'commercial';
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  lang,
  initialSystemType = 'residential',
}) => {
  const t = translations[lang];
  const [systemType, setSystemType] = useState<'residential' | 'commercial'>(initialSystemType);
  const [province, setProvince] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [recipientName, setRecipientName] = useState('');
  const [recipientPhone, setRecipientPhone] = useState('');
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 900);
  };

  const handleReset = () => {
    setIsSuccess(false);
    onClose();
  };

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
          
          <div className="flex items-center gap-2 mb-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>CubaWatt™ Custom Sizing</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-black tracking-tight" data-i18n="quoteModal.title">
            {t.quoteModal.title}
          </h3>
          <p className="text-slate-200 text-xs sm:text-sm mt-1.5 font-light" data-i18n="quoteModal.subtitle">
            {t.quoteModal.subtitle}
          </p>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
          {isSuccess ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900" data-i18n="quoteModal.successTitle">
                {t.quoteModal.successTitle}
              </h4>
              <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed" data-i18n="quoteModal.successMsg">
                {t.quoteModal.successMsg}
              </p>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-slate-500 max-w-md mx-auto text-left">
                <span className="font-semibold text-slate-700 block mb-1">
                  📋 {t.quoteModal.successRef}
                </span>
                <div>
                  <strong>{t.quoteModal.category}</strong>{' '}
                  {systemType === 'residential' ? t.quoteModal.residential : t.quoteModal.commercial}
                </div>
                <div>
                  <strong>{t.quoteModal.targetProv}</strong>{' '}
                  {province || (lang === 'hi' ? 'La Habana (Havana)' : lang === 'es' ? 'La Habana' : 'La Habana (Havana)')}
                </div>
                <div>
                  <strong>{t.quoteModal.deliveryCoord}</strong>{' '}
                  {t.quoteModal.deliveryNote}
                </div>
              </div>
              <button
                onClick={handleReset}
                className="mt-4 bg-[#0E336A] hover:bg-[#092244] text-white font-bold px-8 py-3 rounded-xl transition-all shadow-md"
              >
                {t.quoteModal.close}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* System Type Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  {t.quoteModal.systemType}
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setSystemType('residential')}
                    className={`py-3 px-4 rounded-xl border-2 text-sm font-bold transition-all text-center ${
                      systemType === 'residential'
                        ? 'border-[#0E336A] bg-blue-50/70 text-[#0E336A] shadow-xs'
                        : 'border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    🏠 {t.quoteModal.residential}
                  </button>
                  <button
                    type="button"
                    onClick={() => setSystemType('commercial')}
                    className={`py-3 px-4 rounded-xl border-2 text-sm font-bold transition-all text-center ${
                      systemType === 'commercial'
                        ? 'border-[#0E336A] bg-blue-50/70 text-[#0E336A] shadow-xs'
                        : 'border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    🏢 {t.quoteModal.commercial}
                  </button>
                </div>
              </div>

              {/* Province Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  {t.quoteModal.province} *
                </label>
                <select
                  required
                  value={province}
                  onChange={(e) => setProvince(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-800 focus:ring-2 focus:ring-[#0E336A] focus:border-transparent outline-hidden"
                >
                  <option value="">{t.quoteModal.provincePlaceholder}</option>
                  {t.quoteModal.provinces.map((prov, i) => (
                    <option key={i} value={prov}>
                      {prov}
                    </option>
                  ))}
                </select>
              </div>

              {/* Purchaser / Abroad Contact */}
              <div className="border-t border-slate-200 pt-5">
                <h5 className="text-xs font-bold uppercase tracking-wider text-[#0E336A] mb-3 flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-[#0E336A]" />
                  {t.quoteModal.contactAbroad}
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder={t.quoteModal.fullName}
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:ring-2 focus:ring-[#0E336A] outline-hidden"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      required
                      placeholder={t.quoteModal.email}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:ring-2 focus:ring-[#0E336A] outline-hidden"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <input
                      type="tel"
                      required
                      placeholder={t.quoteModal.phone}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:ring-2 focus:ring-[#0E336A] outline-hidden"
                    />
                  </div>
                </div>
              </div>

              {/* Recipient in Cuba */}
              <div className="border-t border-slate-200 pt-5">
                <h5 className="text-xs font-bold uppercase tracking-wider text-[#0E336A] mb-3">
                  {t.quoteModal.contactCuba}
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder={t.quoteModal.recipientName}
                      value={recipientName}
                      onChange={(e) => setRecipientName(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:ring-2 focus:ring-[#0E336A] outline-hidden"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder={t.quoteModal.recipientPhone}
                      value={recipientPhone}
                      onChange={(e) => setRecipientPhone(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:ring-2 focus:ring-[#0E336A] outline-hidden"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <input
                      type="text"
                      required
                      placeholder={t.quoteModal.address}
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:ring-2 focus:ring-[#0E336A] outline-hidden"
                    />
                  </div>
                </div>
              </div>

              {/* Energy Notes */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  {t.quoteModal.notes}
                </label>
                <textarea
                  rows={3}
                  placeholder={t.quoteModal.notesPlaceholder}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:ring-2 focus:ring-[#0E336A] outline-hidden"
                />
              </div>

              {/* Compliance note */}
              <div className="text-[11px] text-slate-500 bg-slate-100 p-3 rounded-lg border border-slate-200">
                🔒 <strong>{t.quoteModal.complianceHeader}</strong>{' '}
                {t.quoteModal.complianceNote}
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#E52535] hover:bg-[#C91A2A] text-white font-bold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>{t.common.submitting}</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>{t.common.submit}</span>
                  </>
                )}
              </button>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
