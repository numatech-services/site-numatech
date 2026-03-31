import Link from 'next/link'
import { Wifi, Monitor, Shield, Users, CheckCircle, ArrowRight } from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Solutions IT Collèges & Lycées | Numatech Services',
  description: 'Infrastructure robuste pour 100 à 2000 élèves. Wi-Fi haute densité, salles informatiques complètes, sécurité multi-niveaux. Audit gratuit.',
}

const solutions = [
  {
    icon: Wifi,
    titre: 'Wi-Fi Haute Densité',
    desc: 'Couverture totale de l\'établissement pour 1 000+ utilisateurs simultanés. Roaming transparent entre bâtiments, bandes 2.4/5/6 GHz, filtrage par profil (élèves/profs/admin).',
    details: ['1 000+ connexions simultanées', 'Couverture 100% bâtiments', 'Roaming et mobilité', 'SSID séparé par profil'],
  },
  {
    icon: Monitor,
    titre: 'Salles Informatiques',
    desc: 'De 20 à 40 postes par salle, clé en main. Installation réseau, MDM, logiciels pédagogiques et formation des enseignants inclus.',
    details: ['PC fixes ou portables', 'Écrans interactifs', 'Logiciels pédagogiques', 'MDM centralisé'],
  },
  {
    icon: Shield,
    titre: 'Sécurité Multi-Niveaux',
    desc: 'Protection complète adaptée aux mineurs. Filtrage web par catégorie, pare-feu nouvelle génération, surveillance et alertes temps réel.',
    details: ['Filtrage web (mineurs/RGPD)', 'Pare-feu NG Fortinet/Palo Alto', 'Sauvegardes automatiques', 'Rapport sécurité mensuel'],
  },
  {
    icon: Users,
    titre: 'Accompagnement Équipes',
    desc: 'Formation des enseignants, des équipes techniques et administration. Support téléphonique prioritaire et intervention sur site en moins de 4h.',
    details: ['Formation pédagogique incluse', 'Support Lun–Ven 8h–18h', 'Intervention <4h', 'Reporting mensuel'],
  },
]

export default function CollegesLyceesPage() {
  return (<>
    <Breadcrumbs items={[{ label: 'Secteurs', href: '/secteurs' }, { label: 'Collèges & Lycées' }]} />

    <section className="bg-gradient-to-br from-blue-600 to-cyan-700 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-white/20 px-4 py-1 rounded-full text-sm mb-5">Collèges & Lycées</div>
            <h1 className="text-5xl font-bold mb-6 font-heading">Collèges & Lycées</h1>
            <p className="text-xl text-white/90 mb-8">
              Infrastructure robuste pour 100 à 2 000 élèves. Wi-Fi haute densité, salles informatiques clé en main, sécurité multi-niveaux.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact?type=audit" className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:shadow-xl transition">Audit gratuit</Link>
              <Link href="/contact?type=devis" className="border-2 border-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition">Demander un devis</Link>
            </div>
          </div>
          <div className="hidden lg:grid grid-cols-2 gap-4">
            {[{ n: '120+', l: 'collèges équipés' }, { n: '1 000+', l: 'users simultanés' }, { n: '<4h', l: 'intervention site' }, { n: '99%', l: 'satisfaction' }].map((s, i) => (
              <div key={i} className="bg-white/10 backdrop-blur rounded-2xl p-5 border border-white/20 text-center">
                <div className="text-2xl font-bold">{s.n}</div>
                <div className="text-sm text-white/70">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">Nos solutions pour les établissements secondaires</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((s, i) => {
            const Icon = s.icon
            return (
              <div key={i} className="bg-neutral-50 rounded-2xl p-8 border-2 border-gray-100 hover:border-blue-200 hover:shadow-lg transition">
                <Icon className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">{s.titre}</h3>
                <p className="text-gray-600 text-sm mb-4">{s.desc}</p>
                <ul className="space-y-2">
                  {s.details.map((d, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />{d}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>

    <section className="py-16 bg-blue-600 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Exemple : Salle informatique 30 postes</h2>
        <p className="text-white/85 mb-6">30 PC Dell · Switch PoE · 2 NAS · Logiciels · Installation réseau · Formation — <strong>33 700€ HT tout compris</strong></p>
        <Link href="/contact?type=devis&produit=salle-info" className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:shadow-xl transition">
          Obtenir mon devis <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  </>)
}
