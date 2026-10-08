import React from 'react';
import { useTranslation } from '../i18n/LanguageContext';

interface ProcessTimelineProps {
  onStepClick?: (stepIndex: number) => void;
}

export const ProcessTimeline: React.FC<ProcessTimelineProps> = ({
  onStepClick,
}) => {
  const { t } = useTranslation();

  const steps = [
    {
      num: '1',
      badgeBg: 'bg-[#FF0A26]', // Vivid Red
      titleKey: 'process.step1.title',
      descKey: 'process.step1.desc',
      title: t.process.step1.title,
      desc: t.process.step1.desc,
      icon: (
        /* Custom Speech Bubbles SVG matching screenshot */
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9 text-[#0B2545]">
          <path
            d="M 16 12 C 9.37 12 4 16.92 4 23 C 4 26.2 5.5 29.07 7.9 31.05 C 7.2 33.6 5.8 35.1 4.5 35.8 C 7.6 36.2 11.2 35.2 13.5 33.3 C 14.3 33.7 15.1 34 16 34 C 22.63 34 28 29.08 28 23 C 28 16.92 22.63 12 16 12 Z"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M 31 16 C 31.3 16 31.7 16 32 16 C 38.63 16 44 20.48 44 26 C 44 28.9 42.6 31.5 40.3 33.3 C 41 35.6 42.3 36.9 43.5 37.5 C 40.7 37.9 37.5 37 35.4 35.3 C 34.3 35.7 33.2 36 32 36 C 28.5 36 25.3 34.7 23.1 32.6"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      num: '2',
      badgeBg: 'bg-[#004BB7]', // Solid Deep Blue
      titleKey: 'process.step2.title',
      descKey: 'process.step2.desc',
      title: t.process.step2.title,
      desc: t.process.step2.desc,
      icon: (
        /* Custom Isometric Box Package SVG matching screenshot */
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9 text-[#0B2545]">
          <path
            d="M 24 6 L 40 14 L 24 22 L 8 14 Z"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M 8 14 L 8 34 L 24 42 L 24 22"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M 40 14 L 40 34 L 24 42"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M 16 10 L 24 14 M 32 10 L 24 14"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      num: '3',
      badgeBg: 'bg-[#004BB7]', // Solid Deep Blue
      titleKey: 'process.step3.title',
      descKey: 'process.step3.desc',
      title: t.process.step3.title,
      desc: t.process.step3.desc,
      icon: (
        /* Custom Cargo Container Ship SVG matching screenshot */
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9 text-[#0B2545]">
          {/* Ship hull */}
          <path
            d="M 6 30 L 10 38 C 12 40 36 40 38 38 L 42 30 Z"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Containers / Cabin superstructure */}
          <rect x="14" y="20" width="8" height="10" stroke="currentColor" strokeWidth="2" rx="1" />
          <rect x="24" y="20" width="8" height="10" stroke="currentColor" strokeWidth="2" rx="1" />
          <rect x="20" y="12" width="10" height="8" stroke="currentColor" strokeWidth="2" rx="1" />
          {/* Waves */}
          <path
            d="M 4 42 C 8 40 12 44 16 42 C 20 40 24 44 28 42 C 32 40 36 44 40 42 C 42 41 44 42 44 42"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      num: '4',
      badgeBg: 'bg-[#004BB7]', // Solid Deep Blue
      titleKey: 'process.step4.title',
      descKey: 'process.step4.desc',
      title: t.process.step4.title,
      desc: t.process.step4.desc,
      icon: (
        /* Custom Technician / Engineer Hardhat SVG matching screenshot */
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9 text-[#0B2545]">
          {/* Hardhat */}
          <path
            d="M 14 20 C 14 13 18 8 24 8 C 30 8 34 13 34 20 Z"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M 10 21 C 10 20 38 20 38 21 C 38 22.5 35 23 24 23 C 13 23 10 22.5 10 21 Z"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line x1="24" y1="8" x2="24" y2="20" stroke="currentColor" strokeWidth="2" />
          {/* Head & Collar */}
          <path
            d="M 17 23 L 17 28 C 17 31 31 31 31 28 L 31 23"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M 11 40 C 11 34 16 33 24 33 C 32 33 37 34 37 40"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      num: '5',
      badgeBg: 'bg-[#004BB7]', // Solid Deep Blue
      titleKey: 'process.step5.title',
      descKey: 'process.step5.desc',
      title: t.process.step5.title,
      desc: t.process.step5.desc,
      icon: (
        /* Custom Support Headset SVG matching screenshot */
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9 text-[#0B2545]">
          {/* Headband */}
          <path
            d="M 12 24 C 12 14 17 8 24 8 C 31 8 36 14 36 24"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Earpads */}
          <rect x="8" y="22" width="6" height="12" rx="3" stroke="currentColor" strokeWidth="2.5" />
          <rect x="34" y="22" width="6" height="12" rx="3" stroke="currentColor" strokeWidth="2.5" />
          {/* Microphone */}
          <path
            d="M 36 30 C 36 38 28 40 24 40"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="22" cy="40" r="2.5" fill="currentColor" />
        </svg>
      ),
    },
  ];

  return (
    <section id="how-it-works" className="py-12 sm:py-16 bg-[#FAFCFF] border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching exact screenshot typography */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <h2
            className="text-3xl sm:text-[38px] font-black text-[#0B2545] tracking-tight mb-2 font-sans"
            data-i18n="process.title"
          >
            {t.process.title}
          </h2>
          <p
            className="text-[#0B2545]/80 text-sm sm:text-base font-semibold"
            data-i18n="process.subtitle"
          >
            {t.process.subtitle}
          </p>
        </div>

        {/* 5-Step Process Horizontal Flow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 md:gap-2 relative items-start">
          {steps.map((step, idx) => {
            return (
              <div
                key={idx}
                onClick={() => onStepClick?.(idx + 1)}
                className="group relative flex flex-col items-center text-center px-1 cursor-pointer"
              >
                {/* Number Badge & Circle Icon Container */}
                <div className="relative mb-4 flex items-center justify-center">
                  
                  {/* Soft Light Blue Circular Highlight */}
                  <div className="w-[76px] h-[76px] sm:w-[80px] sm:h-[80px] rounded-full bg-[#EBF3FF] flex items-center justify-center transition-transform group-hover:scale-105">
                    {step.icon}
                  </div>

                  {/* Overlapping Number Badge (Upper Left) */}
                  <div
                    className={`absolute -top-1 -left-1 z-10 w-7 h-7 sm:w-7.5 sm:h-7.5 rounded-full ${step.badgeBg} text-white text-xs sm:text-[13px] font-black flex items-center justify-center shadow-xs border-2 border-white`}
                  >
                    {step.num}
                  </div>
                </div>

                {/* Step Title */}
                <h3
                  className="text-[15px] sm:text-[16px] font-extrabold text-[#0B2545] mb-1.5 leading-snug group-hover:text-blue-700 transition-colors"
                  data-i18n={step.titleKey}
                >
                  {step.title}
                </h3>

                {/* Step Description */}
                <p
                  className="text-xs sm:text-[12.5px] text-slate-600 font-normal leading-relaxed max-w-[210px] mx-auto"
                  data-i18n={step.descKey}
                >
                  {step.desc}
                </p>

                {/* Chevron Right Connector between steps on desktop */}
                {idx < steps.length - 1 && (
                  <div className="hidden md:flex absolute top-8 -right-3 sm:-right-4 text-[#B0C4DE] pointer-events-none z-10">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
