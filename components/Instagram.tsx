'use client';

import dynamic from 'next/dynamic';

const InstagramEmbed = dynamic(() => import('./InstagramEmbed'), { ssr: false });

export default InstagramEmbed;