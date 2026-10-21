export interface TimelineItem {
  id: string;
  period: string;
  title: string;
  description: string;
  photo?: string;
  video?: string;
  caption?: string;
  tag?: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: "all" | "college" | "thesis" | "moments" | "together" | "graduation";
  url: string;
  caption: string;
  date?: string;
  aspect?: "portrait" | "landscape" | "square";
}

export interface AppreciationItem {
  id: string;
  title: string;
  description: string;
  tag?: string;
  iconName?: string;
}

export interface FutureWish {
  id: string;
  title: string;
  description: string;
  iconName?: string;
}

export interface SiteContent {
  recipientName: string;
  recipientNickname: string;
  senderName: string;
  senderNickname: string;
  relationshipDuration?: string;
  graduationDate: string;
  university?: string;
  major?: string;
  degreeTitle?: string;

  opening: {
    badge: string;
    subnote: string;
    headlinePrefix: string;
    description: string;
    buttonText: string;
    skipText: string;
    footerNote: string;
  };

  audio: {
    enabled: boolean;
    src: string;
    title: string;
    artist?: string;
  };

  hero: {
    eyebrow: string;
    title: string;
    highlightWord: string;
    subtitle: string;
    quote: string;
    supportingText: string;
    ctaText: string;
    heroImage: string;
    heroImageAlt: string;
    photoDateNote: string;
  };

  intro: {
    badge: string;
    title: string;
    paragraphs: string[];
    highlightQuote: string;
  };

  timeline: {
    badge: string;
    title: string;
    subtitle: string;
    items: TimelineItem[];
  };

  thesis: {
    badge: string;
    title: string;
    subtitle: string;
    paragraphs: string[];
    quote: string;
    items: {
      title: string;
      caption: string;
      image: string;
    }[];
  };

  gallery: {
    badge: string;
    title: string;
    subtitle: string;
    categories: { id: GalleryPhoto["category"]; label: string }[];
    photos: GalleryPhoto[];
  };

  appreciation: {
    badge: string;
    title: string;
    subtitle: string;
    items: AppreciationItem[];
  };

  loveLetter: {
    badge: string;
    title: string;
    paperNote: string;
    greeting: string;
    paragraphs: string[];
    closing: string;
    signature: string;
    date: string;
  };

  celebration: {
    badge: string;
    title: string;
    subtitle: string;
    buttonText: string;
    congratulationToast: string;
    extraMessage: string;
  };

  futureWishes: {
    badge: string;
    title: string;
    subtitle: string;
    wishes: FutureWish[];
    closingNote: string;
  };

  finalSurprise: {
    badge: string;
    title: string;
    messageParagraphs: string[];
    highlightMessage: string;
    favoritePhoto: string;
    favoritePhotoCaption: string;
    ctaRestart: string;
    ctaGallery: string;
  };

  graduationVideo?: {
    enabled: boolean;
    badge: string;
    title: string;
    subtitle: string;
    src: string;
    caption: string;
  };
}
