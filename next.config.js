/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'cdn.discordapp.com',
    }, {
      protocol: 'https',
      hostname: 'wtb-kr.s3.ap-northeast-2.amazonaws.com'
    }, {
      protocol: 'https',
      hostname: 'wtb-kr-dev.s3.ap-northeast-2.amazonaws.com'
    }],
    minimumCacheTTL: 24 * 60 * 60,
  },
  typescript: {
    ignoreBuildErrors: true
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: `/g/${process.env.NEXT_PUBLIC_DEFAULT_GUILD_NAME}`,
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig