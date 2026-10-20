"use client";

import React, { useEffect } from "react";
import { GalleryPhoto } from "@/types/content";
import { SafeImage } from "@/components/ui/SafeImage";
import { X, ChevronLeft, ChevronRight, Calendar } from "lucide-react";

interface PhotoLightboxProps {
  photo: GalleryPhoto | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  currentIndex: number;
  totalPhotos: number;
}

export function PhotoLightbox({
  photo,
  onClose,
  onNext,
  onPrev,
  currentIndex,
  totalPhotos,
}: PhotoLightboxProps) {
  useEffect(() => {
    if (!photo) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [photo, onClose, onNext, onPrev]);

  if (!photo) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Photo Lightbox"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors cursor-pointer"
        aria-label="Tutup Galeri"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      <button
        onClick={onPrev}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-50 p-2.5 sm:p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors cursor-pointer"
        aria-label="Foto Sebelumnya"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next button */}
      <button
        onClick={onNext}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-50 p-2.5 sm:p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors cursor-pointer"
        aria-label="Foto Berikutnya"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Modal Content Box */}
      <div
        className="relative max-w-4xl w-full max-h-[90vh] bg-[#FFF9F3] rounded-2xl overflow-hidden flex flex-col shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image Display */}
        <div className="relative w-full h-[52vh] sm:h-[62vh] bg-black/5 flex items-center justify-center overflow-hidden">
          <SafeImage
            src={photo.url}
            alt={photo.caption || photo.title}
            placeholderType={photo.category === "graduation" ? "graduation" : "general"}
            fill
            className="object-contain"
          />
        </div>

        {/* Caption & Metadata Footer */}
        <div className="p-4 sm:p-6 bg-[#FFF9F3] border-t border-[#C88E9A]/20">
          <div className="flex items-center justify-between gap-4 mb-2">
            <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#702F42]">
              {photo.title}
            </h3>
            <span className="text-xs text-[#5B463E]/60 font-sans font-medium">
              {currentIndex + 1} / {totalPhotos}
            </span>
          </div>

          <p className="font-script text-lg sm:text-xl text-[#5B463E]/90">
            “{photo.caption}”
          </p>

          {photo.date && (
            <div className="flex items-center gap-1.5 mt-2 text-xs text-[#C88E9A] font-medium">
              <Calendar className="w-3.5 h-3.5" />
              <span>{photo.date}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
