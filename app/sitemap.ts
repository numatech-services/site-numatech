import { MetadataRoute } from 'next'

const BASE = process.env.NEXT_PUBLIC_SITE_URL || 'https://numatechservices.net'
const NOW = new Date()

type ChangeFreq = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'

function url(path: string, priority: number, freq: ChangeFreq) {
  return { url: `${BASE}${path}`, lastModified: NOW, changeFrequency: freq, priority }
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    url('/', 1.0, 'weekly'),
    // Services
    url('/services-informatiques', 0.9, 'monthly'),
    url('/materiel-infrastructure', 0.9, 'monthly'),
    url('/solutions-logicielles', 0.9, 'monthly'),
    // Catalogue
    url('/catalogue', 0.9, 'weekly'),
    url('/catalogue/ecrans-interactifs', 0.8, 'weekly'),
    url('/catalogue/ordinateurs-postes', 0.8, 'weekly'),
    url('/catalogue/tablettes-mobiles', 0.8, 'weekly'),
    url('/catalogue/mobilier-scolaire', 0.8, 'weekly'),
    url('/catalogue/visualiseurs', 0.7, 'monthly'),
    url('/catalogue/audio-visio', 0.7, 'monthly'),
    url('/catalogue/impression', 0.7, 'monthly'),
    url('/catalogue/reseaux', 0.7, 'monthly'),
    url('/catalogue/accessoires', 0.7, 'monthly'),
    // Solutions logicielles
    url('/solutions/bibliomaker', 0.8, 'monthly'),
    url('/solutions/cairn', 0.8, 'monthly'),
    url('/solutions/dalloz', 0.8, 'monthly'),
    url('/solutions/compilatio', 0.8, 'monthly'),
    // Secteurs
    url('/secteurs', 0.85, 'monthly'),
    url('/secteurs/ecoles', 0.8, 'monthly'),
    url('/secteurs/colleges-lycees', 0.8, 'monthly'),
    url('/secteurs/universites', 0.8, 'monthly'),
    url('/secteurs/collectivites', 0.8, 'monthly'),
    // Autres
    url('/projets', 0.8, 'monthly'),
    url('/ressources', 0.7, 'weekly'),
    url('/ressources/guides', 0.6, 'monthly'),
    url('/ressources/articles', 0.6, 'weekly'),
    url('/a-propos', 0.6, 'monthly'),
    url('/contact', 0.8, 'yearly'),
    url('/mentions-legales', 0.3, 'yearly'),
    url('/confidentialite', 0.3, 'yearly'),
  ]
}
