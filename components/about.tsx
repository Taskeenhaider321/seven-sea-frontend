"use client"

import { Globe, Cog, Users } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-soft-white">
      {/* Wave divider top */}
      <svg className="wave-divider -mt-1" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z" fill="#0057B7" opacity="0.1" />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Left - Image */}
          <div className="relative h-96 md:h-full min-h-96 rounded-2xl overflow-hidden shadow-2xl hover-lift">
            <div className="absolute inset-0 bg-gradient-to-br from-ocean-deep to-ocean-aqua opacity-80" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <Globe size={80} className="text-soft-white/30 mx-auto mb-4" />
                <p className="text-soft-white/50 font-semibold">Global Consultancy</p>
              </div>
            </div>
          </div>

          {/* Right - Text */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 leading-tight">
              We Navigate Complexity With Clarity
            </h2>
            <p className="text-lg text-charcoal/70 mb-8 leading-relaxed">
              SevenSeas Consultancy is founded on the idea that every business deserves clarity and direction in a
              fast-changing world. Our team blends technical innovation, engineering expertise, and textile experience
              to create practical solutions for growth.
            </p>

            {/* Value Cards */}
            <div className="space-y-4">
              {[
                { icon: Globe, title: "Global Reach", desc: "Operating across continents" },
                { icon: Cog, title: "Integrated Expertise", desc: "Multi-disciplinary solutions" },
                { icon: Users, title: "Client-Centered", desc: "Your success is our mission" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex gap-4 p-4 rounded-lg bg-soft-white border border-ocean-deep/10 hover:border-ocean-deep/30 hover:bg-ocean-deep/5 transition-smooth hover-lift"
                >
                  <div className="flex-shrink-0">
                    <item.icon className="w-6 h-6 text-ocean-deep" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal">{item.title}</h3>
                    <p className="text-sm text-charcoal/60">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
