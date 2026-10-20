"use client";

import React from "react";
import { siteContent } from "@/data/site-content";
import { Heart, GraduationCap } from "lucide-react";

export function Footer() {
  const graduationYear = siteContent.graduationDate.split(" ").pop() || "2026";

  return (
    <footer className="py-12 px-4 border-t border-[#C88E9A]/20 bg-[#FFF9F3] text-center text-xs text-[#5B463E]/70 space-y-3">
      <div className="flex items-center justify-center gap-2">
        <GraduationCap className="w-4 h-4 text-[#702F42]" />
        <span className="font-serif font-semibold text-sm text-[#702F42]">
          {siteContent.recipientName} • Class of {graduationYear}
        </span>
      </div>

      <p className="flex items-center justify-center gap-1.5 font-sans">
        Dibuat dengan sepenuh hati oleh{" "}
        <span className="font-medium text-[#702F42]">{siteContent.senderName}</span>
        <Heart className="w-3.5 h-3.5 text-[#C88E9A] fill-current" />
      </p>

      <p className="text-[11px] text-[#5B463E]/50 font-serif italic">
        A personal graduation gift & digital keepsake.
      </p>
    </footer>
  );
}
