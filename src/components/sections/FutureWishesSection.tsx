"use client";

import React from "react";
import { siteContent } from "@/data/site-content";
import { Briefcase, HeartPulse, ShieldCheck, Compass, Star } from "lucide-react";

export function FutureWishesSection() {
  const { futureWishes } = siteContent;

  const getWishIcon = (name?: string) => {
    switch (name) {
      case "Briefcase":
        return <Briefcase className="w-5 h-5 text-[#C6A56B]" />;
      case "HeartPulse":
        return <HeartPulse className="w-5 h-5 text-[#C88E9A]" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-5 h-5 text-[#702F42]" />;
      case "Compass":
      default:
        return <Compass className="w-5 h-5 text-[#C6A56B]" />;
    }
  };

  return (
    <section id="wishes" className="py-24 px-4 sm:px-6 relative paper-texture">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F4DDE1] text-[#702F42] text-xs font-semibold tracking-wider uppercase mb-3">
            <Star className="w-3.5 h-3.5 text-[#C6A56B]" />
            <span>{futureWishes.badge}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#702F42] font-semibold mb-4 leading-tight">
            {futureWishes.title}
          </h2>
          <p className="text-sm sm:text-base text-[#5B463E]/80 font-light">
            {futureWishes.subtitle}
          </p>
        </div>

        {/* Wishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {futureWishes.wishes.map((wish) => (
            <div
              key={wish.id}
              className="bg-white/90 backdrop-blur-sm p-7 rounded-2xl border border-[#C88E9A]/20 shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#FFF9F3] border border-[#C88E9A]/30 flex items-center justify-center shrink-0">
                {getWishIcon(wish.iconName)}
              </div>
              <div>
                <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#702F42] mb-1.5">
                  {wish.title}
                </h3>
                <p className="text-sm sm:text-base text-[#5B463E]/80 font-light leading-relaxed">
                  {wish.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Warm Closing Note */}
        <div className="text-center max-w-xl mx-auto bg-white/70 backdrop-blur-sm px-6 py-4 rounded-2xl border border-[#C88E9A]/20">
          <p className="font-serif italic text-base sm:text-lg text-[#702F42]">
            “{futureWishes.closingNote}”
          </p>
        </div>
      </div>
    </section>
  );
}
