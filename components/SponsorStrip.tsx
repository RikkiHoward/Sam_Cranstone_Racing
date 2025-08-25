'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Direct JSON import for static export
import sponsorData from '../app/data/sponsors.json';

interface Sponsor {
  name: string;
  logo: string;
  website?: string;
  tier: string;
}

export default function SponsorStrip() {
  const sponsors = sponsorData as Sponsor[];
  
  // Double the sponsors array for seamless infinite scroll
  const duplicatedSponsors = [...sponsors, ...sponsors];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm py-3 md:py-4 border-t border-gray-700/50"
    >
      <div className="relative overflow-hidden">
        <div className="flex items-center whitespace-nowrap gap-6 md:gap-12 animate-[scrollSponsor_30s_linear_infinite] hover:animation-play-state-paused">
          {duplicatedSponsors.map((sponsor, index) => (
            <div
              key={`${sponsor.name}-${index}`}
              className="flex-shrink-0 group"
            >
              {sponsor.website ? (
                <a
                  href={sponsor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition-all duration-300 hover:scale-110 focus:scale-110"
                  aria-label={`Visit ${sponsor.name} website`}
                >
                  <img
                    src={sponsor.logo}
                    alt={`${sponsor.name} logo`}
                    className="h-8 md:h-12 w-auto object-contain filter brightness-75 group-hover:brightness-100 transition-all duration-300"
                  />
                </a>
              ) : (
                <img
                  src={sponsor.logo}
                  alt={`${sponsor.name} logo`}
                  className="h-8 md:h-12 w-auto object-contain filter brightness-75 group-hover:brightness-100 transition-all duration-300"
                />
              )}
            </div>
          ))}
        </div>
      </div>
      
      {/* Gradient overlays for smooth edges */}
      <div className="absolute left-0 top-0 h-full w-12 md:w-20 bg-gradient-to-r from-gray-900/80 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-12 md:w-20 bg-gradient-to-l from-gray-900/80 to-transparent pointer-events-none" />
    </motion.div>
  );
}