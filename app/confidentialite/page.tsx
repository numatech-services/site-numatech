import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politique de confidentialité | Numatech Services',
  robots: { index: false },
}

const sections = [
  { h: 'Responsable du traitement', p: 'Numatech Services SARL, Rue BK-56, Boukoki Askia Niamey-Niger. Email : info@numatechservices.net. Directeur de la publication : Numatech Services Dev.' },
  { h: 'Données collectées', p: 'Via le formulaire de contact : nom, prénom, email, téléphone, établissement, type de projet, message. Via la newsletter : email uniquement. Ces données sont strictement nécessaires au traitement de vos demandes.' },
  { h: 'Base légale du traitement', p: 'Consentement de la personne concernée (article 6.1.a du RGPD) pour la newsletter. Intérêt légitime de Numatech Services (article 6.1.f du RGPD) pour le traitement des demandes commerciales.' },
  { h: 'Durée de conservation', p: 'Leads commerciaux : 3 ans après le dernier contact, puis archivage 2 ans. Newsletter : jusqu\'à désinscription. Données de navigation (cookies analytiques) : 13 mois maximum.' },
  { h: 'Destinataires des données', p: 'Vos données ne sont jamais vendues ni cédées à des tiers à des fins commerciales. Elles sont accessibles à l\'équipe commerciale Numatech et à nos sous-traitants techniques (hébergeur Hostinger, outil CRM) sous obligation de confidentialité.' },
  { h: 'Vos droits', p: 'Conformément au RGPD, vous disposez des droits d\'accès, rectification, effacement, portabilité, limitation et opposition. Pour les exercer : info@numatechservices.net. Vous pouvez aussi introduire une réclamation auprès de la CNIL (www.cnil.fr).' },
  { h: 'Cookies', p: 'Ce site utilise des cookies techniques (essentiels au fonctionnement) et des cookies analytiques Google Analytics (avec votre consentement). Vous pouvez retirer votre consentement à tout moment via les paramètres de votre navigateur.' },
  { h: 'Sécurité', p: 'Vos données sont stockées sur des serveurs sécurisés en Europe, chiffrées en transit (HTTPS/TLS 1.3) et au repos. L\'accès est restreint au personnel habilité. Des sauvegardes régulières sont effectuées.' },
  { h: 'Modifications', p: 'Cette politique peut être mise à jour. Dernière version : Février 2026. Nous vous informerons des modifications importantes par email si vous êtes abonné à notre newsletter.' },
]

export default function Confidentialite() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-2">Politique de confidentialité</h1>
      <p className="text-gray-400 text-sm mb-12">Dernière mise à jour : Février 2026</p>
      {sections.map((s, i) => (
        <section key={i} className="mb-10">
          <h2 className="text-xl font-bold mb-3 pb-2 border-b border-gray-200">{s.h}</h2>
          <p className="text-gray-700 leading-relaxed">{s.p}</p>
        </section>
      ))}
    </div>
  )
}
