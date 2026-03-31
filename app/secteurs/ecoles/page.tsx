import Link from 'next/link'
import { CheckCircle, ArrowRight, Users, Shield, Smile, Zap } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Solutions IT pour Écoles Primaires | Numatech Services',
  description: 'Équipement informatique adapté aux écoles primaires : tablettes, ENT, classes mobiles, sécurité enfants. Accompagnement pédagogique inclus.',
}

export default function EcolesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-pink-500 to-rose-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4">
                <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">
                  Écoles Primaires
                </span>
              </div>
              <h1 className="text-5xl font-bold mb-6 font-heading">
                L'informatique accessible aux plus jeunes
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Solutions numériques adaptées aux enfants de 3 à 11 ans.
                Interfaces intuitives, sécurité maximale, accompagnement pédagogique.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact?type=demo" className="bg-white text-pink-600 px-8 py-4 rounded-xl hover:shadow-xl transition font-semibold text-center">
                  Demander une démo
                </Link>
                <Link href="/contact?type=materiel" className="border-2 border-white px-8 py-4 rounded-xl hover:bg-white/10 transition font-semibold text-center">
                  Obtenir un devis
                </Link>
              </div>
            </div>
            <div className="text-9xl text-center">
              🎒
            </div>
          </div>
        </div>
      </section>

      {/* Besoins spécifiques */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 font-heading">
            Nous comprenons les besoins des écoles primaires
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smile className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Adapté aux enfants</h3>
              <p className="text-gray-600 text-sm">
                Interfaces colorées et intuitives pour les 3-11 ans
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Sécurité renforcée</h3>
              <p className="text-gray-600 text-sm">
                Filtrage web strict, contrôle parental intégré
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Simplicité d'usage</h3>
              <p className="text-gray-600 text-sm">
                Formation enseignants, prise en main rapide
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Support réactif</h3>
              <p className="text-gray-600 text-sm">
                Intervention rapide pendant les heures scolaires
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 font-heading">
            Nos solutions pour écoles primaires
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Classes mobiles avec tablettes',
                description: 'Chariots de 15-30 tablettes avec recharge intégrée, applications éducatives préinstallées et gestion MDM centralisée.',
                features: [
                  'Tablettes Android ou iPad',
                  'Applications pédagogiques préchargées',
                  'Housse de protection renforcée',
                  'Chariot sécurisé avec recharge',
                  'MDM pour gestion à distance'
                ]
              },
              {
                title: 'ENT Simplifié',
                description: 'Espace Numérique de Travail adapté aux primaires avec interface enfant et espace parents sécurisé.',
                features: [
                  'Interface adaptée 3-11 ans',
                  'Cahier de texte numérique',
                  'Communication école-parents',
                  'Partage de documents',
                  'Galerie photos sécurisée'
                ]
              },
              {
                title: 'Salle informatique équipée',
                description: 'PC adaptés aux enfants, mobilier ergonomique, écran interactif et logiciels pédagogiques.',
                features: [
                  '15-30 postes élèves',
                  'Mobilier adapté (hauteur réglable)',
                  'Écran interactif 75-86 pouces',
                  'Souris et claviers ergonomiques',
                  'Logiciels éducatifs (GCompris, etc.)'
                ]
              },
              {
                title: 'Wi-Fi Sécurisé',
                description: 'Réseau sans fil haute performance avec filtrage web adapté à l\'âge des enfants.',
                features: [
                  'Couverture complète bâtiments',
                  'Filtrage web strict (liste blanche)',
                  'Horaires d\'accès programmables',
                  'Statistiques d\'usage',
                  'Portail captif pour invités'
                ]
              }
            ].map((solution, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-pink-200 hover:shadow-xl transition">
                <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                <ul className="space-y-3">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projet exemple */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-12 border-2 border-pink-100">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">✨</div>
              <h2 className="text-3xl font-bold mb-4">Projet École Les Pins - Sèvres</h2>
              <p className="text-gray-600">8 classes • 210 élèves • Budget 45K€</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold mb-4">Réalisations</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>30 tablettes élèves + 2 chariots</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>3 écrans interactifs 75 pouces</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>ENT pour 210 familles</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Formation 15 enseignants</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-4">Résultats</h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-4">
                    <div className="text-2xl font-bold text-pink-600">+40%</div>
                    <div className="text-sm text-gray-600">Engagement des élèves</div>
                  </div>
                  <div className="bg-white rounded-xl p-4">
                    <div className="text-2xl font-bold text-pink-600">98%</div>
                    <div className="text-sm text-gray-600">Satisfaction parents</div>
                  </div>
                  <div className="bg-white rounded-xl p-4">
                    <div className="text-2xl font-bold text-pink-600">100%</div>
                    <div className="text-sm text-gray-600">Enseignants formés</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-pink-500 to-rose-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Prêt à équiper votre école primaire ?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Audit gratuit et démonstration sur site
          </p>
          <Link
            href="/contact?type=demo"
            className="inline-flex items-center gap-2 bg-white text-pink-600 px-8 py-4 rounded-xl hover:shadow-xl transition font-semibold"
          >
            Planifier une visite
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  )
}
