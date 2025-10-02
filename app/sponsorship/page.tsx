'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Download, Mail, Users, Eye, TrendingUp, Target, Zap } from 'lucide-react';
import Link from 'next/link';

const tiers = [
  {
    name: 'Support Partner',
    price: '£2,500 - £5,000',
    color: 'from-gray-500 to-gray-600',
    borderColor: 'border-gray-600',
    benefits: [
      'Logo on race bike fairings (8cm)',
      'Logo on team transporter',
      'Social media mentions (4 posts/season)',
      'Website sponsor page listing',
      'Race weekend updates featuring your brand',
      'Digital sponsorship certificate',
    ],
  },
  {
    name: 'Associate Partner',
    price: '£5,000 - £10,000',
    color: 'from-blue-500 to-blue-600',
    borderColor: 'border-blue-500',
    featured: true,
    benefits: [
      'Premium logo placement on bike (12cm)',
      'Logo on racing leathers',
      'Logo on team transporter (large)',
      'Social media content (8 posts/season)',
      'Website banner placement',
      'Race day hospitality (2 passes per round)',
      'Quarterly performance reports',
      'Product/service promotion in race content',
      'Paddock access and team introductions',
    ],
  },
  {
    name: 'Headline Partner',
    price: '£10,000+',
    color: 'from-red-500 to-red-600',
    borderColor: 'border-red-500',
    benefits: [
      'Primary logo position on bike (premium placement)',
      'Name inclusion in team title',
      'Prominent branding on leathers and helmet',
      'Dedicated social media campaigns',
      'Homepage website feature',
      'Full race weekend hospitality (4 passes per round)',
      'Behind-the-scenes content creation',
      'Brand activation opportunities at events',
      'Monthly strategy and performance meetings',
      'Exclusive sponsor merchandise',
      'Media interview opportunities',
      'Co-branded press releases',
    ],
  },
];

const valueProps = [
  {
    icon: Eye,
    title: 'Premium Exposure',
    description: 'Your brand visible at every race weekend across top UK circuits with thousands of spectators and online viewers.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Users,
    title: 'Engaged Audience',
    description: 'Connect with passionate motorsport fans who value performance, technology, and the brands behind racing success.',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: TrendingUp,
    title: 'Growing Platform',
    description: '2025 BEMSEE MRO Champion with increasing social media reach, media coverage, and competitive success.',
    color: 'from-yellow-500 to-amber-600',
  },
  {
    icon: Target,
    title: 'Measurable ROI',
    description: 'Quarterly reports with engagement metrics, media value, and brand visibility analysis across all channels.',
    color: 'from-red-500 to-red-600',
  },
];

const stats = [
  { label: 'Race Weekends', value: '8-10', sublabel: 'Per Season' },
  { label: 'Social Reach', value: '15K+', sublabel: 'Monthly Impressions' },
  { label: 'Track Days', value: '20+', sublabel: 'Additional Exposure' },
  { label: 'Media Features', value: '50+', sublabel: 'Articles & Posts' },
];

export default function SponsorshipPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black pt-20 md:pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500/20 to-amber-500/20 border border-yellow-500/30 rounded-full px-6 py-2 mb-6"
            >
              <Zap size={20} className="text-yellow-500" />
              <span className="text-yellow-500 font-bold">2025 BEMSEE MRO Champion</span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold font-orbitron mb-6">
              <span className="bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
                SPONSORSHIP
              </span>
              <br />
              <span className="text-white">OPPORTUNITIES</span>
            </h1>

            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Partner with a proven champion and get your brand in front of passionate motorsport fans across the UK racing scene.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 text-lg font-semibold rounded-2xl">
                <Link href="/contact?type=sponsor">
                  <Mail className="mr-2" size={20} />
                  Request Sponsorship Deck
                </Link>
              </Button>

              <Button asChild size="lg" variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-4 text-lg font-semibold rounded-2xl">
                <a href="#" onClick={(e) => { e.preventDefault(); alert('Sponsorship deck download coming soon!'); }}>
                  <Download className="mr-2" size={20} />
                  Download Media Kit
                </a>
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <Card className="bg-gray-900/50 border-gray-800 text-center">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm font-medium text-gray-400">{stat.label}</div>
                    <div className="text-xs text-gray-500">{stat.sublabel}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 font-orbitron text-center">
              Why Partner With <span className="bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">Sam Cranstone Racing</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {valueProps.map((prop, index) => {
                const Icon = prop.icon;
                return (
                  <motion.div
                    key={prop.title}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <Card className="bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-all duration-300 h-full">
                      <CardContent className="p-8">
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${prop.color} flex items-center justify-center mb-4`}>
                          <Icon size={28} className="text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">{prop.title}</h3>
                        <p className="text-gray-400 leading-relaxed">{prop.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-12 font-orbitron text-center">
              Partnership <span className="bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">Packages</span>
            </h2>

            <div className="grid lg:grid-cols-3 gap-8">
              {tiers.map((tier, index) => (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className={tier.featured ? 'lg:-mt-4 lg:mb-4' : ''}
                >
                  <Card className={`bg-gray-900/50 ${tier.borderColor} border-2 h-full relative overflow-hidden group hover:shadow-2xl transition-all duration-300`}>
                    {tier.featured && (
                      <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-center py-2 text-sm font-bold">
                        MOST POPULAR
                      </div>
                    )}
                    <CardContent className={`p-8 ${tier.featured ? 'pt-14' : ''}`}>
                      <div className="mb-6">
                        <h3 className={`text-2xl font-bold font-orbitron mb-2 bg-gradient-to-r ${tier.color} bg-clip-text text-transparent`}>
                          {tier.name}
                        </h3>
                        <div className="text-3xl font-bold text-white">{tier.price}</div>
                        <div className="text-sm text-gray-400 mt-1">per season</div>
                      </div>

                      <ul className="space-y-4 mb-8">
                        {tier.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className={`mt-0.5 p-1 rounded-full bg-gradient-to-r ${tier.color}`}>
                              <Check size={14} className="text-white" />
                            </div>
                            <span className="text-gray-300 text-sm leading-relaxed">{benefit}</span>
                          </li>
                        ))}
                      </ul>

                      <Button
                        asChild
                        size="lg"
                        className={`w-full ${tier.featured ? `bg-gradient-to-r ${tier.color} hover:opacity-90` : 'bg-gray-800 hover:bg-gray-700'} text-white font-semibold rounded-xl`}
                      >
                        <Link href="/contact?type=sponsor">
                          Get Started
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-red-500/10 to-blue-500/10 rounded-2xl p-8 md:p-12 border border-red-500/20 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Join the Team?</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
              Every partnership is unique. Let&apos;s discuss how we can create a bespoke package that delivers maximum value for your brand and aligns with your marketing objectives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 text-lg font-semibold rounded-2xl">
                <Link href="/contact?type=sponsor">
                  <Mail className="mr-2" size={20} />
                  Schedule a Call
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-semibold rounded-2xl">
                <Link href="/sponsors">
                  <Users className="mr-2" size={20} />
                  Meet Our Partners
                </Link>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
