'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import sponsorsData from '../app/data/sponsors.json';

type Tier = 'headline' | 'associate' | 'support';

interface Sponsor {
  name: string;
  logo?: string;   // optional for now
  url: string;
  tier: Tier;
}

export default function SponsorStrip() {
  const sponsors = useMemo(() => {
    const data = (sponsorsData as Sponsor[]).filter(Boolean);
    const order: Record<Tier, number> = { headline: 0, associate: 1, support: 2 };
    return [...data].sort((a, b) => order[a.tier] - order[b.tier] || a.name.localeCompare(b.name));
  }, []);

  // Staggered fade/slide-in
  const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.06 } } };
  const item = { hidden: { opacity: 0, y: 6 }, show: { opacity: 1, y: 0, transition: { duration: 0.25 } } };

  return (
    <div className="bg-black/80 border-t border-white/10 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center gap-4">
          <span className="shrink-0 text-[10px] md:text-xs font-semibold tracking-[0.18em] text-gray-400">
            POWERED BY
          </span>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex w-full items-center gap-2 md:gap-3 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            aria-label="Sponsors"
          >
            {sponsors.map((s, i) => (
              <SponsorPill key={`${s.name}-${i}`} sponsor={s} variants={item} />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function SponsorPill({
  sponsor,
  variants,
}: {
  sponsor: Sponsor;
  variants: any;
}) {
  const [imgOk, setImgOk] = useState(false);
  const [imgTried, setImgTried] = useState(false); // prevents broken icon flash

  const initials = sponsor.name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join('');

  const tierRing =
    sponsor.tier === 'headline'
      ? 'ring-red-500/40'
      : sponsor.tier === 'associate'
      ? 'ring-blue-500/35'
      : 'ring-gray-500/30';

  return (
    <motion.a
      variants={variants}
      href={sponsor.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1.5 
                  text-xs md:text-sm text-gray-300 hover:text-white transition
                  hover:border-red-500/40 hover:bg-white/[0.08] backdrop-blur-sm`}
    >
      {/* Logo Avatar */}
      <span
        className={`mr-2 md:mr-3 inline-flex h-6 w-6 md:h-7 md:w-7 items-center justify-center overflow-hidden 
                    rounded-full ring-1 ${tierRing} bg-white/90 group-hover:bg-white transition-colors`}
        aria-hidden
      >
        {/* Logo Image */}
        {sponsor.logo && !imgTried ? (
          <img
            src={sponsor.logo}
            alt=""
            className="h-full w-full object-contain p-0.5 group-hover:scale-110 transition-transform duration-200"
            onLoad={() => {
              setImgOk(true);
              setImgTried(true);
            }}
            onError={() => {
              setImgOk(false);
              setImgTried(true); // fall back to initials
            }}
            loading="lazy"
            decoding="async"
          />
        ) : null}

        {/* Fallback Initials */}
        {!imgOk && (
          <span className="text-[8px] md:text-[9px] font-bold text-gray-800 select-none">
            {initials}
          </span>
        )}
      </span>

      {/* Pill text */}
      <span className="whitespace-nowrap">
        {sponsor.name}
      </span>
    </motion.a>
  );
}
