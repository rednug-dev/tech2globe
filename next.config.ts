import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Ensure Turbopack uses this folder as the root in case multiple lockfiles exist higher up.
  turbopack: {
    // __dirname resolves to the folder containing this config file
    root: __dirname,
  },
};

export default nextConfig;
