import Link from 'next/link'
import { Download, Clock, Play, ArrowRight } from 'lucide-react'

const ressources = [
  {
    type: 'GUIDE PRATIQUE',
    icon: '📘',
    titre: 'Réussir votre transformation numérique scolaire',
    description: 'Téléchargez le guide complet (24 pages)',
    details: 'PDF · 24 pages · 2.3 Mo',
    cta: 'Télécharger gratuitement',
    href: '/ressources/guide-transformation-numerique',
    action: Download,
    color: 'from-blue-500 to-blue-600',
    badge: 'Gratuit'
  },
  {
    type: 'ARTICLE',
    icon: '📖',
    titre: 'Comment choisir son prestataire informatique ?',
    description: '5 critères indispensables à vérifier',
    details: 'Article · 7 min de lecture',
    cta: 'Lire l\'article (7 min)',
    href: '/pdf/guide-transformation-numerique.pdf',
    action: Clock,
    color: 'from-green-500 to-green-600',
    badge: 'Nouveau'
  },
  {
    type: 'VIDÉO',
    icon: '🎥',
    titre: 'Équiper une salle de classe hybride en 2026',
    description: 'Découvrez nos solutions en 4 minutes',
    details: 'Vidéo · 4 min · Full HD',
    cta: 'Regarder la vidéo',
    href: '/ressources/videos/classe-hybride-2026',
    action: Play,
    color: 'from-purple-500 to-purple-600',
    badge: 'Populaire'
  }
]

export default function Ressources() {
  return (
    <section className="py-24 bg-gradient-to-b from-neutral-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* En-tête */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
            Ressources gratuites pour vos projets
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Guides, articles et vidéos pour vous accompagner dans votre transformation digitale
          </p>
        </div>

        {/* Grille de ressources */}
        <div className="grid md:grid-cols-3 gap-8">
          {ressources.map((ressource, index) => {
            const ActionIcon = ressource.action
            return (
              <div
                key={index}
                className="group bg-white rounded-3xl border-2 border-gray-100 overflow-hidden hover:border-primary hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Header avec gradient */}
                <div className={`bg-gradient-to-br ${ressource.color} p-8 text-white relative`}>
                  {/* Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-xs font-bold border border-white/30">
                      {ressource.badge}
                    </span>
                  </div>

                  {/* Type */}
                  <div className="text-sm font-bold mb-4 opacity-90 uppercase tracking-wide">
                    {ressource.type}
                  </div>

                  {/* Emoji */}
                  <div className="text-6xl mb-6">{ressource.icon}</div>

                  {/* Titre */}
                  <h3 className="text-2xl font-bold leading-tight">
                    {ressource.titre}
                  </h3>
                </div>

                {/* Contenu */}
                <div className="p-8">
                  {/* Description */}
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {ressource.description}
                  </p>

                  {/* Détails */}
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-6 pb-6 border-b border-gray-100">
                    <ActionIcon className="w-4 h-4" />
                    {ressource.details}
                  </div>

                  {/* CTA */}
                  <Link
                    href={ressource.href}
                    className="group/btn inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl hover:bg-primary-dark transition-all font-semibold w-full justify-center group-hover:gap-3"
                  >
                    {ressource.cta}
                    <ActionIcon className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        {/* Lien vers toutes les ressources */}
        <div className="text-center mt-12">
          <Link
            href="/ressources"
            className="inline-flex items-center gap-2 text-primary font-semibold text-lg hover:gap-3 transition-all"
          >
            Voir toutes nos ressources
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Newsletter card */}
        <div className="mt-20 bg-gradient-to-r from-primary to-secondary rounded-3xl p-12 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <div className="text-4xl mb-6">📬</div>
            <h3 className="text-3xl font-bold mb-4">
              Restez informé des dernières actualités IT
            </h3>
            <p className="text-white/90 mb-8 text-lg">
              Recevez chaque mois nos guides, conseils et actualités du secteur éducatif
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre email professionnel"
                className="flex-1 px-6 py-4 rounded-xl text-gray-900 outline-none focus:ring-4 focus:ring-white/30"
              />
              <button className="bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:bg-white/90 transition whitespace-nowrap">
                S'abonner
              </button>
            </div>
            <p className="text-xs text-white/60 mt-4">
              Pas de spam. Désabonnement en 1 clic.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
