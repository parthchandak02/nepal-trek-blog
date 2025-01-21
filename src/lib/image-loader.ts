import { prefix } from './prefix'

export default function imageLoader({ src }: { src: string }) {
  // Remove any leading slash
  const cleanSrc = src.startsWith('/') ? src.slice(1) : src;

  // In production (GitHub Pages), add the prefix
  if (process.env.NODE_ENV === 'production') {
    return `${prefix}/${cleanSrc}`;
  }

  // In development, just use the clean path
  return `/${cleanSrc}`;
}
