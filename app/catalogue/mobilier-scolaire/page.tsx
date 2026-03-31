import Link from 'next/link'
import { CheckCircle } from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mobilier Scolaire Ergonomique | Numatech Services',
  description: 'Tables, chaises, mobilier flexible et évolutif pour classes primaires, collèges et lycées. Normes NF Éducation. Livraison et montage inclus.',
}

const produits = [
  { cat: 'Tables', items: [
    { nom: 'Table scolaire réglable 120×60', emoji: '📐', prix: 57650, detail: 'Hauteur 64-76 cm · 5 coloris · Pieds métal époxy' },
    { nom: 'Table trapèze (maternelle)', emoji: '📐', prix: 83850, detail: 'Assemblage hexagonal · Hauteur 52-64 cm · NF' },
    { nom: 'Table collaborative hexagonale', emoji: '📐', prix: 291850, detail: '6 places · Roulettes freinées · Modulable' },
  ]},
  { cat: 'Chaises', items: [
    { nom: 'Chaise 4 pieds assise coque', emoji: '🪑', prix: 22750, detail: 'PP recyclé · Empilable · T3-T6' },
    { nom: 'Tabouret ergonomique basculant', emoji: '🪑', prix: 51350, detail: 'Assise oscillante · 43-58 cm · Tous niveaux' },
    { nom: 'Pouf ergonomique mobile', emoji: '🪑', prix: 38350, detail: 'Déhoussable · Poignée · Coloris variés' },
  ]},
  { cat: 'Rangements', items: [
    { nom: 'Casiers élèves 10 cases', emoji: '🗄️', prix: 194350, detail: 'Métal thermolaqué · Serrure à clé · H180 cm' },
    { nom: 'Bibliothèque mobile à roulettes', emoji: '📚', prix: 122850, detail: '3 étagères réglables · Roues freinées' },
  ]},
]

export default function Page() {
  return (<>
    <Breadcrumbs items={[{ label: 'Catalogue', href: '/catalogue' }, { label: 'Mobilier Scolaire' }]} />
    <section className="bg-gradient-to-br from-amber-600 to-orange-700 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-6xl mb-4">🪑</div>
        <h1 className="text-4xl font-bold mb-3">Mobilier Scolaire Ergonomique</h1>
        <p className="text-lg text-amber-100 max-w-2xl">Tables, chaises et mobilier flexible. Normes NF Éducation. Montage et livraison en établissement inclus.</p>
      </div>
    </section>

    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 space-y-14">
        {produits.map((group, gi) => (
          <div key={gi}>
            <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200">{group.cat}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {group.items.map((p, pi) => (
                <div key={pi} className="bg-neutral-50 rounded-2xl p-6 border-2 border-gray-100 hover:border-amber-400 hover:shadow-lg transition">
                  <div className="text-4xl mb-3">{p.emoji}</div>
                  <h3 className="font-bold mb-2">{p.nom}</h3>
                  <p className="text-xs text-gray-500 mb-4">{p.detail}</p>
                  <div className="text-2xl font-bold text-primary mb-4">{p.prix}FCFA <span className="text-xs text-gray-400 font-normal">HT/unité</span></div>
                  <Link href="/contact?type=devis&cat=mobilier" className="block text-center bg-primary text-white py-2 rounded-xl text-sm font-semibold hover:bg-primary-dark transition">Devis</Link>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="bg-amber-50 rounded-2xl p-8 border-2 border-amber-100">
          <h3 className="text-xl font-bold mb-2">🏫 Pack Classe Flexible 30 Élèves</h3>
          <p className="text-gray-600 mb-4">6 tables trapèzes + 12 chaises + 6 tabourets + 12 poufs + 3 tables hautes. Montage inclus.</p>
          <div className="flex items-baseline gap-3 mb-4">
            <span className="text-3xl font-bold text-primary">3 893 500FCFA HT</span>
            <span className="text-gray-400 line-through text-lg">4 680 000FCFA</span>
          </div>
          <Link href="/contact?type=devis&produit=classe-flexible" className="inline-block bg-primary text-white px-6 py-3 rounded-xl font-bold hover:bg-primary-dark transition">
            Obtenir ce pack
          </Link>
        </div>
      </div>
    </section>
  </>)
}
