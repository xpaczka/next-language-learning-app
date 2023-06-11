/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'platform-lookaside.fbsbx.com' }, // Facebook images
      { protocol: 'https', hostname: 'lh3.googleusercontent.com' }, // Google images
      { protocol: 'https', hostname: 'cdn.discordapp.com' }, // Discord images
    ],
  },
};

module.exports = nextConfig;
