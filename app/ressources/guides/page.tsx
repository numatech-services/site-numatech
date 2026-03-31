import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Guides pratiques IT & Éducation | Numatech Services',
  description: 'Téléchargez nos guides pratiques : transformation numérique scolaire, choix écran interactif, salle informatique. Gratuits.',
}

const guides = [
  { titre: 'Réussir votre transformation numérique scolaire', pages: 24, format: 'PDF', niveaux: 'Tous établissements', emoji: '📘', desc: 'Du diagnostic à la mise en œuvre : méthodologie, budget, équipes, formation.' },
  { titre: 'Choisir son écran interactif en 2026', pages: 12, format: 'PDF', niveaux: 'Directeurs, DSI', emoji: '📺', desc: 'Comparatif des 5 meilleures marques, critères techniques, pièges à éviter.' },
  { titre: 'Checklist : équiper une salle informatique', pages: 4, format: 'PDF', niveaux: 'Tous', emoji: '✅', desc: 'Liste complète du matériel, étapes d\'installation, points de contrôle.' },
  { titre: 'WiFi haute densité dans les établissements', pages: 16, format: 'PDF', niveaux: 'DSI, Techniciens', emoji: '📡', desc: 'Dimensionnement, points d\'accès, sécurité, gestion BYOD.' },
]

export default function GuidesPage() {
  return (<>
    <Breadcrumbs items={[{ label: 'Ressources', href: '/ressources' }, { label: 'Guides' }]} />
    <section className="bg-gradient-to-br from-teal-600 to-teal-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-4">Guides pratiques</h1>
        <p className="text-xl text-teal-100">Ressources gratuites pour vos projets IT</p>
      </div>
    </section>
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {guides.map((g, i) => (
            <div key={i} className="bg-neutral-50 rounded-2xl p-8 border-2 border-gray-100 hover:border-teal-200 hover:shadow-xl transition">
              <div className="text-5xl mb-4">{g.emoji}</div>
              <div className="text-xs text-teal-600 font-semibold mb-2 uppercase">{g.format} · {g.pages} pages · {g.niveaux}</div>
              <h3 className="text-xl font-bold mb-3">{g.titre}</h3>
              <p className="text-gray-600 text-sm mb-6">{g.desc}</p>
              <Link href="/contact?type=catalogue" className="inline-flex items-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-teal-700 transition">
                Télécharger gratuitement
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>)
}
