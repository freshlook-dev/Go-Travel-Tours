import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LanguageProvider } from "@/components/LanguageProvider";
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
    default: "Go Travel & Tours | Agjenci Udhetimi ne Prishtine dhe Tirane",
    template: "%s | Go Travel & Tours",
  },
  description:
    "Go Travel & Tours ndihmon udhetaret ne Kosove dhe Shqiperi me fluturime, hotele, paketa pushimesh dhe mbeshtetje ne shqip dhe anglisht.",
  openGraph: {
    title: "Go Travel & Tours",
    description:
      "Fluturime, hotele, paketa dhe mbeshtetje udhetimi nga zyrat ne Prishtine dhe Tirane.",
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
      lang="sq"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white text-ink">
        <LanguageProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </LanguageProvider>
      </body>
    </html>
  );
}
