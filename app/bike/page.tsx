'use client';

import { motion } from 'framer-motion';
import BikeInteractive from '@/components/BikeInteractive';

export default function BikePage() {
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
                THE BIKE
              </span>
              <br />
              <span className="text-white">CBR1000RR-R FIREBLADE SP</span>
            </h1>
            
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The ultimate track-focused superbike. Engineered for racing excellence with MotoGP-derived technology and precision components.
            </p>
            
            <div className="bg-gradient-to-r from-blue-500/10 to-red-500/10 rounded-2xl p-6 border border-blue-500/20 max-w-4xl mx-auto mt-8">
              <h3 className="text-blue-400 font-semibold mb-3 text-center">Tuned by MSS Performance</h3>
              <p className="text-gray-300 text-center leading-relaxed mb-4">
                This CBR1000RR-R Fireblade SP has been expertly tuned and prepared by the team at MSS Performance, 
                ensuring optimal performance and reliability for competitive racing across all UK circuits.
              </p>
              <div className="flex justify-center gap-4">
                <a 
                  href="https://www.mssperformance.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
                >
                  www.mssperformance.com
                </a>
                <span className="text-gray-500">•</span>
                <a 
                  href="https://instagram.com/mssperformance" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
                >
                  @mssperformance
                </a>
              </div>
            </div>
          </div>

          <BikeInteractive />
        </motion.div>
      </div>
    </div>
  );
}