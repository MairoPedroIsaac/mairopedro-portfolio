import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TawkToScript from '@/components/TawkToScript';

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <body className={`${inter.className} bg-gray-900 text-white`}>
        {children}
        <TawkToScript />
      </body>
    </html>
  );
}