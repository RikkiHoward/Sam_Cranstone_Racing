import './globals.css';
import type { Metadata } from 'next';
import { Inter, Orbitron } from 'next/font/google';
import Navigation from '@/components/Navigation';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { SITE_NAME, SITE_DESC, SITE_URL, SOCIAL } from '@/lib/site';

const inter = Inter({ subsets: ['latin'] });
const orbitron = Orbitron({ subsets: ['latin'], variable: '--font-orbitron' });

export const metadata: Metadata = {
  title: `${SITE_NAME} | BMCRC Rookie 1000 #100 • 2025 Bemsee MRO`,
  description: SITE_DESC,
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESC,
    url: SITE_URL,
    siteName: SITE_NAME,
    images: ['/og-image.jpg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description: SITE_DESC,
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/og-image.jpg`,
      sameAs: [SOCIAL.instagram, SOCIAL.x, SOCIAL.youtube].filter(Boolean),
    },
  };

  const athleteLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Sam Cranstone',
    url: SITE_URL,
    sameAs: [SOCIAL.instagram, SOCIAL.x, SOCIAL.youtube].filter(Boolean),
    jobTitle: 'Motorcycle Racer',
    memberOf: { '@type': 'SportsOrganization', name: 'BMCRC / Bemsee' },
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preload" as="image" href="/wheelie_hero_desktop.jpeg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(athleteLd) }} />
      </head>
      <body className={`${inter.className} ${orbitron.variable} bg-black text-white antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50
                     focus:bg-black focus:text-white focus:ring-2 focus:ring-red-500 rounded px-3 py-2"
        >
          Skip to content
        </a>
        <header role="banner"><Navigation /></header>
        <ErrorBoundary>
          <main id="main-content" role="main" className="pb-16 md:pb-0">{children}</main>
        </ErrorBoundary>
        <footer role="contentinfo" className="sr-only">Sam Cranstone Racing</footer>
      </body>
    </html>
  );
}