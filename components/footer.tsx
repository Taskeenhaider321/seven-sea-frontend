"use client"

import Link from "next/link"
import { Linkedin, Instagram, Facebook } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-ocean-navy text-soft-white">
      {/* Wave divider */}
      <svg className="wave-divider -mt-1" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z" fill="#0B2545" />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-ocean-aqua to-ocean-deep rounded-lg flex items-center justify-center">
                <span className="text-soft-white font-bold text-lg">⚓</span>
              </div>
              <span className="font-bold text-lg">SevenSeas</span>
            </div>
            <p className="text-soft-white/70 text-sm leading-relaxed">
              Connecting Businesses Beyond Borders. Expert consultancy in IT, Construction, and Fabric Exports.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Portfolio", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    href={`#${link.toLowerCase()}`}
                    className="text-soft-white/70 hover:text-ocean-aqua transition-colors text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {["IT & Software", "Construction", "Fabric Exports"].map((service) => (
                <li key={service}>
                  <Link href="#services" className="text-soft-white/70 hover:text-ocean-aqua transition-colors text-sm">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {[
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Instagram, label: "Instagram" },
                { icon: Facebook, label: "Facebook" },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-soft-white/10 flex items-center justify-center hover:bg-ocean-aqua hover:text-ocean-navy transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-soft-white/10 pt-8">
          <p className="text-center text-soft-white/60 text-sm">© 2025 SevenSeas Consultancy. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
