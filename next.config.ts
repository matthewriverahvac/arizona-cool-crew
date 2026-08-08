import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  agentRules: false,
  turbopack: { root: process.cwd() },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "cool-fox.com" }],
        destination: "https://www.cool-fox.com/:path*",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
