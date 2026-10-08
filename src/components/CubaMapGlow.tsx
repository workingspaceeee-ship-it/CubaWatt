import React from 'react';

export const CubaMapGlow: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative pointer-events-none select-none ${className}`}>
      <svg
        viewBox="0 0 720 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto overflow-visible"
        style={{ filter: 'drop-shadow(0 0 18px rgba(245, 158, 11, 0.95)) drop-shadow(0 0 35px rgba(234, 88, 12, 0.6))' }}
      >
        <defs>
          {/* Intense Multi-layer Neon Glow Filter */}
          <filter id="cubaNeonGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="blur1" />
            <feGaussianBlur stdDeviation="6" result="blur2" />
            <feGaussianBlur stdDeviation="14" result="blur3" />
            <feGaussianBlur stdDeviation="24" result="blur4" />
            <feMerge>
              <feMergeNode in="blur4" />
              <feMergeNode in="blur3" />
              <feMergeNode in="blur2" />
              <feMergeNode in="blur1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Core Electric Gold Gradient */}
          <linearGradient id="neonGoldCore" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFBEB" stopOpacity="1" />
            <stop offset="25%" stopColor="#FEF08A" stopOpacity="1" />
            <stop offset="65%" stopColor="#F59E0B" stopOpacity="1" />
            <stop offset="100%" stopColor="#EA580C" stopOpacity="1" />
          </linearGradient>

          {/* Radiant Connection Arc Gradient to Laptop in Florida / Abroad */}
          <linearGradient id="arcBeamGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDE047" stopOpacity="1" />
            <stop offset="35%" stopColor="#F59E0B" stopOpacity="0.95" />
            <stop offset="70%" stopColor="#FB923C" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="1" />
          </linearGradient>

          {/* Radial node glow */}
          <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
            <stop offset="40%" stopColor="#FDE047" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* 1. Main Cuba Island Perimeter Path (Accurate Geographic Silhouette) */}
        <g filter="url(#cubaNeonGlow)">
          {/* Base intense glow stroke */}
          <path
            d="M 65,115 
               C 85,98 120,82 155,75 
               C 195,68 235,74 275,70 
               C 315,66 355,58 395,62 
               C 435,66 470,82 505,92 
               C 535,100 560,118 590,122 
               C 610,124 635,118 645,108 
               C 630,122 605,138 570,140 
               C 530,142 500,128 465,120 
               C 425,112 385,106 345,108 
               C 305,110 265,118 225,126 
               C 185,134 145,142 105,144 
               C 85,145 70,135 65,115 Z"
            stroke="#EA580C"
            strokeWidth="5"
            fill="rgba(245, 158, 11, 0.08)"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.8"
          />

          {/* Sharp core neon stroke */}
          <path
            d="M 65,115 
               C 85,98 120,82 155,75 
               C 195,68 235,74 275,70 
               C 315,66 355,58 395,62 
               C 435,66 470,82 505,92 
               C 535,100 560,118 590,122 
               C 610,124 635,118 645,108 
               C 630,122 605,138 570,140 
               C 530,142 500,128 465,120 
               C 425,112 385,106 345,108 
               C 305,110 265,118 225,126 
               C 185,134 145,142 105,144 
               C 85,145 70,135 65,115 Z"
            stroke="url(#neonGoldCore)"
            strokeWidth="2.8"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* White core highlight for intense luminescence */}
          <path
            d="M 65,115 
               C 85,98 120,82 155,75 
               C 195,68 235,74 275,70 
               C 315,66 355,58 395,62 
               C 435,66 470,82 505,92 
               C 535,100 560,118 590,122 
               C 610,124 635,118 645,108 
               C 630,122 605,138 570,140 
               C 530,142 500,128 465,120 
               C 425,112 385,106 345,108 
               C 305,110 265,118 225,126 
               C 185,134 145,142 105,144 
               C 85,145 70,135 65,115 Z"
            stroke="#FFFFFF"
            strokeWidth="1.2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.9"
          />

          {/* Isla de la Juventud */}
          <path
            d="M 175,152 C 190,148 205,155 200,170 C 195,182 178,184 170,174 C 165,166 168,154 175,152 Z"
            stroke="url(#neonGoldCore)"
            strokeWidth="2.2"
            fill="rgba(245, 158, 11, 0.15)"
          />
          <path
            d="M 175,152 C 190,148 205,155 200,170 C 195,182 178,184 170,174 C 165,166 168,154 175,152 Z"
            stroke="#FFFFFF"
            strokeWidth="0.9"
            fill="none"
            opacity="0.8"
          />

          {/* 2. Internal Glowing Triangulation Grid (Geodesic Energy Network) */}
          <g stroke="url(#neonGoldCore)" strokeWidth="0.9" opacity="0.65" strokeDasharray="1 1">
            <line x1="85" y1="110" x2="145" y2="85" />
            <line x1="145" y1="85" x2="190" y2="120" />
            <line x1="190" y1="120" x2="240" y2="80" />
            <line x1="240" y1="80" x2="295" y2="110" />
            <line x1="295" y1="110" x2="350" y2="72" />
            <line x1="350" y1="72" x2="405" y2="105" />
            <line x1="405" y1="105" x2="470" y2="85" />
            <line x1="470" y1="85" x2="525" y2="115" />
            <line x1="525" y1="115" x2="585" y2="125" />
            
            {/* Cross connectors */}
            <line x1="145" y1="85" x2="240" y2="80" />
            <line x1="240" y1="80" x2="350" y2="72" />
            <line x1="350" y1="72" x2="470" y2="85" />
            <line x1="190" y1="120" x2="295" y2="110" />
            <line x1="295" y1="110" x2="405" y2="105" />
            <line x1="405" y1="105" x2="525" y2="115" />
          </g>

          {/* 3. Radiant Arcing Connection Beam to Laptop */}
          <path
            d="M 360,95 C 440,55 540,50 630,120 C 665,150 690,195 705,245"
            stroke="url(#arcBeamGradient)"
            strokeWidth="3.4"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M 360,95 C 440,55 540,50 630,120 C 665,150 690,195 705,245"
            stroke="#FFFFFF"
            strokeWidth="1.4"
            fill="none"
            strokeLinecap="round"
          />

          {/* Glowing City Nodes */}
          {/* Havana (West Hub) */}
          <circle cx="150" cy="82" r="5" fill="url(#nodeGlow)" />
          <circle cx="150" cy="82" r="2.5" fill="#FFFFFF" />

          {/* Santa Clara (Central) */}
          <circle cx="295" cy="88" r="4.5" fill="url(#nodeGlow)" />
          <circle cx="295" cy="88" r="2.2" fill="#FFFFFF" />

          {/* Holguin / Camaguey */}
          <circle cx="430" cy="84" r="4.5" fill="url(#nodeGlow)" />
          <circle cx="430" cy="84" r="2.2" fill="#FFFFFF" />

          {/* Santiago de Cuba (East Hub) */}
          <circle cx="565" cy="128" r="5" fill="url(#nodeGlow)" />
          <circle cx="565" cy="128" r="2.5" fill="#FFFFFF" />

          {/* Origin of the Arc Beam */}
          <circle cx="360" cy="95" r="6.5" fill="url(#nodeGlow)" />
          <circle cx="360" cy="95" r="3.2" fill="#FFFFFF" />
        </g>
      </svg>
    </div>
  );
};
