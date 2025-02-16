import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Instagram, Twitter, Facebook, Linkedin, Link2, Mail, MapPin, Phone } from 'lucide-react'

const quickLinks = [
    { name: 'Events', href: '#events' },
    { name: 'Alumni', href: '#alumni' },
    { name: 'Workshops', href: '#workshops' },
    { name: 'About Us', href: '#about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Contact Us', href: '#contact' },
]

const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Link2, href: '#', label: 'Website' },
]

export default function Footer() {
    return (
        <footer className="bg-[#0A0A29]/80 backdrop-blur-md border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Logo and Description */}
                    <div className="space-y-4">
                        <Link href="/" className="block">
                            <div className="relative w-32 h-8">
                                <Image
                                    src="/ieee-logo-white.png"
                                    alt="IEEE Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </Link>
                        <p className="text-gray-400 text-sm">
                            IEEE Student Branch BIT Mesra is dedicated to advancing technology and fostering innovation among students.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-white transition-colors text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Contact Info</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-400">
                                <MapPin className="w-5 h-5 mt-1 text-blue-400" />
                                <span className="text-sm">BIT Mesra, Ranchi, Jharkhand, India</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Mail className="w-5 h-5 text-blue-400" />
                                <span className="text-sm">mail@bitmesra.ac.in</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Phone className="w-5 h-5 text-blue-400" />
                                <span className="text-sm">+91 XXXX XXXX XX</span>
                            </li>
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Connect With Us</h3>
                        <div className="flex gap-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    className="p-2 bg-[#0A0A29] rounded-full text-gray-400 hover:text-white hover:bg-blue-500/20 transition-colors"
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-12 pt-8 border-t border-gray-800">
                    <p className="text-center text-gray-400 text-sm">
                        © {new Date().getFullYear()} IEEE Student Branch BIT Mesra. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
} 