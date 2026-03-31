import Link from 'next/link'
import { School, Building2, GraduationCap, Building, ArrowRight } from 'lucide-react'

const etablissements = [
  {
    icon: School,
    title: 'Écoles',
    description: 'Classes adaptées aux jeunes enfants, gestion simplifiée, accompagnement des équipes.',
    features: ['Tablettes tactiles', 'ENT parents', 'Équipement adapté'],
    image: '🎒',
    href: '/secteurs/ecoles',
    color: 'from-pink-500 to-rose-500'
  },
  {
    icon: Building2,
    title: 'Collèges & Lycées',
    description: 'Salles polyvalentes, gros parcs informatiques, Wi-Fi haute densité, sécurité renforcée.',
    features: ['120+ postes', 'WiFi HD', 'Filtrage web'],
    image: '📚',
    href: '/secteurs/colleges-lycees',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: GraduationCap,
    title: 'Enseignement Supérieur',
    description: 'Amphis connectés, espaces collaboratifs, pédagogie hybride, data centers.',
    features: ['Amphis 4.0', 'Cloud campus', 'Recherche'],
    image: '🎓',
    href: '/secteurs/universites',
    color: 'from-purple-500 to-indigo-500'
  },
  {
    icon: Building,
    title: 'Collectivités',
    description: 'Multi-sites, appels d\'offres, standardisation du parc, optimisation des coûts.',
    features: ['Multi-sites', 'Marchés publics', 'Mutualisation'],
    image: '🏛️',
    href: '/secteurs/collectivites',
    color: 'from-green-500 to-teal-500'
  }
]

export default function TypesEtablissements() {
  return (
    <section className="py-24 bg-gradient-to-b from-neutral-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* En-tête */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
            Nous équipons tous les établissements éducatifs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des solutions adaptées à chaque niveau d'enseignement et chaque type de structure
          </p>
        </div>

        {/* Grille d'établissements */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {etablissements.map((etab, index) => {
            const Icon = etab.icon
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-primary hover:shadow-xl transition-all duration-300 cursor-pointer relative overflow-hidden"
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${etab.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                
                <div className="relative z-10">
                  {/* Emoji + Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-5xl">{etab.image}</div>
                    <Icon className="w-8 h-8 text-gray-400 group-hover:text-primary transition-colors" />
                  </div>

                  {/* Titre */}
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {etab.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                    {etab.description}
                  </p>

                  {/* Features tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {etab.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full group-hover:bg-primary/10 group-hover:text-primary transition-colors"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Lien */}
                  <Link
                    href={etab.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all"
                  >
                    En savoir plus
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA global */}
        <div className="text-center">
          <Link
            href="/secteurs"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl hover:bg-primary-dark transition-all font-semibold shadow-lg hover:shadow-xl"
          >
            Voir nos solutions par secteur
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
