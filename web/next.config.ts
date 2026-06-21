import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable source maps in production for better debugging and SEO analysis
  productionBrowserSourceMaps: true,

  // Experimental features for better SEO if needed
  // experimental: {
  //   typedRoutes: true,
  // },
};

export default nextConfig;
