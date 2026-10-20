"use client";

import React, { useState } from "react";
import Image from "next/image";
import { GraduationCap, Heart, BookOpen, Sparkles, Image as ImageIcon } from "lucide-react";

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholderType?: "graduation" | "thesis" | "couple" | "general";
  fill?: boolean;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
}

export function SafeImage({
  src,
  alt,
  className = "",
  placeholderType = "general",
  fill = false,
  width,
  height,
  priority = false,
  sizes,
}: SafeImageProps) {
  const [hasError, setHasError] = useState(false);

  if (!src || src.trim() === "" || hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#FFF9F3] via-[#F4DDE1]/40 to-[#FFF9F3] border border-[#C88E9A]/20 select-none ${
          fill ? "w-full h-full absolute inset-0" : "w-full min-h-[220px]"
        } ${className}`}
      >
        <div className="w-12 h-12 mb-3 rounded-full bg-[#F4DDE1] flex items-center justify-center text-[#702F42] shadow-sm">
          {placeholderType === "graduation" ? (
            <GraduationCap className="w-6 h-6 stroke-[1.5]" />
          ) : placeholderType === "thesis" ? (
            <BookOpen className="w-6 h-6 stroke-[1.5]" />
          ) : placeholderType === "couple" ? (
            <Heart className="w-6 h-6 stroke-[1.5]" />
          ) : (
            <ImageIcon className="w-6 h-6 stroke-[1.5]" />
          )}
        </div>
        <p className="text-xs uppercase tracking-widest text-[#702F42] font-semibold mb-1">
          {alt || "Foto Momen Spesial"}
        </p>
        <span className="text-[11px] text-[#5B463E]/70 font-serif italic max-w-[200px]">
          [Siap diganti foto aslimu]
        </span>
        <div className="mt-2 flex items-center gap-1 text-[10px] text-[#C6A56B]">
          <Sparkles className="w-3 h-3" />
          <span>Kenangan Indah</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${fill ? "w-full h-full" : ""}`}>
      <Image
        src={src}
        alt={alt}
        unoptimized
        className={className}
        fill={fill}
        width={!fill ? width || 600 : undefined}
        height={!fill ? height || 600 : undefined}
        priority={priority}
        sizes={sizes || (fill ? "(max-width: 768px) 100vw, 50vw" : undefined)}
        onError={() => setHasError(true)}
      />
    </div>
  );
}
