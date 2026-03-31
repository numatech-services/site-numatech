import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mentions légales | Numatech Services',
  robots: { index: false },
}

const sections = [
  {
    h: 'Éditeur du site',
    items: ['Numatech Services SAS', 'Capital social : 100 000 FCFA', 'RCCM : NE/NIM/01/2021/B13/01742', 'NIF : 79701/R — Programmation informatique', 'Siège social : Rue BK-56 Boukoki Askia Niamey-Niger', 'Téléphone : +227 96 55 69 84', 'Email : info@numatechservices.net', 'Directeur de la publication : Numatech Services Dev'],
  },
  {
    h: 'Hébergement',
    items: ['Hostinger International Ltd', '61 Lordou Vironos Street, 6023 Larnaca, Chypre', 'www.hostinger.fr'],
  },
  {
    h: 'Propriété intellectuelle',
    items: ["L'ensemble du contenu de ce site (textes, images, graphismes, logo, icônes, logiciels) est la propriété exclusive de Numatech Services, à l'exception des marques et logos appartenant à des partenaires.", "Toute reproduction, représentation ou adaptation, totale ou partielle, est interdite sans autorisation écrite préalable de Numatech Services (articles L.122-4 et L.335-2 du Code de la Propriété Intellectuelle)."],
  },
  {
    h: 'Limitation de responsabilité',
    items: ["Numatech Services s'efforce d'assurer l'exactitude des informations publiées sur ce site. Elle ne saurait être tenue responsable des erreurs, omissions ou des résultats obtenus suite à l'utilisation de ces informations.", "Les liens hypertextes vers d'autres sites ne sauraient engager la responsabilité de Numatech Services quant à leur contenu."],
  },
  {
    h: 'Droit applicable',
    items: ["Le présent site et ses conditions d'utilisation sont soumis au droit français. En cas de litige, les tribunaux compétents de Nanterre seront seuls habilités."],
  },
]

export default function MentionsLegales() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-2">Mentions légales</h1>
      <p className="text-gray-400 text-sm mb-12">Conformément à la loi n° 2004-575 du 21 juin 2004</p>
      {sections.map((s, i) => (
        <section key={i} className="mb-10">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b border-gray-200">{s.h}</h2>
          {s.items.map((item, j) => (
            <p key={j} className="text-gray-700 leading-relaxed mb-2">{item}</p>
          ))}
        </section>
      ))}
    </div>
  )
}
