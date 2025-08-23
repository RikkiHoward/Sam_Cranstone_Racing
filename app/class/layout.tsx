import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Racing Classes | Sam Cranstone',
  description: 'Information about BMCRC Rookie 1000 and other racing championships where Sam Cranstone competes. Class regulations, formats and championship focus.',
  keywords: 'BMCRC Rookie 1000, Bemsee MRO, racing classes, motorcycle championships, UK racing series',
};

export default function ClassLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}