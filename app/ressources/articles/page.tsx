import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Articles & Actualités IT Éducation | Numatech Services',
  description: 'Articles conseils sur la transformation numérique des établissements scolaires : WiFi, sécurité, tablettes, logiciels.',
}

const articles = [
  { slug: 'ecran-interactif-vs-videoprojecteur', titre: 'Écran interactif vs Vidéoprojecteur en 2026 : le match', temps: '6 min', date: '15 Jan 2026', categorie: 'Matériel', emoji: '📺', desc: 'Comparatif complet : TCO, ergonomie, pédagogie, maintenance. Qui gagne en 2026 ?' },
  { slug: 'wifi-haute-densite-etablissement', titre: 'WiFi haute densité : dimensionner pour 500 élèves', temps: '8 min', date: '8 Jan 2026', categorie: 'Infrastructure', emoji: '📡', desc: 'Points d\'accès, bande passante, VLAN, filtrage : le guide technique.' },
  { slug: 'rgpd-education-2026', titre: 'RGPD & Éducation : ce que vous devez savoir en 2026', temps: '5 min', date: '2 Jan 2026', categorie: 'Sécurité', emoji: '🔒', desc: 'Obligations, registre de traitement, droits des élèves mineurs, sanctions.' },
  { slug: 'classe-hybride-equipement', titre: 'Équiper une classe hybride de A à Z', temps: '10 min', date: '20 Déc 2025', categorie: 'Pédagogie', emoji: '🎓', desc: 'Caméra, micro, écran, logiciel : tout ce qu\'il faut pour un cours synchrone efficace.' },
  { slug: 'materiel-reconditionne-ecoles', titre: 'Matériel reconditionné à l\'école : avantages et risques', temps: '4 min', date: '10 Déc 2025', categorie: 'Durabilité', emoji: '♻️', desc: 'Économies réelles, garanties, limites. Notre analyse honnête.' },
]

export default function ArticlesPage() {
  return (<>
    <Breadcrumbs items={[{ label: 'Ressources', href: '/ressources' }, { label: 'Articles' }]} />
    <section className="bg-gradient-to-br from-violet-600 to-purple-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-4">Articles & Actualités</h1>
        <p className="text-xl text-purple-100">Conseils d'experts pour vos projets IT</p>
      </div>
    </section>
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 space-y-6">
        {articles.map((a, i) => (
          <article key={i} className="group bg-white rounded-2xl border-2 border-gray-100 hover:border-violet-200 hover:shadow-xl transition p-8">
            <div className="flex items-start gap-6">
              <div className="text-5xl shrink-0">{a.emoji}</div>
              <div className="flex-1">
                <div className="flex flex-wrap gap-3 mb-3 text-xs text-gray-500">
                  <span className="bg-violet-100 text-violet-700 font-semibold px-2 py-0.5 rounded">{a.categorie}</span>
                  <span>{a.date}</span>
                  <span>· {a.temps} de lecture</span>
                </div>
                <h2 className="text-xl font-bold mb-2 group-hover:text-violet-600 transition">{a.titre}</h2>
                <p className="text-gray-600 text-sm">{a.desc}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  </>)
}
