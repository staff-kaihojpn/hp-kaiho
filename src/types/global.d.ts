/// <reference types="astro/client" />

// Crisp Chat global types
interface CrispChat {
  open(): void;
  close(): void;
  toggle(): void;
  hide(): void;
  show(): void;
}

interface Crisp {
  chat: CrispChat;
}

// Global window extensions
declare global {
  interface Window {
    Crisp: Crisp;
    $crisp: any[];
    CRISP_WEBSITE_ID: string;
    dataLayer: any[];
    gtag: (...args: any[]) => void;
    StepCard?: (props: {
      step?: number;
      title?: string; 
      description?: string;
      image?: string;
      className?: string;
    }) => string;
  }
}

export {};