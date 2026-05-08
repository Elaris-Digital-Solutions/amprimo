/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {},
  webpack: (config) => {
    return config;
  },
}

module.exports = nextConfig
