import React from 'react';
import { useTranslation } from '../i18n/LanguageContext';
import {
  FileText,
  Play,
  Home,
  Building2,
  ShieldCheck,
  Cog,
  Ship,
  HardHat,
  Headphones,
} from 'lucide-react';

import servicesHeroImg from '../assets/images/Services.jpg';
import residentialImg from '../assets/images/Homes.jpg';
import commercialImg from '../assets/images/CAFETERIA.jpg';
import trustedImg from '../assets/images/Trusted.jpg';

interface ServicesSectionProps {
  onOpenQuote: () => void;
  onOpenHowItWorks?: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenQuote,
  onOpenHowItWorks,
}) => {
  const { t } = useTranslation();

  const chooseFeatures = [
    {
      title: t.servicesSection.f1Title,
      desc: t.servicesSection.f1Desc,
      icon: ShieldCheck,
    },
    {
      title: t.servicesSection.f2Title,
      desc: t.servicesSection.f2Desc,
      icon: Cog,
    },
    {
      title: t.servicesSection.f3Title,
      desc: t.servicesSection.f3Desc,
      icon: Ship,
    },
    {
      title: t.servicesSection.f4Title,
      desc: t.servicesSection.f4Desc,
      icon: HardHat,
    },
    {
      title: t.servicesSection.f5Title,
      desc: t.servicesSection.f5Desc,
      icon: Headphones,
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
    <div id="services-page-section" className="w-full bg-[#FAFCFF] border-t border-slate-200">
      
      {/* ========================================================================= */}
      {/* 2. SERVICES HERO BANNER */}
      {/* ========================================================================= */}
      <section className="relative w-full bg-[#071326] overflow-hidden flex items-end min-h-[480px] md:min-h-[520px] lg:aspect-[1376/600] pb-10 sm:pb-12">
        {/* Background Image: Engineer servicing rooftop solar panels overlooking Havana */}
        <div className="absolute inset-0 z-0">
          <img
            src={servicesHeroImg}
            alt={t.servicesSection.heroTitle}
            className="w-full h-full object-cover object-center"
          />
          {/* Contrast gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent pointer-events-none" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 sm:pt-36">
          <div className="max-w-2xl lg:max-w-3xl">
            
            {/* Top Tag */}
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-1 bg-[#E52535] rounded-full" />
              <span className="text-white/90 font-black text-xs uppercase tracking-wider">
                {t.servicesSection.heroTag}
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-black text-white leading-[1.12] tracking-tight mb-3">
              <span>{t.servicesSection.heroTitlePart1 || t.servicesSection.heroTitle}</span>{' '}
              <span className="text-[#E52535]">{t.servicesSection.heroTitlePart2 || ''}</span>
            </h1>

            {/* Subheading */}
            <p className="text-sm sm:text-base md:text-lg text-slate-100 font-normal leading-relaxed mb-6 max-w-lg text-balance">
              {t.servicesSection.heroSubtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5">
              <button
                onClick={onOpenQuote}
                className="group flex items-center justify-center gap-2 bg-[#E52535] hover:bg-[#C91A2A] text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-lg transition-all shadow-lg hover:shadow-red-900/40 active:scale-95 cursor-pointer"
              >
                <FileText className="w-5 h-5 text-white/90" />
                <span>{t.common.getQuote}</span>
              </button>

              <button
                onClick={onOpenHowItWorks}
                className="group flex items-center justify-center gap-2 bg-[#072B61] hover:bg-[#051E44] text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-lg border border-blue-400/30 transition-all shadow-md active:scale-95 cursor-pointer"
              >
                <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
                  <Play className="w-3 h-3 text-[#072B61] fill-[#072B61] ml-0.5" />
                </div>
                <span>{t.common.ourProcess}</span>
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. SECTION HEADER & SUBHEADING */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-6 sm:pb-8">
        {/* Tag */}
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-1 bg-[#E52535] rounded-full" />
          <span className="text-[#E52535] font-black text-xs sm:text-sm tracking-wider uppercase">
            {t.servicesSection.label}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-black text-[#0B2545] tracking-tight leading-snug mb-3">
          <span>{t.servicesSection.title} </span>
          <span className="text-[#E52535]">{t.servicesSection.titleHighlight}</span>
        </h2>

        {/* Description Paragraph */}
        <p className="text-slate-700 text-sm sm:text-base font-normal leading-relaxed max-w-4xl">
          {t.servicesSection.desc}
        </p>
      </section>

      {/* ========================================================================= */}
      {/* 4. RESIDENTIAL & COMMERCIAL SPLIT CARDS */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Residential Card */}
          <div
            onClick={() => handleScroll('residential-page-section')}
            className="group relative rounded-xl overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 border border-slate-200/90 bg-white cursor-pointer aspect-[16/9.2] w-full"
          >
            {/* Background Image: House with rooftop solar panels */}
            <img
              src={residentialImg}
              alt="Residential Solar Solutions in Cuba"
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
            />

            {/* Solid White Content Overlay Box Anchored to Bottom-Left with Rounded Top-Right Corner */}
            <div className="absolute inset-y-0 left-0 w-[35%] sm:w-[36%] md:w-[35%] bg-white rounded-tr-3xl p-5 sm:p-6 flex flex-col justify-between shadow-xs border-r border-slate-100 z-10">
              
              {/* Top Section: Red Line-Art Icon Badge + Title + Body Text */}
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
                <p className="text-slate-600 text-xs sm:text-[13px] font-normal leading-relaxed max-w-[280px]">
                  {t.cards.resDesc}
                </p>
              </div>

              {/* Action Link: Red Learn More → */}
              <div className="inline-flex items-center gap-1.5 text-[#E52535] font-extrabold text-sm hover:text-[#C91A2A] transition-colors cursor-pointer mt-auto">
                <span>{t.common.learnMore}</span>
              </div>

            </div>
          </div>

          {/* Commercial Card */}
          <div
            onClick={() => handleScroll('commercial-solutions')}
            className="group relative rounded-xl overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 border border-slate-200/90 bg-white cursor-pointer aspect-[16/9.2] w-full"
          >
            {/* Background Image: Cafetería building with rooftop solar panels */}
            <img
              src={commercialImg}
              alt="Commercial Energy Solutions for Businesses in Cuba"
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
            />

            {/* Solid White Content Overlay Box Anchored to Bottom-Left with Rounded Top-Right Corner */}
            <div className="absolute inset-y-0 left-0 w-[35%] sm:w-[36%] md:w-[35%] bg-white rounded-tr-3xl p-5 sm:p-6 flex flex-col justify-between shadow-xs border-r border-slate-100 z-10">
              
              {/* Top Section: Red Line-Art Icon Badge + Title + Body Text */}
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
                <p className="text-slate-600 text-xs sm:text-[13px] font-normal leading-relaxed max-w-[280px]">
                  {t.cards.comDesc}
                </p>
              </div>

              {/* Action Link: Red Learn More → */}
              <div className="inline-flex items-center gap-1.5 text-[#E52535] font-extrabold text-sm hover:text-[#C91A2A] transition-colors cursor-pointer mt-auto">
                <span>{t.common.learnMore}</span>
              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
