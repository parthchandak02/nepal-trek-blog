export default function imageLoader({ src, width, quality }: { src: string; width?: number; quality?: number }) {
  const prefix = process.env.NODE_ENV === 'production' ? '/nepal-trek-blog' : ''
  if (src.startsWith('/')) {
    return `${prefix}${src}`
  }
  return src
}
