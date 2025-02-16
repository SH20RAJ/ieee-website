import React from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export default function AboutUs() {
    return (
        <section className="py-16 px-4 md:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-white mb-12">
                    <span className="text-blue-500">About</span> Us
                </h2>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Image Container */}
                    <div className="relative">
                        <div className="rounded-2xl overflow-hidden border-2 border-blue-500/20">
                            <Image
                                src="/team.jpg"
                                alt="IEEE Team"
                                width={600}
                                height={400}
                                className="w-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Content Container */}
                    <div className="space-y-6">
                        <h3 className="text-3xl text-cyan-400 font-semibold">Who are we?</h3>

                        <div className="space-y-4">
                            <h4 className="text-xl text-white">
                                At IEEE, we believe in disseminating what we know and learning what we don't
                            </h4>

                            <p className="text-gray-400">
                                Institute of Electrical and Electronics Engineers (IEEE) is a non-profit professional association headquartered in New York City is dedicated to advancing technological innovation. Founded on 1st January 1963, IEEE is the amalgamation of the American Institute of Electrical Engineers (AIEE) (the institute with prominent scientist members such as Thomas Alva Edison and Nikola Tesla) and Institute of Radio Engineers(IRE). IEEE is one of the leading standard making organization in the field of electrical, electronics, telecommunication and computing industry with over 1100 standards active standards.
                            </p>

                            <button className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors">
                                Meet our team
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
} 