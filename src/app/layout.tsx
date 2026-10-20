import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans, Caveat } from "next/font/google";
import "./globals.css";
import { siteContent } from "@/data/site-content";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `For You, My Graduate ❤️ | ${siteContent.recipientNickname}`,
  description: `Sebuah hadiah dan perjalanan kenangan wisuda spesial untuk ${siteContent.recipientName} (${siteContent.recipientNickname}). Proudly celebrated by ${siteContent.senderName}.`,
  openGraph: {
    title: `Happy Graduation, ${siteContent.recipientNickname}! 🎓❤️`,
    description: `A personal digital love letter and scrapbook celebrating her journey, her struggles, and her graduation.`,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${playfair.variable} ${jakarta.variable} ${caveat.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#FFF9F3] text-[#5B463E] font-sans antialiased selection:bg-[#F4DDE1] selection:text-[#702F42] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
