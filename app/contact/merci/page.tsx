'use client'

import Link from 'next/link'
import { CheckCircle, Home, Mail } from 'lucide-react'

{
  title: 'Demande reçue – Merci ! | Numatech Services'
  robots: { index: false }
}

export default function MerciPage() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-green-50 to-white flex items-center justify-center px-6">
      <div className="max-w-2xl text-center">
        <div className="mb-8">
          <CheckCircle className="mx-auto text-green-500" size={80} />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Merci pour votre demande !
        </h1>

        <p className="text-xl text-gray-600 mb-8">
          Votre message a bien été reçu. Notre équipe vous contactera dans les plus brefs délais,
          généralement sous 24h ouvrées.
        </p>

        {/* Étapes */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 mb-8">
          <h2 className="font-bold text-lg mb-4">Prochaines étapes</h2>
          <div className="space-y-4 text-left">
            {/* Étape 1 */}
            <div className="flex items-start gap-3">
              <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                1
              </div>
              <div>
                <div className="font-semibold">Accusé de réception</div>
                <div className="text-sm text-gray-600">
                  Vous recevrez un email de confirmation sous quelques minutes
                </div>
              </div>
            </div>
            {/* Étape 2 */}
            <div className="flex items-start gap-3">
              <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                2
              </div>
              <div>
                <div className="font-semibold">Analyse de votre demande</div>
                <div className="text-sm text-gray-600">
                  Notre équipe étudie votre projet en détail
                </div>
              </div>
            </div>
            {/* Étape 3 */}
            <div className="flex items-start gap-3">
              <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                3
              </div>
              <div>
                <div className="font-semibold">Prise de contact</div>
                <div className="text-sm text-gray-600">
                  Un expert vous contactera pour discuter de votre projet
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Boutons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-primary text-white px-8 py-4 rounded-xl hover:bg-primary-dark transition flex items-center justify-center gap-2 font-semibold"
          >
            <Home size={20} />
            Retour à l'accueil
          </Link>
          <Link
            href="/ressources"
            className="border-2 border-gray-300 px-8 py-4 rounded-xl hover:border-primary hover:text-primary transition flex items-center justify-center gap-2 font-semibold"
          >
            <Mail size={20} />
            Nos ressources
          </Link>
        </div>

        <p className="mt-8 text-sm text-gray-500">
          Besoin d'aide immédiate ? Appelez-nous au <strong>+227 96 55 69 84</strong>
        </p>
      </div>
    </section>
  )
}