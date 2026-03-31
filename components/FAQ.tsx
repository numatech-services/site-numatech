'use client'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  { q: 'Proposez-vous un audit gratuit ?', r: 'Oui, absolument. Nous réalisons un audit complet de votre infrastructure IT gratuitement, sur site ou en visio. L\'audit dure environ 2h et vous recevez un rapport détaillé sous 48h avec nos recommandations.' },
  { q: 'Quels sont vos délais de livraison ?', r: 'Selon la taille de votre commande : 2-4 semaines pour des petites quantités (1-10 postes), 4-6 semaines pour des déploiements moyens (10-50 postes), 6-8 semaines pour de gros projets (50+ postes). Nous proposons aussi des solutions express sous 1 semaine pour les urgences.' },
  { q: 'Gérez-vous l\'installation et la configuration ?', r: 'Oui, tout est inclus. Nos techniciens se chargent de l\'installation physique, du câblage réseau, de la configuration logicielle (MDM, image système), des tests de bon fonctionnement et de la formation de vos équipes. Vous n\'avez rien à faire.' },
  { q: 'Quel type de garantie proposez-vous ?', r: 'Garantie constructeur 3 ans sur tout le matériel (pièces + main d\'œuvre), avec intervention sur site. Nous gérons tous les SAV directement, vous n\'avez qu\'un seul interlocuteur. Nous proposons aussi des extensions de garantie jusqu\'à 5 ans.' },
  { q: 'Travaillez-vous avec toutes les marques ?', r: 'Nous sommes multi-marques et travaillons avec les leaders du marché : Dell, HP, Lenovo, Apple, Samsung, SMART, Promethean, Clevertouch, Ubiquiti, Aruba, Cisco, etc. Nous sélectionnons les meilleures technologies pour chaque usage.' },
  { q: 'Proposez-vous du leasing/location ?', r: 'Oui, nous proposons des solutions de financement adaptées aux établissements publics et privés : location avec option d\'achat (LOA), location longue durée (LLD), crédit-bail. Cela permet d\'étaler les coûts et de renouveler régulièrement votre parc.' },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 font-heading">Questions Fréquentes</h2>
          <p className="text-xl text-gray-600">Tout ce que vous devez savoir avant de démarrer</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border-2 border-gray-100 rounded-2xl overflow-hidden hover:border-primary/30 transition">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full px-6 py-5 flex items-center justify-between text-left group">
                <span className="font-bold text-lg pr-4 group-hover:text-primary transition">{faq.q}</span>
                <ChevronDown className={`w-6 h-6 text-gray-400 flex-shrink-0 transition-transform duration-300 ${open === i ? 'rotate-180 text-primary' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${open === i ? 'max-h-96' : 'max-h-0'}`}>
                <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                  {faq.r}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 mb-4">Vous ne trouvez pas la réponse à votre question ?</p>
          <a href="/contact" className="inline-block bg-primary text-white px-8 py-3 rounded-xl font-semibold hover:bg-primary-dark transition">
            Contactez-nous
          </a>
        </div>
      </div>
    </section>
  )
}
