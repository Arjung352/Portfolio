import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arjun Gupta Full Stack Developer",
  description:
    "Portfolio of Arjun Gupta, a Full Stack Developer building scalable web applications with modern frontend, backend, and DevOps practices. View projects and experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
