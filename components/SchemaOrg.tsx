export default function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Numatech Services",
    "description": "Infogérance et équipement informatique pour l'éducation et les collectivités",
    "url": "https://numatechservices.net",
    "telephone": "+33 1 23 45 67 89",
    "email": "info@numatechservices.net",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Paris",
      "addressRegion": "Île-de-France",
      "addressCountry": "FR"
    },
    "areaServed": "Île-de-France",
    "serves": ["EducationalOrganization", "GovernmentOrganization"],
    "sameAs": [
      "https://www.linkedin.com/company/numatech-services",
      "https://twitter.com/numatechservices"
    ],
    "knowsAbout": [
      "Infogérance",
      "Matériel informatique",
      "Solutions numériques éducatives",
      "Cybersécurité",
      "Réseaux informatiques"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services informatiques",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Infogérance",
            "description": "Gestion complète du parc informatique"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Matériel & Infrastructure",
            "description": "Fourniture et installation de matériel informatique"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Solutions pédagogiques",
            "description": "Plateformes LMS et outils collaboratifs"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "250"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
