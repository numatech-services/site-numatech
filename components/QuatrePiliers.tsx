import Link from 'next/link'
import { Monitor, Shield, GraduationCap, Laptop, ArrowRight } from 'lucide-react'

const piliers = [
  {
    icon: Monitor,
    title: 'Gestion du parc informatique',
    description: 'Nous déployons, maintenons et supervisons vos postes de travail, salles informatiques et périphériques pour garantir une continuité de service optimale.',
    features: [
      'Déploiement standardisé',
      'Maintenance préventive',
      'Supervision 24/7',
      'Support technique'
    ],
    cta: 'Découvrir le service',
    href: '/services/infogerance',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-600'
  },
  {
    icon: Shield,
    title: 'Réseaux & sécurité',
    description: 'Conception de réseaux sécurisés (Wi-Fi haute densité, pare-feu, filtrage web, sauvegarde) pour protéger vos données et vos usagers.',
    features: [
      'Wi-Fi haute densité',
      'Pare-feu nouvelle génération',
      'Filtrage web avancé',
      'Sauvegarde automatique'
    ],
    cta: 'Découvrir le service',
    href: '/services/reseaux-securite',
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50',
    iconColor: 'text-green-600'
  },
  {
    icon: GraduationCap,
    title: 'Solutions pédagogiques numériques',
    description: 'Plateformes LMS, outils collaboratifs, classes virtuelles et interactivité pour enrichir la pédagogie en présentiel et distanciel.',
    features: [
      'Plateformes LMS modernes',
      'Classes virtuelles',
      'Outils collaboratifs',
      'Écrans interactifs'
    ],
    cta: 'Découvrir le service',
    href: '/solutions-logicielles',
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
    iconColor: 'text-purple-600'
  },
  {
    icon: Laptop,
    title: 'Matériel & aménagement d\'espaces',
    description: 'Mobilier scolaire ergonomique, PC, écrans interactifs, imprimantes et solutions audiovisuelles pour des espaces d\'apprentissage modernes.',
    features: [
      'Mobilier ergonomique',
      'PC et tablettes',
      'Écrans interactifs',
      'Solutions audiovisuelles'
    ],
    cta: 'Demander un devis',
    href: '/contact?type=materiel',
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-50',
    iconColor: 'text-orange-600'
  }
]

export default function QuatrePiliers() {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* En-tête */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
            4 piliers pour moderniser votre établissement
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Du parc informatique aux salles de classe connectées, Numatech Services 
            vous accompagne de A à Z dans votre transformation numérique et matérielle.
          </p>
        </div>

        {/* Grille des piliers */}
        <div className="grid md:grid-cols-2 gap-8">
          {piliers.map((pilier, index) => {
            const Icon = pilier.icon
            return (
              <div
                key={index}
                className="group bg-white border-2 border-gray-100 rounded-3xl p-8 hover:border-gray-200 hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${pilier.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  {/* Icône */}
                  <div className={`w-16 h-16 ${pilier.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`${pilier.iconColor} w-8 h-8`} />
                  </div>

                  {/* Titre */}
                  <h3 className="text-2xl font-bold mb-4 font-heading group-hover:text-primary transition-colors">
                    {pilier.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {pilier.description}
                  </p>

                  {/* Features list */}
                  <ul className="space-y-3 mb-8">
                    {pilier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    href={pilier.href}
                    className={`inline-flex items-center gap-2 font-semibold ${pilier.iconColor} group-hover:gap-3 transition-all`}
                  >
                    {pilier.cta}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Numéro du pilier en arrière-plan */}
                <div className="absolute top-6 right-6 text-8xl font-bold text-gray-100 group-hover:text-gray-200 transition-colors">
                  0{index + 1}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
