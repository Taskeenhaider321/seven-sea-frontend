import type React from "react"
import type { Metadata } from "next"
import { Poppins, Montserrat, Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "SevenSeas Consultancy — IT, Construction & Fabric Experts",
  description:
    "Expert consultancy helping businesses navigate IT, construction, and textile industries with global precision. Sailing businesses toward global success.",
  keywords:
    "SevenSeas Consultancy, IT Consultancy, Construction Management, Fabric Exports, B2B Consultancy, Business Growth",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${montserrat.variable} ${inter.variable} ${playfair.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
