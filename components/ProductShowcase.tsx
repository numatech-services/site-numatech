'use client'
import { useState } from 'react'
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'
import Link from 'next/link'

const products = [
  {
    name: 'Écran Interactif SMART Board 86"',
    category: 'Écrans Interactifs',
    price: '3 215 086FCFA',
    image: '/images/ecran3.png',
    features: ['4K UHD', '20 points tactiles', 'Android 11', 'SMART Notebook'],
    url: '/catalogue/ecrans-interactifs',
  },
  {
    name: 'iPad Pack Éducation 10.9"',
    category: 'Tablettes',
    price: '550 000FCFA',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&h=600&fit=crop',
    features: ['Puce A14 Bionic', 'Apps éducatives', 'Housse + stylet', 'Tarif éducation'],
    url: '/catalogue/tablettes-mobiles',
  },
  {
    name: 'Dell OptiPlex 7010 SFF',
    category: 'Ordinateurs',
    price: '649 850FCFA',
    image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=800&h=600&fit=crop',
    features: ['i5-13500', '16 Go DDR4', 'SSD 256 Go', 'Windows 11 Pro'],
    url: '/catalogue/ordinateurs-postes',
  },
  {
    name: 'Mobilier Flexible Classe',
    category: 'Mobilier',
    price: '5 893 500FCFA',
    image: '/images/salle2.png',
    features: ['6 tables modulables', '30 assises', 'Ergonomique', 'Pack 30 élèves'],
    url: '/catalogue/mobilier-scolaire',
  },
]

export default function ProductShowcase() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((current + 1) % products.length)
  const prev = () => setCurrent((current - 1 + products.length) % products.length)

  const product = products[current]

  return (
    <section className="py-24 bg-gradient-to-br from-primary to-secondary text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 font-heading">Nos Produits Phares</h2>
          <p className="text-xl text-white/80">Sélection des meilleures technologies pour l'éducation</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative group">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            
            {/* Navigation */}
            <button onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition shadow-xl">
              <ChevronLeft className="text-primary" />
            </button>
            <button onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition shadow-xl">
              <ChevronRight className="text-primary" />
            </button>

            {/* Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {products.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all ${i === current ? 'w-8 bg-white' : 'w-2 bg-white/40'}`} />
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="space-y-6">
            <div className="inline-block bg-white/20 backdrop-blur px-4 py-1 rounded-full text-sm">
              {product.category}
            </div>
            <h3 className="text-4xl font-bold leading-tight">{product.name}</h3>
            <div className="text-5xl font-bold text-accent-yellow">{product.price} <span className="text-xl text-white/60">HT</span></div>
            
            <ul className="space-y-3">
              {product.features.map((f, i) => (
                <li key={i} className="flex items-center gap-3 text-lg">
                  <div className="w-1.5 h-1.5 bg-accent-yellow rounded-full" />
                  {f}
                </li>
              ))}
            </ul>

            <Link href={product.url}
              className="inline-flex items-center gap-2 bg-accent-yellow text-primary px-8 py-4 rounded-xl font-bold hover:bg-white transition shadow-xl group">
              Voir tous les modèles
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
