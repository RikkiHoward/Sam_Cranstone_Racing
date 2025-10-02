import Hero from '@/components/Hero';
import ChampionshipBanner from '@/components/ChampionshipBanner';
import RaceCard from '@/components/RaceCard';
import SponsorsMarquee from '@/components/SponsorsMarquee';
import InstagramGrid from '@/components/InstagramGrid';
import { Metadata } from 'next';

import racesData from './data/races.json';
import { Race } from '@/types/race';

export const metadata: Metadata = {
  title: 'Sam Cranstone Racing - 2025 BEMSEE MRO Champion',
  description: '2025 BEMSEE MRO Champion - Professional motorcycle racing • BMCRC Rookie 1000 • #100 • UK Circuit Racing',
};

export default function Home() {
  const races = racesData as Race[];

  const upcomingRaces = races
    .filter((race) => race.status === 'upcoming')
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 3);

  const recentRaces = races
    .filter((race) => race.status === 'completed')
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <div className="min-h-screen">
      <Hero />
      <ChampionshipBanner />

      {/* Upcoming Races Section */}
      {upcomingRaces.length > 0 && (
        <section className="py-16 px-6 bg-black">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-8 text-center">
              <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
                UPCOMING
              </span>
              <span className="text-white"> RACES</span>
            </h2>
            <div className="grid gap-6">
              {upcomingRaces.map((race, index) => (
                <RaceCard key={race.slug} race={race} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Recent Results Section */}
      {recentRaces.length > 0 && (
        <section className="py-16 px-6 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-8 text-center">
              <span className="bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
                RECENT
              </span>
              <span className="text-white"> RESULTS</span>
            </h2>
            <div className="grid gap-6">
              {recentRaces.map((race, index) => (
                <RaceCard key={race.slug} race={race} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Sponsors Marquee */}
      <SponsorsMarquee />

      {/* Instagram Grid */}
      <section className="py-16 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-8 text-center">
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              FOLLOW
            </span>
            <span className="text-white"> THE JOURNEY</span>
          </h2>
          <InstagramGrid />
        </div>
      </section>
    </div>
  );
}