import React from 'react';
import { useTranslation } from '../i18n/LanguageContext';
import { FileText, Play, Home, Building2 } from 'lucide-react';

import heroImg from '../assets/images/AboutUs.jpg';
import residentImg from '../assets/images/Residential.jpg';
import cafeImg from '../assets/images/Commercial.jpg';
import cubaStoryImg from '../assets/images/cuba.jpg';

interface AboutUsSectionProps {
  onOpenQuote: () => void;
  onOpenHowItWorks: () => void;
}

export const AboutUsSection: React.FC<AboutUsSectionProps> = ({
  onOpenQuote,
  onOpenHowItWorks,
}) => {
  const { t } = useTranslation();

  return (
    <div id="about-us-page" className="w-full bg-[#FAFCFF] border-t border-slate-200">
      
      {/* ========================================================================= */}
      {/* 2. HERO SECTION ("Why CubaWatt™ Exists") */}
      {/* ========================================================================= */}
      <section className="relative w-full bg-[#071326] overflow-hidden flex items-end min-h-[500px] md:min-h-[560px] lg:aspect-[1376/650] pb-10 sm:pb-14">
        {/* Background Photo: Solar Engineers installing panels overlooking Havana sunset */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt={t.aboutSection.heroTitle}
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle contrast vignette overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent pointer-events-none" />
        </div>

        {/* Hero Overlay Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 sm:pt-40">
          <div className="max-w-2xl lg:max-w-3xl">
            
            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold text-white leading-[1.12] tracking-tight mb-3">
              {t.aboutSection.heroTitle}
            </h1>

            {/* Subheading with highlighted phrase in bold red */}
            <p className="text-base sm:text-lg md:text-xl text-slate-100 font-medium leading-relaxed mb-6 max-w-2xl">
              <span>{t.aboutSection.heroSubtitle}</span>
              <span className="text-[#E52535] font-black underline decoration-red-500/30 underline-offset-4">
                {t.aboutSection.heroHighlight}
              </span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5">
              {/* 1. Get a Quote Button */}
              <button
                onClick={onOpenQuote}
                className="group flex items-center justify-center gap-2 bg-[#E52535] hover:bg-[#C91A2A] text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-lg transition-all shadow-lg hover:shadow-red-900/40 active:scale-95 cursor-pointer"
              >
                <FileText className="w-5 h-5 text-white/90" />
                <span>{t.common.getQuote}</span>
              </button>

              {/* 2. How It Works Button */}
              <button
                onClick={onOpenHowItWorks}
                className="group flex items-center justify-center gap-2 bg-[#072B61] hover:bg-[#051E44] text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-lg border border-blue-400/30 transition-all shadow-md active:scale-95 cursor-pointer"
              >
                <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
                  <Play className="w-3 h-3 text-[#072B61] fill-[#072B61] ml-0.5" />
                </div>
                <span>{t.common.howItWorks}</span>
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. "OUR STORY" FULL-BLEED EDGE-TO-EDGE SECTION */}
      {/* ========================================================================= */}
      <section className="relative w-full overflow-hidden my-6 sm:my-10 bg-[#071326] min-h-[420px] md:min-h-[460px] flex items-center">
        {/* Full-width background image spanning 100% across the screen */}
        <img
          src={cubaStoryImg}
          alt={t.aboutSection.storyTitle}
          className="absolute inset-0 w-full h-full object-cover object-[center_85%]"
        />

        {/* Soft left backdrop gradient for readability behind text block */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(to right, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.85) 45%, rgba(255, 255, 255, 0.4) 65%, transparent 85%)',
          }}
        />

        {/* Direct Grid Typography aligned cleanly with the site's primary container grid */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 w-full">
          <div className="max-w-[88%] sm:max-w-[68%] md:max-w-[58%] lg:max-w-[48%]">
            
            {/* Red Accent Line */}
            <div className="w-12 h-1 bg-[#E52535] rounded-full mb-3" />
            
            {/* OUR STORY Label */}
            <span className="text-[#E52535] font-black text-xs sm:text-sm tracking-wider uppercase mb-1 block">
              {t.aboutSection.storyLabel}
            </span>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-[#0B2545] tracking-tight mb-3 leading-snug">
              {t.aboutSection.storyTitle}
            </h2>

            {/* 3 Descriptive Paragraphs */}
            <div className="space-y-2.5 text-slate-700 text-xs sm:text-[13.5px] font-normal leading-relaxed">
              <p className="font-semibold text-[#0B2545]">{t.aboutSection.storyP1}</p>
              <p>{t.aboutSection.storyP2}</p>
              <p>{t.aboutSection.storyP3}</p>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. RESIDENTIAL & COMMERCIAL SPLIT CARDS */}
      {/* ========================================================================= */}
      <section className="w-full max-w-none px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 w-full">
          
          {/* Card 1: Residential Split Card */}
          <div
            onClick={onOpenQuote}
            className="group relative rounded-xl overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 border border-slate-200/90 bg-white cursor-pointer aspect-[16/9.2] w-full"
          >
            {/* Background Image: Home with roof solar panels */}
            <img
              src={residentImg}
              alt={t.cards.altRes}
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
            />

            {/* Solid White Content Overlay Box Anchored to Bottom-Left with Rounded Top-Right Corner */}
            <div className="absolute inset-y-0 left-0 w-[35%] sm:w-[36%] md:w-[35%] bg-white rounded-tr-3xl p-5 sm:p-6 flex flex-col justify-between shadow-xs border-r border-slate-100 z-10">
              <div>
                {/* Red line-art icon badge */}
                <div className="w-8 h-8 rounded-lg bg-red-50 border border-red-100/80 flex items-center justify-center mb-3">
                  <Home className="w-4.5 h-4.5 text-[#E52535] stroke-[2]" />
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-[26px] font-extrabold text-[#0B2545] tracking-tight mb-2">
                  {t.cards.resTitle}
                </h3>

                {/* Body Text */}
                <p className="text-slate-600 text-xs sm:text-[13px] font-normal leading-relaxed mb-4 max-w-[280px]">
                  {t.cards.resDesc}
                </p>
              </div>

              {/* Action Link: Red Learn More → */}
              <div className="inline-flex items-center gap-1.5 text-[#E52535] font-extrabold text-sm hover:text-[#C91A2A] transition-colors mt-auto">
                <span>{t.common.learnMore}</span>
              </div>
            </div>
          </div>

          {/* Card 2: Commercial Split Card */}
          <div
            onClick={onOpenQuote}
            className="group relative rounded-xl overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 border border-slate-200/90 bg-white cursor-pointer aspect-[16/9.2] w-full"
          >
            {/* Background Image: Commercial building with solar panels */}
            <img
              src={cafeImg}
              alt={t.cards.altCom}
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
            />

            {/* Solid White Content Overlay Box Anchored to Bottom-Left with Rounded Top-Right Corner */}
            <div className="absolute inset-y-0 left-0 w-[35%] sm:w-[36%] md:w-[35%] bg-white rounded-tr-3xl p-5 sm:p-6 flex flex-col justify-between shadow-xs border-r border-slate-100 z-10">
              <div>
                {/* Red line-art icon badge */}
                <div className="w-8 h-8 rounded-lg bg-red-50 border border-red-100/80 flex items-center justify-center mb-3">
                  <Building2 className="w-4.5 h-4.5 text-[#E52535] stroke-[2]" />
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-[26px] font-extrabold text-[#0B2545] tracking-tight mb-2">
                  {t.cards.comTitle}
                </h3>

                {/* Body Text */}
                <p className="text-slate-600 text-xs sm:text-[13px] font-normal leading-relaxed mb-4 max-w-[280px]">
                  {t.cards.comDesc}
                </p>
              </div>

              {/* Action Link: Red Learn More → */}
              <div className="inline-flex items-center gap-1.5 text-[#E52535] font-extrabold text-sm hover:text-[#C91A2A] transition-colors mt-auto">
                <span>{t.common.learnMore}</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. "How CubaWatt™ Works" 4-STEP PROCESS BAR */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-16 bg-[#FAFCFF] border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-[38px] font-black text-[#0B2545] tracking-tight mb-2 font-sans">
              {t.process.title}
            </h2>
            <p className="text-[#0B2545]/80 text-sm sm:text-base font-semibold">
              {t.process.subtitle}
            </p>
          </div>

          {/* 4-Step Process Horizontal Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 relative items-start">
            
            {/* Step 1: Consult & Plan */}
            <div className="group relative flex flex-col items-center text-center px-2">
              <div className="relative mb-4 flex items-center justify-center">
                <div className="w-[76px] h-[76px] rounded-full bg-[#EBF3FF] flex items-center justify-center">
                  <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9 text-[#0B2545]">
                    <path d="M 16 12 C 9.37 12 4 16.92 4 23 C 4 26.2 5.5 29.07 7.9 31.05 C 7.2 33.6 5.8 35.1 4.5 35.8 C 7.6 36.2 11.2 35.2 13.5 33.3 C 14.3 33.7 15.1 34 16 34 C 22.63 34 28 29.08 28 23 C 28 16.92 22.63 12 16 12 Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M 31 16 C 31.3 16 31.7 16 32 16 C 38.63 16 44 20.48 44 26 C 44 28.9 42.6 31.5 40.3 33.3 C 41 35.6 42.3 36.9 43.5 37.5 C 40.7 37.9 37.5 37 35.4 35.3 C 34.3 35.7 33.2 36 32 36 C 28.5 36 25.3 34.7 23.1 32.6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="absolute -top-1 -left-1 z-10 w-7 h-7 rounded-full bg-[#FF0A26] text-white text-xs font-black flex items-center justify-center shadow-xs border-2 border-white">
                  1
                </div>
              </div>
              <h3 className="text-[16px] font-extrabold text-[#0B2545] mb-1.5">
                {t.process.step1.title}
              </h3>
              <p className="text-xs sm:text-[12.5px] text-slate-600 font-normal leading-relaxed max-w-[210px]">
                {t.process.step1.desc}
              </p>
              <div className="hidden md:flex absolute top-8 -right-3 text-[#B0C4DE]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><polyline points="9 18 15 12 9 6" /></svg>
              </div>
            </div>

            {/* Step 2: Source & Prepare */}
            <div className="group relative flex flex-col items-center text-center px-2">
              <div className="relative mb-4 flex items-center justify-center">
                <div className="w-[76px] h-[76px] rounded-full bg-[#EBF3FF] flex items-center justify-center">
                  <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9 text-[#0B2545]">
                    <path d="M 24 6 L 40 14 L 24 22 L 8 14 Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M 8 14 L 8 34 L 24 42 L 24 22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M 40 14 L 40 34 L 24 42" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="absolute -top-1 -left-1 z-10 w-7 h-7 rounded-full bg-[#004BB7] text-white text-xs font-black flex items-center justify-center shadow-xs border-2 border-white">
                  2
                </div>
              </div>
              <h3 className="text-[16px] font-extrabold text-[#0B2545] mb-1.5">
                {t.process.step2.title}
              </h3>
              <p className="text-xs sm:text-[12.5px] text-slate-600 font-normal leading-relaxed max-w-[210px]">
                {t.process.step2.desc}
              </p>
              <div className="hidden md:flex absolute top-8 -right-3 text-[#B0C4DE]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><polyline points="9 18 15 12 9 6" /></svg>
              </div>
            </div>

            {/* Step 3: Coordinate Delivery */}
            <div className="group relative flex flex-col items-center text-center px-2">
              <div className="relative mb-4 flex items-center justify-center">
                <div className="w-[76px] h-[76px] rounded-full bg-[#EBF3FF] flex items-center justify-center">
                  <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9 text-[#0B2545]">
                    <path d="M 6 30 L 10 38 C 12 40 36 40 38 38 L 42 30 Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    <rect x="14" y="20" width="8" height="10" stroke="currentColor" strokeWidth="2" rx="1" />
                    <rect x="24" y="20" width="8" height="10" stroke="currentColor" strokeWidth="2" rx="1" />
                  </svg>
                </div>
                <div className="absolute -top-1 -left-1 z-10 w-7 h-7 rounded-full bg-[#004BB7] text-white text-xs font-black flex items-center justify-center shadow-xs border-2 border-white">
                  3
                </div>
              </div>
              <h3 className="text-[16px] font-extrabold text-[#0B2545] mb-1.5">
                {t.process.step3.title}
              </h3>
              <p className="text-xs sm:text-[12.5px] text-slate-600 font-normal leading-relaxed max-w-[210px]">
                {t.process.step3.desc}
              </p>
              <div className="hidden md:flex absolute top-8 -right-3 text-[#B0C4DE]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><polyline points="9 18 15 12 9 6" /></svg>
              </div>
            </div>

            {/* Step 4: Installation & Support */}
            <div className="group relative flex flex-col items-center text-center px-2">
              <div className="relative mb-4 flex items-center justify-center">
                <div className="w-[76px] h-[76px] rounded-full bg-[#EBF3FF] flex items-center justify-center">
                  <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9 text-[#0B2545]">
                    <path d="M 14 20 C 14 13 18 8 24 8 C 30 8 34 13 34 20 Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M 10 21 C 10 20 38 20 38 21 C 38 22.5 35 23 24 23 C 13 23 10 22.5 10 21 Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                    <path d="M 11 40 C 11 34 16 33 24 33 C 32 33 37 34 37 40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </div>
                <div className="absolute -top-1 -left-1 z-10 w-7 h-7 rounded-full bg-[#004BB7] text-white text-xs font-black flex items-center justify-center shadow-xs border-2 border-white">
                  4
                </div>
              </div>
              <h3 className="text-[16px] font-extrabold text-[#0B2545] mb-1.5">
                {t.aboutSection.step4Title}
              </h3>
              <p className="text-xs sm:text-[12.5px] text-slate-600 font-normal leading-relaxed max-w-[210px]">
                {t.aboutSection.step4Desc}
              </p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
