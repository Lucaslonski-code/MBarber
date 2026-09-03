import React from "react";
import { M_BARBER_IMAGES } from "../config/images";

interface BrandLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ className = "", size = "md" }) => {
  const sizeClasses = {
    sm: "h-8 sm:h-9",
    md: "h-10 sm:h-11 md:h-12",
    lg: "h-12 sm:h-14 md:h-16",
  };

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src={M_BARBER_IMAGES.logo.src}
        data-official-file="MbarberLogo.png"
        data-official-src={M_BARBER_IMAGES.logo.publicPath}
        alt={M_BARBER_IMAGES.logo.alt}
        className={`${sizeClasses[size]} w-auto object-contain max-w-[220px] sm:max-w-[280px] drop-shadow-md`}
        loading="eager"
        decoding="async"
      />
    </div>
  );
};

