import { NextResponse } from 'next/server'

// Catalogue statique — en production, connecter à MongoDB ou Algolia
const PRODUCTS = [
  { id: 'ecran-smart-86', name: 'Écran SMART Board 86"', category: 'Écrans Interactifs', price: 3499, url: '/catalogue/ecrans-interactifs', tags: ['écran','interactif','smart','tbi','tactile'] },
  { id: 'ecran-promethean-75', name: 'Promethean ActivPanel 9 75"', category: 'Écrans Interactifs', price: 2890, url: '/catalogue/ecrans-interactifs', tags: ['écran','interactif','promethean','4k'] },
  { id: 'ecran-clevertouch-65', name: 'Clevertouch Impact 65"', category: 'Écrans Interactifs', price: 1990, url: '/catalogue/ecrans-interactifs', tags: ['écran','clevertouch','interactif'] },
  { id: 'pc-dell-optiplex', name: 'Dell OptiPlex 7010 i5', category: 'Ordinateurs', price: 649, url: '/catalogue/ordinateurs-postes', tags: ['pc','ordinateur','dell','bureau'] },
  { id: 'pc-hp-probook', name: 'HP ProBook 450 G10', category: 'Ordinateurs Portables', price: 749, url: '/catalogue/ordinateurs-postes', tags: ['portable','hp','laptop'] },
  { id: 'ipad-education', name: 'iPad 10.9" Pack Éducation', category: 'Tablettes', price: 399, url: '/catalogue/tablettes-mobiles', tags: ['tablette','ipad','apple','mobile'] },
  { id: 'samsung-tab', name: 'Samsung Galaxy Tab A9+', category: 'Tablettes', price: 249, url: '/catalogue/tablettes-mobiles', tags: ['tablette','samsung','android'] },
  { id: 'classe-mobile-30', name: 'Classe Mobile 30 Tablettes', category: 'Classes Mobiles', price: 8990, url: '/catalogue/tablettes-mobiles', tags: ['classe mobile','tablette','chariot'] },
  { id: 'mobilier-table', name: 'Table scolaire réglable', category: 'Mobilier', price: 89, url: '/catalogue/mobilier-scolaire', tags: ['mobilier','table','scolaire','ergonomique'] },
  { id: 'wifi-ubiquiti', name: 'Point d\'accès WiFi 6 Ubiquiti', category: 'Réseaux', price: 189, url: '/catalogue/reseaux', tags: ['wifi','réseau','ap','ubiquiti'] },
  { id: 'visualiseur-lumens', name: 'Visualiseur Lumens DC170', category: 'Visualiseurs', price: 329, url: '/catalogue/visualiseurs', tags: ['visualiseur','caméra','document'] },
  { id: 'bibliomaker', name: 'BiblioMaker', category: 'Logiciels', price: 890, url: '/solutions/bibliomaker', tags: ['logiciel','bibliothèque','bibliomaker'] },
  { id: 'compilatio', name: 'Compilatio', category: 'Logiciels', price: 99, url: '/solutions/compilatio', tags: ['logiciel','plagiat','ia','compilatio'] },
]

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const q = searchParams.get('q')?.toLowerCase().trim() || ''
  if (!q || q.length < 2) {
    return NextResponse.json({ results: [] })
  }
  const results = PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.category.toLowerCase().includes(q) ||
    p.tags.some(t => t.includes(q))
  ).slice(0, 8)
  return NextResponse.json({ results, query: q })
}
