import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    qualities: [75, 90],
  },
  // three.js ships untranspiled ESM examples; keep it happy under Turbopack.
  transpilePackages: ["three"],
};

export default nextConfig;
