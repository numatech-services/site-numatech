'use client'
import { useState } from 'react'
import { ExternalLink } from 'lucide-react'
import Link from 'next/link'

const projects = [
  { titre: 'Ecole Normale Supérieure UAM', cat: 'Université', ville: 'Niamey', budget: '', img: '/images/labo11.png', desc: 'Equipement Laboratoire' },
  { titre: 'Swiss Umef University of Niger', cat: 'École', ville: 'Niamey', budget: '', img: '/images/swiss.jpg', desc: ' Contrôle de sécurité' },
  { titre: 'Université De Diffa', cat: 'Université', ville: 'Diffa', budget: '', img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop', desc: 'Optimus, Compilatio' },
  { titre: 'Université Abdou Moumouni', cat: 'Université', ville: 'Niamey', budget: '', img: '/images/audi5.png', desc: 'Salle auditorium, réseau' },
  { titre: 'Université Djibo Hamani', cat: 'Université', ville: 'Tahoua', budget: '', img: '/images/udh.jpeg', desc: 'Amphi 4.0, data center' },
  { titre: 'ECCAM', cat: 'Ecole', ville: 'Niamey', budget: '', img: '/images/eccam.png', desc: 'Licence International Student Identity CARD' },
  
]

const categories = ['Tous', 'École', 'Collège', 'Lycée', 'Université', 'Collectivité']

export default function ProjectsGallery() {
  const [filter, setFilter] = useState('Tous')
  
  const filtered = filter === 'Tous' ? projects : projects.filter(p => p.cat === filter)

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 font-heading">Nos Réalisations</h2>
          <p className="text-xl text-gray-600">+100 projets réussis depuis 2022</p>
        </div>

        {/* Filtres */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(cat => (
            <button key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                filter === cat
                  ? 'bg-primary text-white shadow-lg scale-105'
                  : 'bg-neutral-100 text-gray-600 hover:bg-neutral-200'
              }`}>
              {cat}
            </button>
          ))}
        </div>

        {/* Grille */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((p, i) => (
            <div key={i} className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={p.img}
                  alt={p.titre}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold px-3 py-1 bg-primary/10 text-primary rounded-full">
                    {p.cat}
                  </span>
                  <span className="text-sm text-gray-500">{p.ville}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition">{p.titre}</h3>
                <p className="text-gray-600 text-sm mb-4">{p.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-primary">{p.budget}</span>
                  <Link href="/projets" className="text-primary hover:gap-2 flex items-center gap-1 text-sm font-semibold transition-all group/link">
                    Voir plus <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Hover badge */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary">
                  ✓ Terminé
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/projets" className="inline-block bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary-dark hover:scale-105 transition-all shadow-lg">
            Voir tous nos projets
          </Link>
        </div>
      </div>
    </section>
  )
}
