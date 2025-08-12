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
  description: 'Accelerate your business with AI. Practical, risk-aware, results-focused.',
  metadataBase: new URL('https://www.excelerin.co.uk'),
  icons: {
    icon: '/favicon.ico'
  }
};

export default function RootLayout ({ children }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground`}>
        <PrelineInit />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
