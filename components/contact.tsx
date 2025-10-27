"use client"

import type React from "react"

import { Mail, Phone, MapPin } from "lucide-react"
import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-soft-white">
      {/* Wave divider */}
      <svg className="wave-divider -mt-1" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z" fill="#0057B7" opacity="0.1" />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-8">Get In Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-charcoal mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-ocean-deep/20 focus:border-ocean-deep focus:outline-none transition-colors bg-soft-white"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-charcoal mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-ocean-deep/20 focus:border-ocean-deep focus:outline-none transition-colors bg-soft-white"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-charcoal mb-2">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-ocean-deep/20 focus:border-ocean-deep focus:outline-none transition-colors bg-soft-white"
                  placeholder="Your company"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-charcoal mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-ocean-deep/20 focus:border-ocean-deep focus:outline-none transition-colors bg-soft-white resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 rounded-full font-semibold text-base bg-gradient-to-r from-ocean-deep to-ocean-aqua text-soft-white hover:shadow-lg hover:shadow-ocean-aqua/30 transition-smooth"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-charcoal mb-8">Contact Information</h3>
            </div>

            {/* Email */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-ocean-deep/10">
                  <Mail className="h-6 w-6 text-ocean-deep" />
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-charcoal mb-2">Email</h4>
                <div className="space-y-1">
                  <p className="text-charcoal/70">mmohyuddin945@gmail.com</p>
                  <p className="text-charcoal/70">abdulrehman.pbx@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-ocean-deep/10">
                  <Phone className="h-6 w-6 text-ocean-deep" />
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-charcoal mb-2">Phone</h4>
                <div className="space-y-1">
                  <p className="text-charcoal/70">+92 306 988 0662</p>
                  <p className="text-charcoal/70">+92 311 070 8984</p>
                  <p className="text-charcoal/70">+92 302 979 7534</p>
                  <p className="text-charcoal/70">+92 307 532 7747</p>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-ocean-deep/10">
                  <MapPin className="h-6 w-6 text-ocean-deep" />
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-charcoal mb-2">Office</h4>
                <p className="text-charcoal/70">Lahore, Pakistan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
