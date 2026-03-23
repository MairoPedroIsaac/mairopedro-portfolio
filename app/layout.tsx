import type { Metadata } from "next";
import "./globals.css";
import TawkToScript from '@/components/TawkToScript';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: "Mairo Pedro Isaac - Full-Stack Developer",
  description: "Full-Stack Developer & Software Engineer specializing in Next.js, React, Django, Node.js and AI Integration. Building scalable web solutions in Kigali, Rwanda.",
  keywords: ["Full-Stack Developer", "Web Developer", "Next.js", "React", "Django", "Node.js", "Software Engineer", "Kigali", "Rwanda"],
  authors: [{ name: "Mairo Pedro Isaac" }],
  openGraph: {
    title: "Mairo Pedro Isaac - Full-Stack Developer",
    description: "Building modern web solutions with Next.js, React, Django, Node.js and AI Integration",
    url: "https://mairopedro.com",
    siteName: "Mairo Pedro Isaac Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mairo Pedro Isaac - Full-Stack Developer",
    description: "Building modern web solutions with Next.js, React, Django, Node.js and AI Integration",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black">
      <head>
        <meta name="theme-color" content="#000000" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className="font-sans bg-black text-white min-h-screen">
        <div className="fixed inset-0 bg-black -z-10" />
        <Navbar />
        <main className="relative z-10">
          {children}
        </main>
        <Footer />
        <TawkToScript />
      </body>
    </html>
  );
}