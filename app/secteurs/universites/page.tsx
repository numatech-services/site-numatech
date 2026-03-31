import Link from 'next/link'
import { CheckCircle, ArrowRight, Server, Wifi, Monitor, Users } from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Solutions IT Universités & Enseignement Supérieur | Numatech',
  description: 'Solutions enterprise pour campus universitaires : amphis connectés, cloud académique, salles de co-working, workstations recherche. Accompagnement DSI.',
}

const solutions = [
  { icon: Monitor, title: 'Amphis 4.0', desc: 'Captation vidéo HD, micro de conférence, écran 4K grand format, streaming cours en direct et rediffusion.' },
  { icon: Wifi, title: 'Campus WiFi Entreprise', desc: 'Couverture totale du campus, 10 000+ utilisateurs simultanés, authentification LDAP/RADIUS, VLAN par profil.' },
  { icon: Server, title: 'Cloud Académique', desc: 'Serveurs de calcul, stockage distribué, virtualisation VDI, sauvegardes automatisées, accès VPN étudiants.' },
  { icon: Users, title: 'Espaces Collaboratifs', desc: 'Salles de co-working modulables, affichage dynamique, réservation de salles en ligne, visioconférence intégrée.' },
]

export default function UniversitesPage() {
  return (<>
    <Breadcrumbs items={[{ label: 'Secteurs', href: '/secteurs' }, { label: 'Universités' }]} />
    <section className="bg-gradient-to-br from-purple-700 to-indigo-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-white/20 px-4 py-1 rounded-full text-sm mb-5">Enseignement Supérieur</div>
            <h1 className="text-5xl font-bold mb-6 font-heading">Universités & Grandes Écoles</h1>
            <p className="text-xl text-white/90 mb-8">Solutions enterprise pour campus : de l'amphi connecté au data center de recherche. Accompagnement DSI dédié.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact?type=audit" className="bg-white text-purple-700 px-8 py-4 rounded-xl font-bold hover:shadow-xl transition">Audit gratuit du campus</Link>
              <Link href="/contact?type=demo" className="border-2 border-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition">Voir une démo</Link>
            </div>
          </div>
          <div className="hidden lg:grid grid-cols-2 gap-4">
            {[{ n: '50+', l: 'campus équipés' }, { n: '12 000+', l: 'postes déployés' }, { n: '99.9%', l: 'disponibilité réseau' }, { n: '24/7', l: 'supervision' }].map((s, i) => (
              <div key={i} className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20 text-center">
                <div className="text-3xl font-bold mb-1">{s.n}</div>
                <div className="text-sm text-white/75">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">Solutions pour l'enseignement supérieur</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((s, i) => {
            const Icon = s.icon
            return (
              <div key={i} className="bg-neutral-50 rounded-2xl p-8 border-2 border-gray-100 hover:border-purple-200 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-gray-600">{s.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>

    <section className="py-16 bg-purple-700 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Partenaires technologiques</h2>
        <p className="text-white/85 mb-8">Dell EMC, HPE, Cisco, Microsoft, VMware, Fortinet</p>
        <Link href="/contact?type=audit" className="inline-flex items-center gap-2 bg-white text-purple-700 px-8 py-4 rounded-xl font-bold hover:shadow-xl transition">
          Planifier un audit campus <ArrowRight size={20} />
        </Link>
      </div>
    </section>
  </>)
}
