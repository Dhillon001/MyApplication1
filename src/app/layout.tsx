import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Harsharandeep Dhillon | AI Software Engineer",
  description:
    "Portfolio of Harsharandeep Dhillon — AI Software Engineer at Zoox, UC Berkeley Applied Math & Data Science student building production RAG pipelines and full-stack tools.",
  keywords: [
    "Harsharandeep Dhillon",
    "AI Software Engineer",
    "Machine Learning",
    "UC Berkeley",
    "Portfolio",
    "RAG",
    "Full Stack",
  ],
  authors: [{ name: "Harsharandeep Dhillon" }],
  openGraph: {
    title: "Harsharandeep Dhillon | AI Software Engineer",
    description:
      "Building production AI systems, RAG pipelines, and full-stack tools.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrains.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
