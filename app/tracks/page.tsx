'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Ruler, Navigation } from 'lucide-react';

interface Track {
  slug: string;
  name: string;
  location: string;
  length_km: number;
  corners: number;
  elevation_img: string;
  map_img: string;
  sectors: string[];
  notes: string;
}

export default function TracksPage() {
  const [tracks, setTracks] = useState<Track[]>([]);

  useEffect(() => {
    fetch('/data/tracks.json')
      .then(res => res.json())
      .then(data => setTracks(data))
      .catch(err => console.error('Failed to load tracks:', err));
  }, []);

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
              <span className="text-white">CIRCUITS</span>
            </h1>
            
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Explore the challenging circuits where Sam Cranstone competes across the UK racing scene.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tracks.map((track, index) => (
              <motion.div
                key={track.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <Link href={`/tracks/${track.slug}`}>
                  <Card className="bg-gray-900/50 border-gray-800 hover:border-red-500/50 transition-all duration-300 rounded-2xl overflow-hidden group cursor-pointer">
                    <CardContent className="p-0">
                      <div className="aspect-video bg-gray-800 relative overflow-hidden">
                        <img
                          src={track.map_img}
                          alt={`${track.name} track layout`}
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = 'data:image/svg+xml;base64,' + btoa(`
                              <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
                                <rect width="100%" height="100%" fill="#374151"/>
                                <text x="50%" y="50%" text-anchor="middle" dy="0.3em" fill="#9ca3af" font-family="Arial" font-size="14">
                                  Track map coming soon
                                </text>
                              </svg>
                            `);
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      </div>
                      
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                          {track.name}
                        </h3>
                        
                        <div className="flex items-center gap-2 text-gray-400 mb-4">
                          <MapPin size={14} />
                          <span className="text-sm">{track.location}</span>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <Badge variant="outline" className="border-blue-500/50 text-blue-400">
                            <Ruler size={12} className="mr-1" />
                            {track.length_km} km
                          </Badge>
                          
                          <Badge variant="outline" className="border-green-500/50 text-green-400">
                            <Navigation size={12} className="mr-1" />
                            {track.corners} corners
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}