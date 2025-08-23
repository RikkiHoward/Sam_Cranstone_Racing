'use client';

import { useMemo } from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

// Direct JSON import for static export
import bikeData from '../app/data/bike.json';

interface BikeData {
  model: string;
  number: string;
  image: string;
  spec: Record<string, string>;
  hotspots: Array<{
    label: string;
    x: number;
    y: number;
    content: string;
  }>;
}

export default function BikeInteractive() {
  const bike = useMemo(() => bikeData as BikeData, []);
  const [selectedHotspot, setSelectedHotspot] = useState<string | null>(null);

  return (
    <div className="grid lg:grid-cols-2 gap-12">
      {/* Interactive Bike Image */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="relative"
      >
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-900 border border-white/10">
          <img
            src={bike.image}
            alt={bike.model}
            className="w-full h-full object-cover object-center"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'data:image/svg+xml;base64,' + btoa(`
                <svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
                  <rect width="100%" height="100%" fill="#1f2937"/>
                  <text x="50%" y="50%" text-anchor="middle" dy="0.3em" fill="#9ca3af" font-family="Arial" font-size="16">
                    Bike image coming soon
                  </text>
                </svg>
              `);
            }}
          />
          
          {/* Hotspots */}
          {bike.hotspots.map((hotspot, index) => (
            <Dialog key={hotspot.label}>
              <DialogTrigger asChild>
                <button
                  className={`absolute w-4 h-4 rounded-full border-2 border-white bg-red-500 hover:bg-red-600 transition-all transform -translate-x-1/2 -translate-y-1/2 hover:scale-125 ${
                    selectedHotspot === hotspot.label ? 'ring-4 ring-red-500/50' : ''
                  }`}
                  style={{
                    left: `${hotspot.x}%`,
                    top: `${hotspot.y}%`
                  }}
                  onClick={() => setSelectedHotspot(hotspot.label)}
                >
                  <span className="sr-only">{hotspot.label}</span>
                </button>
              </DialogTrigger>
              <DialogContent className="bg-gray-900 border-gray-800">
                <DialogHeader>
                  <DialogTitle className="text-white">{hotspot.label}</DialogTitle>
                </DialogHeader>
                <p className="text-gray-300">{hotspot.content}</p>
              </DialogContent>
            </Dialog>
          ))}
          
          {/* Bike Number Badge */}
          <Badge className="absolute top-4 right-4 bg-red-500 text-white text-lg px-3 py-1">
            {bike.number}
          </Badge>
        </div>

        <p className="text-gray-400 text-sm mt-4 text-center">
          Click the hotspots to explore technical details
        </p>
      </motion.div>

      {/* Specifications */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6 }}
      >
        <Tabs defaultValue="specs" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-gray-800 border-gray-700">
            <TabsTrigger value="specs" className="text-white data-[state=active]:bg-red-500">
              Specifications
            </TabsTrigger>
            <TabsTrigger value="hotspots" className="text-white data-[state=active]:bg-red-500">
              Components
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="specs" className="mt-6">
            <Card className="bg-gray-900/50 border-gray-800">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {Object.entries(bike.spec).map(([key, value]) => (
                    <div key={key} className="border-b border-gray-700/50 pb-3 last:border-b-0">
                      <dt className="text-gray-400 text-sm font-medium capitalize mb-1">
                        {key.replace(/_/g, ' ')}
                      </dt>
                      <dd className="text-white font-medium">{value}</dd>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="hotspots" className="mt-6">
            <div className="space-y-3">
              {bike.hotspots.map((hotspot, index) => (
                <Card 
                  key={hotspot.label} 
                  className={`bg-gray-900/50 border-gray-800 cursor-pointer hover:border-red-500/50 transition-colors ${
                    selectedHotspot === hotspot.label ? 'border-red-500 bg-red-500/5' : ''
                  }`}
                  onClick={() => setSelectedHotspot(hotspot.label)}
                >
                  <CardContent className="p-4">
                    <h4 className="text-white font-semibold mb-2">{hotspot.label}</h4>
                    <p className="text-gray-300 text-sm">{hotspot.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
}