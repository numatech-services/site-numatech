import { Users, Zap, Shield, Leaf } from 'lucide-react'

const avantages = [
  {
    icon: Users,
    titre: 'INTERLOCUTEUR UNIQUE',
    description: 'Un seul partenaire pour le matériel, les services IT et les logiciels. Simplicité et cohérence garanties.',
    emoji: '👥',
    color: 'bg-blue-50 border-blue-200',
    iconColor: 'text-blue-600'
  },
  {
    icon: Zap,
    titre: 'RÉACTIVITÉ LOCALE',
    description: 'Intervention sur site sous 4h en Île-de-France. Proximité et disponibilité sont nos priorités.',
    emoji: '⚡',
    color: 'bg-orange-50 border-orange-200',
    iconColor: 'text-orange-600'
  },
  {
    icon: Shield,
    titre: 'SÉCURITÉ & CONFORMITÉ',
    description: 'RGPD, normes scolaires, certifications qualité. Votre sécurité est notre engagement.',
    emoji: '🔒',
    color: 'bg-green-50 border-green-200',
    iconColor: 'text-green-600'
  },
  {
    icon: Leaf,
    titre: 'DURABILITÉ',
    description: 'Matériel reconditionné, extension de durée de vie. Engagement RSE et économies pour vous.',
    emoji: '♻️',
    color: 'bg-teal-50 border-teal-200',
    iconColor: 'text-teal-600'
  }
]

export default function PourquoiNumatech() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* En-tête */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
            Pourquoi choisir Numatech Services ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            4 raisons qui font la différence au quotidien
          </p>
        </div>

        {/* Grille d'avantages */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {avantages.map((avantage, index) => {
            const Icon = avantage.icon
            return (
              <div
                key={index}
                className={`group ${avantage.color} border-2 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden`}
              >
                {/* Background emoji géant */}
                <div className="absolute -bottom-4 -right-4 text-8xl opacity-10 group-hover:opacity-20 transition-opacity">
                  {avantage.emoji}
                </div>

                <div className="relative z-10">
                  {/* Icône */}
                  <div className="mb-6">
                    <Icon className={`${avantage.iconColor} w-12 h-12 group-hover:scale-110 transition-transform`} />
                  </div>

                  {/* Titre */}
                  <h3 className="text-xl font-bold mb-4 font-heading">
                    {avantage.titre}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed">
                    {avantage.description}
                  </p>
                </div>

                {/* Badge numéro */}
                <div className="absolute top-6 right-6 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center font-bold text-gray-900 shadow-sm">
                  {index + 1}
                </div>
              </div>
            )
          })}
        </div>

        {/* Citation du fondateur */}
        <div className="mt-20 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl p-12 border-2 border-primary/10">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-4xl shadow-xl">
                👨‍💼
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <p className="text-2xl text-gray-800 italic mb-4 leading-relaxed">
                "Notre mission : rendre la technologie accessible et performante pour tous les établissements, 
                quelle que soit leur taille."
              </p>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <div className="font-bold text-gray-900">Numatech Services</div>
                <div className="text-gray-400">·</div>
                <div className="text-gray-600">Fondateur & CEO</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
