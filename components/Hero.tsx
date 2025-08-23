'use client';

import { motion } from 'framer-motion';
import { Calendar, Handshake } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SponsorStrip from './SponsorStrip';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        {/* Desktop background */}
        <div className="hidden md:block absolute inset-0">
          <img
            src="/wheelie_hero_desktop.jpeg"
            alt="Sam Cranstone racing hero"
            className="w-full h-full object-cover object-center"
          />
        </div>
        {/* Mobile background */}
        <div className="block md:hidden absolute inset-0">
          <img
            src="/Wheelie_mobile.jpeg"
            alt="Sam Cranstone racing hero mobile"
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Overlays */}
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/80" />
        <div className="absolute inset-0 speed-lines" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 pt-20 md:pt-16">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-orbitron leading-tight">
              <span className="bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">CHASING VICTORY</span>
              <br />
              <span className="text-white">TOGETHER</span>
            </h1>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-xl md:text-2xl mb-8 text-gray-300 font-medium drop-shadow-lg"
            >
              <span className="text-red-400">BMCRC Rookie 1000</span> •
              <span className="text-blue-400 mx-2">#100</span> •
              <span className="text-white">2025 Bemsee MRO</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <Button asChild size="lg" className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 text-lg font-semibold rounded-2xl">
                <Link href="/calendar">
                  <Calendar className="mr-2" size={20} />
                  View 2025 Calendar
                </Link>
              </Button>

              <Button asChild variant="outline" size="lg" className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-4 text-lg font-semibold rounded-2xl">
                <Link href="/contact?type=sponsor">
                  <Handshake className="mr-2" size={20} />
                  Become a Sponsor
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Sponsor Strip */}
      <div className="relative z-10 mt-auto">
        <SponsorStrip />
      </div>
    </div>
  );
}
