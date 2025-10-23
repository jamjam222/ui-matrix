import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../styles/tokens.css";
import "../styles/components.css";
import { ErrorBoundary } from "@/components/error-boundary";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UI Matrix - UI 라이브러리 컴포넌트 갤러리",
  description: "여러 UI 라이브러리의 컴포넌트를 한 곳에서 비교하고 탐색할 수 있는 인터랙티브 갤러리. shadcn/ui, Aceternity UI, Magic UI, Origin UI 통합.",
  keywords: ["UI library", "component gallery", "shadcn", "aceternity", "magic ui", "origin ui", "react", "next.js"],
  authors: [{ name: "jamjam222" }],
  openGraph: {
    title: "UI Matrix - UI 라이브러리 컴포넌트 갤러리",
    description: "여러 UI 라이브러리의 컴포넌트를 한 곳에서 비교하고 탐색",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning style={{ scrollBehavior: 'auto' }}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('scrollRestoration' in history) {
                history.scrollRestoration = 'manual';
              }
              window.scrollTo(0, 0);
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
      </body>
    </html>
  );
}