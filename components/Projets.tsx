import Link from 'next/link'
import { CheckCircle, ArrowRight, ExternalLink } from 'lucide-react'

const projets = [
  {
    title: 'Modernisation complète du lycée Victor Hugo',
    categorie: 'Lycée',
    ville: 'Paris 11ème',
    image: '🏫',
    realisations: [
      '120 postes informatiques standardisés',
      'Wi-Fi haute densité sur 3 bâtiments',
      'Salle polyvalente équipée (écrans interactifs)',
      'Plateforme LMS pour 850 élèves'
    ],
    resultat: 'Temps d\'arrêt réduit de 70%, satisfaction enseignants 95%',
    duree: '3 mois',
    budget: '180K€',
    href: '/projets/lycee-victor-hugo',
    color: 'from-blue-500 to-blue-600'
  },
  {
    title: 'Déploiement réseau mairie de Versailles',
    categorie: 'Collectivité',
    ville: 'Versailles',
    image: '🏛️',
    realisations: [
      'Couverture Wi-Fi 100% des bâtiments',
      'Sauvegarde externalisée (15 To)',
      'Formation des 85 agents municipaux',
      'Pare-feu nouvelle génération'
    ],
    resultat: 'Sécurité renforcée, continuité de service 99.9%',
    duree: '4 mois',
    budget: '95K€',
    href: '/projets/mairie-versailles',
    color: 'from-green-500 to-green-600'
  },
  {
    title: 'Classe flexible école primaire Les Pins',
    categorie: 'École primaire',
    ville: 'Sèvres',
    image: '🎒',
    realisations: [
      'Mobilier modulaire ergonomique',
      '3 écrans interactifs 75 pouces',
      'ENT pour parents/élèves',
      '30 tablettes élèves + valise de recharge'
    ],
    resultat: 'Engagement élèves +40%, satisfaction parents 98%',
    duree: '6 semaines',
    budget: '45K€',
    href: '/projets/ecole-les-pins',
    color: 'from-purple-500 to-purple-600'
  }
]

export default function Projets() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* En-tête */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
            Nos réalisations concrètes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez comment nous avons accompagné des établissements comme le vôtre
          </p>
        </div>

        {/* Grille de projets */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {projets.map((projet, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-white to-neutral-50 rounded-3xl border-2 border-gray-100 hover:border-primary overflow-hidden hover:shadow-2xl transition-all duration-500"
            >
              {/* Header avec gradient */}
              <div className={`bg-gradient-to-br ${projet.color} p-8 text-white relative overflow-hidden`}>
                {/* Pattern background */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
                  }}></div>
                </div>

                <div className="relative z-10">
                  <div className="text-6xl mb-4">{projet.image}</div>
                  <div className="text-sm font-medium mb-2 opacity-90">
                    {projet.categorie} · {projet.ville}
                  </div>
                  <h3 className="text-2xl font-bold leading-tight">
                    {projet.title}
                  </h3>
                </div>
              </div>

              {/* Contenu */}
              <div className="p-8">
                {/* Réalisations */}
                <div className="mb-6">
                  <div className="font-semibold text-sm text-gray-500 uppercase tracking-wide mb-4">
                    Réalisations
                  </div>
                  <ul className="space-y-3">
                    {projet.realisations.map((real, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{real}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Résultat */}
                <div className="bg-green-50 border border-green-100 rounded-xl p-4 mb-6">
                  <div className="font-semibold text-sm text-green-900 mb-1">
                    📊 Résultat
                  </div>
                  <div className="text-sm text-green-800">
                    {projet.resultat}
                  </div>
                </div>

                {/* Métadonnées */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-6 pb-6 border-b border-gray-100">
                  <div>
                    <span className="font-semibold text-gray-700">Durée:</span> {projet.duree}
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Budget:</span> {projet.budget}
                  </div>
                </div>

                {/* CTA */}
                <Link
                  href={projet.href}
                  className="group/btn inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                >
                  Voir le projet complet
                  <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA global */}
        <div className="text-center">
          <Link
            href="/projets"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl hover:bg-primary-dark transition-all font-semibold shadow-lg hover:shadow-xl"
          >
            Tous nos projets
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
