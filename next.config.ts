/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  ...(process.env.NODE_ENV === 'production' ? {
    basePath: '/nepal-trek-blog',
  } : {}),
  images: {
    unoptimized: true,
    ...(process.env.NODE_ENV === 'production' ? {
      path: '/nepal-trek-blog',
      loader: 'custom',
      loaderFile: './src/lib/image-loader.ts'
    } : {})
  },
}

module.exports = nextConfig
