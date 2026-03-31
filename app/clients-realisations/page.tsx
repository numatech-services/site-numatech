import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Clients & Réalisations | Témoignages - Numatech Services',
  description: 'Découvrez les témoignages et réalisations de Numatech Services. +250 établissements satisfaits : lycées, écoles, mairies, universités.',
}

import Link from 'next/link'
import { GraduationCap, Building2, Users, CheckCircle } from 'lucide-react'

export default function ClientsRealisations() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-600 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Nos Clients & Réalisations</h1>
            <p className="text-xl text-indigo-100">
              Découvrez comment nous avons accompagné nos clients dans leur transformation digitale
              avec des solutions sur mesure et performantes.
            </p>
          </div>
        </div>
      </section>

      {/* Secteurs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Nos Secteurs d'Intervention</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-8 rounded-2xl">
              <GraduationCap className="text-blue-600 mb-4" size={48} />
              <h3 className="text-2xl font-bold mb-4">Éducation</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 15+ établissements scolaires</li>
                <li>• Écoles, collèges, lycées</li>
                <li>• Universités et grandes écoles</li>
                <li>• Organismes de formation</li>
              </ul>
            </div>

            <div className="bg-green-50 p-8 rounded-2xl">
              <Building2 className="text-green-600 mb-4" size={48} />
              <h3 className="text-2xl font-bold mb-4">Collectivités</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 80+ collectivités territoriales</li>
                <li>• Mairies et intercommunalités</li>
                <li>• Conseils départementaux</li>
                <li>• Services publics</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-8 rounded-2xl">
              <Users className="text-purple-600 mb-4" size={48} />
              <h3 className="text-2xl font-bold mb-4">Entreprises</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 70+ entreprises</li>
                <li>• PME et ETI</li>
                <li>• Startups en croissance</li>
                <li>• Tous secteurs d'activité</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Études de cas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Études de Cas</h2>

          <div className="space-y-12">
            {/* Cas 1 */}
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                    Éducation
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Université Djibo Hamani</h3>
                  <p className="text-gray-600 mb-6">
                    Modernisation complète de l'infrastructure IT pour 850 élèves et 80 enseignants
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="font-semibold mb-2">Université Abdou Moumouni</div>
                      <p className="text-gray-600 text-sm">
                        Infrastructure vieillissante, réseau Wi-Fi insuffisant, gestion complexe du parc informatique
                      </p>
                    </div>
                    <div>
                      <div className="font-semibold mb-2">Solution</div>
                      <p className="text-gray-600 text-sm">
                        Déploiement de 120 nouveaux postes, infrastructure réseau sécurisée, solution MDM
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
                  <h4 className="font-bold mb-6">Résultats</h4>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="text-green-600" size={24} />
                      <span><strong>100%</strong> des salles connectées en Wi-Fi</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="text-green-600" size={24} />
                      <span><strong>-60%</strong> d'incidents techniques</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="text-green-600" size={24} />
                      <span><strong>4h</strong> de temps de réponse moyen</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="text-green-600" size={24} />
                      <span>Formation de <strong>tous les enseignants</strong></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cas 2 */}
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                    Collectivité
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Swiss Umef University of Niger</h3>
                  <p className="text-gray-600 mb-6">
                    Développement d'un portail pour 500 étudiants et personnels
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="font-semibold mb-2">Université de Diffa</div>
                      <p className="text-gray-600 text-sm">
                        Besoin de digitaliser les démarches administratives et améliorer la relation citoyen
                      </p>
                    </div>
                    <div>
                      <div className="font-semibold mb-2">Solution</div>
                      <p className="text-gray-600 text-sm">
                        Plateforme web et mobile avec espace personnel, démarches en ligne, système d'enseignement
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8">
                  <h4 className="font-bold mb-6">Résultats</h4>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="text-green-600" size={24} />
                      <span><strong>500+</strong> utilisateurs inscrits</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="text-green-600" size={24} />
                      <span><strong>70%</strong> de démarches dématérialisées</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="text-green-600" size={24} />
                      <span><strong>-50%</strong> de temps d'attente</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="text-green-600" size={24} />
                      <span>Satisfaction citoyenne : <strong>4.6/5</strong></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cas 3 */}
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="inline-block bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                    Entreprise
                  </div>
                  <h3 className="text-3xl font-bold mb-4">TechStart SAS</h3>
                  <p className="text-gray-600 mb-6">
                    Infrastructure IT complète pour startup en hypercroissance (15 à 120 employés)
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="font-semibold mb-2">Challenge</div>
                      <p className="text-gray-600 text-sm">
                        Croissance rapide nécessitant une infrastructure évolutive et sécurisée
                      </p>
                    </div>
                    <div>
                      <div className="font-semibold mb-2">Solution</div>
                      <p className="text-gray-600 text-sm">
                        Cloud hybride, infogérance complète, outils collaboratifs, cybersécurité avancée
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8">
                  <h4 className="font-bold mb-6">Résultats</h4>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="text-green-600" size={24} />
                      <span><strong>99.99%</strong> de disponibilité</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="text-green-600" size={24} />
                      <span><strong>-40%</strong> de coûts IT</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="text-green-600" size={24} />
                      <span>Zéro incident de sécurité en <strong>2 ans</strong></span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={24} />
                      <span>Accompagnement lors de la <strong>levée de fonds</strong></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Ce Qu'ils Disent de Nous</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "Numatech a totalement transformé notre infrastructure IT. L'équipe est réactive et toujours à l'écoute de nos besoins.",
                author: "Marie Dubois",
                role: "DSI, Collège Victor Hugo",
                rating: 5
              },
              {
                text: "Grâce au portail citoyen développé par Numatech, nous avons considérablement amélioré notre relation avec les habitants.",
                author: "Pierre Martin",
                role: "Directeur des Services, Mairie",
                rating: 5
              },
              {
                text: "Un partenariat essentiel pour notre croissance. Numatech gère toute notre IT et nous permet de nous concentrer sur notre business.",
                author: "Sophie Laurent",
                role: "CEO, TechStart SAS",
                rating: 5
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-2xl">
                <div className="text-yellow-400 text-xl mb-4">{'★'.repeat(testimonial.rating)}</div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <div className="font-bold">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Votre projet est le prochain ?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Discutons de vos besoins et voyons comment nous pouvons vous aider
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-xl hover:shadow-xl transition font-medium"
          >
            Démarrer un projet
          </Link>
        </div>
      </section>
    </>
  )
}
