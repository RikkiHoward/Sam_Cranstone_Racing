import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sponsorship Opportunities | Sam Cranstone Racing',
  description: 'Partner with 2025 BEMSEE MRO Champion Sam Cranstone. Premium sponsorship packages for brands targeting passionate UK motorsport fans.',
  openGraph: {
    title: 'Sponsorship Opportunities | Sam Cranstone Racing',
    description: 'Partner with 2025 BEMSEE MRO Champion Sam Cranstone. Premium sponsorship packages for brands targeting passionate UK motorsport fans.',
  },
};

export default function SponsorshipLayout({ children }: { children: React.ReactNode }) {
  return children;
}
