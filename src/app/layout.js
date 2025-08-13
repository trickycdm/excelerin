import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import PrelineInit from '@/components/preline-init/PrelineInit';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: 'Excelerin — AI consultancy for SMEs',
    template: '%s — Excelerin'
  },
  description: 'Excelerin helps SMEs across the UK adopt AI safely and practically — from strategy and discovery to implementation and training.',
  metadataBase: new URL('https://www.excelerin.co.uk'),
  alternates: {
    languages: {
      'en-GB': '/',
      en: '/'
    }
  },
  openGraph: {
    type: 'website',
    url: 'https://www.excelerin.co.uk/',
    siteName: 'Excelerin',
    title: 'Excelerin — AI consultancy for SMEs',
    description: 'Excelerin helps SMEs across the UK adopt AI safely and practically — from strategy and discovery to implementation and training.',
    locale: 'en_GB',
    images: ['/excelerin.png']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Excelerin — AI consultancy for SMEs',
    description: 'Practical, risk‑aware, results‑focused AI for every business.',
    images: ['/excelerin.png']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxImagePreview: 'large',
      maxSnippet: -1,
      maxVideoPreview: -1
    }
  },
  category: 'technology',
  keywords: [
    'AI consultancy',
    'AI consulting for SMEs',
    'AI readiness assessment',
    'AI discovery workshops',
    'AI implementation',
    'AI training',
    'United Kingdom',
    'Scotland'
  ],
  icons: {
    icon: '/favicon.ico'
  }
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#111827'
};

export default function RootLayout ({ children }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                '@context': 'https://schema.org',
                '@type': 'Organization',
                name: 'Excelerin',
                url: 'https://www.excelerin.co.uk/',
                logo: 'https://www.excelerin.co.uk/excelerin.png',
                sameAs: []
              },
              {
                '@context': 'https://schema.org',
                '@type': 'WebSite',
                name: 'Excelerin',
                url: 'https://www.excelerin.co.uk/',
                potentialAction: {
                  '@type': 'SearchAction',
                  target: 'https://www.google.com/search?q=site%3Aexcelerin.co.uk+{search_term_string}',
                  'query-input': 'required name=search_term_string'
                }
              }
            ])
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground`}>
        <PrelineInit />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
