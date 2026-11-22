import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import "./globals.css";
import "lenis/dist/lenis.css";

const heading = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-heading", display: "swap" });
const body = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-body", display: "swap" });
import TawkToScript from '@/components/TawkToScript';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Toaster from "@/components/ui/Toaster";
import SmoothScroll from "@/components/motion/SmoothScroll";


const title = "Mairo Pedro Isaac | Full-Stack Developer";
const description =
  "Full-stack developer building websites, web apps and mobile apps that bring small and growing businesses more customers.";

export const metadata: Metadata = {
  metadataBase: new URL("https://mairopedro.com"),
  title,
  description,
  keywords: ["Full-Stack Developer", "Web Developer", "Website Developer", "Web Apps", "Mobile Apps", "Next.js", "React", "Django", "Node.js", "Freelance Developer"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`bg-black ${heading.variable} ${body.variable}`}>
      <head>
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className="font-sans bg-black text-white min-h-screen">
        <div className="fixed inset-0 bg-black -z-10" />
        <Navbar />
        <main className="relative z-10">
          {children}
        </main>
        <Footer />
        <SmoothScroll />
        <Toaster />
        <TawkToScript />
      </body>
    </html>
  );
}