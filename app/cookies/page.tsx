import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politique Cookies | Numatech Services',
  robots: { index: false },
}

export default function Cookies() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-2">Politique de gestion des cookies</h1>
      <p className="text-gray-400 text-sm mb-12">Dernière mise à jour : Février 2026</p>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-3">Qu'est-ce qu'un cookie ?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, smartphone, tablette) lors de la visite d'un site web. 
          Il permet de mémoriser des informations relatives à votre navigation.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-3">Cookies utilisés sur notre site</h2>
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-xl border-2 border-gray-100">
            <h3 className="font-bold mb-2">🔧 Cookies techniques (obligatoires)</h3>
            <p className="text-sm text-gray-600 mb-2">Nécessaires au fonctionnement du site. Durée : session.</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Gestion du panier/devis</li>
              <li>• Préférences d'affichage</li>
              <li>• Sécurité et authentification</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl border-2 border-gray-100">
            <h3 className="font-bold mb-2">📊 Cookies analytiques (consentement requis)</h3>
            <p className="text-sm text-gray-600 mb-2">Google Analytics. Durée : 13 mois.</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Pages visitées</li>
              <li>• Durée de visite</li>
              <li>• Source de trafic</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-3">Gérer vos cookies</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Vous pouvez à tout moment modifier vos préférences ou refuser les cookies analytiques via les paramètres de votre navigateur :
        </p>
        <ul className="space-y-2 text-gray-700">
          <li>• <strong>Chrome :</strong> Paramètres → Confidentialité et sécurité → Cookies</li>
          <li>• <strong>Firefox :</strong> Paramètres → Vie privée et sécurité</li>
          <li>• <strong>Safari :</strong> Préférences → Confidentialité</li>
          <li>• <strong>Edge :</strong> Paramètres → Cookies et autorisations de site</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">Contact</h2>
        <p className="text-gray-700">
          Pour toute question relative aux cookies : info@numatechservices.net
        </p>
      </section>
    </div>
  )
}
