'use client'
import { useEffect, useRef } from 'react'

export default function GradientBlob() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const blob = ref.current
    if (!blob) return

    let x = 0
    let y = 0
    const animate = () => {
      x += 0.3
      y += 0.2
      blob.style.transform = `translate(${Math.sin(x / 50) * 50}px, ${Math.cos(y / 50) * 30}px) scale(${1 + Math.sin(x / 100) * 0.1})`
      requestAnimationFrame(animate)
    }
    animate()
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div ref={ref} className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full 
        bg-gradient-to-br from-primary/20 via-secondary/20 to-accent-yellow/20 
        blur-3xl opacity-50 transition-transform duration-1000" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full 
        bg-gradient-to-br from-accent-coral/20 via-accent-purple/20 to-primary/20 
        blur-3xl opacity-40 animate-pulse" style={{ animationDuration: '8s' }} />
    </div>
  )
}
