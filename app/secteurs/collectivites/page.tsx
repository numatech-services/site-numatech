import Link from 'next/link'
import { CheckCircle, ArrowRight, Building, FileText, BarChart3, Shield } from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Solutions IT Collectivités & Administrations | Numatech',
  description: 'Expertise marchés publics pour collectivités : multi-sites, standardisation du parc IT, optimisation TCO. Réponse aux appels d\'offres BOAMP.',
}

const atouts = [
  { icon: FileText, title: 'Marchés Publics', desc: 'Réponse aux appels d\'offres (BOAMP, AWS), rédaction mémoires techniques, dossiers conformes CCTP.' },
  { icon: Building, title: 'Gestion Multi-Sites', desc: 'Centralisation du parc IT sur tous vos sites, déploiement standardisé, supervision unifiée.' },
  { icon: BarChart3, title: 'Optimisation TCO', desc: 'Analyse du coût total de possession, propositions d\'économies, reporting consolidé pour élus.' },
  { icon: Shield, title: 'Sécurité & RGPD', desc: 'Sécurisation des données personnelles, plan de reprise d\'activité, conformité ANSSI et RGPD.' },
]

export default function CollectivitesPage() {
  return (<>
    <Breadcrumbs items={[{ label: 'Secteurs', href: '/secteurs' }, { label: 'Collectivités' }]} />
    <section className="bg-gradient-to-br from-green-700 to-teal-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-white/20 px-4 py-1 rounded-full text-sm mb-5">Collectivités & Administrations</div>
            <h1 className="text-5xl font-bold mb-6 font-heading">Collectivités Territoriales</h1>
            <p className="text-xl text-white/90 mb-8">Expertise marchés publics, gestion multi-sites et optimisation budgétaire pour mairies, départements et régions.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact?type=audit" className="bg-white text-green-700 px-8 py-4 rounded-xl font-bold hover:shadow-xl transition">Audit gratuit</Link>
              <Link href="/contact?type=devis" className="border-2 border-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition">Répondre à votre AO</Link>
            </div>
          </div>
          <div className="hidden lg:flex justify-center items-center text-9xl">🏛️</div>
        </div>
      </div>
    </section>

    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">Notre expertise collectivités</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {atouts.map((a, i) => {
            const Icon = a.icon
            return (
              <div key={i} className="bg-neutral-50 rounded-2xl p-8 border-2 border-gray-100 hover:border-green-200 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-green-700" />
                </div>
                <h3 className="text-xl font-bold mb-3">{a.title}</h3>
                <p className="text-gray-600">{a.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>

    <section className="py-16 bg-neutral-50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Référence : Université Djobo Hamani</h2>
        <div className="bg-white rounded-2xl p-10 border-2 border-gray-100 grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-bold mb-4">Réalisations</h3>
            {['WiFi 100% des bâtiments municipaux', 'Sauvegarde automatisée 15 To', 'Formation des agents aux nouveaux outils', 'Migration messagerie vers Microsoft 365'].map((item, i) => (
              <div key={i} className="flex items-center gap-3 mb-3"><CheckCircle className="w-5 h-5 text-green-500" /><span className="text-sm">{item}</span></div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[{ n: '95K€', l: 'Budget total' }, { n: '85', l: 'Agents formés' }, { n: '6 mois', l: 'Déploiement' }, { n: '98%', l: 'Satisfaction' }].map((s, i) => (
              <div key={i} className="bg-green-50 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-green-700">{s.n}</div>
                <div className="text-xs text-gray-600">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="py-16 bg-green-700 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Votre projet de modernisation IT</h2>
        <p className="text-white/85 mb-8">Analyse gratuite · Réponse AO · Accompagnement déploiement</p>
        <Link href="/contact?type=audit" className="inline-flex items-center gap-2 bg-white text-green-700 px-8 py-4 rounded-xl font-bold hover:shadow-xl transition">
          Étudier votre projet <ArrowRight size={20} />
        </Link>
      </div>
    </section>
  </>)
}
