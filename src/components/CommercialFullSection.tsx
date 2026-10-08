import React from 'react';
import { Language, translations } from '../i18n/translations';
import {
  FileText,
  Play,
  Building2,
  TrendingUp,
  Coins,
  ShieldCheck,
  Leaf,
  Layers,
  Wrench,
  Cpu,
  Headphones,
  Briefcase,
  ShoppingBag,
  Utensils,
  Bed,
  Warehouse,
  HeartPulse,
} from 'lucide-react';

import commercialHeroImg from '../assets/images/22.jpg';
import hotelResilienceImg from '../assets/images/23.jpg';
import imgOffices from '../assets/images/26.jpg';
import imgRetail from '../assets/images/24.jpg';
import imgRestaurants from '../assets/images/25.jpg';
import imgHospitality from '../assets/images/23.jpg';
import imgWarehouses from '../assets/images/21.jpg';
import imgProfessional from '../assets/images/27.jpg';

interface CommercialFullSectionProps {
  lang: Language;
  onOpenQuote: () => void;
  onOpenHowItWorks?: () => void;
  onOpenComCalc?: () => void;
}

export const CommercialFullSection: React.FC<CommercialFullSectionProps> = ({
  lang,
  onOpenQuote,
  onOpenHowItWorks,
  onOpenComCalc,
}) => {
  const t = translations[lang];

  const benefitIcons = [TrendingUp, Coins, ShieldCheck, Leaf];
  const benefits = (t.commercialSection?.benefits || []).map((b, idx) => ({
    ...b,
    icon: benefitIcons[idx] || TrendingUp,
  }));

  const stepIcons = [Layers, Wrench, Cpu, Headphones];
  const designSteps = (t.commercialSection?.designSteps || []).map((step, idx) => ({
    ...step,
    icon: stepIcons[idx] || Layers,
  }));

  const appImages = [imgOffices, imgRetail, imgRestaurants, imgHospitality, imgWarehouses, imgProfessional];
  const appIcons = [Briefcase, ShoppingBag, Utensils, Bed, Warehouse, HeartPulse];
  const applications = (t.commercialSection?.applications || []).map((app, idx) => ({
    ...app,
    img: appImages[idx] || imgOffices,
    icon: appIcons[idx] || Briefcase,
  }));

  return (
    <div id="commercial-solutions" className="w-full bg-[#FAFCFF] border-t border-slate-200">
      
      {/* ========================================================================= */}
      {/* 1. COMMERCIAL HERO BANNER */}
      {/* ========================================================================= */}
      <section className="relative w-full bg-[#071326] overflow-hidden flex items-end min-h-[480px] md:min-h-[540px] lg:aspect-[1376/600] pb-10 sm:pb-14">
        {/* Full-width background photo showing commercial solar equipment and professionals */}
        <div className="absolute inset-0 z-0">
          <img
            src={commercialHeroImg}
            alt="Commercial solar and battery equipment with professionals"
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle dark contrast gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent pointer-events-none" />
        </div>

        {/* Hero Content Area */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 sm:pt-36">
          <div className="max-w-2xl lg:max-w-3xl">
            
            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-black text-white leading-[1.12] tracking-tight mb-3">
              {t.commercialSection?.heroTitleLine1}
              <br />
              {t.commercialSection?.heroTitleLine2}
            </h1>

            {/* Body Text */}
            <p className="text-sm sm:text-base md:text-lg text-slate-100 font-normal leading-relaxed mb-6 max-w-xl">
              {t.commercialSection?.heroSubtitle}
            </p>

            {/* 3 Call-to-Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5">
              {/* Red Solid CTA */}
              <button
                onClick={onOpenQuote}
                className="group flex items-center justify-center gap-2 bg-[#E61C24] hover:bg-[#C91A2A] text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-lg transition-all shadow-lg hover:shadow-red-900/40 active:scale-95 cursor-pointer"
              >
                <FileText className="w-5 h-5 text-white/90" />
                <span>{t.common.getQuote}</span>
              </button>

              {/* Navy Outlined How It Works */}
              <button
                onClick={onOpenHowItWorks}
                className="group flex items-center justify-center gap-2 bg-[#072B61] hover:bg-[#051E44] text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-lg border border-blue-400/30 transition-all shadow-md active:scale-95 cursor-pointer"
              >
                <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center shrink-0">
                  <Play className="w-3 h-3 text-[#072B61] fill-[#072B61] ml-0.5" />
                </div>
                <span>{t.common.howItWorks}</span>
              </button>

              {/* White Outlined Commercial Calculator */}
              <button
                onClick={onOpenComCalc}
                className="group flex items-center justify-center gap-2 bg-white/95 hover:bg-white text-[#0B2545] font-bold text-sm sm:text-base px-6 py-3.5 rounded-lg border border-slate-200 transition-all shadow-md active:scale-95 cursor-pointer"
              >
                <Building2 className="w-5 h-5 text-[#E61C24]" />
                <span>{t.commercialSection?.heroCalcBtn}</span>
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. WHY COMMERCIAL ENERGY RESILIENCE MATTERS BANNER */}
      {/* ========================================================================= */}
      <section className="relative w-full overflow-hidden bg-white border-y border-slate-100 flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 items-stretch">
          
          {/* Left Side: Solid White Text Area with Left Container Margin */}
          <div className="lg:col-span-7 pl-4 sm:pl-6 lg:pl-[max(1rem,calc((100vw-80rem)/2+2rem))] pr-4 sm:pr-6 lg:pr-8 py-12 sm:py-16 flex flex-col justify-center">
            
            {/* Red Sub-label */}
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-1 bg-[#E61C24] rounded-full" />
              <span className="text-[#E61C24] font-black text-xs tracking-wider uppercase">
                {t.commercialSection?.resilienceTag}
              </span>
            </div>

            {/* Dark Navy Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-[#0B2545] tracking-tight leading-snug mb-3">
              {t.commercialSection?.resilienceTitle}
            </h2>

            {/* Body Paragraph */}
            <p className="text-slate-600 text-sm sm:text-[14px] font-normal leading-relaxed mb-8 max-w-2xl">
              {t.commercialSection?.resilienceDesc}
            </p>

            {/* 2x2 Grid of Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((b, idx) => {
                const IconComp = b.icon;
                return (
                  <div key={idx} className="flex gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                      <IconComp className="w-5 h-5 text-[#0B2545]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-extrabold text-[#0B2545] mb-0.5">
                        {b.title}
                      </h4>
                      <p className="text-slate-500 text-xs leading-relaxed font-normal">
                        {b.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Right Side: Full-Bleed Image to Rightmost Edge */}
          <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full overflow-hidden bg-slate-900 shrink-0 w-full right-0">
            <img
              src={hotelResilienceImg}
              alt="Hotel building with rooftop solar panels in Cuba"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. HOW CUBAWATT DESIGNS AROUND OPERATIONS */}
      {/* ========================================================================= */}
      <section className="bg-[#E9F3FC] py-6 sm:py-8 border-b border-slate-200/65">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-1.5">
              <div className="w-8 h-1 bg-[#E61C24] rounded-full" />
              <span className="text-[#E61C24] font-black text-xs tracking-wider uppercase">
                {t.commercialSection?.designTag}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0B2545] tracking-tight mb-2">
              {t.commercialSection?.designTitle}
            </h2>
            <p className="text-slate-700 text-xs sm:text-sm font-normal leading-relaxed max-w-4xl">
              {t.commercialSection?.designDesc}
            </p>
          </div>

          {/* Horizontal 4-Column Unboxed Minimalist Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-2">
            {designSteps.map((step, idx) => (
              <div key={idx} className="flex flex-col py-2 px-1">
                <h3 className="text-sm sm:text-base font-extrabold text-[#0B2545] mb-1">
                  {idx + 1}. {step.title}
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed font-normal">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. POWERING A STRONGER, MORE PRODUCTIVE CUBA */}
      {/* ========================================================================= */}
      <section className="w-full max-w-none px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        
        {/* Header containing text on left and CTA button on right */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 pb-6 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-1 bg-[#E61C24] rounded-full" />
              <span className="text-[#E61C24] font-black text-xs tracking-wider uppercase">
                {t.commercialSection?.appTag}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-[#0B2545] tracking-tight mb-2">
              {t.commercialSection?.appTitle}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-normal">
              {t.commercialSection?.appDesc}
            </p>
          </div>

          <button
            onClick={onOpenQuote}
            className="group flex items-center justify-center gap-2 bg-[#E61C24] hover:bg-[#C91A2A] text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-lg transition-all shadow-md active:scale-95 cursor-pointer shrink-0"
          >
            <span>{t.commercialSection?.appBtn}</span>
          </button>
        </div>

        {/* 6-Column Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 w-full">
          {applications.map((app, idx) => {
            const IconComp = app.icon;
            return (
              <div
                key={idx}
                className="group flex flex-col rounded-xl overflow-hidden border border-slate-200/95 bg-white shadow-xs hover:shadow-md transition-all duration-300"
              >
                {/* Card Top Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900 shrink-0">
                  <img
                    src={app.img}
                    alt={app.title}
                    className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Card Body */}
                <div className="p-4 flex flex-col justify-between flex-1">
                  <div>
                    <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center mb-2.5">
                      <IconComp className="w-4 h-4 text-[#0B2545]" />
                    </div>
                    <h4 className="text-sm font-extrabold text-[#0B2545] leading-tight mb-1">
                      {app.title}
                    </h4>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </section>

    </div>
  );
};
