import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Page introuvable | Numatech Services' }

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <div className="text-8xl font-bold text-primary/20 mb-4">404</div>
        <h1 className="text-4xl font-bold mb-4">Page introuvable</h1>
        <p className="text-gray-600 mb-8">La page que vous cherchez n'existe pas ou a été déplacée.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary-dark transition">
            Retour à l'accueil
          </Link>
          <Link href="/contact" className="border-2 border-gray-300 px-8 py-4 rounded-xl font-semibold hover:border-primary hover:text-primary transition">
            Nous contacter
          </Link>
        </div>
      </div>
    </div>
  )
}
