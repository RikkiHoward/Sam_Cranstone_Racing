'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Direct JSON import for static export
import sponsorData from '../app/data/sponsors.json';

interface Sponsor {
  name: string;
  logo: string;
  url?: string;
  tier: string;
}

export default function SponsorStrip() {
  const sponsors = sponsorData as Sponsor[];
  
  // Triple the sponsors array for seamless infinite scroll
  const duplicatedSponsors = [...sponsors, ...sponsors, ...sponsors];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full bg-gradient-to-r from-black/95 via-gray-900/90 to-black/95 backdrop-blur-md py-4 md:py-6 border-t border-red-500/10 shadow-2xl"
    >
      <div className="relative overflow-hidden max-w-7xl mx-auto">
        {/* Subtle top accent line */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
        
        <div className="flex items-center justify-center whitespace-nowrap animate-[scrollSponsor_30s_linear_infinite] hover:[animation-play-state:paused]">
          {duplicatedSponsors.map((sponsor, index) => (
            <div
              key={`${sponsor.name}-${index}`}
              className="flex-shrink-0 group mx-6 md:mx-8"
            >
              {sponsor.url ? (
                <a
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative p-3 md:p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-500 hover:scale-110 hover:bg-white/10 hover:border-red-500/30 focus:scale-110 focus:outline-none focus:ring-2 focus:ring-red-500/50 group"
                  aria-label={`Visit ${sponsor.name} website`}
                >
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-red-500/0 via-red-500/0 to-blue-500/0 group-hover:from-red-500/5 group-hover:via-transparent group-hover:to-blue-500/5 transition-all duration-500" />
                  <img
                    src={sponsor.logo}
                    alt={`${sponsor.name} logo`}
                    className="relative h-8 md:h-10 w-auto max-w-[100px] md:max-w-[120px] object-contain filter brightness-90 contrast-110 group-hover:brightness-100 group-hover:contrast-125 transition-all duration-500"
                  />
                </a>
              ) : (
                <div className="relative p-3 md:p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-500 hover:scale-110 hover:bg-white/10 group">
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-red-500/0 via-red-500/0 to-blue-500/0 group-hover:from-red-500/5 group-hover:via-transparent group-hover:to-blue-500/5 transition-all duration-500" />
                  <img
                    src={sponsor.logo}
                    alt={`${sponsor.name} logo`}
                    className="relative h-8 md:h-10 w-auto max-w-[100px] md:max-w-[120px] object-contain filter brightness-90 contrast-110 group-hover:brightness-100 group-hover:contrast-125 transition-all duration-500"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Enhanced gradient overlays for smoother edges */}
        <div className="absolute left-0 top-0 h-full w-20 md:w-32 bg-gradient-to-r from-black/95 via-gray-900/60 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-20 md:w-32 bg-gradient-to-l from-black/95 via-gray-900/60 to-transparent pointer-events-none" />
        
        {/* Subtle bottom accent line */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      </div>
    </motion.div>
  );
}