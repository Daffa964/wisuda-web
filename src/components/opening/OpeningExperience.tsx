"use client";

import React, { useState } from "react";
import { siteContent } from "@/data/site-content";
import { Sparkles, Gift, Heart, ArrowRight } from "lucide-react";

interface OpeningExperienceProps {
  onOpen: () => void;
}

export function OpeningExperience({ onOpen }: OpeningExperienceProps) {
  const [isOpening, setIsOpening] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  const handleOpen = () => {
    setIsOpening(true);
    setTimeout(() => {
      setIsDismissed(true);
      onOpen();
    }, 900);
  };

  const handleSkip = () => {
    setIsDismissed(true);
    onOpen();
  };

  if (isDismissed) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-1000 ${
        isOpening
          ? "opacity-0 scale-105 pointer-events-none"
          : "opacity-100 scale-100 bg-[#FFF9F3]"
      }`}
    >
      {/* Delicate scrapbook background texture & floral accents */}
      <div className="absolute inset-0 paper-texture opacity-80 pointer-events-none" />

      {/* Floating gentle petal accents */}
      <div className="absolute top-12 left-12 w-28 h-28 rounded-full bg-[#F4DDE1]/40 blur-2xl pointer-events-none animate-float-slow" />
      <div className="absolute bottom-12 right-12 w-36 h-36 rounded-full bg-[#C88E9A]/20 blur-3xl pointer-events-none animate-float-slow" />

      {/* Central Envelope / Gift Card Presentation */}
      <div className="relative max-w-lg w-full bg-white/90 backdrop-blur-md p-8 sm:p-12 rounded-3xl border border-[#C88E9A]/30 shadow-2xl shadow-[#702F42]/10 text-center scrapbook-tape">
        {/* Top badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4DDE1]/60 text-[#702F42] text-xs font-medium tracking-wide uppercase mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#C6A56B]" />
          <span>{siteContent.opening.badge}</span>
        </div>

        {/* Small greeting note */}
        <p className="font-script text-2xl text-[#C88E9A] mb-1">
          {siteContent.opening.subnote}
        </p>

        {/* Main Headline */}
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#702F42] leading-tight mb-4">
          {siteContent.opening.headlinePrefix}{" "}
          <span className="italic underline decoration-[#C6A56B]/60 underline-offset-8">
            {siteContent.recipientNickname}
          </span>
          .
        </h1>

        <p className="text-sm sm:text-base text-[#5B463E]/80 leading-relaxed max-w-md mx-auto mb-8 font-light">
          {siteContent.opening.description}
        </p>

        {/* Main Action Button */}
        <div className="flex flex-col items-center gap-3">
          <button
            onClick={handleOpen}
            className="group relative w-full sm:w-auto px-8 py-4 rounded-full bg-[#702F42] text-white font-medium text-base shadow-xl shadow-[#702F42]/20 hover:bg-[#501E2E] hover:shadow-[#702F42]/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer"
          >
            <Gift className="w-5 h-5 text-[#C6A56B] transition-transform duration-300 group-hover:rotate-12" />
            <span>{siteContent.opening.buttonText}</span>
            <ArrowRight className="w-4 h-4 text-[#F4DDE1] transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          {/* Skip option */}
          <button
            onClick={handleSkip}
            className="text-xs text-[#5B463E]/60 hover:text-[#702F42] transition-colors underline-offset-4 hover:underline py-1 cursor-pointer"
          >
            {siteContent.opening.skipText}
          </button>
        </div>

        {/* Footer note inside card */}
        <div className="mt-8 pt-6 border-t border-[#C88E9A]/20 flex items-center justify-center gap-2 text-xs text-[#5B463E]/60 font-serif">
          <Heart className="w-3.5 h-3.5 text-[#C88E9A] fill-current" />
          <span>Dari {siteContent.senderName} {siteContent.opening.footerNote}</span>
        </div>
      </div>
    </div>
  );
}
