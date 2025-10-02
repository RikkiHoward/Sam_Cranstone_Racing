'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Instagram, Users, Eye, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const socialStats = [
  {
    platform: 'Instagram',
    handle: '@samcranstone_racing',
    followers: '2.5K',
    engagement: '8.5%',
    reach: '15K+',
    icon: Instagram,
    color: 'from-pink-500 to-purple-600',
    url: 'https://instagram.com/samcranstone_racing',
  },
];

const metrics = [
  { icon: Users, label: 'Total Followers', value: '2.5K+' },
  { icon: Eye, label: 'Monthly Reach', value: '15K+' },
  { icon: Heart, label: 'Avg Engagement', value: '8.5%' },
];

export default function SocialMediaStats() {
  return (
    <section className="py-12 md:py-16 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-orbitron mb-4">
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              SOCIAL MEDIA
            </span>
            <span className="text-white"> PRESENCE</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Connect with fans and partners across social platforms with engaged motorsport audiences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-center mb-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {socialStats.map((stat) => {
              const Icon = stat.icon;
              return (
                <Card key={stat.platform} className="bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                        <Icon size={32} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{stat.platform}</h3>
                        <p className="text-gray-400">{stat.handle}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center">
                        <div className={`text-3xl font-bold font-orbitron bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                          {stat.followers}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">Followers</div>
                      </div>
                      <div className="text-center">
                        <div className={`text-3xl font-bold font-orbitron bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                          {stat.engagement}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">Engagement</div>
                      </div>
                      <div className="text-center">
                        <div className={`text-3xl font-bold font-orbitron bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                          {stat.reach}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">Monthly Reach</div>
                      </div>
                    </div>

                    <Button
                      asChild
                      className={`w-full bg-gradient-to-r ${stat.color} hover:opacity-90 text-white font-semibold`}
                    >
                      <a href={stat.url} target="_blank" rel="noopener noreferrer">
                        <Icon size={18} className="mr-2" />
                        Follow on {stat.platform}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Card className="bg-gray-900/30 border-gray-800">
                    <CardContent className="p-6 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-blue-600 flex items-center justify-center">
                        <Icon size={24} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-gray-400 mb-1">{metric.label}</div>
                        <div className="text-2xl font-bold text-white">{metric.value}</div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-r from-pink-500/10 to-purple-600/10 border border-pink-500/20 rounded-2xl p-6 text-center"
        >
          <p className="text-gray-300 text-sm md:text-base">
            <span className="text-pink-400 font-bold">Race weekend content</span> • Behind-the-scenes access • Partner spotlights • Track action • Results updates
          </p>
        </motion.div>
      </div>
    </section>
  );
}
