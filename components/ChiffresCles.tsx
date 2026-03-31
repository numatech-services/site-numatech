'use client'

import { useEffect, useRef, useState } from 'react'
import { TrendingUp, Users, Award, ThumbsUp } from 'lucide-react'

const chiffres = [
  {
    icon: Users,
    valeur: 10,
    prefix: '+',
    suffix: '',
    label: 'établissements équipés',
    description: 'Écoles, collèges, lycées et universités',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: TrendingUp,
    valeur: 100,
    prefix: '+',
    suffix: '',
    label: 'postes informatiques gérés',
    description: 'Déployés, maintenus et supervisés',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Award,
    valeur: 5,
    prefix: '',
    suffix: ' ans',
    label: 'd\'expertise éducation',
    description: 'Au service de l\'enseignement',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: ThumbsUp,
    valeur: 98,
    prefix: '',
    suffix: '%',
    label: 'taux de satisfaction clients',
    description: 'Note moyenne de nos clients',
    color: 'from-orange-500 to-orange-600'
  }
]

function Counter({ valeur, duration = 2000 }: { valeur: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const counterRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 }
    )

    if (counterRef.current) {
      observer.observe(counterRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(easeOutQuart * valeur))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [isVisible, valeur, duration])

  return <div ref={counterRef}>{count.toLocaleString('fr-FR')}</div>
}

export default function ChiffresCles() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary via-primary-dark to-secondary text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* En-tête */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
            Votre partenaire expérimenté
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Des chiffres qui parlent d'eux-mêmes
          </p>
        </div>

        {/* Grille de chiffres */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {chiffres.map((chiffre, index) => {
            const Icon = chiffre.icon
            return (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 hover:bg-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              >
                {/* Icône */}
                <div className={`w-16 h-16 bg-gradient-to-br ${chiffre.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Compteur */}
                <div className="text-5xl md:text-6xl font-bold mb-4 font-heading">
                  {chiffre.prefix}
                  <Counter valeur={chiffre.valeur} />
                  {chiffre.suffix}
                </div>

                {/* Label */}
                <div className="text-xl font-semibold mb-2">
                  {chiffre.label}
                </div>

                {/* Description */}
                <div className="text-sm text-white/70">
                  {chiffre.description}
                </div>
              </div>
            )
          })}
        </div>

        {/* Barre de séparation avec texte */}
        <div className="mt-20 flex items-center gap-6">
          <div className="h-px bg-white/20 flex-1"></div>
          <div className="text-white/60 font-medium">
            Une croissance constante depuis 2022
          </div>
          <div className="h-px bg-white/20 flex-1"></div>
        </div>
      </div>
    </section>
  )
}
