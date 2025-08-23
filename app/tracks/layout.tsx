import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tracks | Sam Cranstone',
  description: 'Racing circuits where Sam Cranstone competes in BMCRC and Bemsee championships. Track maps, specifications and circuit analysis.',
  keywords: 'racing circuits, UK tracks, Brands Hatch, Donington Park, Snetterton, motorcycle racing tracks',
};

export default function TracksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}