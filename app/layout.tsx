import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Estiga Total Academia | Aula Grátis - Santa Rita/PB",
  description: "Academia completa em Santa Rita/PB. Musculação, Fit Dance, Jump, Aeróbox e mais! Plano Clube+ por R$49/mês. Agende sua aula experimental grátis.",
  keywords: ["academia santa rita", "academia santa rita pb", "musculação santa rita", "fit dance santa rita", "plano academia", "academia barata pb", "estiga total"],
  icons: {
    icon: '/icons/logo.svg',
  },
  openGraph: {
    title: "Estiga Total Academia - Sua melhor versão começa aqui",
    description: "Agende sua aula experimental grátis! Plano Clube+ por R$49/mês. Estrutura completa em Santa Rita/PB.",
    url: "https://estigatotal.netlify.app",
    siteName: "Estiga Total Academia",
    images: [
      {
        url: "/images/hero/hero-main.webp",
        width: 1920,
        height: 1080,
        alt: "Estiga Total Academia - Estrutura moderna em Santa Rita/PB",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Estiga Total Academia | Aula Grátis - Santa Rita/PB",
    description: "Plano Clube+ por R$49/mês. Agende sua aula experimental grátis!",
    images: ["/images/hero/hero-main.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "ExerciseGym",
    "name": "Estiga Total Academia",
    "description": "Academia completa em Santa Rita/PB com estrutura moderna, profissionais qualificados e planos acessíveis.",
    "image": "https://estigatotal.netlify.app/images/hero/hero-main.webp",
    "url": "https://estigatotal.netlify.app",
    "telephone": "+55-83-99190-7740",
    "priceRange": "R$49-R$89",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "R. Venâncio Correia, 182",
      "addressLocality": "Santa Rita",
      "addressRegion": "PB",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -7.1192,
      "longitude": -34.9778
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "05:00",
        "closes": "22:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "08:00",
        "closes": "11:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "14:00",
        "closes": "17:00"
      }
    ],
    "sameAs": [
      "https://instagram.com/estigatotal.academia"
    ]
  };

  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
