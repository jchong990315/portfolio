/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: 'portfolio', // GitHub repository name
};

module.exports = nextConfig;