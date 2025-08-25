'use client';

import { motion } from 'framer-motion';

// Direct JSON import for static export
import sponsorsData from '../app/data/sponsors.json';

interface Sponsor {
  name: string;
  url: string;
  logo: string;
  tier: 'headline' | 'associate' | 'support';
  tagline: string;
}

const tierConfig = {
  headline: { 
    label: 'Headline Partner',
    className: 'bg-gradient-to-r from-red-500 to-red-600 text-white text-xs px-2 py-1 rounded-full font-medium'
  },
  associate: { 
    label: 'Associate Partner',
    className: 'bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xs px-2 py-1 rounded-full font-medium'
  },
  support: { 
    label: 'Support Partner',
    className: 'bg-gradient-to-r from-gray-500 to-gray-600 text-white text-xs px-2 py-1 rounded-full font-medium'
  }
};

export default function SponsorsMarquee() {
  const sponsors = sponsorsData as Sponsor[];
  
  // Create enough duplicates for seamless infinite scroll
  const duplicatedSponsors = [...sponsors, ...sponsors, ...sponsors];

  return (
    <section 
      className="w-full bg-gradient-to-r from-black/95 via-gray-900/90 to-black/95 backdrop-blur-md py-8 md:py-12 border-t border-red-500/10 shadow-2xl"
      aria-labelledby="sponsors-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 
            id="sponsors-heading" 
            className="text-2xl md:text-3xl font-bold text-white mb-2 font-orbitron"
          >
            <span className="bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
              Proudly Supported By
            </span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base">
            Our incredible partners who make racing possible
          </p>
        </motion.div>

        {/* Marquee Container */}
        <div className="relative overflow-hidden">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 h-full w-16 md:w-24 bg-gradient-to-r from-black/95 via-gray-900/60 to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 h-full w-16 md:w-24 bg-gradient-to-l from-black/95 via-gray-900/60 to-transparent pointer-events-none z-10" />
          
          {/* Scrolling sponsors */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex animate-marquee hover:animation-pause focus-within:animation-pause"
            style={{ 
              width: 'fit-content',
              // Ensure reduced motion compliance
              animationPlayState: 'running'
            }}
          >
            {duplicatedSponsors.map((sponsor, index) => (
              <div
                key={`${sponsor.name}-${index}`}
                className="flex-shrink-0 mx-4 md:mx-6 group"
              >
                <a
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded-2xl"
                  aria-label={`Visit ${sponsor.name} - ${sponsor.tagline}`}
                >
                  <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-4 md:p-6 transition-all duration-300 hover:bg-gray-700/50 hover:border-red-500/30 hover:scale-105 group-focus:scale-105 group-focus:bg-gray-700/50 group-focus:border-red-500/30 shadow-lg hover:shadow-xl">
                    {/* Logo */}
                    <div className="mb-4 flex justify-center">
                      <img
                        src={sponsor.logo}
                        alt={`${sponsor.name} logo`}
                        className="h-12 md:h-16 w-auto max-w-[120px] md:max-w-[160px] object-contain filter grayscale group-hover:grayscale-0 group-focus:grayscale-0 transition-all duration-300"
                        loading="lazy"
                        decoding="async"
                        onError={(e) => {
                          const target = e.currentTarget as HTMLImageElement;
                          target.style.display = 'none';
                          if (target.parentElement) {
                            target.parentElement.innerHTML = `
                              <div class="h-12 md:h-16 flex items-center justify-center bg-gray-700 rounded-lg px-4">
                                <span class="text-white font-bold text-sm md:text-base">${sponsor.name}</span>
                              </div>
                            `;
                          }
                        }}
                      />
                    </div>
                    
                    {/* Sponsor Name */}
                    <h3 className="text-white font-semibold text-sm md:text-base text-center mb-2 group-hover:text-red-400 transition-colors">
                      {sponsor.name}
                    </h3>
                    
                    {/* Tier Badge */}
                    <div className="flex justify-center mb-3">
                      <span className={tierConfig[sponsor.tier].className}>
                        {tierConfig[sponsor.tier].label}
                      </span>
                    </div>
                    
                    {/* Tagline */}
                    <p className="text-gray-400 text-xs md:text-sm text-center leading-relaxed group-hover:text-gray-300 transition-colors">
                      {sponsor.tagline}
                    </p>
                  </div>
                </a>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom accent line */}
        <div className="mt-6 flex justify-center">
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
        </div>
      </div>
    </section>
  );
}