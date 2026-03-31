import type { Metadata } from 'next'
import ContactClient from './ContactClient'

export const metadata: Metadata = {
  title: 'Contactez Numatech Services | Devis & Audit gratuit',
  description:
    'Contactez Numatech Services pour un audit gratuit, un devis matériel ou une démonstration. Réponse sous 24h.',
}

export default function ContactPage() {
  return <ContactClient />
}