import type { Metadata, Viewport } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";
import TawkToScript from "@/components/TawkToScript";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const anton = Anton({ weight: "400", subsets: ["latin"], variable: "--font-anton", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

const title = "Mairo Pedro Isaac | Full-Stack Developer";
const description =
  "Full-stack developer building websites, web apps and mobile apps that bring small and growing businesses more customers.";

export const metadata: Metadata = {
  metadataBase: new URL("https://mairopedro.com"),
  title: { default: title, template: "%s | Mairo Pedro Isaac" },
  description,
  keywords: ["Full-Stack Developer", "Web Developer", "Website Developer", "Web Apps", "Mobile Apps", "Next.js", "React", "Django", "Freelance Developer"],
  authors: [{ name: "Mairo Pedro Isaac" }],
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "https://mairopedro.com",
    siteName: "Mairo Pedro Isaac",
    locale: "en_US",
    type: "website",
  },
  twitter: { card: "summary_large_image", title, description },
};

export const viewport: Viewport = {
  themeColor: "#050505",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${anton.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-ink text-mist font-sans">
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <TawkToScript />
      </body>
    </html>
  );
}
