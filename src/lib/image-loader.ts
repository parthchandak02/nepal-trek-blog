export default function imageLoader({ src }: { src: string }) {
  return src.startsWith('/') ? `/nepal-trek-blog${src}` : src
}
