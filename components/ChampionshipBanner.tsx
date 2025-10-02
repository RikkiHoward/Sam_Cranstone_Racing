'use client';

import { motion } from 'framer-motion';
import { Trophy, TrendingUp, Target, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const stats = [
  { label: 'Championship Wins', value: '1', icon: Trophy, color: 'from-yellow-500 to-amber-600' },
  { label: 'Podium Finishes', value: '5', icon: Award, color: 'from-blue-500 to-blue-600' },
  { label: 'Best Lap Time', value: '49.434s', icon: Target, color: 'from-red-500 to-red-600' },
  { label: 'Season Progress', value: '2025', icon: TrendingUp, color: 'from-green-500 to-green-600' },
];

export default function ChampionshipBanner() {
  return (
    <section className="py-12 md:py-20 px-6 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center mb-6">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="relative"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-full flex items-center justify-center shadow-2xl shadow-yellow-500/50">
                <Trophy size={48} className="text-white" />
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 border-4 border-dashed border-yellow-500/30 rounded-full"
              />
            </motion.div>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-6xl font-bold font-orbitron mb-4"
          >
            <span className="bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 bg-clip-text text-transparent">
              2025 BEMSEE MRO
            </span>
            <br />
            <span className="text-white">CHAMPION</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Dominating the 2025 season with consistent podium finishes and race-winning performances across the UK&apos;s premier motorcycle racing championships.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 * index }}
              >
                <Card className="bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-all duration-300 overflow-hidden group">
                  <CardContent className="p-6 text-center">
                    <div className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                      <Icon size={24} className="text-white" />
                    </div>
                    <div className={`text-3xl md:text-4xl font-bold font-orbitron mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400 font-medium">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-yellow-500/10 to-amber-500/10 border border-yellow-500/20 rounded-2xl px-8 py-4">
            <p className="text-gray-300 text-lg">
              <span className="text-yellow-500 font-bold">Defending Champion</span> • Competing across BMCRC Rookie 1000 & Bemsee MRO
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
