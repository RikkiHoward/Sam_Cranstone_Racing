/* eslint react/no-unescaped-entities: "off" */
/* eslint-disable @next/next/no-img-element */
'use client';

import { useMemo } from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, ExternalLink } from 'lucide-react';
import InstagramGrid from '@/components/InstagramGrid';

// Direct JSON import for static export
import galleryData from '../data/gallery.json';

interface GalleryItem {
  src: string;
  alt: string;
  type: 'image' | 'video';
  url?: string;
}

export default function GalleryPage() {
  const gallery = useMemo(() => galleryData as GalleryItem[], []);
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black pt-20 md:pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold font-orbitron mb-6">
              <span className="bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
                RACE
              </span>
              <br />
              <span className="text-white">GALLERY</span>
            </h1>
            
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
              Behind the scenes moments, race action, and the passion that drives every lap.
            </p>

            <Button asChild variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white rounded-2xl">
              <a href="https://instagram.com/samcranstoneracing" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2" size={18} />
                Follow on Instagram
              </a>
            </Button>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {gallery.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card 
                  className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group bg-gray-900 border-gray-800 hover:border-red-500/50 transition-all"
                  onClick={() => setSelectedItem(item)}
                 role="button"
                 tabIndex={0}
                 onKeyDown={(e) => {
                   if (e.key === 'Enter' || e.key === ' ') {
                     e.preventDefault();
                     setSelectedItem(item);
                   }
                 }}
                 aria-label={`View ${item.alt}`}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                   loading="lazy"
                   decoding="async"
                   onError={(e) => {
                     const target = e.target as HTMLImageElement;
                     target.src = 'data:image/svg+xml;base64,' + btoa(`
                       <svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
                         <rect width="100%" height="100%" fill="#1f2937"/>
                         <text x="50%" y="50%" text-anchor="middle" dy="0.3em" fill="#9ca3af" font-family="Arial" font-size="16">
                           Image unavailable
                         </text>
                       </svg>
                     `);
                   }}
                  />
                  
                  {item.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-red-500/80 rounded-full p-4 group-hover:scale-110 transition-transform">
                        <Play className="text-white" size={24} fill="currentColor" />
                      </div>
                    </div>
                  )}
                  
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Instagram Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
          >
            <InstagramGrid />
          </motion.div>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            className="relative max-w-4xl w-full max-h-full"
            onClick={e => e.stopPropagation()}
          >
            <img
              src={selectedItem.src}
              alt={selectedItem.alt}
              className="w-full h-auto max-h-full object-contain rounded-2xl"
             loading="eager"
             decoding="async"
             onError={(e) => {
               const target = e.target as HTMLImageElement;
               target.src = 'data:image/svg+xml;base64,' + btoa(`
                 <svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
                   <rect width="100%" height="100%" fill="#1f2937"/>
                   <text x="50%" y="50%" text-anchor="middle" dy="0.3em" fill="#9ca3af" font-family="Arial" font-size="18">
                     Image unavailable
                   </text>
                 </svg>
               `);
             }}
            />
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
            >
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}