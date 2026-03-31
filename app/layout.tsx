import type { Metadata } from 'next'
import { Poppins, Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SkipLinks from '@/components/SkipLinks'
import ScrollToTop from '@/components/ScrollToTop'
import SchemaOrg from '@/components/SchemaOrg'
import NewsletterPopup from '@/components/NewsletterPopup'
import CartDrawer from '@/components/CartDrawer'
import { CartProvider } from '@/contexts/CartContext'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Numatech Services',
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://numatechservices.net'),
  title: {
    default: 'Numatech Services | IT & Équipement pédagogique pour l\'éducation',
    template: '%s | Numatech Services',
  },
  description: 'Infogérance, matériel informatique et solutions logicielles pour écoles, collèges, lycées, universités et collectivités. Livraison, installation, formation incluses en Île-de-France.',
  keywords: ['infogérance éducation', 'matériel informatique scolaire', 'écran interactif', 'tablettes école', 'mobilier scolaire', 'solutions pédagogiques numériques', 'Numatech'],
  authors: [{ name: 'Numatech Services' }],
  creator: 'Numatech Services',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Numatech Services',
    title: 'Numatech Services | IT & Équipement pédagogique',
    description: 'Votre partenaire IT pour l\'éducation et les collectivités. Livraison + installation + formation.',
    images: [{ url: '/images/logo.png', width: 1200, height: 630, alt: 'Numatech Services' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Numatech Services',
    description: 'IT & Équipement pédagogique pour établissements scolaires.',
    images: ['/images/logo.png'],
  },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID

  return (
    <html lang="fr" className={`${poppins.variable} ${inter.variable}`}>
      <head>
        <SchemaOrg />
        {gaId && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
            <Script id="gtag-init" strategy="afterInteractive" dangerouslySetInnerHTML={{
              __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${gaId}',{page_path:window.location.pathname});`,
            }} />
          </>
        )}
      </head>
      <body className="font-sans antialiased">
        <CartProvider>
          <SkipLinks />
          <Header />
          <main id="main-content" className="min-h-screen">
            {children}
          </main>
          <Footer />
          <ScrollToTop />
          <CartDrawer />
          <NewsletterPopup />
        </CartProvider>
      </body>
    </html>
  )
}
