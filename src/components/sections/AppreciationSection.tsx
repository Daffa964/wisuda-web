"use client";

import React from "react";
import { siteContent } from "@/data/site-content";
import { Sparkles, Heart, Award, Sun } from "lucide-react";

export function AppreciationSection() {
  const { appreciation } = siteContent;

  const getIcon = (name?: string) => {
    switch (name) {
      case "Heart":
        return <Heart className="w-5 h-5 text-[#C88E9A]" />;
      case "Award":
        return <Award className="w-5 h-5 text-[#C6A56B]" />;
      case "Sun":
        return <Sun className="w-5 h-5 text-[#C6A56B]" />;
      case "Sparkles":
      default:
        return <Sparkles className="w-5 h-5 text-[#702F42]" />;
    }
  };

  return (
    <section
      id="appreciation"
      className="py-24 px-4 sm:px-6 relative bg-gradient-to-b from-[#FFF9F3] via-[#F4DDE1]/30 to-[#FFF9F3]"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#702F42] text-xs font-semibold tracking-wider uppercase mb-3 border border-[#C88E9A]/20 shadow-sm">
            <Heart className="w-3.5 h-3.5 text-[#C88E9A] fill-current" />
            <span>{appreciation.badge}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#702F42] font-semibold mb-4 leading-tight">
            {appreciation.title}
          </h2>
          <p className="text-sm sm:text-base text-[#5B463E]/80 font-light">
            {appreciation.subtitle}
          </p>
        </div>

        {/* Appreciation Cards in Scrapbook Note Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {appreciation.items.map((item, index) => {
            const rotations = ["rotate-[-1deg]", "rotate-[1deg]", "rotate-[1.5deg]", "rotate-[-1deg]"];
            const rotation = rotations[index % rotations.length];

            return (
              <div
                key={item.id}
                className={`bg-white/95 backdrop-blur-sm p-7 rounded-2xl border border-[#C88E9A]/25 shadow-sm hover:shadow-md transition-all duration-300 hover:rotate-0 ${rotation}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#F4DDE1]/60 flex items-center justify-center">
                    {getIcon(item.iconName)}
                  </div>
                  {item.tag && (
                    <span className="text-[11px] font-medium tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-[#FFF9F3] text-[#702F42] border border-[#C88E9A]/30">
                      {item.tag}
                    </span>
                  )}
                </div>

                <h3 className="font-serif text-xl font-semibold text-[#702F42] mb-2">
                  {item.title}
                </h3>

                <p className="text-sm sm:text-base text-[#5B463E]/80 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
