/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pages: {
    items: ['pages/**/*.{js,jsx,ts,tsx}', 'app/**/*.{js,jsx,ts,tsx}'],
    paths: [],
  },
}

module.exports = nextConfig;
