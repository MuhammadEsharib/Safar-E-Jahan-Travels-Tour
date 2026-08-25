import React, { useState, useEffect } from "react";

interface ShimmerImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackSrcs?: string[];
  containerClassName?: string;
}

// Guaranteed fallback Unsplash photography URLs with high uptime
const DEFAULT_SANCTUARY_FALLBACKS = [
  "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1200&q=85", // Kaaba Makkah
  "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1200&q=85", // Madinah Green Dome
  "https://images.unsplash.com/photo-1590076215667-873d3b7495ec?auto=format&fit=crop&w=1200&q=85", // Clock Tower
  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=85", // Luxury Hotel Lobby
];

export const ShimmerImage: React.FC<ShimmerImageProps> = ({
  src,
  alt,
  fallbackSrcs = [],
  className = "",
  containerClassName = "",
  ...props
}) => {
  const [currentSrc, setCurrentSrc] = useState<string>(src);
  const [fallbackIndex, setFallbackIndex] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  const allFallbacks = [...fallbackSrcs, ...DEFAULT_SANCTUARY_FALLBACKS];

  useEffect(() => {
    setCurrentSrc(src);
    setFallbackIndex(0);
    setIsLoading(true);
    setIsError(false);
  }, [src]);

  const handleError = () => {
    if (fallbackIndex < allFallbacks.length) {
      const nextFallback = allFallbacks[fallbackIndex];
      setFallbackIndex((prev) => prev + 1);
      setCurrentSrc(nextFallback);
    } else {
      setIsError(true);
      setIsLoading(false);
    }
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className={`relative overflow-hidden ${containerClassName}`}>
      {/* Shimmer Skeleton Placeholder */}
      {isLoading && (
        <div
          className="absolute inset-0 bg-[#151515] z-10 overflow-hidden"
          role="status"
          aria-label={`Loading ${alt}`}
        >
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.8s_infinite] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent"></div>
        </div>
      )}

      {/* Actual Image with smooth fade-in */}
      <img
        src={currentSrc}
        alt={alt}
        onLoad={handleLoad}
        onError={handleError}
        referrerPolicy="no-referrer"
        loading={props.loading ?? "lazy"}
        decoding="async"
        className={`${className} transition-opacity duration-500 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        {...props}
      />

      {/* Fallback pattern if all fail */}
      {isError && (
        <div
          className="absolute inset-0 bg-[#181818] flex flex-col items-center justify-center text-neutral-500 text-xs p-4 text-center"
          role="status"
          aria-live="polite"
        >
          <span className="font-serif-heading text-neutral-400 font-bold mb-1">
            Safar-E-Jahan
          </span>
          <span className="text-[10px] font-mono text-neutral-500">
            Image unavailable
          </span>
        </div>
      )}
    </div>
  );
};
