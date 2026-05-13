import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "THM Partners — Marketing & Videoproductie",
  description:
    "Meer klanten, meer zichtbaarheid en groei voor ondernemingen. SEO, videocontent en marketingstrategie — organisch of met slimme ads.",
  openGraph: {
    title: "THM Partners — Marketing & Videoproductie",
    description:
      "Meer klanten, meer zichtbaarheid en groei voor ondernemingen. SEO, videocontent en marketingstrategie — organisch of met slimme ads.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <head>
        <link rel="icon" href="/logo-mark.png" type="image/png" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('theme');
                  var prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
                  var theme = saved || (prefersLight ? 'light' : 'dark');
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {
                  document.documentElement.setAttribute('data-theme', 'dark');
                }
              })();
            `,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
