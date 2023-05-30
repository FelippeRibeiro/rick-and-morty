const { hostname } = require("os");

/** @type {import('next').NextConfig} */
const nextConfig = (module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "",
      },
    ],
  },
});

module.exports = nextConfig;
