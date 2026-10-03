import type { Metadata, Viewport } from "next";
import { Inter, Old_Standard_TT } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const oldStandardTt = Old_Standard_TT({
  variable: "--font-serif",
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://patrizio-gentlemens-barber.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Patrizio Gentlemen's Barber Shop | Redland, Bristol",
  description:
    "Classic barbering, beard grooming and beard shaping at a family-run gentlemen's barber shop in Redland, Bristol. Walk-ins welcome, established 1991.",
  openGraph: {
    title: "Patrizio Gentlemen's Barber Shop | Redland, Bristol",
    description:
      "Classic barbering, beard grooming and beard shaping at a family-run gentlemen's barber shop in Redland, Bristol. Walk-ins welcome, established 1991.",
    url: siteUrl,
    siteName: "Patrizio Gentlemen's Barber Shop",
    locale: "en_GB",
    type: "website",
  },
  icons: {
    icon: "/icon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f3ee" },
    { media: "(prefers-color-scheme: dark)", color: "#0d0b0a" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-GB"
      className={`${inter.variable} ${oldStandardTt.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-fg">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
