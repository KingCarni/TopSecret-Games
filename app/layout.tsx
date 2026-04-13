import type { Metadata } from "next";
import { SiteFooter } from "@/components/topsecret/site-footer";
import { SiteHeader } from "@/components/topsecret/site-header";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Top Secret Games",
    template: "%s | Top Secret Games",
  },
  description:
    "Top Secret Games is an indie studio building games, AI tools, and practical digital products with a flagship-led identity.",
  metadataBase: new URL("https://topsecret-games.com"),
  applicationName: "Top Secret Games",
  keywords: [
    "Top Secret Games",
    "indie game studio",
    "Deady Bear's Nightmare",
    "Match Majesty",
    "NOVA",
    "fantasy puzzle game",
    "game development",
    "indie games",
  ],
  authors: [{ name: "Harley Curtis", url: "https://topsecret-games.com" }],
  creator: "Top Secret Games",
  publisher: "Top Secret Games",
  category: "games",
  alternates: {
    canonical: "https://topsecret-games.com",
  },
  openGraph: {
    title: "Top Secret Games",
    description:
      "Classified worlds in development. Indie studio. Current project: Match Majesty.",
    url: "https://topsecret-games.com",
    siteName: "Top Secret Games",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Top Secret Games - Classified worlds. Playable secrets.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Secret Games",
    description:
      "Classified worlds in development. Indie studio building stylish, mysterious, and delightfully playable games.",
    images: ["/opengraph-image"],
  },
  icons: {
    icon: [
      { url: "/icon", type: "image/png", sizes: "32x32" },
      { url: "/icon?size=64", type: "image/png", sizes: "64x64" },
    ],
    apple: [{ url: "/icon?size=180", sizes: "180x180", type: "image/png" }],
    shortcut: ["/icon"],
  },
  other: {
    "contact:email": "har.curtis@topsecret-games.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <div className="min-h-screen">
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
