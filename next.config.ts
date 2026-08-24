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
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "all, index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "appoinmnt-treatment.vercel.app",
          },
        ],
        destination: "https://faizahafeez-bytely-team.vercel.app/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
