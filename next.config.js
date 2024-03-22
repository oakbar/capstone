/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    images: {
      domains: ['upload.wikimedia.org'],
    },
    eslint: {
      // Warning: This allows production builds to successfully complete even if
      // your project has ESLint errors.
      ignoreDuringBuilds: true,
    },
    typescript: {
      ignoreBuildErrors: true,
    },
  };
  
