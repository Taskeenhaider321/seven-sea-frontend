"use client"

import { Code2, Building2, Shirt } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: Code2,
      title: "IT & Software Solutions",
      items: ["Web Development", "Custom Software Design", "UI/UX Design", "Dedicated Support Systems"],
      color: "from-ocean-deep to-ocean-aqua",
    },
    {
      icon: Building2,
      title: "Construction Consultancy",
      items: ["Project Feasibility & Management", "Site Planning", "Engineering Design & Cost Analysis"],
      color: "from-ocean-aqua to-ocean-deep",
    },
    {
      icon: Shirt,
      title: "Fabric Exports",
      items: ["Bedsheets, Sofa & Curtain Fabrics", "Custom Orders & Textile Sourcing", "Global Shipping Solutions"],
      color: "from-ocean-navy to-ocean-aqua",
    },
  ]

  return (
    <section id="services" className="py-20 md:py-32 bg-gradient-to-b from-soft-white via-soft-white to-ocean-deep/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">Our Core Services</h2>
          <p className="text-lg text-charcoal/60 max-w-2xl mx-auto">
            Comprehensive solutions tailored to your industry needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="group relative rounded-2xl overflow-hidden hover-lift">
              {/* Background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />

              {/* Card content */}
              <div className="relative p-8 bg-white group-hover:bg-transparent transition-colors duration-300 rounded-2xl border border-ocean-deep/10 group-hover:border-transparent">
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-ocean-deep to-ocean-aqua flex items-center justify-center group-hover:bg-soft-white transition-colors">
                    <service.icon className="w-7 h-7 text-soft-white group-hover:text-ocean-deep transition-colors" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-charcoal mb-4 group-hover:text-soft-white transition-colors">
                  {service.title}
                </h3>

                <ul className="space-y-3">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-ocean-deep group-hover:bg-soft-white mt-2 flex-shrink-0 transition-colors" />
                      <span className="text-charcoal/70 group-hover:text-soft-white/90 transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
