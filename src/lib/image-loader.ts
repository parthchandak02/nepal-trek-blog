import { prefix } from './prefix'

export default function imageLoader({ src }: { src: string }) {
  // Remove any leading slash and clean the path
  const cleanSrc = src.startsWith('/') ? src.slice(1) : src;

  // Always add the prefix in production/GitHub Pages
  if (process.env.NODE_ENV === 'production') {
    // Ensure the path starts with the prefix
    return `${prefix}/${cleanSrc}`.replace(/\/+/g, '/');
  }

  // In development, just use the clean path
  return `/${cleanSrc}`;
}
