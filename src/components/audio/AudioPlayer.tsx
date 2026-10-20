"use client";

import React, { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX, Play, Pause } from "lucide-react";
import { siteContent } from "@/data/site-content";

interface AudioPlayerProps {
  autoPlayTrigger?: boolean;
}

export function AudioPlayer({ autoPlayTrigger }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isAvailable, setIsAvailable] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (siteContent.audio.enabled && autoPlayTrigger && audioRef.current && !isPlaying) {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          setIsPlaying(false);
        });
    }
  }, [autoPlayTrigger, isPlaying]);

  if (!siteContent.audio.enabled) {
    return null;
  }

  const togglePlay = async () => {
    if (!audioRef.current) return;
    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        await audioRef.current.play();
        setIsPlaying(true);
      }
    } catch {
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2 bg-[#FFF9F3]/95 backdrop-blur-md px-3.5 py-2 rounded-full border border-[#C88E9A]/30 shadow-lg shadow-[#702F42]/10 transition-all duration-300 hover:border-[#702F42]/40">
      <audio
        ref={audioRef}
        src={siteContent.audio.src}
        loop
        preload="none"
        onError={() => setIsAvailable(false)}
      />

      <div className="flex items-center gap-2">
        <button
          onClick={togglePlay}
          className={`p-2 rounded-full transition-colors flex items-center justify-center ${
            isPlaying
              ? "bg-[#702F42] text-white shadow-sm"
              : "bg-[#F4DDE1] text-[#702F42] hover:bg-[#C88E9A]/30"
          }`}
          title={isPlaying ? "Jeda Musik" : "Putar Musik"}
          aria-label={isPlaying ? "Jeda Musik Pengiring" : "Putar Musik Pengiring"}
        >
          {isPlaying ? (
            <Pause className="w-3.5 h-3.5 fill-current" />
          ) : (
            <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
          )}
        </button>

        {isPlaying && (
          <button
            onClick={toggleMute}
            className="p-1.5 text-[#702F42]/80 hover:text-[#702F42] transition-colors"
            title={isMuted ? "Bunyikan Musik" : "Bisukan Musik"}
            aria-label={isMuted ? "Bunyikan Musik" : "Bisukan Musik"}
          >
            {isMuted ? (
              <VolumeX className="w-3.5 h-3.5" />
            ) : (
              <Volume2 className="w-3.5 h-3.5" />
            )}
          </button>
        )}

        <div className="hidden sm:flex flex-col text-left pr-1">
          <span className="text-[11px] font-medium text-[#702F42] line-clamp-1 max-w-[130px]">
            {siteContent.audio.title}
          </span>
          <span className="text-[9px] text-[#5B463E]/60 tracking-wider font-serif">
            {isPlaying ? "Sedang Memutar" : isAvailable ? "Musik Pengiring" : "Audio Opsional"}
          </span>
        </div>
      </div>

      {isPlaying && (
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C88E9A] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#702F42]"></span>
        </span>
      )}
    </div>
  );
}
