import Link from 'next/link'
import { Star, ShoppingCart, Download, CheckCircle, Info } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Écrans Interactifs & TBI | Catalogue Numatech Services',
  description: 'Écrans interactifs 65" à 86" : SMART, Promethean, Clevertouch. 4K, Android, garantie 3-5 ans. Livraison et formation incluses.',
}

const produits = [
  {
    id: 'smart-mx286',
    nom: 'SMART Board MX286 Pro',
    marque: 'SMART Technologies',
    image: '📺',
    taille: '86 pouces',
    resolution: '4K UHD (3840x2160)',
    prix: '3 274 350',
    prixBarre: '4 730 000',
    specs: {
      tactile: '20 points simultanés',
      os: 'Android 11 intégré',
      logiciel: 'SMART Notebook inclus',
      garantie: '3 ans sur site',
      connectique: 'HDMI, USB-C, RJ45',
      audio: '2x15W stéréo'
    },
    avantages: [
      'Prise en main immédiate, aucun PC requis',
      'Logiciel SMART Notebook licence perpétuelle',
      'Compatible Windows, Mac, Chromebook',
      'Mise à jour Android OTA automatique'
    ],
    inclus: ['Support mural', 'Stylets x2', 'Câble HDMI 5m', 'Formation 2h'],
    badge: 'Meilleure vente',
    stock: 'En stock',
    rating: 4.8,
    avis: 124
  },
  {
    id: 'promethean-ap9-75',
    nom: 'Promethean ActivPanel 9 Premium 75"',
    marque: 'Promethean',
    image: '📺',
    taille: '75 pouces',
    resolution: '4K UHD',
    prix: '2 730 000',
    prixBarre: null,
    specs: {
      tactile: '20 points InGlass',
      os: 'Android 13',
      logiciel: 'ActivInspire Pro inclus',
      garantie: '5 ans constructeur',
      connectique: 'HDMI, USB-C, OPS',
      audio: 'Soundbar 16W + micros'
    },
    avantages: [
      'Micro et caméra intégrés (visioconférence)',
      'Écran anti-reflet traité',
      'Apps Google et Microsoft préinstallées',
      'Garantie 5 ans la plus longue du marché'
    ],
    inclus: ['Support mobile à roulettes', 'Stylets x4', 'ActivInspire', 'Formation 3h'],
    badge: 'Premium',
    stock: 'En stock',
    rating: 4.9,
    avis: 87
  },
  {
    id: 'clevertouch-impact-65',
    nom: 'Clevertouch Impact Max 65"',
    marque: 'Clevertouch',
    image: '📺',
    taille: '65 pouces',
    resolution: 'Full HD (1920x1080)',
    prix: '1 193 000',
    prixBarre: '2 393 000',
    specs: {
      tactile: '20 points',
      os: 'Android 11',
      logiciel: 'LYNX Whiteboard inclus',
      garantie: '3 ans',
      connectique: 'HDMI x3, USB-C',
      audio: '2x10W'
    },
    avantages: [
      'Excellent rapport qualité/prix',
      'Apps éducatives préchargées (Kahoot, etc.)',
      'Cloud Clevertouch gratuit 1 an',
      'Format compact idéal salles <30m²'
    ],
    inclus: ['Support mural fixe', 'Stylets x2', 'Câbles', 'Formation 1h'],
    badge: 'Meilleur prix',
    stock: 'En stock',
    rating: 4.6,
    avis: 156
  }
]

export default function EcransInteractifsPage() {
  return (<>
    <section className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <nav className="text-sm mb-6 text-white/80">
          <Link href="/catalogue" className="hover:text-white">Catalogue</Link>
          <span className="mx-2">/</span>
          <span>Écrans Interactifs</span>
        </nav>
        <h1 className="text-5xl font-bold mb-6">Écrans Interactifs & TBI</h1>
        <p className="text-xl max-w-3xl">
          Transformez vos salles de classe avec nos écrans interactifs tactiles. 
          De 65" à 86", technologies Full HD ou 4K UHD. Livraison, installation et formation incluses.
        </p>
      </div>
    </section>

    <section className="py-12 bg-white border-b">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div><div className="text-3xl mb-2">✓</div><div className="font-bold">Livraison Gratuite</div><div className="text-sm text-gray-600">Installation sur site</div></div>
          <div><div className="text-3xl mb-2">🎓</div><div className="font-bold">Formation Incluse</div><div className="text-sm text-gray-600">Prise en main complète</div></div>
          <div><div className="text-3xl mb-2">🛡️</div><div className="font-bold">Garantie 3-5 ans</div><div className="text-sm text-gray-600">Sur site</div></div>
          <div><div className="text-3xl mb-2">💰</div><div className="font-bold">Financement</div><div className="text-sm text-gray-600">Location possible</div></div>
        </div>
      </div>
    </section>

    <section className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12">Notre Sélection Premium</h2>
        <div className="space-y-8">
          {produits.map((produit) => (
            <div key={produit.id} className="bg-white rounded-2xl border-2 border-gray-100 hover:border-blue-200 hover:shadow-xl transition overflow-hidden">
              <div className="grid lg:grid-cols-3 gap-8 p-8">
                <div>
                  <div className="aspect-square bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl flex items-center justify-center text-9xl mb-4">
                    {produit.image}
                  </div>
                  <div className="flex gap-2 mb-4">
                    {produit.inclus.slice(0,2).map((item, i) => (
                      <span key={i} className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">✓ {item}</span>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-2">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="text-sm text-gray-500 mb-1">{produit.marque}</div>
                      <h3 className="text-2xl font-bold mb-2">{produit.nom}</h3>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={16} className={i < Math.floor(produit.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'} />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">{produit.rating} ({produit.avis} avis)</span>
                      </div>
                      <div className="inline-block bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">{produit.badge}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-blue-600">{produit.prix}FCFA</div>
                      {produit.prixBarre && <div className="text-sm text-gray-400 line-through">{produit.prixBarre}€</div>}
                      <div className="text-xs text-gray-500 mt-1">HT • Livraison incluse</div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-bold text-sm mb-3">Caractéristiques</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex justify-between"><span className="text-gray-600">Taille :</span><span className="font-semibold">{produit.taille}</span></li>
                        <li className="flex justify-between"><span className="text-gray-600">Résolution :</span><span className="font-semibold">{produit.resolution}</span></li>
                        <li className="flex justify-between"><span className="text-gray-600">Tactile :</span><span className="font-semibold">{produit.specs.tactile}</span></li>
                        <li className="flex justify-between"><span className="text-gray-600">Système :</span><span className="font-semibold">{produit.specs.os}</span></li>
                        <li className="flex justify-between"><span className="text-gray-600">Garantie :</span><span className="font-semibold">{produit.specs.garantie}</span></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm mb-3">Avantages</h4>
                      <ul className="space-y-2 text-sm">
                        {produit.avantages.slice(0,4).map((av, i) => (
                          <li key={i} className="flex items-start gap-2"><CheckCircle size={16} className="text-green-500 flex-shrink-0 mt-0.5" /><span className="text-gray-700">{av}</span></li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button className="flex-1 bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition font-semibold flex items-center justify-center gap-2">
                      <ShoppingCart size={20} />Demander un Devis
                    </button>
                    <button className="px-6 border-2 border-blue-600 text-blue-600 rounded-xl hover:bg-blue-50 transition font-semibold">Fiche PDF</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 bg-blue-600 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Besoin d'aide pour choisir ?</h2>
        <p className="text-xl mb-8">Nos experts vous conseillent gratuitement</p>
        <Link href="/contact" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:shadow-xl transition">
          Être rappelé par un expert
        </Link>
      </div>
    </section>
  </>)
}
