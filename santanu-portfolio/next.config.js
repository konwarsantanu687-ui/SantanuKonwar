/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    unoptimized: true, // prevents deployment image errors
  },
};

module.exports = nextConfig;
