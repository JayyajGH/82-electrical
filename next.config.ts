import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Create a standalone static site */
  output: 'export',
  images: {
    unoptimized: true, // This stops the URL rewriting you see in your <img> tag
  },
};

export default nextConfig;
