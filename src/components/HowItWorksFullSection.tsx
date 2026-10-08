import React from 'react';
import { useTranslation } from '../i18n/LanguageContext';
import {
  MessageSquare,
  ClipboardCheck,
  Cog,
  FileCheck,
  ShieldCheck,
  Package,
  Ship,
  Wrench,
  Power,
  CheckCircle,
  Users,
  ChevronRight,
  FileText,
} from 'lucide-react';

import heroImg from '../assets/images/Homepage.jpg';
import trustedImg from '../assets/images/Trusted.jpg';

import img1 from '../assets/images/1.jpg';
import img2 from '../assets/images/2.jpg';
import img3 from '../assets/images/3.jpg';
import img4 from '../assets/images/4.jpg';
import img5 from '../assets/images/5.jpg';
import img6 from '../assets/images/6.jpg';
import img7 from '../assets/images/7.jpg';
import img8 from '../assets/images/8.jpg';
import img9 from '../assets/images/9.jpg';
import img10 from '../assets/images/10.jpg';
import img11 from '../assets/images/11.jpg';
import img12 from '../assets/images/12.jpg';
import img3new from '../assets/images/3new.jpg';

interface HowItWorksFullSectionProps {
  onOpenQuote: () => void;
}

export const HowItWorksFullSection: React.FC<HowItWorksFullSectionProps> = ({
  onOpenQuote,
}) => {
  const { t } = useTranslation();

  const stepImages = [img8, img7, img10, img9, img1, img3new, img4, img2, img11, img12, img6];
  const stepIcons = [
    MessageSquare,
    ClipboardCheck,
    Cog,
    FileCheck,
    ShieldCheck,
    Package,
    Ship,
    Wrench,
    Power,
    CheckCircle,
    Users,
  ];

  const steps11 = (t.howItWorksSection?.steps11 || []).map((step, idx) => ({
    ...step,
    img: stepImages[idx] || img8,
    icon: stepIcons[idx] || MessageSquare,
  }));

  const trustIcons = [Cog, Package, Ship, Wrench, Users];
  const trustFeatures = (t.howItWorksSection?.trustFeatures || []).map((feat, idx) => ({
    ...feat,
    icon: trustIcons[idx] || Cog,
  }));

  return (
    <div id="how-it-works-page" className="w-full bg-[#FAFCFF] border-t border-slate-200">
      
      {/* ========================================================================= */}
      {/* 2. HERO BANNER SECTION */}
      {/* ========================================================================= */}
      <section className="relative w-full bg-[#071326] overflow-hidden flex items-end min-h-[480px] md:min-h-[520px] lg:aspect-[1376/600] pb-10 sm:pb-12">
        {/* Background Image: 5.jpg */}
        <div className="absolute inset-0 z-0">
          <img
            src={img5}
            alt="CubaWatt - Solar & Energy Solutions in Cuba"
            className="w-full h-full object-cover object-center scale-110 sm:scale-115 transition-transform duration-500"
          />
          {/* Subtle contrast gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent pointer-events-none" />
        </div>

        {/* Hero Overlay Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 sm:pt-36">
          <div className="max-w-2xl lg:max-w-3xl">
            
            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-black text-white leading-[1.12] tracking-tight mb-3">
              <span>{t.howItWorksSection?.heroTitle1}</span>
              <br className="hidden sm:block" />
              <span>{t.howItWorksSection?.heroTitle2}</span>
              <span className="text-[#E52535] font-black">
                {t.howItWorksSection?.heroTitleHighlight}
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-sm sm:text-base md:text-lg text-slate-100 font-normal leading-relaxed mb-6 max-w-xl">
              {t.howItWorksSection?.heroSubtitle}
            </p>

            {/* CTA Button */}
            <button
              onClick={onOpenQuote}
              className="group flex items-center justify-center gap-2 bg-[#E52535] hover:bg-[#C91A2A] text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-lg transition-all shadow-lg hover:shadow-red-900/40 active:scale-95 cursor-pointer w-fit"
            >
              <FileText className="w-5 h-5 text-white/90" />
              <span>{t.common.getQuote}</span>
            </button>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. SECTION HEADER & INTRO PARAGRAPH */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-8 sm:pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Red Accent Line + HOW IT WORKS + Main Title */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-1 bg-[#E52535] rounded-full" />
              <span className="text-[#E52535] font-black text-xs sm:text-sm tracking-wider uppercase">
                {t.howItWorksSection?.sectionTag}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-black text-[#0B2545] tracking-tight leading-[1.1] max-w-xl">
              {t.howItWorksSection?.sectionTitle}
            </h2>
          </div>

          {/* Right Column: Intro Paragraph */}
          <div className="lg:col-span-5 lg:pt-4">
            <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
              {t.howItWorksSection?.sectionDesc}
            </p>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. 11-STEP DETAILED PROCESS GRID IN WRAPPER CONTAINER */}
      {/* ========================================================================= */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
        <div className="bg-slate-50/50 border border-slate-100 rounded-3xl p-4 sm:p-6 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-8 gap-x-6">
            {steps11.map((step, idx) => {
              const IconComp = step.icon;
              const isLastInRow = (idx + 1) % 3 === 0;
              const isLastStep = idx === steps11.length - 1;
              const isStep10 = idx === 9;

              return (
                <div
                  key={step.num}
                  className={`relative flex flex-col sm:flex-row gap-4 items-stretch ${
                    isStep10 ? 'lg:col-span-2' : ''
                  }`}
                >
                  {/* Left: Image Side with Number Badge */}
                  <div className="relative w-full sm:w-36 lg:w-40 shrink-0 aspect-[4/3] sm:aspect-square rounded-xl overflow-hidden shadow-sm border border-slate-200">
                    <img
                      src={step.img}
                      alt={step.title}
                      className="absolute inset-0 w-full h-full object-cover object-center"
                    />
                    <div className="absolute top-2 left-2 z-10 w-6 h-6 rounded-full bg-[#E52535] text-white font-black text-[11px] flex items-center justify-center shadow-md border border-white">
                      {step.num}
                    </div>
                  </div>

                  {/* Right: Content Side */}
                  <div className="flex flex-col flex-1 pt-1">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                        <IconComp className="w-4.5 h-4.5 text-[#0B2545]" />
                      </div>
                      <h3 className="text-[15px] font-black text-[#0B2545] tracking-tight leading-tight">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-slate-500 text-[12px] leading-relaxed font-normal">
                      {step.desc}
                    </p>
                  </div>

                  {/* Desktop Right Arrow Connector */}
                  {!isLastInRow && !isLastStep && !isStep10 && (
                    <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 text-slate-300">
                      <ChevronRight className="w-5 h-5 stroke-[3]" />
                    </div>
                  )}
                  
                  {/* Step 10 to 11 Arrow specifically */}
                  {isStep10 && (
                     <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 text-slate-300">
                        <ChevronRight className="w-5 h-5 stroke-[3]" />
                     </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. "A TRUSTED PARTNER FROM START TO FINISH" DARK BLUE BANNER */}
      {/* ========================================================================= */}
      <section className="relative w-full bg-[#001D4A] text-white py-6 sm:py-8 lg:py-10 overflow-hidden border-t-2 border-[#E52535]">
        {/* Background Photo */}
        <div className="absolute inset-0 z-0">
          <img
            src={trustedImg}
            alt="A Trusted Partner from Start to Finish - Havana Skyline"
            className="w-full h-full object-cover object-right-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#001D4A] via-[#001D4A]/95 md:via-[#001D4A]/85 to-transparent pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* Left Block */}
            <div className="lg:col-span-5">
              <div className="w-8 h-1 bg-[#E52535] rounded-full mb-2" />
              <h2 className="text-lg sm:text-xl lg:text-2xl font-black tracking-tight text-white leading-tight mb-2">
                {t.howItWorksSection?.trustBannerTitle}
              </h2>
              <p className="text-slate-200 text-xs sm:text-[13px] leading-relaxed font-normal opacity-95 max-w-md">
                {t.howItWorksSection?.trustBannerDesc}
              </p>
            </div>

            {/* Right 5-Feature Icon Columns */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-6">
                {trustFeatures.map((feat, idx) => {
                  const IconC = feat.icon;
                  return (
                    <div
                      key={idx}
                      className={`flex flex-col items-center text-center px-1.5 relative ${
                        idx < trustFeatures.length - 1 ? 'md:border-r md:border-blue-300/30' : ''
                      }`}
                    >
                      <div className="mb-1.5 flex items-center justify-center">
                        <IconC className="w-7 h-7 text-white stroke-[2]" />
                      </div>
                      <span className="text-[11px] font-extrabold text-white leading-tight max-w-[90px] tracking-tight block mb-0.5">
                        {feat.title}
                      </span>
                      <span className="text-[9.5px] font-normal text-blue-200/80 leading-tight max-w-[95px] block hidden sm:block">
                        {feat.subtitle}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
