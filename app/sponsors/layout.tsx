import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sponsors | Sam Cranstone',
  description: 'Meet the incredible sponsors and partners supporting Sam Cranstone Racing. Discover sponsorship opportunities and partnership tiers available.',
  keywords: 'Sam Cranstone sponsors, racing sponsorship, motorcycle racing partnerships, sponsor opportunities, racing support',
};

export default function SponsorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}