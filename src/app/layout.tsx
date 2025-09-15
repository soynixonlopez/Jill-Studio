import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Jill Studio - Fotografía Profesional",
  description: "Servicios de fotografía profesional para modelos, fotos personales, grupales y momentos especiales. Captura tus mejores recuerdos con Jill Studio.",
  keywords: "fotografía, modelos, fotos personales, fotos grupales, eventos, profesional",
  authors: [{ name: "Jill Studio" }],
  openGraph: {
    title: "Jill Studio - Fotografía Profesional",
    description: "Servicios de fotografía profesional para modelos, fotos personales, grupales y momentos especiales.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <ScrollProgress />
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
