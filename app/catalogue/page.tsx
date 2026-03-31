import Link from 'next/link'
import { Search, Grid, List, ShoppingCart, Download, Heart, Star } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Catalogue Matériel Pédagogique | Équipement Scolaire - Numatech',
  description: 'Découvrez notre catalogue complet : écrans interactifs, tablettes, ordinateurs, mobilier scolaire, visualiseurs. Livraison et installation incluses.',
  keywords: 'écran interactif éducation, tablettes scolaires, ordinateurs éducation, mobilier scolaire, TBI, visualiseur, matériel pédagogique',
}

const categories = [
  {
    slug: 'ecrans-interactifs',
    name: 'Écrans Interactifs',
    icon: '📺',
    count: 24,
    description: 'TBI, écrans tactiles 65" à 86"',
    color: 'from-blue-500 to-blue-600',
    featured: true
  },
  {
    slug: 'ordinateurs-postes',
    name: 'Ordinateurs & Postes',
    icon: '💻',
    count: 45,
    description: 'PC fixes, portables, tout-en-un',
    color: 'from-purple-500 to-purple-600',
    featured: true
  },
  {
    slug: 'tablettes-mobiles',
    name: 'Tablettes & Mobilité',
    icon: '📱',
    count: 18,
    description: 'iPad, Android, classes mobiles',
    color: 'from-green-500 to-green-600',
    featured: true
  },
  {
    slug: 'mobilier-scolaire',
    name: 'Mobilier Scolaire',
    icon: '🪑',
    count: 32,
    description: 'Tables, chaises, rangements',
    color: 'from-orange-500 to-orange-600',
    featured: true
  },
  {
    slug: 'visualiseurs',
    name: 'Visualiseurs',
    icon: '📷',
    count: 12,
    description: 'Caméras documents HD/4K',
    color: 'from-pink-500 to-pink-600',
    featured: false
  },
  {
    slug: 'audio-visio',
    name: 'Audio & Visioconférence',
    icon: '🎙️',
    count: 15,
    description: 'Micros, caméras, systèmes audio',
    color: 'from-cyan-500 to-cyan-600',
    featured: false
  },
  {
    slug: 'impression',
    name: 'Impression & Numérisation',
    icon: '🖨️',
    count: 28,
    description: 'Imprimantes, scanners, copieurs',
    color: 'from-teal-500 to-teal-600',
    featured: false
  },
  {
    slug: 'reseaux',
    name: 'Réseaux & Connectivité',
    icon: '📡',
    count: 20,
    description: 'Switches, AP WiFi, câblage',
    color: 'from-indigo-500 to-indigo-600',
    featured: false
  },
  {
    slug: 'accessoires',
    name: 'Accessoires',
    icon: '🔌',
    count: 56,
    description: 'Claviers, souris, housses, câbles',
    color: 'from-gray-500 to-gray-600',
    featured: false
  }
]

const produitsVedettes = [
  {
    id: 'ecran-smart-86',
    nom: 'Écran Interactif SMART Board 86"',
    categorie: 'Écrans Interactifs',
    image: '📺',
    prix: '3 215 086',
    prixBarre: '4 775 952',
    marque: 'SMART',
    specs: ['86 pouces 4K UHD', 'Android 11 intégré', '20 points tactiles', 'Garantie 3 ans'],
    badge: 'Meilleure vente',
    badgeColor: 'bg-green-500',
    rating: 4.8,
    avis: 124,
    stock: 'En stock',
    livraison: 'Livraison 48h'
  },
  {
    id: 'ipad-education',
    nom: 'iPad 10.9" 64Go WiFi + Pack Éducation',
    categorie: 'Tablettes',
    image: '📱',
    prix: '459 350',
    prixBarre: '546 627',
    marque: 'Apple',
    specs: ['Écran 10.9" Retina', 'Puce A14 Bionic', 'Pack apps éducatives', 'Housse + stylet inclus'],
    badge: 'Offre spéciale',
    badgeColor: 'bg-red-500',
    rating: 4.9,
    avis: 342,
    stock: 'En stock',
    livraison: 'Livraison 24h'
  },
  {
    id: 'pc-dell-optiplex',
    nom: 'PC Dell OptiPlex 7010 SFF i5',
    categorie: 'Ordinateurs',
    image: '💻',
    prix: '521 850',
    prixBarre: null,
    marque: 'Dell',
    specs: ['Intel Core i5-13500', '16Go RAM DDR4', 'SSD 256Go NVMe', 'Windows 11 Pro'],
    badge: 'Nouveau',
    badgeColor: 'bg-blue-500',
    rating: 4.7,
    avis: 89,
    stock: 'En stock',
    livraison: 'Livraison 48h'
  },
  {
    id: 'classe-mobile-30',
    nom: 'Classe Mobile 30 Tablettes + Chariot',
    categorie: 'Classes Mobiles',
    image: '🚀',
    prix: '6 785 000',
    prixBarre: '8 074 150',
    marque: 'Numatech',
    specs: ['30 tablettes 10.1"', 'Chariot sécurisé', 'MDM pré-configuré', 'Formation incluse'],
    badge: 'Pack complet',
    badgeColor: 'bg-purple-500',
    rating: 5.0,
    avis: 45,
    stock: 'Sur commande',
    livraison: 'Livraison 2 semaines'
  }
]

const avantages = [
  { icon: '✓', titre: 'Livraison & Installation', description: 'Installation sur site par nos techniciens certifiés' },
  { icon: '🎓', titre: 'Formation Incluse', description: 'Formation des équipes à l\'utilisation du matériel' },
  { icon: '🛡️', titre: 'Garantie Étendue', description: 'Jusqu\'à 5 ans selon les produits' },
  { icon: '♻️', titre: 'Reprise Ancien Matériel', description: 'Rachat de votre ancien équipement' },
]

export default function CatalogueMaterielPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-secondary text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 font-heading">
                Catalogue Matériel Pédagogique
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Plus de 200 références pour équiper vos salles de classe, laboratoires et 
                espaces d'apprentissage. Livraison, installation et formation incluses.
              </p>
              
              {/* Barre de recherche */}
              <div className="bg-white rounded-xl p-2 flex items-center shadow-2xl">
                <Search className="text-gray-400 ml-3" size={24} />
                <input
                  type="text"
                  placeholder="Rechercher un produit, une marque..."
                  className="flex-1 px-4 py-3 text-gray-900 outline-none"
                />
                <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition font-semibold">
                  Rechercher
                </button>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="grid grid-cols-2 gap-4">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="text-4xl mb-3">📦</div>
                    <div className="text-sm font-semibold">Produit {i}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catégories principales */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Catégories de Produits</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.filter(cat => cat.featured).map((categorie) => (
              <Link
                key={categorie.slug}
                href={`/catalogue/${categorie.slug}`}
                className="group bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-primary hover:shadow-xl transition-all duration-300"
              >
                <div className="text-5xl mb-4">{categorie.icon}</div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition">
                  {categorie.name}
                </h3>
                <p className="text-sm text-gray-600 mb-3">{categorie.description}</p>
                <div className="text-xs text-gray-500">{categorie.count} produits</div>
              </Link>
            ))}
          </div>

          {/* Toutes les catégories */}
          <div className="mt-12 grid md:grid-cols-5 gap-4">
            {categories.filter(cat => !cat.featured).map((categorie) => (
              <Link
                key={categorie.slug}
                href={`/catalogue/${categorie.slug}`}
                className="bg-white rounded-xl p-4 border border-gray-100 hover:border-primary hover:shadow-lg transition text-center"
              >
                <div className="text-3xl mb-2">{categorie.icon}</div>
                <div className="text-sm font-semibold">{categorie.name}</div>
                <div className="text-xs text-gray-500">{categorie.count}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Produits vedettes */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-4">Produits Vedettes</h2>
              <p className="text-gray-600">Les équipements les plus plébiscités par nos clients</p>
            </div>
            <div className="flex gap-2">
              <button className="p-3 border-2 border-gray-200 rounded-lg hover:border-primary transition">
                <Grid size={20} />
              </button>
              <button className="p-3 border-2 border-gray-200 rounded-lg hover:border-primary transition">
                <List size={20} />
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {produitsVedettes.map((produit) => (
              <div
                key={produit.id}
                className="group bg-white rounded-2xl border-2 border-gray-100 hover:border-primary hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Badge */}
                <div className="relative">
                  <div className={`absolute top-4 right-4 ${produit.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                    {produit.badge}
                  </div>
                  <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center text-8xl p-8">
                    {produit.image}
                  </div>
                </div>

                {/* Contenu */}
                <div className="p-6">
                  {/* Marque */}
                  <div className="text-xs text-gray-500 mb-2">{produit.marque}</div>
                  
                  {/* Nom */}
                  <h3 className="font-bold text-lg mb-3 line-clamp-2 group-hover:text-primary transition">
                    {produit.nom}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className={i < Math.floor(produit.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-600">{produit.rating} ({produit.avis})</span>
                  </div>

                  {/* Specs */}
                  <ul className="space-y-1 mb-4 text-xs text-gray-600">
                    {produit.specs.slice(0, 3).map((spec, idx) => (
                      <li key={idx}>• {spec}</li>
                    ))}
                  </ul>

                  {/* Prix */}
                  <div className="mb-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-primary">{produit.prix}FCFA</span>
                      {produit.prixBarre && (
                        <span className="text-sm text-gray-400 line-through">{produit.prixBarre}€</span>
                      )}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">HT • {produit.livraison}</div>
                  </div>

                  {/* Stock */}
                  <div className="mb-4">
                    <span className={`text-xs font-semibold ${produit.stock === 'En stock' ? 'text-green-600' : 'text-orange-600'}`}>
                      ● {produit.stock}
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <button className="flex-1 bg-primary text-white py-3 rounded-xl hover:bg-primary-dark transition font-semibold text-sm flex items-center justify-center gap-2">
                      <ShoppingCart size={16} />
                      Devis
                    </button>
                    <button className="p-3 border-2 border-gray-200 rounded-xl hover:border-primary hover:text-primary transition">
                      <Heart size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-16 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Les Avantages Numatech</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {avantages.map((avantage, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                  {avantage.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{avantage.titre}</h3>
                <p className="text-sm text-white/80">{avantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Téléchargement catalogue */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12 border-2 border-blue-100">
            <div className="text-6xl mb-6">📖</div>
            <h2 className="text-3xl font-bold mb-4">Téléchargez Notre Catalogue Complet</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Plus de 200 références détaillées avec tarifs, caractéristiques techniques et photos. 
              Format PDF de 120 pages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl hover:bg-primary-dark transition font-semibold shadow-lg">
                <Download size={20} />
                Télécharger le Catalogue 2026 (PDF)
              </button>
              <Link
                href="/contact?type=catalogue"
                className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-xl hover:bg-primary/5 transition font-semibold"
              >
                Recevoir par Email
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
