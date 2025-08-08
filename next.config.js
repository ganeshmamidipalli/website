/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Remove deprecated appDir option
  },
  images: {
    domains: [
      'images.ctfassets.net',
      'downloads.ctfassets.net',
      'images.unsplash.com' // Add Unsplash domain
    ],
    formats: ['image/webp', 'image/avif'],
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
}

module.exports = nextConfig
