'use client';

import { useEffect } from 'react';

type Props = {
  url: string; // Instagram post/reel URL
  className?: string;
  caption?: string;
};

export default function InstagramEmbed({ url, className, caption }: Props) {
  useEffect(() => {
    const LOADER_ID = 'ig-embed-loader';
    const loaded = (window as any)?.instgrm?.Embeds?.process;
    const existing = document.getElementById(LOADER_ID) as HTMLScriptElement | null;

    if (loaded) {
      (window as any).instgrm.Embeds.process();
      return;
    }

    if (!existing) {
      const s = document.createElement('script');
      s.id = LOADER_ID;
      s.async = true;
      s.src = 'https://www.instagram.com/embed.js';
      document.body.appendChild(s);
    }
  }, []);

  return (
    <div className={className}>
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{
          background: '#fff',
          border: 0,
          borderRadius: 3,
          boxShadow: '0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)',
          margin: 1,
          maxWidth: 540,
          minWidth: 326,
          padding: 0,
          width: '100%',
        }}
      >
        <a href={url} target="_blank" rel="noreferrer" style={{ display: 'block', padding: 16 }}>
          View this post on Instagram
        </a>
        {caption ? (
          <p style={{ color: '#666', padding: '8px 16px 16px' }}>{caption}</p>
        ) : null}
      </blockquote>
    </div>
  );
}