import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Matériel & Infrastructure IT | Numatech Services',
  description: 'Fourniture, installation et maintenance de matériel informatique pour écoles et collectivités. PC, serveurs, réseaux, écrans interactifs.',
}

import Link from 'next/link'
import { Laptop, Monitor, Server, Wifi, CheckCircle, Package } from 'lucide-react'

export default function MaterielInfrastructure() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Matériel & Infrastructure IT</h1>
            <p className="text-xl text-green-100 mb-8">
              Fourniture, installation et maintenance de matériel informatique professionnel. 
              Solutions complètes pour équiper votre organisation.
            </p>
            <Link 
              href="/contact?type=materiel"
              className="inline-block bg-white text-green-600 px-8 py-4 rounded-xl hover:shadow-xl transition font-medium"
            >
              Demander un devis
            </Link>
          </div>
        </div>
      </section>

      {/* Catalogue de matériel */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Notre Catalogue</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
              <Laptop className="text-green-600 mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-4">Postes de Travail</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  PC portables professionnels
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  Stations de travail fixes
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  Mini PC et clients légers
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  MacBook et iMac
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
              <Monitor className="text-blue-600 mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-4">Périphériques</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  Écrans et vidéoprojecteurs
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  Imprimantes multifonctions
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  Tableaux blancs interactifs
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  Webcams et équipements visio
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
              <Server className="text-purple-600 mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-4">Serveurs & Stockage</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  Serveurs rack et tour
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  Baies de stockage NAS/SAN
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  Solutions de sauvegarde
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  Onduleurs et alimentations
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
              <Wifi className="text-orange-600 mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-4">Réseau & Télécom</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  Switches et routeurs
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  Points d'accès WiFi
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  Firewalls et sécurité réseau
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  Systèmes de téléphonie IP
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
              <Package className="text-red-600 mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-4">Solutions Complètes</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  Salles de classe connectées
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  Salles de réunion équipées
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  Open spaces modernes
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  Datacenters clés en main
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
              <CheckCircle className="text-teal-600 mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-4">Services Associés</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  Installation et déploiement
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  Configuration et paramétrage
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  Garantie et support étendu
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  Recyclage du matériel usagé
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Pourquoi nous choisir ?</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl text-center">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="font-bold mb-2">Marques Premium</h3>
              <p className="text-sm text-gray-600">
                Partenaires officiels des plus grandes marques
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="font-bold mb-2">Prix Compétitifs</h3>
              <p className="text-sm text-gray-600">
                Tarifs négociés grâce à nos volumes
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="font-bold mb-2">Livraison Rapide</h3>
              <p className="text-sm text-gray-600">
                Stock disponible et livraison sous 48h
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="font-bold mb-2">Installation Incluse</h3>
              <p className="text-sm text-gray-600">
                Configuration et mise en service par nos experts
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Besoin de matériel informatique ?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Recevez un devis personnalisé en moins de 24h
          </p>
          <Link
            href="/contact?type=materiel"
            className="inline-block bg-white text-green-600 px-8 py-4 rounded-xl hover:shadow-xl transition font-medium"
          >
            Demander un devis
          </Link>
        </div>
      </section>
    </>
  )
}
