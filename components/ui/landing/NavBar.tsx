import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const navLinks = [
  { name: 'Events', href: '#events' },
  { name: 'Alumni', href: '#alumni' },
  { name: 'Workshops', href: '#workshops' },
  { name: 'About Us', href: '#about' },
  { name: 'Out Team', href: '/team' },
  { name: 'Contact Us', href: '#contact' },
]

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A29]/50 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative w-32 h-8">
              <Image
                src="/ieee-logo-white.png"
                alt="IEEE Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Join Button */}
          <Link
            href="#join"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-sm transition-colors border border-white/10"
          >
            Join us
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          </Link>
        </div>
      </div>
    </nav>
  )
}
