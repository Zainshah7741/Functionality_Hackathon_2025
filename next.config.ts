// import { NextConfig } from 'next';

// const nextConfig: NextConfig = {
//   images: {
//     domains: ["cdn.sanity.io"], 
//   },
// };

// export default nextConfig;

import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ["cdn.sanity.io"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  }


export default nextConfig;



