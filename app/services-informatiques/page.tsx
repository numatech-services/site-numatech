import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services Informatiques & Infogérance | Numatech Services',
  description: 'Infogérance complète, maintenance préventive, supervision 24/7 et support technique pour établissements scolaires et collectivités.',
}

import Link from 'next/link'
import { Server, Shield, Headset, Clock, CheckCircle } from 'lucide-react'

export default function ServicesInformatiques() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Services Informatiques & Infogérance</h1>
            <p className="text-xl text-blue-100 mb-8">
              Externalisez votre DSI et concentrez-vous sur votre cœur de métier. 
              Nous gérons l'intégralité de votre infrastructure IT.
            </p>
            <Link 
              href="/contact?type=audit"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl hover:shadow-xl transition font-medium"
            >
              Demander un audit gratuit
            </Link>
          </div>
        </div>
      </section>

      {/* Services principaux */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Nos Services d'Infogérance</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
              <Server className="text-blue-600 mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-4">Gestion d'Infrastructure</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  Supervision 24/7 de vos serveurs et réseaux
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  Maintenance préventive et corrective
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  Gestion des sauvegardes et plan de reprise
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  Optimisation des performances
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
              <Shield className="text-green-600 mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-4">Sécurité & Conformité</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  Protection contre les cyberattaques
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  Mise en conformité RGPD
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  Audits de sécurité réguliers
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  Gestion des accès et identités
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
              <Headset className="text-purple-600 mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-4">Support Utilisateur</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  Helpdesk multicanal (téléphone, email, chat)
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  Assistance à distance et sur site
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  Formation des utilisateurs
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  Gestion des incidents et tickets
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
              <Clock className="text-orange-600 mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-4">Disponibilité Garantie</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  SLA jusqu'à 99.9% de disponibilité
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  Astreinte 24/7 pour incidents critiques
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  Monitoring proactif en temps réel
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  Rapports mensuels de performance
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Processus */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Notre Processus</h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { num: '01', title: 'Audit', desc: 'Analyse complète de votre infrastructure' },
              { num: '02', title: 'Planification', desc: 'Définition de la stratégie et des SLA' },
              { num: '03', title: 'Migration', desc: 'Transition en douceur vers nos services' },
              { num: '04', title: 'Gestion', desc: 'Monitoring et support continu' },
            ].map((step) => (
              <div key={step.num} className="text-center">
                <div className="text-5xl font-bold text-blue-600 mb-4">{step.num}</div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Prêt à externaliser votre DSI ?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Obtenez un audit gratuit et un devis personnalisé
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?type=audit"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:shadow-xl transition font-medium"
            >
              Demander un audit gratuit
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white px-8 py-4 rounded-xl hover:bg-blue-700 transition font-medium"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
