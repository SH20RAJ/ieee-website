import React from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const teamMembers = [
    {
        name: 'James Wilson',
        role: 'Executive Member',
        image: '/team/member1.jpg'
    },
    {
        name: 'James Wilson',
        role: 'Executive Member',
        image: '/team/member2.jpg'
    },
    {
        name: 'James Wilson',
        role: 'Executive Manager',
        image: '/team/member3.jpg'
    },
    {
        name: 'James Wilson',
        role: 'Executive',
        image: '/team/member4.jpg'
    },
    {
        name: 'James Wilson',
        role: 'Executive Member',
        image: '/team/member5.jpg'
    },
    {
        name: 'James Wilson',
        role: 'Executive Member',
        image: '/team/member6.jpg'
    },
    {
        name: 'James Wilson',
        role: 'Executive Member',
        image: '/team/member7.jpg'
    },
    {
        name: 'James Wilson',
        role: 'Executive Member',
        image: '/team/member8.jpg'
    }
]

export default function Teams() {
    return (
        <section className="py-16 px-4 md:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-white mb-4">Meet Our Team</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <button className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors">
                        Join the Team
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-xl bg-gradient-to-b from-blue-500/5 to-purple-500/5 border border-gray-800"
                        >
                            {/* Image Container */}
                            <div className="aspect-square overflow-hidden">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    width={300}
                                    height={300}
                                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>

                            {/* Content Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-col justify-end p-6">
                                <h3 className="text-white font-semibold text-lg">{member.name}</h3>
                                <p className="text-blue-400 text-sm">{member.role}</p>

                                {/* Social Icons */}
                                <div className="flex gap-2 mt-3">
                                    <div className="w-6 h-6 rounded-sm bg-white/10 backdrop-blur-sm" />
                                    <div className="w-6 h-6 rounded-sm bg-white/10 backdrop-blur-sm" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Alumni Section */}
                <div className="mt-24">
                    <h2 className="text-4xl font-bold text-white text-center mb-12">Alumni</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        <div className="group relative overflow-hidden rounded-xl bg-gradient-to-b from-blue-500/5 to-purple-500/5 border border-gray-800">
                            <div className="aspect-square overflow-hidden">
                                <Image
                                    src="/team/alumni1.jpg"
                                    alt="Mark Scout"
                                    width={300}
                                    height={300}
                                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-col justify-end p-6">
                                <h3 className="text-white font-semibold text-lg">Mark Scout</h3>
                                <p className="text-blue-400 text-sm">Member 2017</p>
                            </div>
                        </div>

                        <div className="group relative overflow-hidden rounded-xl bg-gradient-to-b from-blue-500/5 to-purple-500/5 border border-gray-800">
                            <div className="aspect-square overflow-hidden">
                                <Image
                                    src="/team/alumni2.jpg"
                                    alt="Helly R."
                                    width={300}
                                    height={300}
                                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-col justify-end p-6">
                                <h3 className="text-white font-semibold text-lg">Helly R.</h3>
                                <p className="text-blue-400 text-sm">Executive Member 2017</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
} 