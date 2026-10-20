"use client";

import React from "react";
import { siteContent } from "@/data/site-content";
import { Feather, Heart } from "lucide-react";

export function IntroductionSection() {
  const { intro } = siteContent;

  return (
    <section
      id="intro"
      className="py-20 px-4 sm:px-6 relative bg-gradient-to-b from-transparent via-[#F4DDE1]/25 to-transparent"
    >
      <div className="max-w-3xl mx-auto text-center relative z-10">
        {/* Subtle badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF9F3] text-[#702F42] text-xs font-medium tracking-wider uppercase mb-5 border border-[#C88E9A]/30 shadow-sm">
          <Feather className="w-3.5 h-3.5 text-[#C88E9A]" />
          <span>{intro.badge}</span>
        </div>

        {/* Section Title */}
        <h2 className="font-serif text-3xl sm:text-4xl text-[#702F42] font-semibold leading-tight mb-8">
          {intro.title}
        </h2>

        {/* Editorial Paragraphs */}
        <div className="space-y-4 text-base sm:text-lg text-[#5B463E]/85 leading-relaxed font-light mb-10 max-w-2xl mx-auto">
          {intro.paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        {/* Elegant Highlight Quote Card */}
        <div className="relative inline-block bg-white/90 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-[#C88E9A]/25 shadow-md max-w-xl mx-auto">
          <Heart className="w-5 h-5 text-[#C88E9A] mx-auto mb-3 fill-[#F4DDE1]" />
          <p className="font-serif italic text-lg sm:text-xl text-[#702F42] leading-snug">
            {intro.highlightQuote}
          </p>
        </div>
      </div>
    </section>
  );
}
