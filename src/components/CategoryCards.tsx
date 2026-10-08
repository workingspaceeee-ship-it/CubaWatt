import React from 'react';
import { Language, translations } from '../i18n/translations';
import { Home, Building2 } from 'lucide-react';

import residentialImg from '../assets/images/RESIDENT.jpg';
import commercialImg from '../assets/images/CAFE.jpg';

interface CategoryCardsProps {
  lang: Language;
  onOpenResModal: () => void;
  onOpenComModal: () => void;
}

export const CategoryCards: React.FC<CategoryCardsProps> = ({
  lang,
  onOpenResModal,
  onOpenComModal,
}) => {
  const t = translations[lang];

  return (
    <section id="solutions" className="w-full max-w-none px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
      {/* 2-Column Container with Side-by-Side Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 w-full">
        
        {/* 1. Residential Card */}
        <a
          href="#residential-page-section"
          onClick={(e) => {
            e.preventDefault();
            const el = document.getElementById('residential-page-section');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          className="group relative rounded-xl overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 border border-slate-200/90 bg-white cursor-pointer aspect-[16/9.2] w-full select-none block"
        >
          {/* Full-bleed background image */}
          <img
            src={residentialImg}
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
              <h2
                className="text-2xl sm:text-[26px] font-extrabold text-[#0B2545] tracking-tight mb-2"
                data-i18n="cards.resTitle"
              >
                {t.cards.resTitle}
              </h2>

              {/* Body Text */}
              <p
                className="text-slate-600 text-xs sm:text-[13px] font-normal leading-relaxed mb-4 max-w-[280px]"
                data-i18n="cards.resDesc"
              >
                {t.cards.resDesc}
              </p>
            </div>

            {/* Action Link: Red Learn More → */}
            <div
              className="inline-flex items-center gap-1.5 text-[#E52535] font-extrabold text-sm group-hover:text-[#C91A2A] transition-colors mt-auto"
              data-i18n="common.learnMore"
            >
              <span>{t.common.learnMore}</span>
            </div>
          </div>
        </a>

        {/* 2. Commercial Card */}
        <a
          href="#commercial-solutions"
          onClick={(e) => {
            e.preventDefault();
            const el = document.getElementById('commercial-solutions');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          className="group relative rounded-xl overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 border border-slate-200/90 bg-white cursor-pointer aspect-[16/9.2] w-full select-none block"
        >
          {/* Full-bleed background image with CAFETERÍA sign */}
          <img
            src={commercialImg}
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
              <h2
                className="text-2xl sm:text-[26px] font-extrabold text-[#0B2545] tracking-tight mb-2"
                data-i18n="cards.comTitle"
              >
                {t.cards.comTitle}
              </h2>

              {/* Body Text */}
              <p
                className="text-slate-600 text-xs sm:text-[13px] font-normal leading-relaxed mb-4 max-w-[280px]"
                data-i18n="cards.comDesc"
              >
                {t.cards.comDesc}
              </p>
            </div>

            {/* Action Link: Red Learn More → */}
            <div
              className="inline-flex items-center gap-1.5 text-[#E52535] font-extrabold text-sm group-hover:text-[#C91A2A] transition-colors mt-auto"
              data-i18n="common.learnMore"
            >
              <span>{t.common.learnMore}</span>
            </div>
          </div>
        </a>

      </div>
    </section>
  );
};
