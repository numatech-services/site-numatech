import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ressources & Guides IT Éducation | Numatech Services',
  description: 'Guides pratiques, articles et documentation gratuits pour réussir vos projets IT : transformation numérique scolaire, WiFi, sécurité, tablettes.',
}

import Link from 'next/link'
import { FileText, Video, BookOpen, Download } from 'lucide-react'

export default function Ressources() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-600 to-teal-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Ressources & Documentation</h1>
            <p className="text-xl text-teal-100">
              Guides pratiques, livres blancs et documentation pour vous accompagner
              dans vos projets IT.
            </p>
          </div>
        </div>
      </section>

      {/* Livres blancs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-bold">Livres Blancs</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Guide de l'Infogérance",
                desc: "Tout ce qu'il faut savoir pour externaliser sa DSI",
                pages: "24 pages",
                category: "Infogérance"
              },
              {
                title: "Sécurité IT en 2026",
                desc: "Les meilleures pratiques pour protéger votre infrastructure",
                pages: "32 pages",
                category: "Cybersécurité"
              },
              {
                title: "Cloud vs On-Premise",
                desc: "Comment choisir la meilleure solution pour votre organisation",
                pages: "18 pages",
                category: "Infrastructure"
              },
              {
                title: "RGPD en Pratique",
                desc: "Guide de mise en conformité pour les collectivités",
                pages: "28 pages",
                category: "Conformité"
              },
              {
                title: "Digitalisation Scolaire",
                desc: "Transformer l'enseignement avec les nouvelles technologies",
                pages: "36 pages",
                category: "Éducation"
              },
              {
                title: "ROI de la Transformation Digitale",
                desc: "Mesurer l'impact de vos investissements IT",
                pages: "22 pages",
                category: "Stratégie"
              }
            ].map((resource, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition">
                <div className="flex items-start justify-between mb-4">
                  <FileText className="text-teal-600" size={40} />
                  <span className="text-xs bg-teal-100 text-teal-800 px-3 py-1 rounded-full">
                    {resource.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3">{resource.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{resource.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{resource.pages}</span>
                  <button className="flex items-center gap-2 text-teal-600 font-medium hover:text-teal-700">
                    <Download size={18} />
                    Télécharger
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Webinaires */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12">Webinaires & Vidéos</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Comment bien choisir son prestataire IT",
                duration: "30 sec",
                date: "15 janvier 2026"
              },
              {
                title: "Les tendances IT pour l'éducation en 2026",
                duration: "30 sec",
                date: "22 décembre 2025"
              },
              {
                title: "Optimiser son budget IT",
                duration: "30 sec",
                date: "10 décembre 2025"
              },
              {
                title: "Cybersécurité : les bonnes pratiques",
                duration: "30 sec",
                date: "28 novembre 2025"
              }
            ].map((webinar, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Video className="text-white" size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{webinar.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                      <span>⏱️ {webinar.duration}</span>
                      <span>📅 {webinar.date}</span>
                    </div>
                    <button className="text-teal-600 font-medium hover:text-teal-700">
                      Regarder le replay →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12">Articles du Blog</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "10 Signes qu'il est temps d'externaliser votre IT",
                category: "Infogérance",
                date: "5 février 2026",
                readTime: "5 min"
              },
              {
                title: "Comment préparer sa migration vers le Cloud",
                category: "Cloud",
                date: "28 janvier 2026",
                readTime: "8 min"
              },
              {
                title: "L'importance des sauvegardes automatisées",
                category: "Sécurité",
                date: "15 janvier 2026",
                readTime: "6 min"
              },
              {
                title: "WiFi dans les écoles : les bonnes pratiques",
                category: "Éducation",
                date: "8 janvier 2026",
                readTime: "7 min"
              },
              {
                title: "Choisir entre serveur physique et virtuel",
                category: "Infrastructure",
                date: "20 décembre 2025",
                readTime: "10 min"
              },
              {
                title: "Les outils collaboratifs indispensables",
                category: "Productivité",
                date: "12 décembre 2025",
                readTime: "5 min"
              }
            ].map((article, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition">
                <div className="h-48 bg-gradient-to-br from-teal-400 to-teal-600"></div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs bg-teal-100 text-teal-800 px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                    <span className="text-xs text-gray-500">{article.readTime} de lecture</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{article.title}</h3>
                  <div className="text-sm text-gray-600 mb-4">{article.date}</div>
                  <button className="text-teal-600 font-medium hover:text-teal-700">
                    Lire l'article →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Questions Fréquentes</h2>

          <div className="space-y-6">
            {[
              {
                q: "Quels sont vos délais d'intervention ?",
                a: "Nous garantissons une prise en charge sous 4h pour les incidents critiques et sous 24h pour les demandes standard."
              },
              {
                q: "Proposez-vous des contrats de maintenance ?",
                a: "Oui, nous proposons plusieurs formules d'infogérance adaptées à vos besoins, de la maintenance préventive au support 24/7."
              },
              {
                q: "Travaillez-vous avec des organismes publics ?",
                a: "Absolument, nous travaillons régulièrement avec des collectivités et établissements publics. Nous sommes familiers avec les procédures de marchés publics."
              },
              {
                q: "Proposez-vous du financement pour le matériel ?",
                a: "Oui, nous proposons différentes solutions de financement (location, leasing) en partenariat avec nos partenaires financiers."
              }
            ].map((faq, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="font-bold text-lg mb-3 flex items-start gap-2">
                  <BookOpen className="text-teal-600 flex-shrink-0 mt-1" size={20} />
                  {faq.q}
                </h3>
                <p className="text-gray-600 pl-7">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Besoin de plus d'informations ?
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Notre équipe est à votre disposition pour répondre à vos questions
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-teal-600 px-8 py-4 rounded-xl hover:shadow-xl transition font-medium"
          >
            Nous contacter
          </Link>
        </div>
      </section>
    </>
  )
}
