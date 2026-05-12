/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: { scrollRestoration: true },
  webpack: (config) => {
    return config;
  },
}

module.exports = nextConfig
