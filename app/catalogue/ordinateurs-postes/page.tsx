import Link from 'next/link'
import { CheckCircle, Star } from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ordinateurs & Postes de Travail Scolaires | Numatech',
  description: 'PC fixes, portables et tout-en-un pour établissements scolaires. Dell, HP, Lenovo certifiés éducation. Installation réseau incluse.',
}

const produits = [
  { nom: 'Dell OptiPlex 7010 SFF i5', marque: 'Dell', emoji: '🖥️', prix: 549850, specs: ['i5-13500 · 16 Go DDR4', 'SSD 256 Go NVMe', 'Windows 11 Pro', 'Garantie 3 ans'], badge: 'Meilleure vente', stars: 4.8, avis: 89 },
  { nom: 'HP ProDesk 600 G9 Mini', marque: 'HP', emoji: '🖥️', prix: 489350, specs: ['i5-12500T · 8 Go', 'SSD 256 Go', 'Ultra-compact', 'WiFi intégré'], badge: null, stars: 4.6, avis: 54 },
  { nom: 'HP ProBook 450 G10', marque: 'HP', emoji: '💻', prix: 586850, specs: ['15.6" Full HD', 'i5-1335U · 16 Go', 'SSD 512 Go', 'Norme MIL-STD'], badge: 'Portable', stars: 4.7, avis: 112 },
  { nom: 'Lenovo ThinkCentre AIO 24"', marque: 'Lenovo', emoji: '🖥️', prix: 684350, specs: ['Tout-en-un 24" FHD', 'i5-12500 · 16 Go', 'SSD 512 Go', 'Webcam + micros'], badge: 'Tout-en-un', stars: 4.5, avis: 37 },
]

export default function Page() {
  return (<>
    <Breadcrumbs items={[{ label: 'Catalogue', href: '/catalogue' }, { label: 'Ordinateurs & Postes' }]} />
    <section className="bg-gradient-to-br from-slate-700 to-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-6xl mb-4">💻</div>
        <h1 className="text-4xl font-bold mb-3">Ordinateurs & Postes de Travail</h1>
        <p className="text-lg text-slate-300 max-w-2xl">PC fixes, portables et tout-en-un certifiés éducation. Installation réseau, configuration MDM et formation incluses.</p>
      </div>
    </section>

    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {produits.map((p, i) => (
            <div key={i} className="bg-white rounded-2xl border-2 border-gray-100 hover:border-primary hover:shadow-xl transition overflow-hidden">
              {p.badge && <div className="bg-primary text-white text-xs font-bold px-3 py-1 text-center">{p.badge}</div>}
              <div className="p-6">
                <div className="text-5xl mb-4 text-center">{p.emoji}</div>
                <div className="text-xs text-gray-400 mb-1">{p.marque}</div>
                <h3 className="font-bold mb-3">{p.nom}</h3>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_,j) => <Star key={j} size={12} className={j < Math.floor(p.stars) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-200'} />)}
                  <span className="text-xs text-gray-500 ml-1">({p.avis})</span>
                </div>
                <ul className="space-y-1 mb-4">
                  {p.specs.map((s, j) => <li key={j} className="text-xs text-gray-600 flex items-start gap-1"><CheckCircle size={10} className="text-green-500 mt-0.5 flex-shrink-0" />{s}</li>)}
                </ul>
                <div className="text-2xl font-bold text-primary mb-4">{p.prix}FCFA <span className="text-xs text-gray-400 font-normal">HT</span></div>
                <Link href="/contact?type=devis&cat=ordinateurs" className="block w-full bg-primary text-white py-2 rounded-xl text-sm font-semibold text-center hover:bg-primary-dark transition">
                  Demander un devis
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
          <h3 className="text-xl font-bold mb-2">Pack Salle Informatique Clé en Main</h3>
          <p className="text-gray-600 mb-4">30 postes + installation réseau + configuration MDM + formation. À partir de <strong className="text-primary">16 700 000FCFA HT</strong>.</p>
          <Link href="/contact?type=devis&produit=salle-info" className="inline-block bg-primary text-white px-6 py-3 rounded-xl font-bold hover:bg-primary-dark transition">
            Obtenir un devis personnalisé
          </Link>
        </div>
      </div>
    </section>
  </>)
}
