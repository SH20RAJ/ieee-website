import React from 'react'
import NavBar from '@/components/ui/landing/NavBar'
import Teams from '@/components/ui/landing/Teams'
import Footer from '@/components/ui/landing/Footer'

export default function TeamPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0A0A29] via-purple-900 to-pink-900">
            <div className="relative z-10">
                <NavBar />
                <Teams />
                <Footer />
            </div>

            {/* Gradient overlay */}
            <div className="fixed inset-0 bg-[#0A0A29]/40 backdrop-blur-[120px] -z-10" />
        </div>
    )
} 