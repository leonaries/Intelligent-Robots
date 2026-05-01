import type { NextConfig } from 'next';
import dotenv from 'dotenv';
import path from 'node:path';

dotenv.config({ path: path.resolve(__dirname, '../../.env') });
dotenv.config({ path: path.resolve(__dirname, '.env') });

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname, '../..')
  },
  experimental: {
    ppr: true,
    clientSegmentCache: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      }
    ]
  }
};

export default nextConfig;
