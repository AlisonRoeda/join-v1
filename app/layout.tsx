import type { Metadata } from "next";
import type { ReactNode } from "react";
import "@fontsource-variable/mona-sans/wght.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Join V1 | V1 @ Michigan",
  description: "So, you were curious enough to find this link…",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen w-full bg-black antialiased">
        <style>{`
          html,
          body {
            background-color: #000 !important;
            position: relative;
          }
          .join-v1-page :where(h1, h2, h3) {
            overflow-wrap: normal;
            word-break: normal;
            hyphens: none;
            text-wrap: balance;
          }
          .join-v1-page :where(p, a, label, button) {
            overflow-wrap: normal;
            word-break: normal;
            hyphens: none;
            text-wrap: pretty;
          }
          @media (prefers-reduced-motion: reduce) {
            .will-change-transform {
              transform: none !important;
              animation: none !important;
            }
          }
        `}</style>
        {children}
      </body>
    </html>
  );
}
