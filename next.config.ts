import type { NextConfig } from 'next'

const isProd = process.env.NODE_ENV === 'production'
const prefix = isProd ? '/nepal-trek-blog' : ''

const nextConfig: NextConfig = {
  output: 'export',
  basePath: prefix,
  assetPrefix: prefix,
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
