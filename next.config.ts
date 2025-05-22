/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fakestoreapi.com',
        port: '', // Leave empty if no specific port
        pathname: '/img/**', // Assuming images are under /img/ path
      },
    ],
  },
};

module.exports = nextConfig;
