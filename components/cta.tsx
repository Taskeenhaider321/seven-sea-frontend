"use client"

export default function CTA() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-r from-ocean-deep via-ocean-navy to-ocean-deep relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 bg-ocean-aqua rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-10 right-10 w-40 h-40 bg-ocean-aqua rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-soft-white mb-6 leading-tight">
          Ready to Expand Beyond Borders?
        </h2>
        <p className="text-xl text-soft-white/80 mb-12 max-w-2xl mx-auto">
          Let's craft your business strategy together and navigate the global market with confidence.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 rounded-full font-semibold text-base bg-soft-white text-ocean-deep hover:shadow-lg hover:shadow-soft-white/30 transition-smooth hover-lift">
            Book a Free Consultation
          </button>
          <button className="px-8 py-4 rounded-full font-semibold text-base border-2 border-soft-white text-soft-white hover:bg-soft-white/10 transition-smooth hover-lift">
            Email Our Team
          </button>
        </div>
      </div>
    </section>
  )
}
