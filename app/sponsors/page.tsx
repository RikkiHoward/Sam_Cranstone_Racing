'use client';

import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Mail } from 'lucide-react';
import Link from 'next/link';

// Direct JSON import for static export
import sponsorsData from '../data/sponsors.json';

interface Sponsor {
  name: string;
  tagline?: string;
  logo: string;
  url: string;
  tier: 'headline' | 'associate' | 'support';
}

const tierConfig = {
  headline: { title: 'Headline Partners', color: 'from-red-500 to-red-600', gridCols: 'md:grid-cols-1' },
  associate: { title: 'Associate Partners', color: 'from-blue-500 to-blue-600', gridCols: 'md:grid-cols-2' },
  support: { title: 'Support Partners', color: 'from-gray-500 to-gray-600', gridCols: 'md:grid-cols-3' }
};

export default function SponsorsPage() {
  const sponsors = useMemo(() => sponsorsData as Sponsor[], []);

  const sponsorsByTier = sponsors.reduce((acc, sponsor) => {
    if (!acc[sponsor.tier]) acc[sponsor.tier] = [];
    acc[sponsor.tier].push(sponsor);
    return acc;
  }, {} as Record<string, Sponsor[]>);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black pt-20 md:pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold font-orbitron mb-6">
              <span className="bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
                OUR RACING
              </span>
              <br />
              <span className="text-white">PARTNERS</span>
            </h1>
            
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              We're proud to work with incredible brands who share our passion for excellence and innovation in motorcycle racing.
            </p>

            <Button asChild size="lg" className="bg-gradient-to-r from-red-500 to-blue-500 hover:from-red-600 hover:to-blue-600 text-white px-8 py-4 text-lg font-semibold rounded-2xl">
              <Link href="/contact?type=sponsor">
                <Mail className="mr-2" size={20} />
                <span className="hidden sm:inline">Join the Team - Request Sponsorship Deck</span>
                <span className="sm:hidden">Request Sponsorship</span>
              </Link>
            </Button>
          </div>

          {/* Sponsor Tiers */}
          {Object.entries(tierConfig).map(([tier, config]) => {
            const tierSponsors = sponsorsByTier[tier] || [];
            if (tierSponsors.length === 0) return null;

            return (
              <motion.section
                key={tier}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold text-white mb-8 font-orbitron">
                  <span className={`bg-gradient-to-r ${config.color} bg-clip-text text-transparent`}>
                    {config.title}
                  </span>
                </h2>
                
                <div className={`grid ${config.gridCols} gap-6`}>
                  {tierSponsors.map((sponsor, index) => (
                    <motion.div
                      key={sponsor.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 * index }}
                      whileHover={{ y: -5 }}
                    >
                      <Card className="bg-gray-900/50 border-gray-800 hover:border-red-500/50 transition-all duration-300 rounded-2xl overflow-hidden group">
                        <CardContent className="p-8">
                          <div className="text-center">
                            <div className="mb-6 grayscale group-hover:grayscale-0 transition-all duration-300">
                              <img
                                src={sponsor.logo}
                                alt={sponsor.name}
                                className="h-20 w-auto mx-auto object-contain"
                                onError={(e) => {
                                  // Fallback to text if image fails
                                  const target = e.target as HTMLImageElement;
                                  target.style.display = 'none';
                                  target.parentElement!.innerHTML = `
                                    <div class="h-20 flex items-center justify-center bg-gray-800 rounded-lg">
                                      <span class="text-white font-bold text-lg">${sponsor.name}</span>
                                    </div>
                                  `;
                                }}
                              />
                            </div>
                            
                            <h3 className="text-xl font-bold text-white mb-4">{sponsor.name}</h3>
                            
                            {sponsor.tagline && (
                              <p className="text-gray-400 text-sm mb-4">{sponsor.tagline}</p>
                            )}
                            
                            <Button
                              asChild
                              variant="outline"
                              className="border-gray-600 text-gray-400 hover:border-red-500 hover:text-red-400"
                            >
                              <a href={sponsor.url} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="mr-2" size={16} />
                                Visit Website
                              </a>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            );
          })}

          {/* Partnership CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-center bg-gradient-to-r from-red-500/10 to-blue-500/10 rounded-2xl p-8 border border-red-500/20"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Join the Team?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Partner with Sam Cranstone Racing and get your brand in front of passionate motorsport fans across the UK racing scene.
            </p>
            <Button asChild size="lg" className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 text-lg font-semibold rounded-2xl">
              <Link href="/contact?type=sponsor">
                <span className="hidden sm:inline">Get Sponsorship Details</span>
                <span className="sm:hidden">Get Details</span>
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}