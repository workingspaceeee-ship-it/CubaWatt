import React from 'react';
import { useTranslation } from '../i18n/LanguageContext';
import trustedImg from '../assets/images/Trusted.jpg';

export const TrustBanner: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    {
      key: 'trust.f1',
      label: t.trust.f1,
      icon: (
        /* Cog with Sun Center SVG */
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 sm:w-9 sm:h-9 text-white">
          <path
            d="M 24 14 C 18.5 14 14 18.5 14 24 C 14 29.5 18.5 34 24 34 C 29.5 34 34 29.5 34 24 C 34 18.5 29.5 14 24 14 Z"
            stroke="currentColor"
            strokeWidth="3"
          />
          <circle cx="24" cy="24" r="3.5" fill="currentColor" />
          <path
            d="M 24 4 L 24 8 M 24 40 L 24 44 M 4 24 L 8 24 M 40 24 L 44 24 M 10 10 L 13 13 M 35 35 L 38 38 M 10 38 L 13 35 M 35 13 L 38 10"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      key: 'trust.f2',
      label: t.trust.f2,
      icon: (
        /* Isometric Package Box SVG */
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 sm:w-9 sm:h-9 text-white">
          <path
            d="M 24 6 L 40 14 L 24 22 L 8 14 Z"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M 8 14 L 8 34 L 24 42 L 24 22"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M 40 14 L 40 34 L 24 42"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M 16 10 L 24 14 M 32 10 L 24 14"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      key: 'trust.f3',
      label: t.trust.f3,
      icon: (
        /* Cargo Container Ship SVG */
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 sm:w-9 sm:h-9 text-white">
          <path
            d="M 6 30 L 10 38 C 12 40 36 40 38 38 L 42 30 Z"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect x="14" y="20" width="8" height="10" stroke="currentColor" strokeWidth="2.5" rx="1" />
          <rect x="24" y="20" width="8" height="10" stroke="currentColor" strokeWidth="2.5" rx="1" />
          <rect x="20" y="12" width="10" height="8" stroke="currentColor" strokeWidth="2.5" rx="1" />
          <path
            d="M 4 42 C 8 40 12 44 16 42 C 20 40 24 44 28 42 C 32 40 36 44 40 42 C 42 41 44 42 44 42"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      key: 'trust.f4',
      label: t.trust.f4,
      icon: (
        /* Wrench Tool SVG */
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 sm:w-9 sm:h-9 text-white">
          <path
            d="M 38 10 C 34 6 27 7 24 12 L 8 28 C 6 30 6 34 8 36 L 12 40 C 14 42 18 42 20 40 L 36 24 C 41 21 42 14 38 10 Z M 32 12 L 36 16"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      key: 'trust.f5',
      label: t.trust.f5,
      icon: (
        /* Support Headset SVG */
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 sm:w-9 sm:h-9 text-white">
          <path
            d="M 12 24 C 12 14 17 8 24 8 C 31 8 36 14 36 24"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <rect x="8" y="22" width="6" height="12" rx="3" fill="currentColor" stroke="currentColor" strokeWidth="2" />
          <rect x="34" y="22" width="6" height="12" rx="3" fill="currentColor" stroke="currentColor" strokeWidth="2" />
          <path
            d="M 36 30 C 36 38 28 40 24 40"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle cx="22" cy="40" r="2.5" fill="currentColor" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative w-full bg-[#001d4a] text-white py-4 sm:py-5 lg:py-6 overflow-hidden border-t-2 border-[#E52535]">
      {/* Background Image: Trusted.jpg with Havana skyline on the right */}
      <div className="absolute inset-0 z-0">
        <img
          src={trustedImg}
          alt={t.trust.title}
          className="w-full h-full object-cover object-right-center"
        />
        {/* Solid Navy Blue overlay covering the left 60%, fading seamlessly before the right skyline */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#001d4a] via-[#001d4a] via-[58%] to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Constrain text & icons to the left ~65% so the right skyline is completely open */}
        <div className="w-full lg:max-w-[68%] xl:max-w-[65%]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 lg:gap-5">
            
            {/* Left Headline & Paragraph Block */}
            <div className="flex flex-col shrink-0 max-w-xs sm:max-w-[260px] lg:max-w-[280px]">
              {/* Red Accent Line */}
              <div className="w-7 h-1 bg-[#E52535] rounded-full mb-1.5" />
              
              <h2
                className="text-base sm:text-lg font-black tracking-tight text-white leading-tight mb-1"
                data-i18n="trust.title"
              >
                {t.trust.title}
              </h2>
              <p
                className="text-slate-100 text-[11px] leading-tight font-normal opacity-90"
                data-i18n="trust.desc"
              >
                {t.trust.desc}
              </p>
            </div>

            {/* Right 5 Icon Columns in a tight horizontal flex row */}
            <div className="flex items-center justify-between gap-1.5 sm:gap-2.5 shrink-0">
              {features.map((feat, idx) => {
                return (
                  <div
                    key={idx}
                    className={`flex flex-col items-center text-center px-1.5 sm:px-2 ${
                      idx < features.length - 1 ? 'border-r border-blue-300/30 pr-2 sm:pr-3' : ''
                    }`}
                  >
                    {/* Icon */}
                    <div className="mb-1 flex items-center justify-center">
                      {feat.icon}
                    </div>

                    {/* Label */}
                    <span
                      className="text-[10px] sm:text-[11px] font-extrabold text-white leading-tight max-w-[70px] sm:max-w-[80px] tracking-tight"
                      data-i18n={feat.key}
                    >
                      {feat.label}
                    </span>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
