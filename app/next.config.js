/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    urlImports: ['https://solpay.togatech.org/'],
  },
}

module.exports = nextConfig
