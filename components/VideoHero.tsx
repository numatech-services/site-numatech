'use client'
import { useState } from 'react'
import { Play, X } from 'lucide-react'

export default function VideoHero() {
  const [playing, setPlaying] = useState(false)

  return (
    <section className="relative py-24 bg-gradient-to-br from-neutral-900 to-neutral-800 text-white overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          animation: 'gridMove 20s linear infinite',
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-accent-yellow/20 backdrop-blur px-4 py-2 rounded-full text-accent-yellow text-sm font-bold mb-6">
              🎬 Découvrez Numatech en vidéo
            </div>
            <h2 className="text-4xl font-bold mb-6 font-heading">
              Comment nous transformons<br />les <span className="text-accent-yellow">écoles de demain</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              De l'audit initial à la formation de vos équipes, découvrez notre méthode éprouvée 
              en 3 minutes. Témoignages clients, coulisses de nos installations, innovations pédagogiques.
            </p>
            <div className="flex gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="text-2xl">⏱</span>
                </div>
                <div>
                  <div className="font-bold">3 min</div>
                  <div className="text-sm text-gray-400">Durée</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="text-2xl">👥</span>
                </div>
                <div>
                  <div className="font-bold">15K+</div>
                  <div className="text-sm text-gray-400">Vues</div>
                </div>
              </div>
            </div>
          </div>

          {/* Video thumbnail */}
          <div className="relative group">
            <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/10">
              <img 
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&h=675&fit=crop" 
                alt="École moderne"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              {/* Play button */}
              <button 
                onClick={() => setPlaying(true)}
                className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-accent-yellow flex items-center justify-center 
                  group-hover:scale-110 group-hover:bg-white transition-all duration-300 shadow-2xl">
                  <Play className="w-8 h-8 text-primary ml-1" fill="currentColor" />
                </div>
              </button>

              {/* Badge "NOUVEAU" */}
              <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                NOUVEAU
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent-yellow/20 rounded-full blur-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl -z-10" />
          </div>
        </div>
      </div>

     {/* Video modal */}
{playing && (
  <div 
    className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center p-4"
    onClick={() => setPlaying(false)}
  >
    <button className="absolute top-8 right-8 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition">
      <X className="text-white" />
    </button>

    <div 
      className="w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl"
      onClick={(e) => e.stopPropagation()} // empêche fermeture au clic sur la vidéo
    >
      <video
        src="/videos/0325.mp4"
        className="w-full h-full object-cover"
        controls
        autoPlay
      />
    </div>
  </div>
)}
      <style jsx global>{`
        @keyframes gridMove {
          0% { transform: translateY(0); }
          100% { transform: translateY(40px); }
        }
      `}</style>
    </section>
  )
}
