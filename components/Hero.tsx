'use client';

import { motion } from 'framer-motion';
import { Calendar, Handshake, Camera, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SponsorsMarquee from '@/components/SponsorsMarquee';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative min-h-screen md:h-screen flex flex-col overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        {/* Desktop background */}
        <div className="hidden md:block absolute inset-0">
          <img
            src="/wheelie_hero_desktop.jpeg"
            alt="Sam Cranstone racing hero"
            className="w-full h-full object-cover object-center"
            loading="eager"
            decoding="async"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'data:image/svg+xml;base64,' + btoa(`
                <svg width="1920" height="1080" xmlns="http://www.w3.org/2000/svg">
                  <rect width="100%" height="100%" fill="#1f2937"/>
                  <text x="50%" y="50%" text-anchor="middle" dy="0.3em" fill="#9ca3af" font-family="Arial" font-size="24">
                    Hero image loading...
                  </text>
                </svg>
              `);
            }}
          />
        </div>
        {/* Mobile background */}
        <div className="block md:hidden absolute inset-0">
          <img
            src="/Wheelie_mobile.jpeg"
            alt="Sam Cranstone racing hero mobile"
            className="w-full h-full object-cover object-top"
            loading="eager"
            decoding="async"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'data:image/svg+xml;base64,' + btoa(`
                <svg width="800" height="1200" xmlns="http://www.w3.org/2000/svg">
                  <rect width="100%" height="100%" fill="#1f2937"/>
                  <text x="50%" y="50%" text-anchor="middle" dy="0.3em" fill="#9ca3af" font-family="Arial" font-size="20">
                    Mobile hero loading...
                  </text>
                </svg>
              `);
            }}
          />
        </div>

        {/* Overlays */}
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/80" />
        <div className="absolute inset-0 speed-lines" />
      </div>

      {/* Mobile Sponsor Strip - Top Position */}
      <div className="relative z-10 md:hidden">
        <SponsorsMarquee />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 pt-16 md:pt-20 pb-4 min-h-0">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center md:text-left mb-6 md:mb-8"
          >
            <h1 className="text-3xl md:text-7xl font-bold mb-3 md:mb-6 font-orbitron leading-tight">
              <span className="bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">CHASING VICTORY</span>
              <br />
              <span className="text-white">TOGETHER</span>
            </h1>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-base md:text-2xl mb-3 md:mb-8 text-gray-300 font-medium drop-shadow-lg"
            >
              <span className="text-red-400">BMCRC Rookie 1000</span> •
              <span className="text-blue-400 mx-2">#100</span> •
              <span className="text-white">2025 Bemsee MRO</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-2 md:gap-4 justify-center md:justify-start mb-3 md:mb-6"
            >
              <Button asChild size="default" className="bg-red-500 hover:bg-red-600 text-white px-4 md:px-8 py-2 md:py-4 text-sm md:text-lg font-semibold rounded-2xl">
                <Link href="/calendar">
                  <Calendar className="mr-2" size={16} />
                  View 2025 Calendar
                </Link>
              </Button>

              <Button asChild variant="outline" size="default" className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-4 md:px-8 py-2 md:py-4 text-sm md:text-lg font-semibold rounded-2xl">
                <Link href="/contact?type=sponsor">
                  <Handshake className="mr-2" size={16} />
                  Become a Sponsor
                </Link>
              </Button>
            </motion.div>

            {/* Quick Access Links for Mobile */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              className="flex justify-center gap-2 md:hidden"
            >
              <Button asChild variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                <Link href="/class">
                  <Users className="mr-1" size={14} />
                  Racing Classes
                </Link>
              </Button>
              
              <Button asChild variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                <Link href="/gallery">
                  <Camera className="mr-1" size={14} />
                  Photo Gallery
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Desktop Sponsor Strip - Bottom Position */}
      <div className="relative z-10 mt-auto shrink-0 mb-16 md:mb-0 hidden md:block">
        <SponsorsMarquee />
      </div>
    </div>
  );
}
