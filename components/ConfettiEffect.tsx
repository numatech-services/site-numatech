'use client'
import { useEffect, useRef } from 'react'

interface Props {
  active: boolean
  onComplete?: () => void
}

export default function ConfettiEffect({ active, onComplete }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!active || !canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const colors = ['#FFC857', '#123A7D', '#176B87', '#F97362', '#7C3AED', '#58B368']
    const confetti: Array<{
      x: number
      y: number
      vx: number
      vy: number
      rotation: number
      vr: number
      color: string
      size: number
    }> = []

    // Create confetti
    for (let i = 0; i < 100; i++) {
      confetti.push({
        x: canvas.width / 2,
        y: canvas.height / 2,
        vx: (Math.random() - 0.5) * 10,
        vy: (Math.random() - 0.5) * 10 - 5,
        rotation: Math.random() * 360,
        vr: (Math.random() - 0.5) * 10,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 8 + 4,
      })
    }

    let frame = 0
    const maxFrames = 120

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      confetti.forEach(p => {
        p.x += p.vx
        p.y += p.vy
        p.vy += 0.3 // gravity
        p.rotation += p.vr

        ctx.save()
        ctx.translate(p.x, p.y)
        ctx.rotate(p.rotation * Math.PI / 180)
        ctx.fillStyle = p.color
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size)
        ctx.restore()
      })

      frame++
      if (frame < maxFrames) {
        requestAnimationFrame(animate)
      } else {
        onComplete?.()
      }
    }

    animate()
  }, [active, onComplete])

  if (!active) return null

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999]"
    />
  )
}
