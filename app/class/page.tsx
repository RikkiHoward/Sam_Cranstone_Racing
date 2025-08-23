'use client';

import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Settings, Timer, Target } from 'lucide-react';

// Direct JSON import for static export
import classesData from '../data/classes.json';

interface RacingClass {
  slug: string;
  name: string;
  series: string;
  bike_rules: string;
  tyres: string;
  format: string;
  focus: string;
}

export default function ClassPage() {
  const classes = useMemo(() => classesData as RacingClass[], []);

  const getClassIcon = (index: number) => {
    const icons = [Trophy, Settings, Timer, Target];
    return icons[index % icons.length];
  };

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
                RACING
              </span>
              <br />
              <span className="text-white">CLASSES</span>
            </h1>
            
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Understanding the championships and racing categories where Sam Cranstone competes across the UK circuit racing scene.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {classes.map((racingClass, index) => {
              const Icon = getClassIcon(index);
              
              return (
                <motion.div
                  key={racingClass.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.3 }}
                >
                  <Card className="bg-gray-900/50 border-gray-800 rounded-2xl h-full">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-red-500/20 rounded-xl">
                          <Icon className="text-red-400" size={24} />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-white mb-1">{racingClass.name}</h2>
                          <Badge variant="outline" className="border-blue-500/50 text-blue-400">
                            {racingClass.series}
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                            <Settings size={16} />
                            Bike Regulations
                          </h3>
                          <p className="text-gray-300 text-sm leading-relaxed">
                            • {racingClass.bike_rules}
                          </p>
                        </div>
                        
                        <div>
                          <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                            <Target size={16} />
                            Tyres
                          </h3>
                          <p className="text-gray-300 text-sm leading-relaxed">
                            • {racingClass.tyres}
                          </p>
                        </div>
                        
                        <div>
                          <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                            <Timer size={16} />
                            Race Format
                          </h3>
                          <p className="text-gray-300 text-sm leading-relaxed">
                            • {racingClass.format}
                          </p>
                        </div>
                        
                        <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4">
                          <h3 className="text-blue-400 font-semibold mb-2 flex items-center gap-2">
                            <Trophy size={16} />
                            Championship Focus
                          </h3>
                          <p className="text-blue-200 text-sm leading-relaxed">
                            {racingClass.focus}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Additional Context */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-16 text-center bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-2xl p-8 border border-gray-700"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Championship Journey</h2>
            <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Sam Cranstone competes primarily in the BMCRC Rookie 1000 championship, designed for developing riders transitioning to powerful 1000cc motorcycles. 
              This series emphasizes racecraft development and consistent performance across challenging UK circuits.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}