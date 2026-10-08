import React from 'react';
import { useTranslation } from '../i18n/LanguageContext';
import { FileText, Play } from 'lucide-react';
import homePageImg from '../assets/images/Homepage.jpg';

interface HeroProps {
  onOpenQuote: () => void;
  onOpenHowItWorks: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenQuote,
  onOpenHowItWorks,
}) => {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="relative w-full bg-[#071326] overflow-hidden flex items-end min-h-[540px] md:min-h-[580px] lg:aspect-[1376/768] pb-10 sm:pb-12 md:pb-14"
    >
      {/* Background Image: Uploaded Homepage.jpg with original map, no duplicate overlay, bright and clear */}
      <div className="absolute inset-0 z-0">
        <img
          src={homePageImg}
          alt={t.hero.alt}
          className="w-full h-full object-cover lg:object-fill object-center"
        />
        {/* Very light, subtle gradient to ensure text readability without darkening the photo or original map */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/10 to-transparent pointer-events-none" />
      </div>

      {/* Hero Main Live HTML Content positioned below the people's faces */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 sm:pt-40 md:pt-48">
        <div className="max-w-2xl lg:max-w-3xl">
          
          {/* Top Red Bar & Badge */}
          <div className="mb-3">
            <div className="w-10 h-1 bg-[#E52535] rounded-full mb-2" />
            <span className="text-white/90 font-black text-xs uppercase tracking-wider">
              {t.hero.badge}
            </span>
          </div>

          {/* Main Headline - Clean, no drop shadows */}
          <h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-black text-white leading-[1.14] tracking-tight mb-3"
            data-i18n="hero.title"
          >
            <span className="block">{t.hero.titleLine1}</span>
            <span className="inline">{t.hero.titleLine2}</span>
            <span className="text-[#E52535] font-black">
              {t.hero.titleHighlight}
            </span>
          </h1>

          {/* Subtitle Paragraph - Clean, no drop shadows */}
          <p
            className="text-xs sm:text-sm md:text-base text-slate-100 font-normal leading-relaxed mb-6 max-w-2xl"
            data-i18n="hero.subtitle"
          >
            {t.hero.subtitle}
          </p>

          {/* Exactly Two Action Buttons */}
          <div className="flex flex-wrap items-center gap-3.5">
            
            {/* 1. Get a Quote Button (Solid Red) */}
            <button
              onClick={onOpenQuote}
              className="group flex items-center justify-center gap-2 bg-[#E52535] hover:bg-[#C91A2A] text-white font-bold text-sm sm:text-base px-6 py-3 rounded-lg transition-all shadow-md active:scale-95 cursor-pointer"
              data-i18n="common.getQuote"
            >
              <FileText className="w-4 h-4 text-white" />
              <span>{t.common.getQuote}</span>
            </button>

            {/* 2. Our Process Button (Blue Solid/Outlined with Play Icon) */}
            <button
              onClick={onOpenHowItWorks}
              className="group flex items-center justify-center gap-2 bg-[#072B61] hover:bg-[#051E44] text-white font-bold text-sm sm:text-base px-6 py-3 rounded-lg border border-blue-400/40 transition-all shadow-md active:scale-95 cursor-pointer"
              data-i18n="common.ourProcess"
            >
              <div className="w-4 h-4 rounded-full bg-white flex items-center justify-center">
                <Play className="w-2.5 h-2.5 text-[#072B61] fill-[#072B61] ml-0.5" />
              </div>
              <span>{t.common.ourProcess}</span>
            </button>

          </div>

        </div>
      </div>
    </section>
  );
};
