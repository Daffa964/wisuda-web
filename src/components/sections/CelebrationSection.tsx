"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { siteContent } from "@/data/site-content";
import { Sparkles, PartyPopper, Heart } from "lucide-react";

export function CelebrationSection() {
  const { celebration } = siteContent;
  const [hasCelebrated, setHasCelebrated] = useState(false);
  const [burstCount, setBurstCount] = useState(0);

  const triggerCelebration = () => {
    setHasCelebrated(true);
    setBurstCount((prev) => prev + 1);

    // Check prefers-reduced-motion
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    // Gentle romantic pastel confetti burst
    const colors = ["#F4DDE1", "#C88E9A", "#702F42", "#C6A56B", "#FFFFFF"];

    confetti({
      particleCount: 75,
      spread: 70,
      origin: { y: 0.65 },
      colors: colors,
      disableForReducedMotion: true,
    });

    // Secondary soft burst after 300ms
    setTimeout(() => {
      confetti({
        particleCount: 45,
        angle: 60,
        spread: 55,
        origin: { x: 0.2, y: 0.7 },
        colors: colors,
      });
      confetti({
        particleCount: 45,
        angle: 120,
        spread: 55,
        origin: { x: 0.8, y: 0.7 },
        colors: colors,
      });
    }, 300);
  };

  return (
    <section
      id="celebration"
      className="py-24 px-4 sm:px-6 relative bg-gradient-to-b from-[#FFF9F3] via-[#F4DDE1]/40 to-[#FFF9F3]"
    >
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#702F42] text-xs font-semibold tracking-wider uppercase mb-4 border border-[#C88E9A]/20 shadow-sm">
          <PartyPopper className="w-3.5 h-3.5 text-[#C6A56B]" />
          <span>{celebration.badge}</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#702F42] font-semibold mb-4 leading-tight">
          {celebration.title}
        </h2>

        <p className="text-base sm:text-lg text-[#5B463E]/80 font-light mb-8 max-w-xl mx-auto">
          {celebration.subtitle}
        </p>

        {/* Celebration Button */}
        <div className="flex flex-col items-center gap-4">
          <button
            onClick={triggerCelebration}
            className="group relative px-8 py-4 sm:px-10 sm:py-5 rounded-full bg-gradient-to-r from-[#702F42] to-[#A26B76] text-white text-base sm:text-lg font-medium shadow-xl shadow-[#702F42]/20 hover:shadow-[#702F42]/30 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-3 cursor-pointer"
          >
            <Sparkles className="w-5 h-5 text-[#C6A56B] animate-spin" />
            <span>{celebration.buttonText}</span>
          </button>

          {hasCelebrated && (
            <div className="mt-6 bg-white/95 p-6 rounded-2xl border border-[#C88E9A]/30 shadow-md max-w-lg mx-auto animate-in fade-in zoom-in-95 duration-300">
              <div className="flex items-center justify-center gap-2 text-[#702F42] font-serif text-xl sm:text-2xl font-semibold mb-2">
                <Heart className="w-5 h-5 fill-[#C88E9A] text-[#C88E9A]" />
                <span>{celebration.congratulationToast}</span>
              </div>
              <p className="text-sm text-[#5B463E]/80 font-light">
                {celebration.extraMessage}
              </p>
              {burstCount > 1 && (
                <span className="inline-block mt-3 text-[11px] font-sans text-[#C6A56B] bg-[#FFF9F3] px-3 py-1 rounded-full border border-[#C6A56B]/30">
                  Perayaan ke-{burstCount} 🎉
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
