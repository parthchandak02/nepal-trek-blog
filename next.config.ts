/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/nepal-trek-blog',
  images: {
    unoptimized: true,
    path: '/nepal-trek-blog',
    loader: 'custom',
    loaderFile: './src/lib/image-loader.ts'
  },
}

module.exports = nextConfig
