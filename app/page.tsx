import Hero from '@/components/Hero';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sam Cranstone Racing',
  description: 'Professional motorcycle racing - BMCRC Rookie 1000 • #100 • 2025 Bemsee MRO',
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
    </div>
  );
}