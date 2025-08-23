import './globals.css';
import type { Metadata } from 'next';
import { Inter, Orbitron } from 'next/font/google';
import Navigation from '@/components/Navigation';

const inter = Inter({ subsets: ['latin'] });
const orbitron = Orbitron({ 
  subsets: ['latin'],
  variable: '--font-orbitron'
});

export const metadata: Metadata = {
  title: 'Sam Cranstone Racing | BMCRC Rookie 1000 #100',
  description: 'Professional motorcycle racing - BMCRC Rookie 1000 • #100 • 2025 Bemsee MRO. Chasing Victory, Together.',
  keywords: 'motorcycle racing, BMCRC, Bemsee MRO, CBR1000RR, racing sponsorship',
  openGraph: {
    title: 'Sam Cranstone Racing',
    description: 'Professional motorcycle racing - Chasing Victory, Together',
    type: 'website',
    images: ['/og-image.jpg']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sam Cranstone Racing',
    description: 'Professional motorcycle racing - Chasing Victory, Together'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} ${orbitron.variable} bg-black text-white antialiased`}>
        <Navigation />
        <main className="pb-16 md:pb-0">
          {children}
        </main>
      </body>
    </html>
  );
}