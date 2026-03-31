import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Conditions Générales de Vente | Numatech Services',
  robots: { index: false },
}

const sections = [
  { h: '1. Champ d\'application', p: 'Les présentes CGV s\'appliquent à toutes les ventes de matériel informatique, prestations de services et solutions logicielles proposées par Numatech Services SAS.' },
  { h: '2. Devis et commandes', p: 'Nos devis sont valables 30 jours. Acompte de 30% pour les commandes >5 000€ HT.' },
  { h: '3. Tarifs', p: 'Prix en euros HT. TVA 20% en sus. Tarifs en vigueur au moment de la commande.' },
  { h: '4. Paiement', p: 'Virement, chèque ou CB. Public: 30j fin de mois. Privé: 50% commande + 50% livraison.' },
  { h: '5. Livraison', p: "Livraison et installation incluses à Niamey et l'interieure du paye. Réserves sous 48h." },
  { h: '6. Garantie', p: 'Garantie constructeur 3 ans. SAV géré par Numatech Services.' },
  { h: '7. Services', p: 'Infogérance facturée mensuellement. Intervention hors contrat: 95€ HT/h. Résiliation: préavis 3 mois.' },
  { h: '8. Responsabilité', p: 'Responsabilité limitée au montant de la prestation. Assurance RC pro souscrite.' },
  { h: '9. Litiges', p: 'Solution amiable privilégiée. Tribunaux de Nanterre compétents. Droit français applicable.' },
]

export default function CGV() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-2">Conditions Générales de Vente</h1>
      <p className="text-gray-400 text-sm mb-12">Dernière mise à jour : Février 2026</p>
      {sections.map((s, i) => (
        <section key={i} className="mb-8">
          <h2 className="text-lg font-bold mb-2">{s.h}</h2>
          <p className="text-gray-700 leading-relaxed">{s.p}</p>
        </section>
      ))}
      <div className="mt-12 p-6 bg-neutral-50 rounded-2xl">
        <p className="text-sm text-gray-600">
          <strong>Contact :</strong> commercial@numatechservices.net • +227 96 55 69 84
        </p>
      </div>
    </div>
  )
}
