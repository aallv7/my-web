import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  output: 'export', // Enables static export
  basePath: '/my-web', // Required for repository-based pages
  images: {
    unoptimized: true, // GitHub Pages doesn't support Next.js image optimization
  },

};

export default nextConfig;
