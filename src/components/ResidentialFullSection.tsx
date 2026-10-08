import React from 'react';
import { useTranslation } from '../i18n/LanguageContext';
import { FileText, Home, Calculator, ChevronRight, BatteryCharging, Shield, Sparkles } from 'lucide-react';

import heroFamilyImg from '../assets/images/13.jpg';
import porchDuskImg from '../assets/images/20.jpg';
import imgEssential from '../assets/images/16.jpg';
import imgFamily from '../assets/images/15-1.jpg';
import imgWholeHome from '../assets/images/17.jpg';
import imgCustomHome from '../assets/images/18.jpg';
import havanaPanoramaImg from '../assets/images/14-1.jpg';
import videoCallImg from '../assets/images/19-1.jpg';

interface ResidentialFullSectionProps {
  onOpenQuote: () => void;
  onOpenResCalc: () => void;
  onOpenFamilyAbroad?: () => void;
}

export const ResidentialFullSection: React.FC<ResidentialFullSectionProps> = ({
  onOpenQuote,
  onOpenResCalc,
  onOpenFamilyAbroad,
}) => {
  const { t } = useTranslation();

  const systemOptions = [
    {
      id: 'essential',
      title: t.residentialSection.cardEssentialTitle,
      desc: t.residentialSection.cardEssentialDesc,
      img: imgEssential,
      alt: t.residentialSection.cardEssentialTitle,
    },
    {
      id: 'family',
      title: t.residentialSection.cardFamilyTitle,
      desc: t.residentialSection.cardFamilyDesc,
      img: imgFamily,
      alt: t.residentialSection.cardFamilyTitle,
    },
    {
      id: 'whole-home',
      title: t.residentialSection.cardWholeHomeTitle,
      desc: t.residentialSection.cardWholeHomeDesc,
      img: imgWholeHome,
      alt: t.residentialSection.cardWholeHomeTitle,
    },
    {
      id: 'custom-home',
      title: t.residentialSection.cardCustomHomeTitle,
      desc: t.residentialSection.cardCustomHomeDesc,
      img: imgCustomHome,
      alt: t.residentialSection.cardCustomHomeTitle,
    },
  ];

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
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
    <div id="residential-page-section" className="w-full bg-[#FAFCFF] border-t border-slate-200">
      
      {/* ========================================================================= */}
      {/* SECTION 1: HERO BANNER ("Power for the People You Care About.") */}
      {/* ========================================================================= */}
      <section className="relative w-full bg-[#071326] overflow-hidden flex items-end min-h-[480px] md:min-h-[540px] lg:aspect-[1376/600] pb-10 sm:pb-14">
        {/* Full-width background image of Cuban family indoors with CubaWatt battery unit */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroFamilyImg}
            alt="CubaWatt - Residential Solar Solutions for Cuba"
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle contrast gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent pointer-events-none" />
        </div>

        {/* Hero Overlay Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 sm:pt-36">
          <div className="max-w-2xl lg:max-w-3xl">
            
            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-black text-white leading-[1.12] tracking-tight mb-3">
              <span>{t.residentialSection.heroTitle}</span>
              <br className="hidden sm:block" />
              <span className="text-[#E61C24] font-black">
                {t.residentialSection.heroTitleHighlight}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-lg text-slate-100 font-normal leading-relaxed mb-6 max-w-xl">
              {t.residentialSection.heroSubtitle}
            </p>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5">
              {/* Red primary button */}
              <button
                onClick={onOpenQuote}
                className="group flex items-center justify-center gap-2 bg-[#E61C24] hover:bg-[#C91A2A] text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-lg transition-all shadow-lg hover:shadow-red-900/40 active:scale-95 cursor-pointer"
              >
                <FileText className="w-5 h-5 text-white/90" />
                <span>{t.common.getQuote}</span>
              </button>

              {/* White outlined button with house icon */}
              <button
                onClick={onOpenResCalc}
                className="group flex items-center justify-center gap-2 bg-white/95 hover:bg-white text-[#0B2545] font-bold text-sm sm:text-base px-6 py-3.5 rounded-lg border border-slate-200 transition-all shadow-md active:scale-95 cursor-pointer"
              >
                <Home className="w-5 h-5 text-[#E61C24]" />
                <span>{t.residentialSection.heroCalcBtn}</span>
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: RESIDENTIAL SOLUTIONS BANNER */}
      {/* ========================================================================= */}
      <section className="relative w-full overflow-hidden my-6 sm:my-10 bg-[#071326] min-h-[420px] md:min-h-[460px] flex items-center">
        {/* Full-width background photo of traditional Cuban house/porch at dusk */}
        <img
          src={porchDuskImg}
          alt="Traditional Cuban house and porch with solar battery system"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Dark gradient overlay mask */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(to right, rgba(7, 19, 38, 0.95) 0%, rgba(7, 19, 38, 0.8) 45%, rgba(7, 19, 38, 0.3) 75%, transparent 100%)',
          }}
        />

        {/* Left Side Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 w-full">
          <div className="max-w-[88%] sm:max-w-[68%] md:max-w-[58%] lg:max-w-[48%] text-white">
            
            {/* Sub-label: Red uppercase text with inline left line */}
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-1 bg-[#E61C24] rounded-full" />
              <span className="text-[#E61C24] font-black text-xs sm:text-xs tracking-wider uppercase">
                {t.residentialSection.bannerTag}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-white tracking-tight mb-3 leading-snug">
              {t.residentialSection.bannerTitle}
            </h2>

            {/* Body */}
            <div className="space-y-3 text-slate-200 text-xs sm:text-[13.5px] font-normal leading-relaxed">
              <p>{t.residentialSection.bannerP1}</p>
              <p>{t.residentialSection.bannerP2}</p>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: RESIDENTIAL SYSTEM OPTIONS (4-COLUMN CARD GRID) */}
      {/* ========================================================================= */}
      <section className="w-full max-w-none px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        {/* Section Header */}
        <div className="mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-[#0B2545] tracking-tight mb-2">
            {t.residentialSection.optionsTitle}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed max-w-3xl">
            {t.residentialSection.optionsDesc}
          </p>
        </div>

        {/* 4-Column Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {systemOptions.map((card, idx) => {
            const cardIcons = [Home, BatteryCharging, Shield, Sparkles];
            const IconComp = cardIcons[idx] || Home;
            return (
              <div
                key={card.id}
                onClick={() => handleScroll('residential-page-section')}
                className="group relative flex flex-col rounded-2xl overflow-hidden border border-slate-200/90 bg-white shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer h-full"
              >
                {/* Top Photo with Curved/Wavy Bottom SVG Divider */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                  <img
                    src={card.img}
                    alt={card.alt}
                    className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.05]"
                  />
                  {/* Bottom Curved Wave SVG Divider */}
                  <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none">
                    <svg
                      className="relative block w-full h-6 sm:h-8 text-white fill-current"
                      viewBox="0 0 1200 120"
                      preserveAspectRatio="none"
                    >
                      <path d="M0,0 C150,90 350,-40 500,60 C650,160 900,10 1200,40 L1200,120 L0,120 Z"></path>
                    </svg>
                  </div>

                  {/* Floating Circular Icon Badge overlapping the image-content border */}
                  <div className="absolute bottom-1.5 left-5 z-20 w-10 h-10 rounded-full bg-white border border-slate-100 shadow-md flex items-center justify-center">
                    <IconComp className="w-5 h-5 text-[#0B2545]" />
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 pt-4 flex flex-col flex-1 justify-between bg-white">
                  <div>
                    <h3 className="text-xl sm:text-[20px] font-black text-[#0B2545] tracking-tight mb-2">
                      {card.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-[12.5px] font-normal leading-relaxed mb-4">
                      {card.desc}
                    </p>
                  </div>

                  {/* Action: Learn More → */}
                  <div className="inline-flex items-center gap-1.5 text-[#E61C24] font-extrabold text-sm group-hover:text-[#C91A2A] transition-colors mt-auto">
                    <span>{t.common.learnMore}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: CALCULATOR & ABROAD ARRANGEMENT (2-COLUMN BANNER GRID) */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Left Banner: Calculate the Right System */}
          <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-sm min-h-[300px] flex items-center p-6 sm:p-8 lg:p-10 bg-[#071326]">
            {/* Background Image: Havana skyline panorama at sunset */}
            <img
              src={havanaPanoramaImg}
              alt="Havana skyline panorama at sunset"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            {/* Soft white text overlay mask */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'linear-gradient(to right, rgba(255, 255, 255, 0.98) 0%, rgba(255, 255, 255, 0.92) 55%, rgba(255, 255, 255, 0.5) 80%, transparent 100%)',
              }}
            />

            {/* Left Content */}
            <div className="relative z-10 max-w-md">
              <h3 className="text-2xl sm:text-[26px] font-black text-[#0B2545] tracking-tight leading-snug mb-2.5">
                {t.residentialSection.calcBannerTitle}
              </h3>
              <p className="text-slate-700 text-xs sm:text-[13px] font-normal leading-relaxed mb-5">
                {t.residentialSection.calcBannerDesc}
              </p>
              <button
                onClick={onOpenResCalc}
                className="group flex items-center justify-center gap-2 bg-[#E61C24] hover:bg-[#C91A2A] text-white font-bold text-sm px-5 py-3 rounded-lg transition-all shadow-md active:scale-95 cursor-pointer w-fit"
              >
                <span>{t.residentialSection.calcBannerBtn}</span>
              </button>
            </div>
          </div>

          {/* Right Banner: Arranging This for Family From Abroad? */}
          <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-sm min-h-[300px] flex flex-col sm:flex-row items-stretch bg-white">
            {/* Left Photo Split: Elderly woman video calling family on smartphone */}
            <div className="sm:w-[45%] relative min-h-[180px] sm:min-h-full overflow-hidden bg-slate-900">
              <img
                src={videoCallImg}
                alt="Elderly woman video calling family on smartphone"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            </div>

            {/* Right Text Block */}
            <div className="sm:w-[55%] p-6 sm:p-7 flex flex-col justify-between bg-white">
              <div>
                {/* Red accent line indicator */}
                <div className="w-8 h-1 bg-[#E61C24] rounded-full mb-2.5" />
                
                <h3 className="text-xl sm:text-[22px] font-black text-[#0B2545] tracking-tight leading-snug mb-2.5">
                  {t.residentialSection.abroadBannerTitle}
                </h3>
                <p className="text-slate-600 text-xs sm:text-[12.5px] font-normal leading-relaxed mb-5">
                  {t.residentialSection.abroadBannerDesc}
                </p>
              </div>

              <button
                onClick={onOpenFamilyAbroad || onOpenQuote}
                className="group flex items-center justify-center gap-2 bg-[#E61C24] hover:bg-[#C91A2A] text-white font-bold text-sm px-5 py-3 rounded-lg transition-all shadow-md active:scale-95 cursor-pointer w-fit"
              >
                <span>{t.residentialSection.abroadBannerBtn}</span>
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
