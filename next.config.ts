import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  // Allow local network IP for development HMR
  allowedDevOrigins: ["192.168.0.106", "localhost", "127.0.0.1"],
};

export default nextConfig;
