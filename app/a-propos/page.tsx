import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "À propos de Numatech Services | 5 ans d'expertise IT éducation",
  description: 'Découvrez Numatech Services : fondée en 2020, spécialisée dans le numérique éducatif. 10+ établissements équipés, 15 collaborateurs, certifiés ISO 9001.',
}

import Link from 'next/link'
import { Users, Award, Target, Heart } from 'lucide-react'

export default function APropos() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">À Propos de Numatech Services</h1>
            <p className="text-xl text-gray-300 mb-8">
              Depuis plus de 5 ans, nous offrons des solutions informatiques innovantes et fiables.
            </p>
          </div>
        </div>
      </section>

      {/* Notre histoire */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Notre Mission</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong>Numatech Services</strong> est une entreprise spécialisée dans les solutions technologiques innovantes. 
                  Nous offrons des services en développement informatique, gestion des infrastructures IT, cybersécurité et assistance technique.
                </p>
                <p>
                  Notre mission est de <strong>fournir des outils fiables, sécurisés et adaptés au 
                  contexte local</strong> afin d'améliorer l'efficacité opérationnelle de nos clients.
                </p>
                <p>
                  Nous accompagnons les organisations dans la <strong>digitalisation de leurs processus</strong>, 
                  la <strong>sécurisation de leurs systèmes</strong> et l'<strong>optimisation de leurs 
                  performances</strong> grâce à des solutions informatiques modernes.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">5+</div>
                  <div className="text-sm text-gray-600">Années d'expérience</div>
                </div>
                <div className="bg-white p-6 rounded-xl text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">20+</div>
                  <div className="text-sm text-gray-600">Clients actifs</div>
                </div>
                <div className="bg-white p-6 rounded-xl text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">12+</div>
                  <div className="text-sm text-gray-600">Collaborateurs</div>
                </div>
                <div className="bg-white p-6 rounded-xl text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">99%</div>
                  <div className="text-sm text-gray-600">Satisfaction client</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos valeurs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Nos Valeurs</h2>

          <div className="grid md:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Award size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-gray-600">
                Technologies de pointe et solutions créatives pour répondre aux défis actuels.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Target size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-gray-600">
                Qualité irréprochable dans chaque projet et chaque interaction.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent-green/10 text-accent-green rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Engagement</h3>
              <p className="text-gray-600">
                Dédiés à votre réussite avec un accompagnement personnalisé.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent-coral/10 text-accent-coral rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Transparence</h3>
              <p className="text-gray-600">
                Communication claire et honnête à chaque étape du projet.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent-purple/10 text-accent-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Collaboration</h3>
              <p className="text-gray-600">
                Travail d'équipe et partenariat fort avec nos clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Certifications & Partenariats</h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { name: 'ISO 27001', desc: 'Sécurité de l\'information' },
              { name: 'Microsoft Partner', desc: 'Partenaire certifié' },
              { name: 'Cisco Select', desc: 'Partenaire réseau' },
              { name: 'RGPD Compliant', desc: 'Conformité données' },
            ].map((cert) => (
              <div key={cert.name} className="bg-gray-50 p-6 rounded-xl text-center border border-gray-200">
                <div className="text-4xl mb-3">✓</div>
                <h3 className="font-bold mb-2">{cert.name}</h3>
                <p className="text-sm text-gray-600">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Équipe */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-6">Notre Équipe</h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Des experts passionnés au service de votre transformation digitale
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Aichatou Magagi', role: 'Gérante', },
              { name: 'Idrissa Abdou', role: 'Responsable Technique',},
              { name: 'Abdoulaye Ide', role: 'Responsable Développement', },
            ].map((member) => (
              <div key={member.name} className="bg-white p-8 rounded-2xl text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <div className="text-blue-600 font-medium mb-2">{member.role}</div>
                
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Prêt à travailler avec nous ?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Découvrez comment nous pouvons vous aider à atteindre vos objectifs
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-black px-8 py-4 rounded-xl hover:shadow-xl transition font-medium"
          >
            Nous contacter
          </Link>
        </div>
      </section>
    </>
  )
}
