/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/CaioCeretta/dave-blogposts/main/images/**',
      },
    ],
  },
}

module.exports = nextConfig
