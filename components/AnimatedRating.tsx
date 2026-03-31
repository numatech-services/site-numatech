'use client'
import { Star } from 'lucide-react'
import { useEffect, useState } from 'react'

interface Props {
  rating: number
  maxRating?: number
  size?: number
  animated?: boolean
}

export default function AnimatedRating({ rating, maxRating = 5, size = 20, animated = true }: Props) {
  const [displayRating, setDisplayRating] = useState(0)

  useEffect(() => {
    if (!animated) {
      setDisplayRating(rating)
      return
    }

    const duration = 1000
    const steps = 60
    const increment = rating / steps
    let current = 0
    let step = 0

    const timer = setInterval(() => {
      step++
      current = Math.min(increment * step, rating)
      setDisplayRating(current)
      if (step >= steps) clearInterval(timer)
    }, duration / steps)

    return () => clearInterval(timer)
  }, [rating, animated])

  return (
    <div className="flex items-center gap-1">
      {[...Array(maxRating)].map((_, i) => {
        const fillPercent = Math.min(Math.max((displayRating - i) * 100, 0), 100)
        return (
          <div key={i} className="relative" style={{ width: size, height: size }}>
            <Star 
              size={size} 
              className="text-gray-200 absolute inset-0"
            />
            <div 
              className="overflow-hidden absolute inset-0"
              style={{ width: `${fillPercent}%` }}
            >
              <Star 
                size={size} 
                className="text-yellow-400 fill-yellow-400"
              />
            </div>
          </div>
        )
      })}
      <span className="ml-2 font-bold text-sm text-gray-600">
        {displayRating.toFixed(1)}
      </span>
    </div>
  )
}
