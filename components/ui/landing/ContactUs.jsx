import React from 'react'
import { Instagram, Twitter, Facebook, Linkedin, Link2 } from 'lucide-react'

export default function ContactUs() {
    return (
        <section className="py-16 px-4 md:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-white mb-12">Contact Us</h2>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Contact Form */}
                    <div className="bg-[#0A0A29]/80 rounded-xl p-8 backdrop-blur-sm">
                        <h3 className="text-2xl text-blue-400 mb-6">Send us a message</h3>

                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm text-gray-400 mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Juliette Nichols"
                                    className="w-full px-4 py-3 bg-[#0A0A29] border border-gray-800 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm text-gray-400 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="mail@gmail.com"
                                    className="w-full px-4 py-3 bg-[#0A0A29] border border-gray-800 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm text-gray-400 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    placeholder="Your message"
                                    className="w-full px-4 py-3 bg-[#0A0A29] border border-gray-800 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <button type="submit" className="w-full py-3 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors">
                                Send
                            </button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-12">
                        <div>
                            <h3 className="text-2xl text-blue-400 mb-6">Contact</h3>
                            <div className="space-y-4 text-gray-400">
                                <p>Phone Number</p>
                                <p>mail@bitmesra.ac.in</p>
                                <p>Address, BIT Mesra</p>
                                <p>Ranchi, Jharkhand</p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl text-blue-400 mb-6">Connect</h3>
                            <div className="flex gap-4">
                                <a href="#" className="p-2 bg-[#0A0A29]/80 rounded-full text-gray-400 hover:text-white hover:bg-blue-500/20 transition-colors">
                                    <Instagram className="w-6 h-6" />
                                </a>
                                <a href="#" className="p-2 bg-[#0A0A29]/80 rounded-full text-gray-400 hover:text-white hover:bg-blue-500/20 transition-colors">
                                    <Twitter className="w-6 h-6" />
                                </a>
                                <a href="#" className="p-2 bg-[#0A0A29]/80 rounded-full text-gray-400 hover:text-white hover:bg-blue-500/20 transition-colors">
                                    <Facebook className="w-6 h-6" />
                                </a>
                                <a href="#" className="p-2 bg-[#0A0A29]/80 rounded-full text-gray-400 hover:text-white hover:bg-blue-500/20 transition-colors">
                                    <Linkedin className="w-6 h-6" />
                                </a>
                                <a href="#" className="p-2 bg-[#0A0A29]/80 rounded-full text-gray-400 hover:text-white hover:bg-blue-500/20 transition-colors">
                                    <Link2 className="w-6 h-6" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
} 