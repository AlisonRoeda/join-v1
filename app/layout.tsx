import type { Metadata } from "next";
import type { ReactNode } from "react";
import "@fontsource-variable/mona-sans/wght.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Join V1 | V1 @ Michigan",
  description: "So you were curious enough to find this link and follow it..",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen w-full bg-black antialiased">
        <style>{`
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
