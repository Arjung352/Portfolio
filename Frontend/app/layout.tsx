import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
export const metadata: Metadata = {
  title: "Arjun Gupta | Full Stack Developer | Software Engineer",
  description:
    "Portfolio of Arjun Gupta, a Full Stack Software Engineer building scalable web applications using modern frontend, backend, and DevOps practices.",
  keywords: [
    "Arjun Gupta",
    "Full Stack Developer",
    "Web Developer",
    "DevOps",
    "React",
    "Next.js",
    "Software Engineer",
  ],
  authors: [{ name: "Arjun Gupta" }],
  verification: {
    google: "CCcfYWP8uggRt9qNCSFuh_oT55vDYXG6LORQPY5bJfs",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
