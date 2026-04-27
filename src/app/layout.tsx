import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.gotravelandtours.al"),
  title: {
    default: "Go Travel & Tours | Flights, Hotels and Packages",
    template: "%s | Go Travel & Tours",
  },
  description:
    "Premium travel agency in Albania and Kosovo offering flights, hotels, tours, and tailored packages from the new Prishtina office.",
  keywords: [
    "Go Travel & Tours",
    "travel agency Kosovo",
    "travel agency Albania",
    "Prishtina flights",
    "holiday packages",
    "hotels",
  ],
  openGraph: {
    title: "Go Travel & Tours",
    description:
      "Trusted travel experts for flights, hotels, and curated packages across Albania and Kosovo.",
    images: ["/go-travel-logo.png"],
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-slate-50 text-slate-950">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
