"use client"

import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "SevenSeas transformed our IT infrastructure with innovative solutions and exceptional support. Their team truly understands our business needs.",
      author: "Ahmed Hassan",
      position: "CEO, Construction Innovations UAE",
      rating: 5,
    },
    {
      quote:
        "Working with SevenSeas on our fabric export strategy was a game-changer. Their expertise in global markets is unmatched.",
      author: "Sarah Mitchell",
      position: "Director, Global Textiles Ltd",
      rating: 5,
    },
    {
      quote:
        "The consultancy services provided by SevenSeas helped us navigate complex market challenges and achieve sustainable growth.",
      author: "Rajesh Kumar",
      position: "Managing Director, Tech Solutions Asia",
      rating: 5,
    },
    {
      quote: "Professional, reliable, and results-driven. SevenSeas is our trusted partner for all consultancy needs.",
      author: "Maria Rodriguez",
      position: "VP Operations, International Ventures",
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-soft-white relative">
      {/* Wave divider */}
      <svg className="wave-divider absolute top-0 left-0 w-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,50 Q300,0 600,50 T1200,50 L1200,0 L0,0 Z" fill="#0B2545" opacity="0.05" />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">What Our Clients Say</h2>
          <p className="text-lg text-charcoal/60">Trusted by leading businesses worldwide</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="p-8 rounded-xl bg-white border border-ocean-deep/10 hover:border-ocean-deep/30 hover:shadow-lg transition-smooth hover-lift"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-ocean-aqua text-ocean-aqua" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-charcoal/80 mb-6 leading-relaxed italic">"{testimonial.quote}"</p>

              {/* Author */}
              <div>
                <p className="font-semibold text-charcoal">{testimonial.author}</p>
                <p className="text-sm text-charcoal/60">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
