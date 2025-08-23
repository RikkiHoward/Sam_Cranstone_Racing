'use client';

import { useMemo, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import sponsorsData from '../app/data/sponsors.json';

type Tier = 'headline' | 'associate' | 'support';

interface Sponsor {
  name: string;
  logo: string;
  url: string;
  tier: Tier;
}

export default function SponsorStrip() {
  const prefersReducedMotion = useReducedMotion();

  // Normalize + order by tier
  const sponsors = useMemo(() => {
    const data = (sponsorsData as Sponsor[]).filter(Boolean);
    const order: Record<Tier, number> = { headline: 0, associate: 1, support: 2 };
    return [...data].sort((a, b) => order[a.tier] - order[b.tier] || a.name.localeCompare(b.name));
  }, []);

  // Track images that failed to load
  const [failed, setFailed] = useState<Record<string, true>>({});

  const sizesByTier: Record<Tier, string> = {
    headline: 'h-10 md:h-12',     // largest
    associate: 'h-9 md:h-10',
    support: 'h-7 md:h-8',        // smallest
  };

  const gapByTier: Record<Tier, string> = {
    headline: 'gap-6 md:gap-8',
    associate: 'gap-5 md:gap-7',
    support: 'gap-4 md:gap-6',
  };

  // Group by tier for subtle section spacing
  const groups: Record<Tier, Sponsor[]> = { headline: [], associate: [], support: [] };
  for (const s of sponsors) groups[s.tier].push(s);

  const containerAnim = prefersReducedMotion
    ? {}
    : { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.6, duration: 0.6 } };

  return (
    <div className="bg-black/80 border-t border-red-500/20 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <motion.div {...containerAnim} aria-label="Partners" className="flex items-center">
          <span className="mr-4 shrink-0 whitespace-nowrap text-xs font-semibold tracking-widest text-gray-400">
            POWERED BY
          </span>

          <div className="flex w-full items-center overflow-x-auto overflow-y-hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {/* Headline, Associate, Support groups */}
            {(Object.keys(groups) as Tier[]).map((tier, i) => {
              if (!groups[tier].length) return null;

              return (
                <div key={tier} className={`flex items-center ${gapByTier[tier]} pr-6`}>
                  {i > 0 && (
                    <span className="mx-4 hidden h-5 w-px shrink-0 bg-gray-700/50 md:block" aria-hidden />
                  )}

                  {groups[tier].map((s, idx) => {
                    const failedKey = `${s.name}-${idx}`;
                    const isFailed = !!failed[failedKey];

                    return (
                      <motion.a
                        key={failedKey}
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex shrink-0 items-center rounded-xl px-2 py-1 transition"
                        whileHover={prefersReducedMotion ? undefined : { scale: 1.04 }}
                        aria-label={s.name}
                      >
                        {!isFailed ? (
                          <img
                            src={s.logo}
                            alt={s.name}
                            className={`max-w-none object-contain opacity-80 transition
                                       group-hover:opacity-100 group-hover:brightness-110
                                       group-hover:drop-shadow-[0_0_12px_rgba(239,68,68,0.25)]
                                       ${sizesByTier[tier]} grayscale group-hover:grayscale-0`}
                            onError={() =>
                              setFailed((f) => ({ ...f, [failedKey]: true }))
                            }
                            loading="lazy"
                            decoding="async"
                          />
                        ) : (
                          <span
                            className={`inline-flex items-center justify-center rounded-lg
                                        bg-gray-800/80 px-3 py-1 text-xs font-semibold text-white
                                        ring-1 ring-inset ring-gray-700`}
                            title={s.name}
                          >
                            {initials(s.name)}
                          </span>
                        )}
                      </motion.a>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join('');
}
