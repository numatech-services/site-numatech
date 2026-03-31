import Link from 'next/link'
import { CheckCircle, ArrowRight, BookOpen, BarChart3, Users, Search } from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'BiblioMaker – Gestion de bibliothèque numérique | Numatech',
  description: 'BiblioMaker : logiciel de gestion de bibliothèque complet. Catalogage UNIMARC, prêts, OPAC, statistiques. Pour écoles, collèges, lycées et universités.',
}

const features = [
  { icon: BookOpen, title: 'Catalogage professionnel', desc: 'Normes UNIMARC et ISBD. Import Z39.50. Gestion des notices, exemplaires et collections.' },
  { icon: Users, title: 'Gestion des lecteurs', desc: 'Adhérents, prêts, retours, réservations et relances automatiques par email.' },
  { icon: Search, title: 'OPAC en ligne', desc: 'Catalogue public accessible depuis n\'importe quel navigateur. Recherche intuitive, disponibilité en temps réel.' },
  { icon: BarChart3, title: 'Statistiques & rapports', desc: 'Tableaux de bord décisionnels, exports Excel, rapports de fréquentation et d\'usage.' },
]

const tarifs = [
  { nom: 'Mono-poste', prix: '890', desc: 'Licence permanente 1 poste', inclus: ['Installation incluse', 'Formation 1/2 journée', 'Support 1 an', 'Mises à jour 1 an'] },
  { nom: 'Réseau', prix: '1 990', desc: 'Licence permanente 5 postes', inclus: ['Installation + config réseau', 'Formation 1 journée', 'Support prioritaire 1 an', 'Mises à jour 2 ans'], recommended: true },
  { nom: 'SaaS Cloud', prix: '49/mois', desc: 'Hébergé, sans maintenance', inclus: ['Accès illimité', 'Sauvegardes auto', 'Support illimité', 'Mises à jour automatiques'] },
]

export default function BiblioMakerPage() {
  return (<>
    <Breadcrumbs items={[{ label: 'Solutions', href: '/solutions-logicielles' }, { label: 'BiblioMaker' }]} />
    <section className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <div className="inline-block bg-white/20 backdrop-blur px-4 py-1 rounded-full text-sm mb-6">Solution documentaire</div>
          <h1 className="text-5xl font-bold mb-6 font-heading">BiblioMaker</h1>
          <p className="text-xl text-white/90 mb-4">La gestion de bibliothèque nouvelle génération</p>
          <p className="text-white/80 mb-8 leading-relaxed">
            BiblioMaker centralise, structure et optimise l'ensemble de votre gestion documentaire dans un environnement sécurisé et intuitif. Conçu pour les établissements scolaires et universitaires.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact?type=demo&produit=bibliomaker" className="bg-white text-indigo-700 px-8 py-4 rounded-xl font-bold hover:shadow-xl transition">Demander une démo gratuite</Link>
            <Link href="/contact?type=devis&produit=bibliomaker" className="border-2 border-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition">Obtenir une étude personnalisée</Link>
          </div>
        </div>
      </div>
    </section>

    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">Une plateforme complète, pensée pour la performance</h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">BiblioMaker ne se limite pas à gérer des ouvrages : il structure votre capital documentaire.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => {
            const Icon = f.icon
            return (
              <div key={i} className="bg-neutral-50 rounded-2xl p-6 border-2 border-gray-100 hover:border-indigo-200 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4"><Icon className="w-6 h-6 text-indigo-600" /></div>
                <h3 className="font-bold mb-2">{f.title}</h3>
                <p className="text-sm text-gray-600">{f.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>

    <section className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">Impact stratégique pour votre établissement</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mt-12">
          {['Réduction du temps administratif de 50%', 'Augmentation des prêts de +30%', 'Autonomie élèves : réservation en ligne', 'Valorisation et visibilité du fonds documentaire'].map((item, i) => (
            <div key={i} className="flex items-start gap-3 bg-white p-6 rounded-xl border border-gray-100">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
              <span className="font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">Tarifs transparents</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {tarifs.map((t, i) => (
            <div key={i} className={`rounded-2xl p-8 border-2 ${t.recommended ? 'border-indigo-500 shadow-xl relative' : 'border-gray-200'}`}>
              {t.recommended && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-500 text-white text-xs font-bold px-4 py-1 rounded-full">Recommandé</div>}
              <h3 className="font-bold text-xl mb-1">{t.nom}</h3>
              <p className="text-gray-500 text-sm mb-4">{t.desc}</p>
              <div className="text-3xl font-bold text-indigo-600 mb-6">{t.prix}€ <span className="text-sm text-gray-500 font-normal">HT</span></div>
              <ul className="space-y-3 mb-8">
                {t.inclus.map((item, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm"><CheckCircle className="w-4 h-4 text-green-500" />{item}</li>
                ))}
              </ul>
              <Link href="/contact?type=devis&produit=bibliomaker" className={`block w-full text-center py-3 rounded-xl font-semibold transition ${t.recommended ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'border-2 border-gray-300 hover:border-indigo-400 hover:text-indigo-600'}`}>
                Demander un devis
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 bg-indigo-600 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">L'accompagnement Premium Numatech</h2>
        <p className="text-white/90 mb-8">Audit initial, migration sécurisée, paramétrage avancé, formation équipes, support prioritaire.</p>
        <Link href="/contact?type=demo&produit=bibliomaker" className="inline-flex items-center gap-2 bg-white text-indigo-600 px-8 py-4 rounded-xl font-bold hover:shadow-xl transition">
          Passez à une gestion documentaire performante <ArrowRight size={20} />
        </Link>
      </div>
    </section>
  </>)
}
