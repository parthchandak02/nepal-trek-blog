import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/nepal-trek-blog' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/nepal-trek-blog' : '',
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './src/lib/image-loader.ts',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'parthchandak02.github.io',
        pathname: '/nepal-trek-blog/**',
      },
    ],
  },
  // Ensure trailing slashes are handled consistently
  trailingSlash: true,
}

export default nextConfig
