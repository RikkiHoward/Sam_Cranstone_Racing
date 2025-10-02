'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Trophy, TrendingUp, Zap, Medal, Award, Target } from 'lucide-react';
import racesData from '@/app/data/races.json';

export default function StatsDashboard() {
  const completedRaces = racesData.filter(r => r.status === 'completed');

  const podiumFinishes = completedRaces.filter(r => {
    if (!r.result) return false;
    const match = r.result.match(/P(\d+)/);
    return match && parseInt(match[1]) <= 3;
  }).length;

  const wins = completedRaces.filter(r =>
    r.result?.includes('P1')
  ).length;

  const bestLapTime = completedRaces
    .filter(r => r.best_lap)
    .sort((a, b) => {
      const parseTime = (time: string) => {
        const parts = time.replace('s', '').split(':');
        return parts.length === 2
          ? parseFloat(parts[0]) * 60 + parseFloat(parts[1])
          : parseFloat(parts[0]);
      };
      return parseTime(a.best_lap!) - parseTime(b.best_lap!);
    })[0]?.best_lap || 'N/A';

  const totalRaces = completedRaces.length;
  const podiumRate = totalRaces > 0 ? Math.round((podiumFinishes / totalRaces) * 100) : 0;

  const stats = [
    {
      label: 'Championship Titles',
      value: '1',
      sublabel: '2025 BEMSEE MRO',
      icon: Trophy,
      color: 'from-yellow-500 to-amber-600',
    },
    {
      label: 'Race Wins',
      value: wins.toString(),
      sublabel: `${totalRaces} races completed`,
      icon: Medal,
      color: 'from-red-500 to-red-600',
    },
    {
      label: 'Podium Finishes',
      value: podiumFinishes.toString(),
      sublabel: `${podiumRate}% podium rate`,
      icon: Award,
      color: 'from-blue-500 to-blue-600',
    },
    {
      label: 'Best Lap Time',
      value: bestLapTime,
      sublabel: 'Brands Hatch Indy',
      icon: Zap,
      color: 'from-green-500 to-green-600',
    },
  ];

  const recentResults = completedRaces
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <section className="py-12 md:py-20 px-6 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-4">
            <span className="bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
              SEASON
            </span>
            <span className="text-white"> STATISTICS</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Performance data from competitive race weekends across UK circuits
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
              >
                <Card className="bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-all duration-300 group h-full">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                      <Icon size={24} className="text-white" />
                    </div>
                    <div className={`text-4xl font-bold font-orbitron mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                      {stat.value}
                    </div>
                    <div className="text-white font-semibold mb-1 text-sm">
                      {stat.label}
                    </div>
                    <div className="text-gray-500 text-xs">
                      {stat.sublabel}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-white mb-6 font-orbitron">Recent Results</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {recentResults.map((race, index) => (
              <motion.div
                key={race.slug}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
              >
                <Card className="bg-gray-900/50 border-gray-800 hover:border-red-500/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="text-sm text-gray-500 mb-1">
                          {new Date(race.date).toLocaleDateString('en-GB', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric'
                          })}
                        </div>
                        <h4 className="text-white font-bold text-lg">{race.circuit}</h4>
                      </div>
                      {race.result?.includes('P1') && (
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-500 to-amber-600 flex items-center justify-center">
                          <Trophy size={16} className="text-white" />
                        </div>
                      )}
                    </div>
                    <div className="text-sm text-gray-400 mb-2">{race.series}</div>
                    {race.result && (
                      <div className="text-red-400 font-bold text-lg mb-2">{race.result}</div>
                    )}
                    {race.best_lap && (
                      <div className="flex items-center gap-2 text-sm">
                        <Target size={14} className="text-gray-500" />
                        <span className="text-gray-400">Best: {race.best_lap}</span>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
