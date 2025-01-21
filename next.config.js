/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  basePath: '/nepal-trek-blog', // Your repo name
  images: {
    unoptimized: true, // Required for static export
  },
}

module.exports = nextConfig
