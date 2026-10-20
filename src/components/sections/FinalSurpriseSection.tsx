"use client";

import React from "react";
import { siteContent } from "@/data/site-content";
import { SafeImage } from "@/components/ui/SafeImage";
import { Sparkles, Heart, ArrowUp, Images } from "lucide-react";

export function FinalSurpriseSection() {
  const { finalSurprise, senderName, graduationDate } = siteContent;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="py-24 px-4 sm:px-6 relative bg-gradient-to-b from-[#FFF9F3] via-[#FBF0F2] to-[#FFF9F3] overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#702F42] text-xs font-semibold tracking-wider uppercase mb-5 border border-[#C88E9A]/20 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#C6A56B]" />
          <span>{finalSurprise.badge}</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#702F42] font-semibold mb-8 leading-tight">
          {finalSurprise.title}
        </h2>

        {/* Closing Paragraphs */}
        <div className="space-y-4 text-base sm:text-lg text-[#5B463E]/85 leading-relaxed font-light max-w-2xl mx-auto mb-10">
          {finalSurprise.messageParagraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        {/* Favorite Photo Polaroid Display */}
        <div className="max-w-sm mx-auto mb-10">
          <div className="polaroid-card rounded-lg">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded bg-[#F4DDE1]/30">
              <SafeImage
                src={finalSurprise.favoritePhoto}
                alt={finalSurprise.favoritePhotoCaption || "Foto Kenangan Terbaik"}
                placeholderType="graduation"
                fill
                className="object-cover"
              />
            </div>
            <div className="mt-4 text-center">
              <p className="font-script text-2xl text-[#702F42]">
                {finalSurprise.favoritePhotoCaption}
              </p>
              <span className="text-[11px] text-[#5B463E]/60 uppercase tracking-widest font-sans font-medium block mt-1">
                {graduationDate}
              </span>
            </div>
          </div>
        </div>

        {/* Big Highlight Message */}
        <div className="bg-white/90 p-8 rounded-3xl border border-[#C88E9A]/30 shadow-lg max-w-xl mx-auto mb-12">
          <Heart className="w-6 h-6 text-[#C88E9A] fill-current mx-auto mb-3" />
          <p className="font-serif italic text-2xl sm:text-3xl text-[#702F42] font-semibold leading-snug">
            {finalSurprise.highlightMessage}
          </p>
          <div className="mt-4 pt-4 border-t border-[#C88E9A]/20 text-xs text-[#5B463E]/70 font-sans">
            Selalu bangga dan mencintaimu,{" "}
            <span className="font-semibold text-[#702F42]">{senderName}</span>
          </div>
        </div>

        {/* Action Buttons to revisit */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={scrollToTop}
            className="px-6 py-3 rounded-full bg-[#702F42] text-white text-xs sm:text-sm font-medium hover:bg-[#501E2E] shadow-md transition-all flex items-center gap-2 cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
            <span>{finalSurprise.ctaRestart}</span>
          </button>

          <a
            href="#gallery"
            className="px-6 py-3 rounded-full bg-white text-[#702F42] border border-[#C88E9A]/30 text-xs sm:text-sm font-medium hover:bg-[#F4DDE1]/50 shadow-sm transition-all flex items-center gap-2"
          >
            <Images className="w-4 h-4 text-[#C6A56B]" />
            <span>{finalSurprise.ctaGallery}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
