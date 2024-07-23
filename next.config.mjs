/** @type {import('next').NextConfig} */

// swc error in console to be fixed in https://github.com/vercel/next.js/pull/66515

import withBundleAnalyzer from '@next/bundle-analyzer';

const isProd = process.env.NODE_ENV === 'production';

const withAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true'
});

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'i.annihil.us',
        pathname: '/u/prod/marvel/**'
      },
      {
        protocol: 'http',
        hostname: 'gateway.marvel.com',
        pathname: '/v1/public/comics/**'
      }
    ],
    formats: ['image/avif', 'image/webp'],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  webpack: (config, { dev }) => {
    if (dev) {
      config.devtool = 'cheap-module-source-map';
    }
    if (isProd) {
      config.optimization.minimize = true;
    }
    return config;
  },
  env: {
    CUSTOM_VAR: isProd ? 'production' : 'development'
  },
  experimental: {
    turbo: {
      resolveAlias: {
        'react': 'preact/compat',
        'react-dom': 'preact/compat'
      },
      resolveExtensions: ['.tsx', '.ts', '.jsx', '.js', '.json', '.mdx', '.mjs']
    },
    ppr: 'incremental',
    reactCompiler: true
  }
};

// export default withAnalyzer(nextConfig);
export default nextConfig;
