import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery | Sam Cranstone',
  description: 'Photo gallery showcasing Sam Cranstone\'s motorcycle racing moments, behind the scenes content, and race action from BMCRC and Bemsee championships.',
  keywords: 'Sam Cranstone photos, motorcycle racing gallery, BMCRC photos, racing action shots, paddock photos',
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}