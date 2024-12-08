import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /prisma\/.*\.mjs$/,
      resolve: {
        fullySpecified: false,
      },
    });

    return config;
  },
};

export default nextConfig;
