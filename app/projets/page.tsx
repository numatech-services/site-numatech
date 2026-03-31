import Link from 'next/link'
import { CheckCircle, ArrowRight } from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nos Projets & Réalisations | Numatech Services',
  description: 'Découvrez nos réalisations concrètes : lycées, mairies, écoles primaires. Résultats mesurés, budgets, délais. +10 établissements équipés depuis 2022.',
}

const projets = [
  {
    slug: "université-djibo-hamani",
    title: "Université Djibo Hamani",
    categorie: 'Université', ville: 'Tahoua-Niger', budget: '', duree: '3 mois',
    color: 'from-blue-500 to-blue-700', emoji: '🏫',
    description: 'Refonte complète du parc informatique et déploiement d\'un réseau WiFi haute densité sur 3 bâtiments pour les étudiants.',
    realisations: ['postes PC Dell OptiPlex renouvelés', 'Salle Auditorium', 'Salle multimédia', ' écrans interactifs SMART 75"'],
    resultats: [{ n: '-70%', l: 'Pannes réseau' }, { n: '95%', l: 'Satisfaction' }, { n: '3 mois', l: 'Déploiement' }, { n: '0€', l: 'Dépassement' }],
  },
  {
    slug: 'swiss-umef',
    title: 'Swiss Umef University of Niger',
    categorie: 'Université', ville: 'Niamey-Niger', budget: '', duree: '3 mois',
    color: 'from-green-500 to-teal-600', emoji: '🏛️',
    description: 'Modernisation complète de l\'infrastructure IT municipale : WiFi, sauvegarde, messagerie cloud et formation des agents.',
    realisations: ["Contrôle d'accès des bâtiments ', 'Sauvegarde automatisée 15 G', 'Migration vers Microsoft 365', 'Formation des agents"],
    resultats: [{ n: '100%', l: 'Couverture WiFi' }, { n: '85', l: 'Agents formés' }, { n: '15 G', l: 'Données sécurisées' }, { n: '98%', l: 'Satisfaction' }],
  },
  {
    slug: 'ecole-normale-superieure',
    title: 'École Normale Supérieure de Niamey',
    categorie: 'Université', ville: 'Niamey-Niger', budget: '', duree: '4 mois',
    color: 'from-pink-500 to-rose-600', emoji: '🎒',
    description: 'Équipement numérique complet d\'une école normale supérieure de plus de 1000 étudiants: mobilier ergonomique, ordinateur et écrans interactifs.',
    realisations: ['Mobilier modulable ergonomique (un bloc de bâtiment)', '30 ordinateur de bureau + table ', '4 écrans interactifs Promethean 105, 86, 75, 65"', 'ENT déployé pour 2000 étudiants'],
    resultats: [{ n: '+40%', l: 'Engagement élèves' }, { n: '98%', l: 'Satisfaction parents' }, { n: '15', l: 'Enseignants formés' }, { n: '6 sem.', l: 'Déploiement' }],
  },
]

const stats = [
  { n: '10+', l: 'Établissements équipés' },
  { n: '100 +', l: 'Postes déployés' },
  { n: '5 ans', l: 'D\'expertise' },
  { n: '98%', l: 'Satisfaction client' },
]

export default function ProjetsPage() {
  return (<>
    <Breadcrumbs items={[{ label: 'Projets' }]} />

    <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl font-bold mb-6 font-heading">Nos Réalisations</h1>
        <p className="text-xl text-white/90 mb-12 max-w-2xl">
          Depuis 2022, plus de 10 Universités et grandes écoles nous ont confié leur transformation numérique. Voici quelques projets récents.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div key={i} className="bg-white/10 backdrop-blur rounded-2xl p-5 border border-white/20 text-center">
              <div className="text-3xl font-bold mb-1">{s.n}</div>
              <div className="text-sm text-white/75">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        {projets.map((projet, index) => (
          <div key={projet.slug} className={`grid lg:grid-cols-2 gap-10 items-start ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
            <div className={`${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
              <div className={`bg-gradient-to-br ${projet.color} rounded-3xl p-10 text-white`}>
                <div className="text-7xl mb-6">{projet.emoji}</div>
                <div className="text-sm opacity-80 mb-2">{projet.categorie} · {projet.ville}</div>
                <h2 className="text-3xl font-bold mb-2">{projet.title}</h2>
                <div className="flex gap-4 text-sm mt-4">
                  <span className="bg-white/20 px-3 py-1 rounded-full">Budget : {projet.budget}</span>
                  <span className="bg-white/20 px-3 py-1 rounded-full">Durée : {projet.duree}</span>
                </div>  
                <div className="grid grid-cols-2 gap-3 mt-8">
                  {projet.resultats.map((r, i) => (
                    <div key={i} className="bg-white/15 rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold">{r.n}</div>
                      <div className="text-xs opacity-75">{r.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className={`${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">{projet.description}</p>
              <h3 className="font-bold text-lg mb-4">Ce que nous avons réalisé</h3>
              <ul className="space-y-3 mb-8">
                {projet.realisations.map((r, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Votre projet est le prochain</h2>
        <p className="text-xl text-white/90 mb-8">Audit gratuit et proposition détaillée sous 48h.</p>
        <Link href="/contact?type=audit" className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-bold hover:shadow-xl transition">
          Étudier mon projet <ArrowRight size={20} />
        </Link>
      </div>
    </section>
  </>)
}
