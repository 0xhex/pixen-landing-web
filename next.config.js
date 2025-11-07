/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'your-bucket.s3.amazonaws.com',
      'storage.luma.ai',
      'pixen-codepad-server.s3.eu-central-1.amazonaws.com',
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.s3.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: '**.s3.eu-central-1.amazonaws.com',
      },
    ],
  },
}

module.exports = nextConfig

