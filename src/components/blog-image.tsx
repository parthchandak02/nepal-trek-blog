import Image from "next/image";
import { cn } from "@/lib/utils";

interface BlogImageProps {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
  className?: string;
  unoptimized?: boolean;
  fill?: boolean;
}

export function BlogImage({
  src,
  alt,
  caption,
  width,
  height,
  className,
  unoptimized = false,
  fill = false,
}: BlogImageProps) {
  return (
    <div className="relative">
      {fill ? (
        <div className="relative aspect-square">
          <Image
            src={src}
            alt={alt}
            fill
            className={cn("object-cover rounded-lg", className)}
            unoptimized={unoptimized}
          />
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width || 1200}
          height={height || 675}
          className={cn("rounded-lg", className)}
          unoptimized={unoptimized}
        />
      )}
      {caption && (
        <p className="text-center text-sm text-muted-foreground italic mt-8">{caption}</p>
      )}
    </div>
  );
}
