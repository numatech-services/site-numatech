import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Visualiseurs & Caméras Document | Catalogue Numatech',
  description: 'Visualiseurs & Caméras Document pour établissements scolaires. Devis gratuit, livraison incluse.',
}

const produits = [
  { nom: 'Visualiseur Lumens DC170 HD', prix: 350850, detail: '5 Mpx Full HD · Zoom 10x · HDMI · LED incluses' },
  { nom: 'Promethean PRM-45 4K', prix: 556850, detail: '13 Mpx 4K · Micro intégré · Compatible tous TBI' },
  { nom: 'WolfVision VZ-9.4plus', prix: 1238500, detail: '4K 60fps · Interface tactile · Garantie 5 ans' },
]

export default function Page() {
  return (<>
    <Breadcrumbs items={[{ label: 'Catalogue', href: '/catalogue' }, { label: 'Visualiseurs & Caméras Document' }]} />
    <section className="bg-gradient-to-br from-rose-500 to-pink-700 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-6xl mb-4">📷</div>
        <h1 className="text-4xl font-bold mb-3">Visualiseurs & Caméras Document</h1>
        <p className="text-lg text-white/85 max-w-2xl">Sélection rigoureuse pour établissements scolaires. Devis personnalisé, livraison et installation incluses.</p>
      </div>
    </section>
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {produits.map((p, i) => (
            <div key={i} className="bg-neutral-50 rounded-2xl p-6 border-2 border-gray-100 hover:border-rose-400 hover:shadow-xl transition">
              <div className="text-4xl mb-3">📷</div>
              <h3 className="font-bold mb-2">{p.nom}</h3>
              <p className="text-xs text-gray-500 mb-4">{p.detail}</p>
              <div className="text-2xl font-bold text-primary mb-4">{p.prix}FCFA <span className="text-xs text-gray-400 font-normal">HT</span></div>
              <Link href="/contact?type=devis" className="block text-center bg-primary text-white py-2 rounded-xl text-sm font-semibold hover:bg-primary-dark transition">Demander un devis</Link>
            </div>
          ))}
        </div>
        <div className="text-center">
          <p className="text-gray-500 mb-4">Vous ne trouvez pas ce qu'il vous faut ? Nos conseillers ont accès à + de 2 000 références.</p>
          <Link href="/contact" className="inline-block border-2 border-primary text-primary px-8 py-3 rounded-xl font-semibold hover:bg-primary/5 transition">
            Contacter un expert →
          </Link>
        </div>
      </div>
    </section>
  </>)
}
