/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
    sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: ['www.manaus.am.gov.br', 'localhost'],
  },
}

module.exports = nextConfig
