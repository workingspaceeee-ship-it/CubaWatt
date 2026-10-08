import React from 'react';
import { Language, translations } from '../i18n/translations';
import { FileText, Play } from 'lucide-react';

import aboutHeroImg from '../assets/images/cubawatt_about_hero_1791399394587.jpg';
import ourStoryImg from '../assets/images/cubawatt_our_story_1791399412523.jpg';

interface AboutSectionProps {
  lang: Language;
  onOpenQuote: () => void;
  onOpenHowItWorks: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  lang,
  onOpenQuote,
  onOpenHowItWorks,
}) => {
  const t = translations[lang];

  return (
    <section id="about" className="w-full bg-[#f8fafc] py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* PART 1: Why CubaWatt™ Exists Banner */}
        <div className="relative w-full rounded-2xl overflow-hidden shadow-md bg-[#071326] min-h-[420px] md:min-h-[480px] flex items-center">
          {/* Background Image: Solar Engineers on Havana Rooftop */}
          <div className="absolute inset-0 z-0">
            <img
              src={aboutHeroImg}
              alt="Why CubaWatt Exists - Solar installation in Havana"
              className="w-full h-full object-cover object-center"
            />
            {/* Subtle Gradient overlay for live HTML text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent pointer-events-none" />
          </div>

          {/* Banner Content */}
          <div className="relative z-10 p-6 sm:p-10 lg:p-12 max-w-2xl">
            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-black text-white leading-tight tracking-tight mb-4">
              Why CubaWatt™ Exists
            </h2>
            
            <p className="text-white text-base sm:text-lg lg:text-xl font-medium leading-relaxed mb-8">
              We created CubaWatt™ to simplify getting dependable solar and battery power to homes and businesses in Cuba —{' '}
              <span className="text-[#E52535] font-black underline decoration-red-500/40">
                including when the payer is abroad.
              </span>
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5">
              <button
                onClick={onOpenQuote}
                className="flex items-center justify-center gap-2 bg-[#E52535] hover:bg-[#C91A2A] text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-lg transition-all shadow-md active:scale-95 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-white" />
                <span>{t.common.getQuote}</span>
              </button>

              <button
                onClick={onOpenHowItWorks}
                className="flex items-center justify-center gap-2 bg-[#072B61] hover:bg-[#051E44] text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-lg border border-blue-400/40 transition-all shadow-md active:scale-95 cursor-pointer"
              >
                <div className="w-4 h-4 rounded-full bg-white flex items-center justify-center">
                  <Play className="w-2.5 h-2.5 text-[#072B61] fill-[#072B61] ml-0.5" />
                </div>
                <span>{t.common.howItWorks}</span>
              </button>
            </div>
          </div>
        </div>

        {/* PART 2: OUR STORY - A Brighter, More Reliable Cuba */}
        <div className="relative w-full rounded-2xl overflow-hidden shadow-md bg-slate-900 aspect-[16/7.5] min-h-[360px] md:min-h-[420px] flex items-center">
          {/* Background Image: Historic Havana Street Scene */}
          <img
            src={ourStoryImg}
            alt="Our Story - A Brighter, More Reliable Cuba"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />

          {/* White-to-Transparent Horizontal Gradient Overlay (Light Swipe Effect) */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.95) 38%, rgba(255, 255, 255, 0.65) 55%, rgba(255, 255, 255, 0) 100%)',
            }}
          />

          {/* Story Content Overlay on Left Side */}
          <div className="relative z-10 h-full flex flex-col justify-center p-6 sm:p-10 lg:p-12 max-w-full sm:max-w-[70%] md:max-w-[58%] lg:max-w-[50%]">
            
            {/* Red Accent Badge */}
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-1 bg-[#E52535] rounded-full" />
              <span className="text-[11px] font-black text-[#E52535] uppercase tracking-widest">
                OUR STORY
              </span>
            </div>

            {/* Story Title */}
            <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-[#0B2545] tracking-tight leading-snug mb-3">
              A Brighter, More Reliable Cuba
            </h3>

            {/* Story Paragraphs */}
            <div className="space-y-3 text-slate-800 text-xs sm:text-sm font-normal leading-relaxed">
              <p>
                CubaWatt™ was born from a simple belief: <strong className="font-semibold text-slate-900">reliable energy changes lives.</strong>
              </p>
              <p>
                We saw families and business owners across Cuba working incredibly hard, often held back by an unreliable power grid. At the same time, we saw a growing desire from the Cuban diaspora to support loved ones and businesses at home.
              </p>
              <p>
                So we built CubaWatt™ — a fully integrated solar and battery company designed to remove the barriers. We handle the details, coordinate every step, and make it simple to bring modern, clean energy solutions to the people and places that matter most.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
