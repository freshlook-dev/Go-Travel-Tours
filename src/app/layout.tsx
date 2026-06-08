import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
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
    default: "Go Travel & Tours | Travel Agency in Prishtine",
    template: "%s | Go Travel & Tours",
  },
  description:
    "Go Travel & Tours helps travelers in Kosovo and Albania book flights, hotels, holiday packages, and premium travel support.",
  openGraph: {
    title: "Go Travel & Tours",
    description:
      "Flights, hotels, packages, and travel support from Rr. Ferid Curri, Prishtine.",
    images: ["/go-travel-logo.png"],
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
      <body className="min-h-full bg-white text-ink">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
