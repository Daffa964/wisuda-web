"use client";

import React, { useState } from "react";
import { siteContent } from "@/data/site-content";
import { SafeImage } from "@/components/ui/SafeImage";
import { PhotoLightbox } from "@/components/gallery/PhotoLightbox";
import { Images, ZoomIn } from "lucide-react";

export function MemoryGallery() {
  const { gallery } = siteContent;
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const filteredPhotos =
    activeCategory === "all"
      ? gallery.photos
      : gallery.photos.filter((p) => p.category === activeCategory);

  const activePhoto =
    selectedPhotoIndex !== null ? filteredPhotos[selectedPhotoIndex] : null;

  const handleNext = () => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) =>
      prev !== null ? (prev + 1) % filteredPhotos.length : 0
    );
  };

  const handlePrev = () => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) =>
      prev !== null
        ? (prev - 1 + filteredPhotos.length) % filteredPhotos.length
        : 0
    );
  };

  return (
    <section id="gallery" className="py-24 px-4 sm:px-6 relative paper-texture">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F4DDE1] text-[#702F42] text-xs font-semibold tracking-wider uppercase mb-3">
            <Images className="w-3.5 h-3.5 text-[#C6A56B]" />
            <span>{gallery.badge}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#702F42] font-semibold mb-4">
            {gallery.title}
          </h2>
          <p className="text-sm sm:text-base text-[#5B463E]/80 font-light">
            {gallery.subtitle}
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {gallery.categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setSelectedPhotoIndex(null);
                }}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#702F42] text-white shadow-md shadow-[#702F42]/20"
                    : "bg-white/80 text-[#5B463E] border border-[#C88E9A]/20 hover:bg-[#F4DDE1]/50"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Photo Grid / Scrapbook Polaroid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPhotos.map((photo, index) => {
            const isLandscape = photo.aspect === "landscape";
            const isPortrait = photo.aspect === "portrait";

            return (
              <div
                key={photo.id}
                onClick={() => setSelectedPhotoIndex(index)}
                className="group cursor-pointer polaroid-card rounded-lg flex flex-col justify-between"
              >
                {/* Image Container */}
                <div
                  className={`relative w-full overflow-hidden rounded bg-[#F4DDE1]/30 ${
                    isLandscape
                      ? "aspect-[16/10]"
                      : isPortrait
                      ? "aspect-[3/4]"
                      : "aspect-square"
                  }`}
                >
                  <SafeImage
                    src={photo.url}
                    alt={photo.caption || photo.title}
                    placeholderType={
                      photo.category === "graduation" ? "graduation" : "general"
                    }
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Hover Overlay with Zoom Icon */}
                  <div className="absolute inset-0 bg-[#702F42]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="p-2.5 rounded-full bg-white/90 text-[#702F42] shadow-md">
                      <ZoomIn className="w-5 h-5" />
                    </span>
                  </div>
                </div>

                {/* Polaroid Caption bottom */}
                <div className="mt-4 text-center">
                  <h4 className="font-serif font-semibold text-sm sm:text-base text-[#702F42] mb-1">
                    {photo.title}
                  </h4>
                  <p className="font-script text-base sm:text-lg text-[#5B463E]/80 line-clamp-2">
                    “{photo.caption}”
                  </p>
                  {photo.date && (
                    <span className="text-[10px] text-[#C6A56B] uppercase tracking-wider font-semibold block mt-1">
                      {photo.date}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Component */}
      <PhotoLightbox
        photo={activePhoto}
        onClose={() => setSelectedPhotoIndex(null)}
        onNext={handleNext}
        onPrev={handlePrev}
        currentIndex={selectedPhotoIndex ?? 0}
        totalPhotos={filteredPhotos.length}
      />
    </section>
  );
}
