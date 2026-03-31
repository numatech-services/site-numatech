import Link from 'next/link'
import { CheckCircle, Star } from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tablettes & Classes Mobiles Scolaires | Numatech',
  description: 'iPad, tablettes Android, classes mobiles pour écoles et lycées. Chariots de recharge, MDM, housses protection. Tarifs éducation.',
}

const produits = [
  { nom: 'iPad 10.9" 64Go WiFi + Pack Éducation', marque: 'Apple', emoji: '📱', prix: 259350, prixBarre: 369450, specs: ['Écran Retina 10.9"', 'Puce A14 Bionic', 'Apps éducatives incluses', 'Housse + stylet'], badge: 'Tarif éducation', stars: 4.9, avis: 342 },
  { nom: 'iPad Air M2 11" 128Go WiFi', marque: 'Apple', emoji: '📱', prix: 421850, prixBarre: null, specs: ['Liquid Retina 11"', 'Puce M2', 'Apple Pencil Pro compat.', '10h batterie'], badge: 'Premium', stars: 4.9, avis: 156 },
  { nom: 'Samsung Galaxy Tab A9+ 11"', marque: 'Samsung', emoji: '📱', prix: 161850, prixBarre: null, specs: ['11" 90Hz', 'Android 13', 'Batterie longue durée', 'Housse incluse'], badge: 'Meilleur prix', stars: 4.5, avis: 203 },
  { nom: 'Lenovo Tab M11 + Stylet', marque: 'Lenovo', emoji: '📱', prix: 194350, prixBarre: null, specs: ['11" Full HD', '128 Go', 'Stylet inclus', 'Mode enfant sécurisé'], badge: null, stars: 4.4, avis: 87 },
]

const packs = [
  { nom: 'Classe Mobile 16 iPad', desc: '16 iPad 10.9" + chariot recharge + Jamf School + housses + formation 2h', prix: '6 543 500FCFA HT' },
  { nom: 'Classe Mobile 30 Tablettes Android', desc: '30 Samsung Tab A9+ + chariot métallique sécurisé + MDM 1 an + mallettes', prix: '8 518 500FCFA HT' },
]

export default function Page() {
  return (<>
    <Breadcrumbs items={[{ label: 'Catalogue', href: '/catalogue' }, { label: 'Tablettes & Classes Mobiles' }]} />
    <section className="bg-gradient-to-br from-sky-600 to-blue-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-6xl mb-4">📱</div>
        <h1 className="text-4xl font-bold mb-3">Tablettes & Classes Mobiles</h1>
        <p className="text-lg text-sky-100 max-w-2xl">iPad, Android, classes mobiles complètes avec chariot, MDM et formation. Tarifs spéciaux éducation nationale.</p>
      </div>
    </section>

    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-8">Tablettes à l'unité</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {produits.map((p, i) => (
            <div key={i} className="bg-white rounded-2xl border-2 border-gray-100 hover:border-primary hover:shadow-xl transition overflow-hidden">
              {p.badge && <div className="bg-sky-600 text-white text-xs font-bold px-3 py-1 text-center">{p.badge}</div>}
              <div className="p-6">
                <div className="text-5xl mb-4 text-center">{p.emoji}</div>
                <div className="text-xs text-gray-400 mb-1">{p.marque}</div>
                <h3 className="font-bold text-sm mb-3">{p.nom}</h3>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_,j) => <Star key={j} size={12} className={j < Math.floor(p.stars) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-200'} />)}
                  <span className="text-xs text-gray-500 ml-1">({p.avis})</span>
                </div>
                <ul className="space-y-1 mb-4">
                  {p.specs.map((s, j) => <li key={j} className="text-xs text-gray-600 flex items-start gap-1"><CheckCircle size={10} className="text-green-500 mt-0.5 flex-shrink-0" />{s}</li>)}
                </ul>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-2xl font-bold text-primary">{p.prix}FCFA</span>
                  {p.prixBarre && <span className="text-sm text-gray-400 line-through">{p.prixBarre}€</span>}
                  <span className="text-xs text-gray-400">HT</span>
                </div>
                <Link href="/contact?type=devis&cat=tablettes" className="block w-full bg-primary text-white py-2 rounded-xl text-sm font-semibold text-center hover:bg-primary-dark transition">Devis</Link>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-6">Classes Mobiles Clé en Main</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {packs.map((p, i) => (
            <div key={i} className="bg-sky-50 rounded-2xl p-8 border-2 border-sky-100 hover:border-sky-400 transition">
              <h3 className="text-xl font-bold mb-3">📦 {p.nom}</h3>
              <p className="text-gray-600 text-sm mb-4">{p.desc}</p>
              <div className="text-2xl font-bold text-primary mb-4">{p.prix}</div>
              <Link href="/contact?type=devis&produit=classe-mobile" className="inline-block bg-primary text-white px-6 py-3 rounded-xl font-bold hover:bg-primary-dark transition">
                Demander ce pack
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>)
}
