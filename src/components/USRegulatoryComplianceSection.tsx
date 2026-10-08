import React from 'react';
import { Language, translations } from '../i18n/translations';
import {
  FileText,
  ShieldAlert,
  CreditCard,
  RefreshCw,
  ArrowRight,
  Shield,
  CheckSquare,
} from 'lucide-react';

import heroComplianceBg from '../assets/images/35.jpg';
import ourApproachRightImg from '../assets/images/35-1.jpg';
import questionsLeftImg from '../assets/images/34.jpg';

interface USRegulatoryComplianceSectionProps {
  lang: Language;
  onOpenQuote: () => void;
}

export const USRegulatoryComplianceSection: React.FC<USRegulatoryComplianceSectionProps> = ({
  lang,
  onOpenQuote,
}) => {
  const isEs = lang === 'es';
  const t = translations[lang];

  const cards = [
    {
      title: t.complianceSection.f1Title,
      icon: CheckSquare,
      iconColor: 'text-blue-600 bg-blue-50 border-blue-100',
      text: t.complianceSection.f1Desc,
    },
    {
      title: t.complianceSection.f2Title,
      icon: Shield,
      iconColor: 'text-red-600 bg-red-50 border-red-100',
      text: t.complianceSection.f2Desc,
    },
    {
      title: t.complianceSection.f3Title,
      icon: CreditCard,
      iconColor: 'text-blue-600 bg-blue-50 border-blue-100',
      text: t.complianceSection.f3Desc,
    },
    {
      title: t.complianceSection.f4Title,
      icon: RefreshCw,
      iconColor: 'text-[#0B1F3A] bg-slate-50 border-slate-200',
      text: t.complianceSection.f4Desc,
    },
  ];

  return (
    <section id="us-regulatory-compliance-section" className="w-full bg-[#FAFCFF] border-t border-slate-200 overflow-hidden">
      
      {/* ========================================================================= */}
      {/* 1. HERO BANNER */}
      {/* ========================================================================= */}
      <div className="relative w-full bg-[#071326] overflow-hidden flex items-end min-h-[480px] md:min-h-[540px] lg:aspect-[1376/600] pb-10 sm:pb-14">
        {/* Full-width background photo of office desk with regulatory binders */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroComplianceBg}
            alt={t.complianceSection.altHero}
            className="w-full h-full object-cover object-center"
          />
          {/* Left side dark gradient text mask overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'linear-gradient(to right, rgba(7, 19, 38, 0.95) 0%, rgba(7, 19, 38, 0.8) 45%, rgba(7, 19, 38, 0.3) 75%, transparent 100%)',
            }}
          />
        </div>

        {/* Content Area */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-white">
          <div className="max-w-2xl lg:max-w-3xl">
            
            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[45px] font-black text-white leading-[1.12] tracking-tight mb-2">
              {t.complianceSection.heroTitle}
            </h1>

            {/* Red Accent Bar */}
            <div className="w-12 h-1 bg-[#E61C24] rounded-full mb-4" />

            {/* Subtitle */}
            <h3 className="text-base sm:text-lg md:text-xl font-black text-white leading-snug mb-2">
              {t.complianceSection.heroSubtitle}
            </h3>

            {/* Description */}
            <p className="text-slate-200 text-xs sm:text-sm md:text-base font-medium max-w-xl leading-relaxed mb-6">
              {t.complianceSection.p1} {t.complianceSection.p2}
            </p>

            {/* Action Button */}
            <button
              onClick={onOpenQuote}
              className="group flex items-center justify-center gap-2 bg-[#E61C24] hover:bg-[#C91A2A] text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-lg border border-red-500/20 transition-all shadow-md active:scale-95 cursor-pointer w-fit"
            >
              <span>{t.complianceSection.qBtn}</span>
            </button>

          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. OUR APPROACH BANNER */}
      {/* ========================================================================= */}
      <section className="relative w-full overflow-hidden bg-white border-y border-slate-100 flex items-center">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 items-stretch">
          
          {/* Left Side: Solid White Text Area */}
          <div className="lg:col-span-7 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 flex flex-col justify-center">
            
            {/* Red Accent Bar */}
            <div className="w-8 h-1 bg-[#E61C24] rounded-full mb-3" />

            {/* Sub-label / Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-[#0B2545] tracking-tight leading-snug mb-3">
              {t.complianceSection.approachTitle}
            </h2>

            {/* Paragraph */}
            <p className="text-slate-600 text-sm sm:text-[14px] font-normal leading-relaxed max-w-2xl">
              {t.complianceSection.approachDesc}
            </p>
          </div>

          {/* Right Side: Panoramic background image showing cargo ships and shipping containers */}
          <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full overflow-hidden bg-slate-900 shrink-0 rounded-2xl lg:my-6 lg:mr-6">
            <img
              src={ourApproachRightImg}
              alt={t.complianceSection.altApproach}
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. 4-COLUMN COMPLIANCE CARDS GRID */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((card, idx) => {
            const IconComp = card.icon;
            return (
              <div
                key={idx}
                className="bg-[#F8FAFC] border border-slate-200/60 rounded-xl p-5 shadow-xs flex flex-col justify-start"
              >
                <div className={`w-10 h-10 rounded-xl border flex items-center justify-center mb-4 ${card.iconColor}`}>
                  <IconComp className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-black text-[#0B1F3A] leading-tight mb-2">
                  {card.title}
                </h4>
                <p className="text-slate-600 text-[11px] sm:text-xs leading-relaxed font-normal">
                  {card.text}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. QUESTIONS ABOUT COMPLIANCE BANNER */}
      {/* ========================================================================= */}
      <section className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xs max-w-7xl mx-auto mx-4 sm:mx-6 lg:mx-8 mb-12 sm:mb-16 flex flex-col sm:flex-row items-stretch bg-white">
        
        {/* Left Side: Panoramic photo of Havana waterfront */}
        <div className="sm:w-[35%] relative min-h-[180px] sm:min-h-full overflow-hidden bg-slate-900 shrink-0">
          <img
            src={questionsLeftImg}
            alt={t.complianceSection.altQuestions}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>

        {/* Right Side: Soft gradient light blue card area */}
        <div className="sm:w-[65%] p-6 sm:p-8 bg-[#E9F3FC]/50 flex flex-col justify-between">
          <div>
            {/* Red Accent Line */}
            <div className="w-8 h-1 bg-[#E61C24] rounded-full mb-3" />

            <h3 className="text-xl sm:text-2xl font-black text-[#0B1F3A] tracking-tight leading-snug mb-2">
              {t.complianceSection.qTitle}
            </h3>
            <p className="text-slate-700 text-xs sm:text-[13px] font-normal leading-relaxed mb-6">
              {t.complianceSection.qDesc}
            </p>
          </div>

          <button
            onClick={onOpenQuote}
            className="group flex items-center justify-center gap-2 bg-[#E61C24] hover:bg-[#C91A2A] text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-lg transition-all shadow-md active:scale-95 cursor-pointer w-fit shrink-0"
          >
            <span>{t.complianceSection.qBtn}</span>
          </button>
        </div>

      </section>

    </section>
  );
};
