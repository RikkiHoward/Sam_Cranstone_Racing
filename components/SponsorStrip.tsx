'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Sponsor {
  name: string;
  logo: string;
  url: string;
  tier: 'headline' | 'associate' | 'support';
}

export default function SponsorStrip() {
  const [sponsors, setSponsors] = useState<Sponsor[]>([]);

  useEffect(() => {
    // Load sponsors data
    fetch('/data/sponsors.json')
      .then(res => res.json())
      .then(data => setSponsors(data))
      .catch(err => console.error('Failed to load sponsors:', err));
  }, []);

  return (
    <div className="bg-black/80 backdrop-blur-sm border-t border-red-500/20 py-4">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex items-center space-x-8 overflow-x-auto scrollbar-hide"
        >
          <span className="text-gray-400 text-sm font-medium whitespace-nowrap">
            POWERED BY
          </span>
          
          <div className="flex items-center space-x-8 md:space-x-12">
            {sponsors.map((sponsor, index) => (
              <motion.a
                key={sponsor.name}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 transition-all duration-300 grayscale hover:grayscale-0 opacity-70 hover:opacity-100"
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 0.7, x: 0 }}
                transition={{ delay: 1.7 + index * 0.1 }}
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="h-8 md:h-12 w-auto object-contain"
                  onError={(e) => {
                    // Fallback to text badge if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.innerHTML = `
                      <div class="px-3 py-1 bg-gray-800 rounded-lg text-white text-sm font-medium">
                        ${sponsor.name}
                      </div>
                    `;
                  }}
                />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}