"use client";

import React from "react";
import { siteContent } from "@/data/site-content";
import { SafeImage } from "@/components/ui/SafeImage";
import { Milestone, Sparkles } from "lucide-react";

export function JourneyTimeline() {
  const { timeline } = siteContent;

  return (
    <section id="journey" className="py-24 px-4 sm:px-6 relative paper-texture">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F4DDE1] text-[#702F42] text-xs font-semibold tracking-wider uppercase mb-3">
            <Milestone className="w-3.5 h-3.5 text-[#C6A56B]" />
            <span>{timeline.badge}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#702F42] font-semibold mb-4">
            {timeline.title}
          </h2>
          <p className="text-sm sm:text-base text-[#5B463E]/80 font-light">
            {timeline.subtitle}
          </p>
        </div>

        {/* Vertical Timeline Tree */}
        <div className="relative border-l-2 border-[#C88E9A]/30 ml-4 sm:ml-32 md:ml-40 space-y-12 pb-8">
          {timeline.items.map((item, index) => {
            return (
              <div key={item.id} className="relative pl-6 sm:pl-10 group">
                {/* Timeline node marker */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#FFF9F3] border-4 border-[#702F42] group-hover:scale-125 transition-transform duration-300 shadow-sm" />

                {/* Period Badge on the left for desktop / above for mobile */}
                <div className="sm:absolute sm:-left-36 sm:top-1 text-left sm:text-right sm:w-28 mb-2 sm:mb-0">
                  <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#702F42] bg-[#F4DDE1]/60 px-2.5 py-1 rounded-md">
                    {item.period}
                  </span>
                </div>

                {/* Timeline Card Content */}
                <div className="bg-white/90 backdrop-blur-sm p-6 sm:p-7 rounded-2xl border border-[#C88E9A]/20 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="font-serif text-xl sm:text-2xl text-[#702F42] font-semibold">
                      {item.title}
                    </h3>
                    {item.tag && (
                      <span className="text-[11px] font-medium text-[#C6A56B] bg-[#FFF9F3] border border-[#C6A56B]/30 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                        <Sparkles className="w-2.5 h-2.5" />
                        {item.tag}
                      </span>
                    )}
                  </div>

                  <p className="text-sm sm:text-base text-[#5B463E]/80 font-light leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Optional Video Attachment if provided */}
                  {item.video && (
                    <div className="mt-4 pt-4 border-t border-[#C88E9A]/15">
                      <div className="relative max-w-md overflow-hidden rounded-2xl bg-black/90 shadow-md border border-[#C88E9A]/30">
                        <video
                          src={item.video}
                          controls
                          playsInline
                          preload="metadata"
                          className="w-full max-h-[380px] object-contain rounded-2xl"
                        />
                      </div>
                      {item.caption && (
                        <p className="font-script text-base text-[#702F42]/90 mt-2 italic">
                          “{item.caption}”
                        </p>
                      )}
                    </div>
                  )}

                  {/* Optional Photo Attachment if provided */}
                  {item.photo && !item.video && (
                    <div className="mt-4 pt-4 border-t border-[#C88E9A]/15">
                      <div className="relative aspect-[16/9] w-full max-w-md overflow-hidden rounded-xl bg-[#F4DDE1]/20">
                        <SafeImage
                          src={item.photo}
                          alt={item.caption || item.title}
                          placeholderType={index >= 3 ? "thesis" : "general"}
                          fill
                          className="object-cover"
                        />
                      </div>
                      {item.caption && (
                        <p className="font-script text-base text-[#702F42]/80 mt-2 italic">
                          “{item.caption}”
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
