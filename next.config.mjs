/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;

module.exports = {
    reactOptions: {
      fastRefresh: true,
    },
    experimental: {
      reactMode: 'concurrent',
    },
  };
  