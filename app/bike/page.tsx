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
          </div>

          <BikeInteractive />
        </motion.div>
      </div>
    </div>
  );
}