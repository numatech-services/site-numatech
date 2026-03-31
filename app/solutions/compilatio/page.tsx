import Link from 'next/link'
import { CheckCircle, ArrowRight } from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Compilatio – Détection plagiat & IA | Numatech Services',
  description: 'Compilatio : détection de plagiat et de contenus générés par IA (ChatGPT). Protection de l\'intégrité académique. Intégration LMS, RGPD conforme.',
}
const hero = { title: 'Compilatio', subtitle: 'L\'intégrité académique à l\'ère de l\'IA', desc: 'Protégez votre établissement avec une solution avancée de détection. Compilatio combine technologie anti-plagiat et détection d\'IA pour garantir l\'authenticité des travaux.', color: 'from-rose-600 to-orange-600', tag: 'Intégrité académique' }
const features = ['Détection de similitudes approfondie', 'Identification contenus IA (ChatGPT, Gemini…)', 'Rapports pédagogiques détaillés', 'Intégration LMS (Moodle, Canvas)', 'Conformité RGPD', 'Tableau de bord enseignant']
const avantages = ['Protection de la réputation académique', 'Prévention proactive du plagiat', 'Accompagnement pédagogique des étudiants', 'Sécurisation des processus d\'évaluation']
const tarifs = [{ nom: 'Magister (enseignant)', prix: '99', desc: 'Par an, analyses illimitées' }, { nom: 'Établissement', prix: 'À partir de 1 500', desc: 'Par an, volume selon effectifs' }]

export default function Page() {
  return (<>
    <Breadcrumbs items={[{ label: 'Solutions', href: '/solutions-logicielles' }, { label: hero.title }]} />
    <section className={`bg-gradient-to-br ${hero.color} text-white py-20`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <div className="inline-block bg-white/20 backdrop-blur px-4 py-1 rounded-full text-sm mb-6">{hero.tag}</div>
          <h1 className="text-5xl font-bold mb-4 font-heading">{hero.title}</h1>
          <p className="text-xl font-medium mb-4">{hero.subtitle}</p>
          <p className="text-white/85 mb-8 leading-relaxed">{hero.desc}</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact?type=demo" className="bg-white text-gray-900 px-8 py-4 rounded-xl font-bold hover:shadow-xl transition">Étudier votre abonnement</Link>
            <Link href="/contact" className="border-2 border-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition">Parler à un expert</Link>
          </div>
        </div>
      </div>
    </section>

    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl font-bold mb-8">Un levier stratégique pour votre institution</h2>
            <ul className="space-y-4">
              {features.map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-8">Valeur ajoutée</h2>
            <div className="space-y-4">
              {avantages.map((a, i) => (
                <div key={i} className="bg-green-50 border border-green-100 rounded-xl p-4 flex items-center gap-3">
                  <span className="text-green-600 font-bold text-xl">✔</span>
                  <span className="font-medium text-green-900">{a}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-neutral-50 rounded-2xl p-6 border-2 border-gray-100">
              <h3 className="font-bold mb-4">Tarification</h3>
              {tarifs.map((t, i) => (
                <div key={i} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0">
                  <div><div className="font-semibold">{t.nom}</div><div className="text-xs text-gray-500">{t.desc}</div></div>
                  <div className="font-bold text-primary">{t.prix}€</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="py-16 bg-gradient-to-br from-primary to-secondary text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">L'accompagnement Numatech</h2>
        <p className="text-white/90 mb-8">Analyse des besoins, configuration technique, formation utilisateurs, support continu.</p>
        <Link href="/contact?type=devis" className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-bold hover:shadow-xl transition">
          Recevoir une offre personnalisée <ArrowRight size={20} />
        </Link>
      </div>
    </section>
  </>)
}
