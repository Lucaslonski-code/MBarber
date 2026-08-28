import React, { useState } from "react";

interface BrandLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ className = "", size = "md" }) => {
  const [imgError, setImgError] = useState(false);

  const sizeClasses = {
    sm: "h-8",
    md: "h-10 sm:h-12",
    lg: "h-12 sm:h-14 lg:h-16",
  };

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {!imgError ? (
        <img
          src="/m_barber_logo.png"
          alt="M Barber - Barbearia em Colombo, PR"
          onError={() => setImgError(true)}
          className={`${sizeClasses[size]} w-auto object-contain max-w-[180px] sm:max-w-[220px]`}
          loading="eager"
          decoding="async"
        />
      ) : null}

      {imgError ? (
        <div className="flex flex-col">
          <span className="font-display text-lg sm:text-xl md:text-2xl font-extrabold tracking-tight text-white uppercase leading-none">
            M Barber
          </span>
          <span className="text-[10px] sm:text-xs font-mono font-medium text-zinc-400 tracking-widest uppercase mt-1">
            Colombo • PR
          </span>
        </div>
      ) : null}
    </div>
  );
};
