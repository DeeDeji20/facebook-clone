/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify:true,
  images:{
    domians: ['upload.wikimedia.org', 'platform-lookaside.fbsbx.com'],
  },
}

module.exports = nextConfig
