"use client"

import { ArrowRight } from "lucide-react"

export default function Portfolio() {
  const projects = [
    {
      title: "Website Development for Construction Firm",
      location: "UAE",
      category: "IT Solutions",
      image: "bg-gradient-to-br from-ocean-deep to-ocean-aqua",
    },
    {
      title: "Fabric Export Consultancy",
      location: "UK Textile Group",
      category: "Fabric Exports",
      image: "bg-gradient-to-br from-ocean-aqua to-ocean-navy",
    },
    {
      title: "Construction Project Management",
      location: "Middle East",
      category: "Construction",
      image: "bg-gradient-to-br from-ocean-navy to-ocean-aqua",
    },
    {
      title: "Digital Transformation Initiative",
      location: "South Asia",
      category: "IT Solutions",
      image: "bg-gradient-to-br from-ocean-deep to-ocean-navy",
    },
    {
      title: "Supply Chain Optimization",
      location: "Global",
      category: "Consultancy",
      image: "bg-gradient-to-br from-ocean-aqua to-ocean-deep",
    },
    {
      title: "Textile Quality Assurance",
      location: "Pakistan",
      category: "Fabric Exports",
      image: "bg-gradient-to-br from-ocean-navy to-ocean-deep",
    },
  ]

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-ocean-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-soft-white mb-4">Our Work in Action</h2>
          <p className="text-lg text-soft-white/70">Proven expertise across industries and continents</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {projects.map((project, idx) => (
            <div key={idx} className="group relative h-64 rounded-xl overflow-hidden cursor-pointer hover-lift">
              <div
                className={`absolute inset-0 ${project.image} opacity-80 group-hover:opacity-100 transition-opacity`}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-soft-white">
                <span className="text-xs font-semibold text-ocean-aqua mb-2 uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold mb-2 group-hover:text-ocean-aqua transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-soft-white/80">{project.location}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base border-2 border-soft-white text-soft-white hover:bg-soft-white/10 transition-smooth hover-lift">
            See Our Full Portfolio
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  )
}
