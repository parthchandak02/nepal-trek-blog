import { prefix } from './prefix'

export default function imageLoader({ src }: { src: string }) {
  // If the src already starts with the prefix, don't add it again
  if (src.startsWith(prefix)) {
    return src;
  }
  // Add the prefix to the src
  return `${prefix}${src}`;
}
