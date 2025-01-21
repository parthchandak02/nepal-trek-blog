import type { NextConfig } from 'next'

const basePath = process.env.NODE_ENV === 'production' ? '/nepal-trek-blog' : ''

const nextConfig: NextConfig = {
  output: 'export',
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './src/lib/image-loader.ts',
  },
  // Ensure trailing slashes are handled consistently
  trailingSlash: true,
}

export default nextConfig
