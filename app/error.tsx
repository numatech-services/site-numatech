'use client'
import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => { console.error(error) }, [error])
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <div className="text-6xl mb-4">⚠️</div>
        <h2 className="text-3xl font-bold mb-4">Une erreur est survenue</h2>
        <p className="text-gray-600 mb-8">Nous sommes désolés, quelque chose s'est mal passé. Veuillez réessayer.</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <button onClick={reset} className="bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary-dark transition">
            Réessayer
          </button>
          <Link href="/" className="border-2 border-gray-300 px-8 py-4 rounded-xl font-semibold hover:border-primary hover:text-primary transition">
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  )
}
