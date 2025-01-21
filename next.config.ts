import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Only enable these for production build
  ...(process.env.NODE_ENV === 'production' ? {
    output: 'export',  // Enable static exports
    basePath: '/nepal-trek-blog', // Your repo name
  } : {}),
  images: {
    unoptimized: true, // Required for static export
  },
}

export default nextConfig
