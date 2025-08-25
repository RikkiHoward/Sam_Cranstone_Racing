/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: { unoptimized: true },
  transpilePackages: ['framer-motion'],
  trailingSlash: true,
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react']
  }
};

module.exports = nextConfig;
