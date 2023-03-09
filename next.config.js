/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "",
  },
  basePath: "/madrasda",
  assetPrefix: "/madrasda",
};

module.exports = nextConfig;