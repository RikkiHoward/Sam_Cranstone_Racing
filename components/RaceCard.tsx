'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Trophy, Clock, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { formatDate, getPodiumColor } from '@/lib/format';
import { Race } from '@/types/race';
import Link from 'next/link';

interface RaceCardProps {
  race: Race;
  index: number;
  showViewButton?: boolean;
}

export default function RaceCard({ race, index, showViewButton = true }: RaceCardProps) {
  const isUpcoming = race.status === 'upcoming';
  
  const parseResults = (result: string) => {
    return result.split('•').map(r => r.trim());
  };

  const resultBadges = race.result ? parseResults(race.result) : [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <Card className="bg-gray-900/50 border-gray-800 hover:border-red-500/50 transition-all duration-300 rounded-2xl overflow-hidden">
        <CardContent className="p-6">
          <div className="flex flex-col gap-4">
            {/* Header Row */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  {race.round && (
                    <Badge variant="outline" className="border-blue-500/50 text-blue-400 text-xs">
                      R{race.round}
                    </Badge>
                  )}
                  <Calendar size={16} className="text-gray-400" />
                  <span className="text-gray-300 font-medium">
                    {race.end_date ? 
                      `${formatDate(race.date)} - ${formatDate(race.end_date)}` : 
                      formatDate(race.date)
                    }
                  </span>
                  {race.time && (
                    <>
                      <Clock size={14} className="text-gray-500 ml-2" />
                      <span className="text-gray-400 text-sm">{race.time}</span>
                    </>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-1">{race.circuit}</h3>
                
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-2">
                  <span className="flex items-center gap-1">
                    <MapPin size={14} />
                    {race.series}
                  </span>
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded-lg">
                    {race.class}
                  </span>
                </div>

                {/* Additional Details */}
                {(race.best_lap || race.notes) && (
                  <div className="text-sm text-gray-400 space-y-1">
                    {race.best_lap && (
                      <div>Best Lap: <span className="text-white font-medium">{race.best_lap}</span></div>
                    )}
                    {race.notes && (
                      <div className="text-gray-500">{race.notes}</div>
                    )}
                  </div>
                )}
              </div>

              {/* Results/Status Section */}
              <div className="flex flex-col gap-2">
                {resultBadges.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {resultBadges.map((result, idx) => {
                      const colors = getPodiumColor(result);
                      return (
                        <div key={idx} className={`flex items-center gap-2 px-3 py-2 ${colors.bg} ${colors.text} rounded-xl`}>
                          <Trophy size={16} />
                          <span className="font-bold text-sm">{result}</span>
                        </div>
                      );
                    })}
                  </div>
                )}

                {isUpcoming && (
                  <div className="px-4 py-2 bg-green-500/20 text-green-400 rounded-xl font-medium text-center">
                    Upcoming
                  </div>
                )}

                {/* View Event Button */}
                {race.slug && showViewButton && (
                  <Button asChild variant="outline" size="sm" className="border-gray-600 text-gray-400 hover:border-red-500 hover:text-red-400 mt-2 focus-ring">
                    <Link href={`/calendar/${race.slug}`}>
                      View Event
                      <ExternalLink size={14} className="ml-2" />
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}