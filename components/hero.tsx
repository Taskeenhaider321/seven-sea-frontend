"use client"

import { useEffect, useRef } from "react"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    let animationId: number

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      radius: number
      opacity: number
    }> = []

    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
      })
    }

    const animate = () => {
      // Clear canvas with gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
      gradient.addColorStop(0, "#0057B7")
      gradient.addColorStop(0.5, "#0B2545")
      gradient.addColorStop(1, "#0B2545")
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw and update particles
      particles.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        ctx.fillStyle = `rgba(56, 182, 255, ${particle.opacity})`
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden pt-20">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
        <div className="max-w-4xl mx-auto animate-slide-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-soft-white mb-6 leading-tight">
            Sailing Businesses Toward Global Success
          </h1>
          <p className="text-lg md:text-xl text-soft-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            SevenSeas Consultancy delivers expert guidance across IT, Construction, and Fabric industries — connecting
            innovation with growth.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 rounded-full font-semibold text-base bg-gradient-to-r from-ocean-aqua to-ocean-deep text-ocean-navy hover:shadow-lg hover:shadow-ocean-aqua/40 transition-smooth hover-lift">
              Explore Services
              <ArrowRight className="inline ml-2" size={20} />
            </button>
            <button className="px-8 py-4 rounded-full font-semibold text-base border-2 border-soft-white text-soft-white hover:bg-soft-white/10 transition-smooth hover-lift">
              Book a Consultation
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-soft-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-soft-white/50 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}
