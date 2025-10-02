import Hero from '@/components/Hero';
import ChampionshipBanner from '@/components/ChampionshipBanner';
import StatsDashboard from '@/components/StatsDashboard';
import SocialMediaStats from '@/components/SocialMediaStats';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sam Cranstone Racing - 2025 BEMSEE MRO Champion',
  description: '2025 BEMSEE MRO Champion - Professional motorcycle racing • BMCRC Rookie 1000 • #100 • UK Circuit Racing',
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ChampionshipBanner />
      <StatsDashboard />
      <SocialMediaStats />
    </div>
  );
}