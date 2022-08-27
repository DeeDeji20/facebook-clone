/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify:true,
  images:{
    domians: ['upload.wikimedia.org'],
  },
}

module.exports = nextConfig
