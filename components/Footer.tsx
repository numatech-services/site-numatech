import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

const navServices = [
  { href: '/services-informatiques', label: 'Infogérance & Maintenance' },
  { href: '/materiel-infrastructure', label: 'Matériel & Infrastructure' },
  { href: '/solutions-logicielles', label: 'Solutions Logicielles' },
  { href: '/catalogue', label: 'Catalogue Produits' },
]

const navSecteurs = [
  { href: '/secteurs/ecoles', label: 'Écoles Primaires' },
  { href: '/secteurs/colleges-lycees', label: 'Collèges & Lycées' },
  { href: '/secteurs/universites', label: 'Universités' },
  { href: '/secteurs/collectivites', label: 'Collectivités' },
]

const navRessources = [
  { href: '/projets', label: 'Nos Projets' },
  { href: '/ressources', label: 'Ressources & Guides' },
  { href: '/a-propos', label: 'À propos' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">
      {/* Bande principale */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* À propos */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 shrink-0">
  <div className="w-10 h-10 rounded-xl overflow-hidden shadow">
    <img
      src="/images/logo.png"
      alt="Logo Numatech"
      className="w-full h-full object-cover"
    />
  </div>

  <div className="hidden sm:block">
    <div className="font-bold text-base leading-tight text-gray-900">
      Numatech Services
    </div>
    <div className="text-xs text-gray-500">
      IT & Équipement pédagogique
    </div>
  </div>
</Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Votre partenaire IT de confiance pour l'éducation et les collectivités depuis 2022.
              Livraison, installation et formation incluses.
            </p>
            {/* Certifications */}
            <div className="flex gap-3 flex-wrap">
              {['ISO 9001', 'RGPD', 'Apple EDU', 'Microsoft'].map(cert => (
                <span key={cert} className="text-xs bg-white/10 text-gray-300 px-3 py-1 rounded-full">{cert}</span>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-3">
              {navServices.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Secteurs */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Secteurs</h4>
            <ul className="space-y-3">
              {navSecteurs.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="tel:+33100000000" className="flex items-start gap-3 text-gray-400 hover:text-white transition">
                  <Phone size={16} className="mt-0.5 shrink-0" />
                  <span>+227 96 55 69 84<br /><span className="text-xs text-gray-500">Lun–Ven 9h–18h</span></span>
                </a>
              </li>
              <li>
                <a href="mailto:info@numatechservices.net" className="flex items-start gap-3 text-gray-400 hover:text-white transition">
                  <Mail size={16} className="mt-0.5 shrink-0" />
                  <span>info@numatechservices.net</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-gray-400">
                  <MapPin size={16} className="mt-0.5 shrink-0" />
                  <span>Rue BK-56<br />Boukoki Aski Niamey-Niger</span>
                </div>
              </li>
            </ul>
            <Link href="/contact" className="mt-6 block bg-primary text-white text-center py-3 rounded-xl text-sm font-semibold hover:bg-primary-dark transition">
              Demander un devis
            </Link>
          </div>
        </div>
      </div>

      {/* Barre inférieure */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <span>© {new Date().getFullYear()} Numatech Services SAS. Tous droits réservés.</span>
          <div className="flex gap-6">
            <Link href="/mentions-legales" className="hover:text-white transition">Mentions légales</Link>
            <Link href="/confidentialite" className="hover:text-white transition">Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
