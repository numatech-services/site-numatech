import { Star, Quote } from 'lucide-react'

const clients = [
  "Université Djibo Hamani",
  "Université de Diffa",
  'Swiss Umef University of Niger',
  'ECCAM',
  "Université Abdou Moumouni",
  'ADU',
  "Université UDDM",
  'EMIG',
]

const temoignages = [
  {
    texte: 'Temps d\'arrêt réduit de 70% et satisfaction utilisateurs en hausse. L\'équipe Numatech est ultra-réactive.',
    auteur: 'Service Scolarité',
    poste: 'DSI',
    organisation: "Université Djibo Hamani",
    avatar: '👨‍💼',
    rating: 5
  },
  {
    texte: 'Numatech Services gère notre parc multi-sites avec réactivité et professionnalisme. Un vrai partenaire de confiance.',
    auteur: 'Alex',
    poste: 'Responsable SI',
    organisation: 'Swiss Umef University of Niger',
    avatar: '👩‍💼',
    rating: 5
  },
  {
    texte: 'Installation parfaite et accompagnement très apprécié par nos équipes. Les étudiants adorent les nouveaux équipements.',
    auteur: 'Service Scolarité',
    poste: 'Directeur',
    organisation: "Université de Diffa",
    avatar: '👨‍🏫',
    rating: 5
  }
]

export default function Confiance() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-neutral-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* En-tête */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
            Ils nous font confiance
          </h2>
          <p className="text-xl text-gray-600">
            Plus de 10 universités et écoles nous ont choisis pour leur transformation digitale
          </p>
        </div>

        {/* Bandeau de logos */}
        <div className="mb-20">
          <div className="bg-white rounded-3xl border-2 border-gray-100 p-12 shadow-lg">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center p-6 rounded-xl bg-neutral-50 hover:bg-neutral-100 transition-colors group"
                >
                  <div className="text-center">
                    <div className="text-3xl mb-2 opacity-40 group-hover:opacity-60 transition-opacity">
                      🏢
                    </div>
                    <div className="text-sm font-semibold text-gray-700 group-hover:text-primary transition-colors">
                      {client}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Témoignages */}
        <div className="grid md:grid-cols-3 gap-8">
          {temoignages.map((temoignage, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 border-2 border-gray-100 hover:border-primary hover:shadow-2xl transition-all duration-500 relative group"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Quote className="w-6 h-6 text-white" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(temoignage.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Texte */}
              <p className="text-gray-700 mb-8 leading-relaxed italic text-lg">
                "{temoignage.texte}"
              </p>

              {/* Auteur */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-2xl shadow-md">
                  {temoignage.avatar}
                </div>
                <div>
                  <div className="font-bold text-gray-900">
                    {temoignage.auteur}
                  </div>
                  <div className="text-sm text-gray-600">
                    {temoignage.poste}
                  </div>
                  <div className="text-sm text-primary font-medium">
                    {temoignage.organisation}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Badge de certification */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-6 bg-white rounded-2xl px-8 py-6 border-2 border-gray-100 shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">✓</span>
              </div>
              <div className="text-left">
                <div className="font-bold text-gray-900">Certifié ISO 9001</div>
                <div className="text-sm text-gray-600">Qualité garantie</div>
              </div>
            </div>
            
            <div className="h-12 w-px bg-gray-200"></div>
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">🔒</span>
              </div>
              <div className="text-left">
                <div className="font-bold text-gray-900">RGPD Conforme</div>
                <div className="text-sm text-gray-600">Données sécurisées</div>
              </div>
            </div>
            
            <div className="h-12 w-px bg-gray-200"></div>
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">⭐</span>
              </div>
              <div className="text-left">
                <div className="font-bold text-gray-900">98% Satisfaction</div>
                <div className="text-sm text-gray-600">+50 clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
