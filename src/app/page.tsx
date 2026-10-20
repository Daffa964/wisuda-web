"use client";

import React, { useState } from "react";
import { OpeningExperience } from "@/components/opening/OpeningExperience";
import { Navigation } from "@/components/layout/Navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { IntroductionSection } from "@/components/sections/IntroductionSection";
import { JourneyTimeline } from "@/components/sections/JourneyTimeline";
import { ThesisSection } from "@/components/sections/ThesisSection";
import { MemoryGallery } from "@/components/gallery/MemoryGallery";
import { AppreciationSection } from "@/components/sections/AppreciationSection";
import { LoveLetterSection } from "@/components/sections/LoveLetterSection";
import { CelebrationSection } from "@/components/sections/CelebrationSection";
import { FutureWishesSection } from "@/components/sections/FutureWishesSection";
import { FinalSurpriseSection } from "@/components/sections/FinalSurpriseSection";
import { Footer } from "@/components/layout/Footer";
import { AudioPlayer } from "@/components/audio/AudioPlayer";

export default function Home() {
  const [surpriseOpened, setSurpriseOpened] = useState(false);

  return (
    <main className="relative min-h-screen">
      {/* 1. Opening Surprise Experience Overlay */}
      <OpeningExperience onOpen={() => setSurpriseOpened(true)} />

      {/* 2. Floating / Sticky Navigation */}
      <Navigation />

      {/* 3. Hero Graduation Section */}
      <HeroSection />

      {/* 4. A Note Before You Continue (Introduction) */}
      <IntroductionSection />

      {/* 5. Her Journey Timeline */}
      <JourneyTimeline />

      {/* 6. The Thesis Era (The Struggle & Late Nights) */}
      <ThesisSection />

      {/* 7. Photo Memory Gallery & Lightbox */}
      <MemoryGallery />

      {/* 8. Things I Admire About You */}
      <AppreciationSection />

      {/* 9. Personal Love Letter */}
      <LoveLetterSection />

      {/* 10. A Little Celebration (Confetti & Bursts) */}
      <CelebrationSection />

      {/* 11. Wishes for the Next Chapter */}
      <FutureWishesSection />

      {/* 12. Final Surprise Closure */}
      <FinalSurpriseSection />

      {/* 13. Footer */}
      <Footer />

      {/* 14. Floating Background Audio Player */}
      <AudioPlayer autoPlayTrigger={surpriseOpened} />
    </main>
  );
}
