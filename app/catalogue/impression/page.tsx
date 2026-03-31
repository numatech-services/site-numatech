import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Impression & Numérisation | Catalogue Numatech',
  description: 'Impression & Numérisation pour établissements scolaires. Devis gratuit, livraison incluse.',
}

const produits = [
  { nom: 'HP LaserJet Pro M404dn', prix: 361850, detail: 'Laser mono A4 · 38 ppm · Recto-verso · Réseau' },
  { nom: 'Brother MFC-L6900DW', prix: 654350, detail: 'Multifonction laser couleur · 50 ppm · Scanner + Fax' },
  { nom: 'Evolis Primacy 2', prix: 1428500, detail: 'Imprimante badges PVC · 210 cartes/h · Simple-Double face' },
]

export default function Page() {
  return (<>
    <Breadcrumbs items={[{ label: 'Catalogue', href: '/catalogue' }, { label: 'Impression & Numérisation' }]} />
    <section className="bg-gradient-to-br from-lime-600 to-green-700 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-6xl mb-4">🖨️</div>
        <h1 className="text-4xl font-bold mb-3">Impression & Numérisation</h1>
        <p className="text-lg text-white/85 max-w-2xl">Sélection rigoureuse pour établissements scolaires. Devis personnalisé, livraison et installation incluses.</p>
      </div>
    </section>
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {produits.map((p, i) => (
            <div key={i} className="bg-neutral-50 rounded-2xl p-6 border-2 border-gray-100 hover:border-lime-400 hover:shadow-xl transition">
              <div className="text-4xl mb-3">🖨️</div>
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
