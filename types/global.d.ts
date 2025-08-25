// Global type declarations for the Sam Cranstone Racing website

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process(): void;
      };
    };
  }
}

export {};