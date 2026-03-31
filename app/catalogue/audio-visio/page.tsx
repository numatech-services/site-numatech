import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Audio & Visioconférence Scolaire | Numatech',
  description: 'Systèmes audio pour classe, kits visioconférence, micros et enceintes pour écoles et universités.',
}

const produits = [
  { nom: 'Kit audio classe Speechi', emoji: '🎙️', prix: 359350, detail: 'Micro HF + 2 enceintes 40W · Portée 30m · Plug & Play' },
  { nom: 'Barre de son Poly Studio', emoji: '🔊', prix: 486850, detail: 'Micro directionnel · Suppression bruit · USB' },
  { nom: 'Logitech Rally Bar Mini', emoji: '📹', prix: 1338500, detail: 'Caméra 4K + audio · Zoom/Teams · ≤15m²' },
  { nom: 'Poly Studio E70', emoji: '📹', prix: 2518380, detail: 'Cadrage auto · Beamforming · ≤50m²' },
]

export default function Page() {
  return (<>
    <Breadcrumbs items={[{ label: 'Catalogue', href: '/catalogue' }, { label: 'Audio & Visioconférence' }]} />
    <section className="bg-gradient-to-br from-cyan-600 to-teal-700 text-white py-16">
      <div className="max-w-7xl mx-auto px-6"><div className="text-6xl mb-4">🎙️</div>
        <h1 className="text-4xl font-bold mb-3">Audio & Visioconférence</h1>
        <p className="text-lg text-cyan-100 max-w-2xl">Systèmes audio classe, kits visio pour classes hybrides. Compatible Zoom, Teams, Meet.</p>
      </div>
    </section>
    <section className="py-16 bg-white"><div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {produits.map((p, i) => (
          <div key={i} className="bg-neutral-50 rounded-2xl p-6 border-2 border-gray-100 hover:border-cyan-400 hover:shadow-xl transition">
            <div className="text-4xl mb-3">{p.emoji}</div>
            <h3 className="font-bold mb-2">{p.nom}</h3>
            <p className="text-xs text-gray-500 mb-4">{p.detail}</p>
            <div className="text-2xl font-bold text-primary mb-4">{p.prix}FCFA <span className="text-xs text-gray-400 font-normal">HT</span></div>
            <Link href="/contact?type=devis&cat=audio" className="block text-center bg-primary text-white py-2 rounded-xl text-sm font-semibold hover:bg-primary-dark transition">Devis</Link>
          </div>
        ))}
      </div>
    </div></section>
  </>)
}
