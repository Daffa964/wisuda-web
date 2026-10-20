"use client";

import React, { useState, useEffect } from "react";
import { siteContent } from "@/data/site-content";
import { Menu, X, Sparkles, Heart } from "lucide-react";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      if (totalScroll > 0) {
        setScrollProgress((currentScroll / totalScroll) * 100);
      }
      setScrolled(currentScroll > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#journey", label: "Perjalanan" },
    { href: "#thesis", label: "Skripsi" },
    { href: "#gallery", label: "Galeri Foto" },
    { href: "#appreciation", label: "Apresiasi" },
    { href: "#letter", label: "Surat Cinta" },
    { href: "#celebration", label: "Rayakan" },
    { href: "#wishes", label: "Doa & Harapan" },
  ];

  return (
    <>
      {/* Top Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-transparent z-50 pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-[#C6A56B] via-[#C88E9A] to-[#702F42] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#FFF9F3]/90 backdrop-blur-md shadow-sm border-b border-[#C88E9A]/20 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#hero"
            className="flex items-center gap-2 group transition-transform active:scale-95"
          >
            <div className="w-8 h-8 rounded-full bg-[#F4DDE1] text-[#702F42] flex items-center justify-center font-serif text-sm font-semibold border border-[#C88E9A]/30 group-hover:bg-[#702F42] group-hover:text-white transition-colors">
              {siteContent.recipientNickname.charAt(0)}
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-sm sm:text-base font-semibold text-[#702F42] tracking-wide">
                For {siteContent.recipientNickname}
              </span>
              <span className="text-[10px] text-[#5B463E]/60 tracking-wider uppercase font-medium">
                Graduation Gift
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1.5 lg:gap-3 bg-[#FFF9F3]/80 backdrop-blur-sm px-4 py-1.5 rounded-full border border-[#C88E9A]/20">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1 text-xs font-medium text-[#5B463E] hover:text-[#702F42] hover:bg-[#F4DDE1]/50 rounded-full transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Quick CTA or Mobile Menu Button */}
          <div className="flex items-center gap-2">
            <a
              href="#letter"
              className="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#702F42] text-white text-xs font-medium hover:bg-[#501E2E] shadow-sm transition-all"
            >
              <Heart className="w-3 h-3 text-[#F4DDE1] fill-current" />
              <span>Surat Pribadi</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full text-[#702F42] hover:bg-[#F4DDE1]/60 transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#5B463E]/40 backdrop-blur-sm md:hidden animate-in fade-in duration-200">
          <div className="fixed top-16 left-4 right-4 bg-[#FFF9F3] border border-[#C88E9A]/30 rounded-2xl p-6 shadow-xl space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#C88E9A] pb-2 border-b border-[#C88E9A]/20 flex items-center justify-between">
              <span>Navigasi Kenangan</span>
              <Sparkles className="w-3.5 h-3.5 text-[#C6A56B]" />
            </div>
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 text-sm font-medium text-[#5B463E] hover:text-[#702F42] hover:bg-[#F4DDE1]/40 rounded-xl transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
