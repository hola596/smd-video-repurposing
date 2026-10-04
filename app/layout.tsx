import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://videos.serviciodemarketingdigital.com'),
  title: 'Edición de Video Largo a Shorts, Reels y TikTok | Alan - SMD',
  description:
    'Transformo tus podcasts, webinars y videos de 1 hora en decenas de clips virales con ganchos y subtítulos dinámicos. Prueba tu primer clip gratis.',
  keywords: [
    'repurposing de video',
    'editor de videos largos a shorts',
    'edicion de podcasts para reels',
    'clips de tiktok virales',
    'edicion de video vertical profesional',
    'servicio de marketing digital alan',
    'smd video repurposing',
    'subtitulos dinamicos virales',
  ],
  authors: [{ name: 'Alan', url: 'https://videos.serviciodemarketingdigital.com' }],
  creator: 'Alan - SMD (Servicio de Marketing Digital)',
  publisher: 'SMD - Servicio de Marketing Digital',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://videos.serviciodemarketingdigital.com',
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://videos.serviciodemarketingdigital.com',
    siteName: 'SMD - Servicio de Marketing Digital',
    title: 'Transformo tus videos largos en clips virales | SMD',
    description:
      'Servicio Done-For-You para podcasters y empresas B2B. Prueba 1 clip demo sin costo.',
    images: [
      {
        url: 'https://videos.serviciodemarketingdigital.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'SMD - Repurposing de Video Largo a Clips Virales',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Transformo tus videos largos en clips virales | SMD',
    description:
      'Servicio Done-For-You para podcasters y empresas B2B. Prueba 1 clip demo sin costo.',
    images: ['https://videos.serviciodemarketingdigital.com/og-image.png'],
    creator: '@alan_smd',
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
};

// Rich Structured Data (JSON-LD)
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': 'https://videos.serviciodemarketingdigital.com/#organization',
      name: 'SMD - Servicio de Marketing Digital',
      alternateName: 'Alan Video Repurposing',
      url: 'https://videos.serviciodemarketingdigital.com',
      logo: 'https://videos.serviciodemarketingdigital.com/logo.png',
      image: 'https://videos.serviciodemarketingdigital.com/og-image.png',
      description:
        'Servicio profesional Done-For-You de repurposing de video largo a clips verticales para Reels, TikTok y YouTube Shorts.',
      priceRange: '$45 - $400 USD',
      telephone: '+5491127887093',
      email: 'hola@serviciodemarketingdigital.com',
      areaServed: {
        '@type': 'AdministrativeArea',
        name: 'Global Hispanohablante',
      },
      founder: {
        '@type': 'Person',
        name: 'Alan',
        jobTitle: 'Fundador y Director de Repurposing Audiovisual',
      },
      offers: [
        {
          '@type': 'Offer',
          name: 'Plan Prueba (1 Video)',
          price: '45.00',
          priceCurrency: 'USD',
          description: 'Procesamiento de 1 video largo de hasta 60 min y entrega de hasta 5 clips verticales terminados.',
        },
        {
          '@type': 'Offer',
          name: 'Plan Creador Básico',
          price: '200.00',
          priceCurrency: 'USD',
          description: 'Procesa hasta 7 videos largos al mes con entrega de hasta 40 clips verticales.',
        },
        {
          '@type': 'Offer',
          name: 'Plan Escala Premium',
          price: '400.00',
          priceCurrency: 'USD',
          description: 'Procesa hasta 16 videos largos al mes con entrega de hasta 100 clips verticales.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Cómo entrego mis videos largos para su edición?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Simplemente nos compartes el enlace de YouTube o una carpeta compartida en Google Drive o Dropbox con tus grabaciones en alta definición.',
          },
        },
        {
          '@type': 'Question',
          name: '¿En cuánto tiempo están listos mis clips verticales?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'El tiempo habitual de entrega es de 48 a 72 horas hábiles en tu carpeta privada de Google Drive, listos para publicar.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Cómo funciona la prueba gratuita de 1 clip demo?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Nos envías tu video de 1 hora y te entregamos 1 clip vertical terminado con ganchos y subtítulos de forma 100% gratuita. Si no te gusta el resultado, no tienes ninguna obligación ni cobro.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Cómo garantizan la calidad y el ritmo de los videos?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Aplicamos un criterio editorial de élite enfocado en retención de los primeros 3 segundos, cortes precisos de cámara, encuadre dinámico 9:16 y subtítulos animados palabra por palabra sin faltas de ortografía.',
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark">
      <head>
        {/* Preconnect to Google Fonts and Video CDNs */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://www.youtube.com" />
        <link rel="preconnect" href="https://www.tiktok.com" />
        <link rel="preconnect" href="https://www.instagram.com" />

        {/* Structured Data Script */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-obsidian text-bone font-sans antialiased selection:bg-copper selection:text-obsidian min-h-screen">
        {children}
      </body>
    </html>
  );
}
