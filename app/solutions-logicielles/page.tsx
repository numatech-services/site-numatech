import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Solutions Logicielles Éducation | BiblioMaker, Cairn, Compilatio - Numatech',
  description: 'Solutions logicielles pour établissements scolaires : BiblioMaker, Cairn.info, Dalloz, Compilatio. Licences, installation et formation incluses.',
}

import Link from 'next/link'
import { Code, Database, Globe, Smartphone, CheckCircle, Zap } from 'lucide-react'

export default function SolutionsLogicielles() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Solutions Logicielles Sur Mesure</h1>
            <p className="text-xl text-purple-100 mb-8">
              Développement d'applications web et mobile, intégration de solutions métier
              et accompagnement digital pour transformer votre organisation.
            </p>
            <Link 
              href="/contact?type=logiciel"
              className="inline-block bg-white text-purple-600 px-8 py-4 rounded-xl hover:shadow-xl transition font-medium"
            >
              Discuter de votre projet
            </Link>
          </div>
        </div>
      </section>

      {/* Services de développement */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Nos Expertises</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
              <Globe className="text-purple-600 mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-4">Applications Web</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  Portails et intranets d'entreprise
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  Plateformes e-learning et LMS
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  Sites web institutionnels
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  Applications SaaS métier
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
              <Smartphone className="text-blue-600 mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-4">Applications Mobile</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  Apps iOS et Android natives
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  Applications hybrides cross-platform
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  Progressive Web Apps (PWA)
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  Applications métier mobiles
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
              <Database className="text-green-600 mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-4">Solutions Métier</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  CRM et gestion commerciale
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  ERP et gestion d'entreprise
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  Outils de gestion de projets
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  Systèmes de facturation et comptabilité
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
              <Zap className="text-orange-600 mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-4">Intégrations & API</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  Développement d'API REST/GraphQL
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  Intégration de systèmes existants
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  Connecteurs tiers (Microsoft, Google, etc.)
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  Automatisation de workflows
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Technologies Maîtrisées</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              'React', 'Next.js', 'Node.js', 'Python', 'PHP', 'Laravel',
              'Vue.js', 'Angular', 'React Native', 'Flutter', 'PostgreSQL', 'MongoDB'
            ].map((tech) => (
              <div key={tech} className="bg-white p-6 rounded-xl text-center border border-gray-200">
                <div className="font-semibold text-gray-800">{tech}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processus de développement */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Notre Méthodologie</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { num: '1', title: 'Analyse', desc: 'Étude de vos besoins et cahier des charges' },
              { num: '2', title: 'Design', desc: 'Conception UX/UI et architecture technique' },
              { num: '3', title: 'Développement', desc: 'Développement agile avec sprints courts' },
              { num: '4', title: 'Tests', desc: 'Tests unitaires, fonctionnels et UAT' },
              { num: '5', title: 'Déploiement', desc: 'Mise en production et formation' },
            ].map((step) => (
              <div key={step.num} className="text-center">
                <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.num}
                </div>
                <h3 className="font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cas d'usage */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Cas d'Usage</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="text-3xl mb-4">🎓</div>
              <h3 className="text-xl font-bold mb-3">Éducation</h3>
              <p className="text-gray-600 mb-4">
                Plateforme de gestion scolaire avec espace élèves, parents et professeurs
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Cahier de textes numérique</li>
                <li>• Gestion des notes et absences</li>
                <li>• Communication parents-école</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="text-3xl mb-4">🏛️</div>
              <h3 className="text-xl font-bold mb-3">Collectivités</h3>
              <p className="text-gray-600 mb-4">
                Portail citoyen pour démarches administratives en ligne
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Demandes de documents</li>
                <li>• Inscriptions scolaires</li>
                <li>• Signalement de problèmes</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="text-3xl mb-4">🏢</div>
              <h3 className="text-xl font-bold mb-3">Entreprises</h3>
              <p className="text-gray-600 mb-4">
                Application métier pour optimiser les processus internes
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Gestion des stocks</li>
                <li>• Suivi des commandes</li>
                <li>• Reporting en temps réel</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Un projet de développement logiciel ?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Discutons de vos besoins et recevez un devis détaillé
          </p>
          <Link
            href="/contact?type=logiciel"
            className="inline-block bg-white text-purple-600 px-8 py-4 rounded-xl hover:shadow-xl transition font-medium"
          >
            Démarrer un projet
          </Link>
        </div>
      </section>
    </>
  )
}
