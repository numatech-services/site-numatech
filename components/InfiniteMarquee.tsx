'use client'

const logos = [
  { name: "Université Djibo Hamani", emoji: '🎓' },
  { name: "Université de Diffa", emoji: '📚' },
  { name: 'Swiss Umef University of Niger', emoji: '🏛️' },
  { name: 'ECCAM', emoji: '🎓' },
  { name: 'ADU', emoji: '📖' },
  { name: "Université André Salifou Zinder", emoji: '🌲' },
  { name: "Université Abdou Moumouni", emoji: '🏛️' },
  { name: "Université UDDM", emoji: '📚' },
  { name: 'EMIG', emoji: '🔬' },
  { name: 'Mairie de Versailles', emoji: '👑' },
]

// Doubler pour effet infini sans coupure
const doubled = [...logos, ...logos]

export default function InfiniteMarquee() {
  return (
    <section className="py-16 bg-gradient-to-r from-neutral-50 via-white to-neutral-50 overflow-hidden">
      <div className="mb-8 text-center">
        <p className="text-sm text-gray-500 font-semibold tracking-wide uppercase">
          Ils nous font confiance
        </p>
      </div>

      <div className="relative">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Marquee */}
        <div className="flex gap-12 animate-marquee">
          {doubled.map((logo, i) => (
            <div key={i} 
              className="flex-shrink-0 flex items-center gap-3 px-6 py-4 bg-white rounded-2xl border-2 border-gray-100
                hover:border-primary hover:shadow-lg transition-all duration-300 group cursor-default">
              <span className="text-3xl group-hover:scale-125 transition-transform duration-300">
                {logo.emoji}
              </span>
              <span className="font-semibold text-gray-700 whitespace-nowrap">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
          width: fit-content;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
