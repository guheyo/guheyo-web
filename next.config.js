/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['app', 'store', 'types', 'lib', 'hooks', 'components'],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.discordapp.com',
      },
      {
        protocol: 'https',
        hostname: '*.ap-northeast-2.amazonaws.com',
      },
    ],
    minimumCacheTTL: 24 * 60 * 60,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  async rewrites() {
    return [
      {
        source: '/@:username',
        destination: '/users/:username',
      },
    ];
  },
};

module.exports = nextConfig;
