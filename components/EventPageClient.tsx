'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Camera, Clock, Mail, MapPin, Trophy, Users } from 'lucide-react';
import Link from 'next/link';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import SponsorsMarquee from '@/components/SponsorsMarquee';
import RaceCard from '@/components/RaceCard';
import type { Race } from '@/types/race';
import { formatDateRange } from '@/lib/format';

type GalleryItem = { src: string; alt: string; type: 'image' | 'video'; tags?: string[] };

export default function EventPageClient({
  race,
  gallery,
}: {
  race: Race | null;
  gallery: GalleryItem[];
}) {
  if (!race) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black pt-20 md:pt-24 pb-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Event Not Found</h1>
          <p className="text-gray-400 mb-6">The race event you&apos;re looking for doesn&apos;t exist.</p>
          <Button asChild variant="outline" className="border-red-500 text-red-400 hover:bg-red-500 hover:text-white">
            <Link href="/calendar"><ArrowLeft className="mr-2" size={16} />Back to Calendar</Link>
          </Button>
        </div>
      </div>
    );
  }

  const eventGallery = race.galleryTag ? gallery.filter(i => i.tags?.includes(race.galleryTag!)) : [];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      {/* Hero */}
      <div className="relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/wheelie_hero_desktop.jpeg)' }} />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative z-10 pt-20 md:pt-24 pb-8">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Button asChild variant="ghost" className="text-gray-400 hover:text-white mb-6">
                <Link href="/calendar"><ArrowLeft className="mr-2" size={16} />Back to Calendar</Link>
              </Button>

              <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-4">
                  {race.round && (
                    <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/50 text-lg px-4 py-2">Round {race.round}</Badge>
                  )}
                  <Badge className={`text-lg px-4 py-2 ${race.status === 'completed' ? 'bg-red-500/20 text-red-400 border-red-500/50' : 'bg-green-500/20 text-green-400 border-green-500/50'}`}>
                    {race.status === 'completed' ? 'Race Complete' : 'Upcoming'}
                  </Badge>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold font-orbitron mb-4"><span className="text-white">{race.circuit}</span></h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-6">{formatDateRange(race.date, race.end_date)}</p>

                <div className="flex flex-wrap justify-center gap-4 text-gray-400">
                  <span className="flex items-center gap-2"><MapPin size={16} />{race.series}</span>
                  <span className="flex items-center gap-2"><Trophy size={16} />{race.class}</span>
                  {race.time && <span className="flex items-center gap-2"><Clock size={16} />{race.time}</span>}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <SponsorStrip />
        <SponsorsMarquee />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="space-y-12">
          {/* Intro */}
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-lg text-gray-300 leading-relaxed">
              {race.status === 'completed'
                ? <>Sam Cranstone competed in the {race.series} at {race.circuit}, delivering {race.result ? `a ${race.result.toLowerCase()} finish` : 'a strong performance'} in the {race.class} category.{race.notes && ` ${race.notes}`}</>
                : <>Sam Cranstone will be competing in the {race.series} at {race.circuit} in the {race.class} category. This promises to be an exciting race weekend with strong competition across the field.</>}
            </p>
          </div>

          {/* Summary */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6 font-orbitron">Race Summary</h2>
            <RaceCard race={race} index={0} />
          </div>

          {/* Weekend details */}
          {(race.best_lap || race.notes) && (
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-6">Weekend Details</h3>
              <Card className="bg-gray-900/50 border-gray-800">
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {race.best_lap && (<div><h4 className="text-white font-semibold mb-2">Best Lap Time</h4><p className="text-2xl font-bold text-red-400">{race.best_lap}</p></div>)}
                    {race.notes && (<div><h4 className="text-white font-semibold mb-2">Notes</h4><p className="text-gray-300">{race.notes}</p></div>)}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Gallery */}
          {eventGallery.length > 0 && (
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">Event Gallery</h3>
                <Button asChild variant="outline" size="sm" className="border-gray-600 text-gray-400 hover:border-red-500 hover:text-red-400">
                  <Link href="/gallery"><Camera className="mr-2" size={16} />View All Photos</Link>
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {eventGallery.slice(0, 8).map((item, i) => (
                  <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 * i }} whileHover={{ scale: 1.05 }} className="aspect-square rounded-xl overflow-hidden">
                    <img 
                      src={item.src} 
                      alt={item.alt} 
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'data:image/svg+xml;base64,' + btoa(`
                          <svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
                            <rect width="100%" height="100%" fill="#1f2937"/>
                            <text x="50%" y="50%" text-anchor="middle" dy="0.3em" fill="#9ca3af" font-family="Arial" font-size="14">
                              Image unavailable
                            </text>
                          </svg>
                        `);
                      }}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Sponsor CTA */}
          <div className="text-center bg-gradient-to-r from-red-500/10 to-blue-500/10 rounded-2xl p-8 border border-red-500/20">
            <h3 className="text-3xl font-bold text-white mb-4">Thank You to Our Partners</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              This race weekend is made possible by our incredible sponsors: Fortis Racing, Leadbeatters Labour, Ultra Vision Glazing, and 151&apos;s.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white">
                <Link href="/sponsors"><Users className="mr-2" size={18} />Meet Our Sponsors</Link>
              </Button>
              <Button asChild className="bg-red-500 hover:bg-red-600 text-white">
                <Link href="/contact?type=sponsor"><Mail className="mr-2" size={18} />Join the Team</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
