import type { Metadata } from 'next';
import './globals.css';
import { QuoteModalProvider } from '@/components/layout/QuoteModalContext';
import { SmoothScrollProvider } from '@/components/providers/SmoothScrollProvider';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { QuoteModal } from '@/components/cta/QuoteModal';
import { FloatingStickyCTA } from '@/components/cta/FloatingStickyCTA';
import { CustomCursor } from '@/components/ui/CustomCursor';

export const metadata: Metadata = {
  title: 'SolarNext | Smart Solar Energy Engineering & Turnkey EPC Solutions',
  description: 'SolarNext designs, builds and maintains high-reliability residential, commercial, industrial and utility-scale solar power plants. Turnkey EPC with Tier-1 components.',
  keywords: [
    'solar company',
    'solar power plant',
    'solar EPC company',
    'commercial solar installation',
    'industrial solar solutions',
    'solar panel installation',
    'utility scale solar farm'
  ],
  authors: [{ name: 'SolarNext Energy Engineering' }],
  openGraph: {
    title: 'SolarNext Energy Engineering - Powering a Cleaner Future',
    description: 'Turnkey solar power engineering for homes, businesses, and utility farms with Tier-1 component guarantees.',
    url: 'https://solarnextenergy.com',
    siteName: 'SolarNext Energy',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'SolarNext Energy Solar Power Plant'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  robots: {
    index: true,
    follow: true
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' }
    ],
    shortcut: '/icon.svg',
    apple: '/icon.svg'
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'SolarNext Energy Engineering',
  url: 'https://solarnextenergy.com',
  logo: 'https://solarnextenergy.com/logo.png',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-800-555-SOLAR',
    contactType: 'customer service',
    areaServed: 'Worldwide',
    availableLanguage: 'English'
  },
  sameAs: [
    'https://twitter.com/solarnext',
    'https://linkedin.com/company/solarnext'
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-white text-slate-900 antialiased selection:bg-emerald-500 selection:text-white">
        <CustomCursor />
        <SmoothScrollProvider>
          <QuoteModalProvider>
            <Navbar />
            <main className="relative z-10">{children}</main>
            <Footer />
            <QuoteModal />
            <FloatingStickyCTA />
          </QuoteModalProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
