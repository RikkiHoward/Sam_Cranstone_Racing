'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Ruler, Navigation } from 'lucide-react';

interface Track {
  slug?: string;
  name: string;
  location?: string;
  length_km?: number;
  corners?: number;
  elevation_img?: string;
  map_img?: string;
  sectors?: string[];
  notes?: string;
}

interface TrackMapProps {
  track: Track;
}

export default function TrackMap({ track }: TrackMapProps) {
  return (
    <div className="grid lg:grid-cols-3 gap-8">
      {/* Track Map */}
      <div className="lg:col-span-2">
        <Card className="bg-gray-900/50 border-gray-800 rounded-2xl overflow-hidden">
          <CardContent className="p-0">
            <div className="aspect-[4/3] bg-gray-800 relative">
              <img
                src={track.map_img || '#'}
                alt={`${track.name} track map`}
                className="w-full h-full object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'data:image/svg+xml;base64,' + btoa(`
                    <svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
                      <rect width="100%" height="100%" fill="#374151"/>
                      <text x="50%" y="50%" text-anchor="middle" dy="0.3em" fill="#9ca3af" font-family="Arial" font-size="16">
                        Track map coming soon
                      </text>
                    </svg>
                  `);
                }}
              />
            </div>
          </CardContent>
        </Card>

      </div>

      {/* Track Information */}
      <div className="space-y-6">
        {/* Basic Facts */}
        <Card className="bg-gray-900/50 border-gray-800 rounded-2xl">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="text-red-400" size={18} />
              <span className="text-gray-400">{track.location || 'UK'}</span>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Length</span>
                <Badge variant="outline" className="border-blue-500/50 text-blue-400">
                  <Ruler size={14} className="mr-1" />
                  {track.length_km || '—'} km
                </Badge>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Corners</span>
                <Badge variant="outline" className="border-green-500/50 text-green-400">
                  {track.corners || '—'}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Sectors */}
        {track.sectors && track.sectors.length > 0 && (
          <Card className="bg-gray-900/50 border-gray-800 rounded-2xl">
            <CardContent className="p-6">
              <h3 className="text-white font-semibold mb-4">Track Sectors</h3>
              <div className="space-y-3">
                {track.sectors.map((sector, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Badge className="bg-red-500/20 text-red-400 min-w-fit">
                      S{index + 1}
                    </Badge>
                    <span className="text-gray-300 text-sm">{sector}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Notes */}
        {track.notes && (
          <Card className="bg-blue-500/10 border-blue-500/20 rounded-2xl">
            <CardContent className="p-6">
              <h3 className="text-blue-400 font-semibold mb-3">Track Notes</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {track.notes}
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}