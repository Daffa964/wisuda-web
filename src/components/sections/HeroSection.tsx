"use client";

import React from "react";
import { siteContent } from "@/data/site-content";
import { SafeImage } from "@/components/ui/SafeImage";
import { Sparkles, Calendar, Award, ChevronDown, GraduationCap } from "lucide-react";

export function HeroSection() {
  const { hero, recipientName, recipientNickname, graduationDate, university, major, degreeTitle } = siteContent;

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 overflow-hidden paper-texture"
    >
      {/* Decorative background glow accents */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-[#F4DDE1]/50 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-[#C88E9A]/15 blur-3xl pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        {/* Left Column: Editorial Headline & Storytelling */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4DDE1] text-[#702F42] text-xs font-semibold tracking-wider uppercase mb-5 border border-[#C88E9A]/20">
            <Sparkles className="w-3.5 h-3.5 text-[#C6A56B]" />
            <span>{hero.eyebrow}</span>
          </div>

          {/* Main Title */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#702F42] font-semibold leading-[1.15] mb-5">
            {hero.title}{" "}
            <span className="italic block text-[#C88E9A] font-normal mt-1">
              {hero.highlightWord}
            </span>
          </h1>

          {/* Recipient Identity / Degree Info */}
          <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-[#5B463E] font-medium mb-6 bg-white/80 backdrop-blur-sm px-4 py-2.5 rounded-2xl border border-[#C88E9A]/25">
            <div className="flex items-center gap-1.5 text-[#702F42] font-semibold">
              <GraduationCap className="w-4 h-4 text-[#C6A56B]" />
              <span>{recipientName}{degreeTitle ? `, ${degreeTitle}` : ""}</span>
            </div>
            {university && (
              <>
                <span className="text-[#C88E9A]">•</span>
                <span>{university}</span>
              </>
            )}
            {major && (
              <>
                <span className="text-[#C88E9A]">•</span>
                <span className="text-[#5B463E]/80">{major}</span>
              </>
            )}
          </div>

          {/* Subtitle & Heartfelt quote */}
          <p className="text-base sm:text-lg text-[#5B463E]/90 leading-relaxed mb-5 max-w-xl font-light">
            {hero.subtitle}
          </p>

          <blockquote className="border-l-2 border-[#C6A56B] pl-4 my-2 text-sm sm:text-base italic font-serif text-[#702F42]/90 leading-relaxed max-w-lg bg-[#F4DDE1]/20 py-2 pr-3 rounded-r-lg">
            {hero.quote}
          </blockquote>

          <p className="text-xs sm:text-sm text-[#5B463E]/70 mb-8 max-w-lg mt-3">
            {hero.supportingText}
          </p>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#intro"
              className="px-6 py-3.5 rounded-full bg-[#702F42] text-white text-sm font-medium hover:bg-[#501E2E] shadow-lg shadow-[#702F42]/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
            >
              <span>{hero.ctaText}</span>
              <ChevronDown className="w-4 h-4 text-[#F4DDE1]" />
            </a>

            <div className="flex items-center gap-1.5 text-xs text-[#5B463E]/70 font-medium px-3 py-2">
              <Calendar className="w-3.5 h-3.5 text-[#C6A56B]" />
              <span>{graduationDate}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Editorial Polaroid Photo Composition */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-sm sm:max-w-md">
            {/* Scrapbook Tape effect on top of polaroid */}
            <div className="scrapbook-tape" />

            {/* Polaroid Photo Frame */}
            <div className="polaroid-card rotate-1 transform hover:rotate-0 transition-transform duration-500 rounded-lg">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded bg-[#F4DDE1]/30">
                <SafeImage
                  src={hero.heroImage}
                  alt={hero.heroImageAlt || `Foto Wisuda ${recipientNickname}`}
                  placeholderType="graduation"
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              {/* Polaroid Bottom Caption */}
              <div className="mt-4 pt-2 text-center">
                <p className="font-script text-2xl sm:text-3xl text-[#702F42] leading-tight">
                  Congratulations, {recipientNickname}!
                </p>
                <div className="flex items-center justify-center gap-2 mt-1 text-[11px] text-[#5B463E]/60 uppercase tracking-widest font-sans font-semibold">
                  <Award className="w-3 h-3 text-[#C6A56B]" />
                  <span>{hero.photoDateNote}</span>
                </div>
              </div>
            </div>

            {/* Little floating decorative note pinned beside */}
            <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-[#FFF9F3] border border-[#C88E9A]/40 px-3.5 py-2 rounded-xl shadow-md rotate-[-4deg] hidden sm:block">
              <span className="font-script text-lg text-[#C88E9A] block leading-tight">
                So proud of you! ✨
              </span>
              <span className="text-[10px] text-[#5B463E]/60 font-sans">
                Love, {siteContent.senderNickname}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
