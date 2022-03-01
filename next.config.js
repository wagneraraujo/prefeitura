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
  env : {
    url: process.env.NEXT_PUBLIC_HOST
  }
}

module.exports = nextConfig
