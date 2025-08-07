/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: false, // Matikan SWC minify
  compiler: {},     // Kosongkan agar SWC tidak dipakai
  experimental: {
    forceSwcTransforms: false // Matikan semua SWC transform
  }
};

module.exports = nextConfig;
