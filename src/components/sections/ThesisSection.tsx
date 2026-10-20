"use client";

import React from "react";
import { siteContent } from "@/data/site-content";
import { SafeImage } from "@/components/ui/SafeImage";
import { HeartHandshake } from "lucide-react";

export function ThesisSection() {
  const { thesis } = siteContent;

  return (
    <section
      id="thesis"
      className="py-24 px-4 sm:px-6 relative bg-gradient-to-b from-[#FFF9F3] via-[#FBF0F2] to-[#FFF9F3]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Storytelling Text */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F4DDE1] text-[#702F42] text-xs font-semibold tracking-wider uppercase">
              <HeartHandshake className="w-3.5 h-3.5 text-[#702F42]" />
              <span>{thesis.badge}</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#702F42] font-semibold leading-tight">
              {thesis.title}
            </h2>

            <p className="text-base text-[#702F42]/80 font-medium font-serif italic">
              {thesis.subtitle}
            </p>

            <div className="space-y-4 text-sm sm:text-base text-[#5B463E]/85 leading-relaxed font-light">
              {thesis.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Heartfelt Quote Banner */}
            <div className="bg-white/90 p-5 rounded-2xl border-l-4 border-[#702F42] shadow-sm">
              <p className="font-serif italic text-base sm:text-lg text-[#702F42]">
                {thesis.quote}
              </p>
            </div>
          </div>

          {/* Right Column: Scrapbook Journal Collage */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative">
              {thesis.items.map((item, idx) => (
                <div
                  key={idx}
                  className={`bg-white p-3 rounded-2xl border border-[#C88E9A]/20 shadow-sm hover:shadow-md transition-all duration-300 ${
                    idx === 2 ? "sm:col-span-2 sm:max-w-md sm:mx-auto" : ""
                  }`}
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-[#F4DDE1]/30 mb-3">
                    <SafeImage
                      src={item.image}
                      alt={item.title}
                      placeholderType="thesis"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h4 className="font-serif font-semibold text-sm sm:text-base text-[#702F42]">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#5B463E]/70 mt-1 font-light">
                    {item.caption}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
