import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  metadataBase: new URL("https://odois.com.br"),
  title: {
    default: "oDois | Software House — Desenvolvimento de Software Sob Medida",
    template: "%s | oDois",
  },
  description:
    "Software house brasileira especializada em desenvolvimento de software sob medida, aplicativos mobile e sistemas web. Orçamento gratuito em 24h. Conheça nossos cases.",
  keywords: [
    // Primárias
    "desenvolvimento de software",
    "software house",
    "software house brasileira",
    "desenvolvimento de software sob medida",
    "software sob medida",
    "empresa de desenvolvimento de software",
    // Serviços web
    "desenvolvimento web",
    "sistemas web",
    "desenvolvimento de sistemas",
    "sistema web personalizado",
    "plataforma web",
    "desenvolvimento de plataforma digital",
    // Mobile
    "desenvolvimento de aplicativos",
    "desenvolvimento mobile",
    "aplicativo mobile",
    "app mobile",
    "desenvolvimento de app",
    "aplicativo iOS Android",
    "aplicativo react native",
    // Sistemas e produtos
    "software personalizado",
    "sistema personalizado",
    "sistema de gestão",
    "ERP personalizado",
    "CRM personalizado",
    "produto digital",
    "MVP startup",
    "desenvolvimento de MVP",
    // Local / Brasil
    "software house brasil",
    "software house brasília",
    "empresa de software brasil",
    "desenvolvimento de software brasília",
    "software house df",
    // Stack e tecnologia
    "React",
    "Next.js",
    "React Native",
    "Node.js",
    "TypeScript",
    "NestJS",
    "PostgreSQL",
    "AWS",
    // Intencional / serviço
    "consultoria em tecnologia",
    "consultoria de software",
    "fábrica de software",
    "outsourcing de desenvolvimento",
    "desenvolvimento ágil",
    "squad de desenvolvimento",
    // Público-alvo
    "software para startups",
    "software para empresas",
    "tecnologia para negócios",
    "transformação digital",
    // Long-tail
    "quanto custa desenvolver um aplicativo",
    "contratar empresa de software",
    "desenvolvimento de software para pequenas empresas",
  ],
  authors: [{ name: "oDois", url: "https://odois.com.br" }],
  creator: "oDois",
  publisher: "oDois",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://odois.com.br",
    siteName: "oDois",
    title: "oDois | Software House — Desenvolvimento de Software Sob Medida",
    description:
      "Software house brasileira especializada em desenvolvimento de software sob medida, aplicativos mobile e sistemas web. Orçamento gratuito.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "oDois - Software House Brasileira — Desenvolvimento de Software Sob Medida",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "oDois | Software House — Desenvolvimento de Software Sob Medida",
    description:
      "Software house brasileira. Desenvolvemos software sob medida, apps mobile e sistemas web personalizados.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://odois.com.br",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  name: "oDois",
  alternateName: "oDois Software House",
  url: "https://odois.com.br",
  logo: "https://odois.com.br/odois-logo.svg",
  image: "https://odois.com.br/og-image.png",
  description:
    "Software house brasileira especializada em desenvolvimento de software sob medida, aplicativos mobile e sistemas web personalizados.",
  telephone: "+55-61-99991-1676",
  email: "contato@odois.com.br",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Brasília",
    addressRegion: "DF",
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -15.7801,
    longitude: -47.9292,
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+55-61-99991-1676",
    contactType: "sales",
    availableLanguage: ["Portuguese"],
  },
  sameAs: [
    "https://www.linkedin.com/company/odois",
    "https://www.instagram.com/odois",
    "https://github.com/odois",
  ],
  areaServed: {
    "@type": "Country",
    name: "Brasil",
  },
  serviceType: [
    "Desenvolvimento de Software Sob Medida",
    "Desenvolvimento de Aplicativos Mobile",
    "Desenvolvimento Web",
    "Sistemas Web Personalizados",
    "Cloud e DevOps",
    "Consultoria em Tecnologia",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Serviços de Desenvolvimento de Software",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Desenvolvimento Web",
          description:
            "Desenvolvimento de plataformas web modernas, responsivas e otimizadas com React e Next.js.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Desenvolvimento de Aplicativos Mobile",
          description:
            "Aplicativos iOS e Android com React Native, nativos e multiplataforma.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Sistemas Sob Demanda",
          description:
            "Software personalizado para gestão empresarial: ERPs, CRMs e sistemas de automação.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Consultoria Técnica",
          description:
            "Orientação estratégica para decisões tecnológicas, discovery de produto e roadmap.",
        },
      },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Quanto custa desenvolver um software sob medida?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "O custo varia conforme escopo e complexidade do projeto. A oDois oferece orçamento gratuito e sem compromisso. Entre em contato para uma avaliação personalizada do seu projeto.",
      },
    },
    {
      "@type": "Question",
      name: "Quanto tempo leva para desenvolver um aplicativo mobile?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Um MVP de aplicativo mobile pode ser desenvolvido em 8 a 16 semanas, dependendo da complexidade. Projetos maiores podem levar mais tempo. Nossa metodologia ágil garante entregas incrementais.",
      },
    },
    {
      "@type": "Question",
      name: "A oDois desenvolve sistemas web personalizados?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim! Somos especializados em desenvolvimento de sistemas web sob medida: ERPs, CRMs, plataformas SaaS, portais e qualquer sistema que seu negócio precise.",
      },
    },
    {
      "@type": "Question",
      name: "Vocês atendem empresas de todo o Brasil?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim, atendemos empresas de todo o Brasil de forma remota. Temos base em Brasília (DF) e trabalhamos com clientes em São Paulo, Rio de Janeiro, Minas Gerais e outras regiões.",
      },
    },
    {
      "@type": "Question",
      name: "O que é uma software house?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Uma software house é uma empresa especializada no desenvolvimento de software personalizado para outras empresas. A oDois cria sistemas web, aplicativos mobile e produtos digitais sob medida para negócios de todos os tamanhos.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
