import type { Metadata } from "next";
import { Gloock, Caveat, Homemade_Apple, Manrope } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";
import { CallFab } from "@/components/call-fab";
import { JsonLd } from "@/components/json-ld";

const gloock = Gloock({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-gloock",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-caveat",
  display: "swap",
});

const homemadeApple = Homemade_Apple({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-homemade-apple",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Murry's Maid Service — Sparkling homes, by Sarah & Hannah",
  description:
    "A family-owned cleaning service for the St. Louis Metro & Metro East — founded by sisters Sarah Murry & Hannah Hancock. Built on trust, hard work, and exceptional service.",
  keywords: [
    "maid service",
    "cleaning service",
    "St. Louis",
    "Metro East",
    "house cleaning",
    "deep cleaning",
    "move in cleaning",
    "move out cleaning",
    "family owned cleaning",
    "Murry's Maid Service",
  ],
  metadataBase: new URL("https://murrysmaids.com"),
  openGraph: {
    title: "Murry's Maid Service — Sparkling homes, by Sarah & Hannah",
    description:
      "Family-owned cleaning service for the St. Louis Metro & Metro East. Founded by sisters Sarah Murry & Hannah Hancock.",
    url: "https://murrysmaids.com",
    siteName: "Murry's Maid Service",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${gloock.variable} ${caveat.variable} ${homemadeApple.variable} ${manrope.variable}`}
    >
      <body className="font-body text-ink bg-[#c3fff9] antialiased overflow-x-hidden leading-relaxed">
        <Nav />
        {children}
        <CallFab />
        <JsonLd />
      </body>
    </html>
  );
}
