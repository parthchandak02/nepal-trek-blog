'use client';

import Image from "next/image";
import { useState } from 'react';
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
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="space-y-2">
      <div className={cn(
        "relative w-full aspect-video overflow-hidden rounded-lg",
        isLoading && "animate-pulse bg-gray-200",
        className
      )}>
        {fill ? (
          <div className="relative aspect-square">
            <Image
              src={src}
              alt={alt}
              fill
              className={cn(
                "object-cover transition-opacity duration-300",
                isLoading ? "opacity-0" : "opacity-100"
              )}
              unoptimized={unoptimized}
              onLoadingComplete={() => setIsLoading(false)}
            />
          </div>
        ) : (
          <Image
            src={src}
            alt={alt}
            width={width || 1200}
            height={height || 675}
            className={cn(
              "rounded-lg transition-opacity duration-300",
              isLoading ? "opacity-0" : "opacity-100"
            )}
            unoptimized={unoptimized}
            onLoadingComplete={() => setIsLoading(false)}
          />
        )}
      </div>
      {caption && (
        <p className="text-center text-sm text-muted-foreground italic mt-8">{caption}</p>
      )}
    </div>
  );
}

export function BlogImageGrid({ images, caption }: {
  images: { src: string; alt: string }[];
  caption?: string;
}) {
  const [loadedImages, setLoadedImages] = useState(new Set<string>());

  const handleImageLoad = (src: string) => {
    setLoadedImages(prev => new Set(prev).add(src));
  };

  const allImagesLoaded = images.every(img => loadedImages.has(img.src));

  return (
    <div className="space-y-2">
      <div className={cn(
        "grid grid-cols-2 gap-4",
        !allImagesLoaded && "animate-pulse bg-gray-200"
      )}>
        {images.map((image, index) => (
          <div key={index} className="relative aspect-square overflow-hidden rounded-lg">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className={cn(
                "object-cover transition-opacity duration-300",
                loadedImages.has(image.src) ? "opacity-100" : "opacity-0"
              )}
              onLoadingComplete={() => handleImageLoad(image.src)}
            />
          </div>
        ))}
      </div>
      {caption && (
        <p className="text-center text-sm text-muted-foreground italic">
          {caption}
        </p>
      )}
    </div>
  );
}
