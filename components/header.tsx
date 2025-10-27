"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-smooth ${
        isScrolled ? "bg-ocean-navy/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-ocean-aqua to-ocean-deep rounded-lg flex items-center justify-center">
              <span className="text-soft-white font-bold text-lg">⚓</span>
            </div>
            <span
              className={`font-bold text-lg transition-smooth ${isScrolled ? "text-soft-white" : "text-soft-white"}`}
            >
              SevenSeas
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {["Home", "About", "Services", "Portfolio", "Insights", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-sm font-medium transition-smooth relative group ${
                  isScrolled ? "text-soft-white" : "text-soft-white"
                }`}
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-ocean-aqua group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <button className="px-6 py-2.5 rounded-full font-medium text-sm bg-gradient-to-r from-ocean-deep to-ocean-aqua text-soft-white hover:shadow-lg hover:shadow-ocean-aqua/30 transition-smooth">
              Get Consultation
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-soft-white">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            {["Home", "About", "Services", "Portfolio", "Insights", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-4 py-2 text-soft-white hover:bg-ocean-deep/50 rounded-lg transition-smooth"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            <button className="w-full mt-4 px-6 py-2.5 rounded-full font-medium text-sm bg-gradient-to-r from-ocean-deep to-ocean-aqua text-soft-white">
              Get Consultation
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}
