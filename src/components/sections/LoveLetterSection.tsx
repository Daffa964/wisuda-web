"use client";

import React from "react";
import { siteContent } from "@/data/site-content";
import { Mail, Heart } from "lucide-react";

export function LoveLetterSection() {
  const { loveLetter, recipientNickname } = siteContent;

  return (
    <section id="letter" className="py-24 px-4 sm:px-6 relative paper-texture">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F4DDE1] text-[#702F42] text-xs font-semibold tracking-wider uppercase mb-3">
            <Mail className="w-3.5 h-3.5 text-[#C88E9A]" />
            <span>{loveLetter.badge}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#702F42] font-semibold mb-2">
            {loveLetter.title}
          </h2>
          <p className="font-script text-xl text-[#C88E9A]">
            {loveLetter.paperNote}
          </p>
        </div>

        {/* Vintage Paper Stationery Card */}
        <div className="relative bg-[#FFFCF9] border-2 border-[#C88E9A]/30 rounded-3xl p-8 sm:p-14 shadow-2xl shadow-[#702F42]/10 max-w-3xl mx-auto scrapbook-tape">
          {/* Subtle Wax Seal Motif */}
          <div className="absolute top-6 right-6 sm:top-8 sm:right-8 w-12 h-12 rounded-full bg-[#702F42] text-[#F4DDE1] flex items-center justify-center shadow-md rotate-12 border-2 border-[#C6A56B]">
            <Heart className="w-5 h-5 fill-current" />
          </div>

          {/* Letter Greeting */}
          <div className="mb-8">
            <p className="font-serif text-xl sm:text-2xl text-[#702F42] font-semibold italic">
              {loveLetter.greeting || `Untuk ${recipientNickname},`}
            </p>
            <div className="w-16 h-0.5 bg-[#C6A56B]/60 mt-3" />
          </div>

          {/* Letter Paragraphs */}
          <div className="space-y-6 text-base sm:text-lg text-[#5B463E]/90 leading-relaxed font-light">
            {loveLetter.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Letter Signoff */}
          <div className="mt-12 pt-8 border-t border-[#C88E9A]/20 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-wider text-[#5B463E]/60 font-medium">
                Tertanggal:
              </p>
              <p className="font-serif text-sm sm:text-base text-[#702F42] font-medium mt-0.5">
                {loveLetter.date}
              </p>
            </div>

            <div className="text-left sm:text-right">
              <p className="text-xs uppercase tracking-wider text-[#5B463E]/60 font-medium mb-1">
                {loveLetter.closing}
              </p>
              <p className="font-script text-3xl sm:text-4xl text-[#702F42] font-semibold leading-none">
                {loveLetter.signature}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
