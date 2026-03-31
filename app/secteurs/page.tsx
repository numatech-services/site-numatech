import Link from 'next/link'
import { School, Building2, GraduationCap, Building, ArrowRight, CheckCircle } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nos Secteurs | Solutions IT pour Éducation & Collectivités - Numatech',
  description: 'Solutions informatiques adaptées aux écoles, collèges, lycées, universités et collectivités. Expertise sectorielle depuis 15 ans.',
}

const secteurs = [
  {
    icon: School,
    title: 'Écoles Primaires',
    slug: 'ecoles',
    description: 'Solutions adaptées aux jeunes enfants avec interfaces intuitives, sécurité renforcée et accompagnement pédagogique.',
    features: [
      'Tablettes tactiles pour les maternelles',
      'ENT simplifié pour parents/élèves',
      'Classes mobiles avec chariots de recharge',
      'Filtrage web adapté à l\'âge',
      'Formation des enseignants incluse'
    ],
    stats: { etablissements: '85+', postes: '2500+', satisfaction: '99%' },
    image: '🎒',
    color: 'from-pink-500 to-rose-500',
    bgColor: 'bg-pink-50'
  },
  {
    icon: Building2,
    title: 'Collèges & Lycées',
    slug: 'colleges-lycees',
    description: 'Infrastructure robuste pour grands établissements : salles informatiques, Wi-Fi haute densité, sécurité multi-niveaux.',
    features: [
      'Parcs de 100 à 500 postes',
      'Wi-Fi haute densité (1000+ utilisateurs)',
      'Salles multimédia équipées',
      'Filtrage web et contrôle parental',
      'Support technique dédié'
    ],
    stats: { etablissements: '120+', postes: '45000+', satisfaction: '97%' },
    image: '📚',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50'
  },
  {
    icon: GraduationCap,
    title: 'Enseignement Supérieur',
    slug: 'universites',
    description: 'Solutions entreprise pour campus : amphis connectés, cloud académique, recherche, data centers et espaces collaboratifs.',
    features: [
      'Amphis 4.0 avec captation vidéo',
      'Cloud campus privé sécurisé',
      'Espaces de co-working connectés',
      'Serveurs de calcul pour recherche',
      'VPN étudiant/enseignant'
    ],
    stats: { etablissements: '15+', postes: '12000+', satisfaction: '98%' },
    image: '🎓',
    color: 'from-purple-500 to-indigo-500',
    bgColor: 'bg-purple-50'
  },
  {
    icon: Building,
    title: 'Collectivités',
    slug: 'collectivites',
    description: 'Expertise marchés publics : multi-sites, standardisation, optimisation budgétaire et conformité administrative.',
    features: [
      'Gestion multi-sites centralisée',
      'Réponse aux appels d\'offres publics',
      'Standardisation du parc IT',
      'Optimisation TCO (coût total)',
      'Reporting et tableaux de bord'
    ],
    stats: { etablissements: '30+', postes: '8500+', satisfaction: '96%' },
    image: '🏛️',
    color: 'from-green-500 to-teal-500',
    bgColor: 'bg-green-50'
  }
]

export default function SecteursPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6 font-heading">
              Expertise sectorielle reconnue
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              15 ans d'expérience au service de l'éducation et des collectivités.
              Des solutions adaptées à chaque type d'établissement.
            </p>
          </div>
        </div>
      </section>

      {/* Secteurs détaillés */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-24">
            {secteurs.map((secteur, index) => {
              const Icon = secteur.icon
              const isEven = index % 2 === 0
              
              return (
                <div key={secteur.slug} className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Image/Illustration */}
                  <div className={`${!isEven ? 'lg:order-2' : ''}`}>
                    <div className={`bg-gradient-to-br ${secteur.color} rounded-3xl p-12 text-white relative overflow-hidden`}>
                      <div className="absolute inset-0 opacity-10">
                        <div className="text-[300px] leading-none">{secteur.image}</div>
                      </div>
                      <div className="relative z-10">
                        <Icon className="w-20 h-20 mb-6" />
                        <div className="grid grid-cols-3 gap-4 mt-12">
                          <div>
                            <div className="text-3xl font-bold">{secteur.stats.etablissements}</div>
                            <div className="text-sm opacity-80">Établissements</div>
                          </div>
                          <div>
                            <div className="text-3xl font-bold">{secteur.stats.postes}</div>
                            <div className="text-sm opacity-80">Postes gérés</div>
                          </div>
                          <div>
                            <div className="text-3xl font-bold">{secteur.stats.satisfaction}</div>
                            <div className="text-sm opacity-80">Satisfaction</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Contenu */}
                  <div className={`${!isEven ? 'lg:order-1' : ''}`}>
                    <div className="inline-block mb-4">
                      <span className={`${secteur.bgColor} px-4 py-2 rounded-full text-sm font-semibold`}>
                        Secteur
                      </span>
                    </div>
                    
                    <h2 className="text-4xl font-bold mb-6 font-heading">
                      {secteur.title}
                    </h2>
                    
                    <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                      {secteur.description}
                    </p>

                    <div className="space-y-3 mb-8">
                      {secteur.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      href={`/secteurs/${secteur.slug}`}
                      className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl hover:bg-primary-dark transition-all font-semibold shadow-lg hover:shadow-xl"
                    >
                      Découvrir les solutions {secteur.title}
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Votre secteur nécessite une solution spécifique ?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Nos experts analysent vos besoins et vous proposent la solution optimale
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-primary px-8 py-4 rounded-xl hover:shadow-xl transition font-semibold"
          >
            Demander une consultation gratuite
          </Link>
        </div>
      </section>
    </>
  )
}
