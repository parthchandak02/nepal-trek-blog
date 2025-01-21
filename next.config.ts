import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/nepal-trek-blog' : '',
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './src/lib/image-loader.ts',
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/nepal-trek-blog' : '',
}

export default nextConfig
