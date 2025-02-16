import React from 'react'
import { CalendarDays } from 'lucide-react'

const eventData = [
    {
        title: "Mega Project",
        date: "Wednesday, January 29",
        status: "LIVE",
        registrations: "100+ registrations",
        timeRemaining: null,
        isLive: true
    },
    {
        title: "L.E.A.D",
        date: "Friday, February 16",
        status: "Upcoming",
        registrations: "100+ registrations",
        timeRemaining: "35d 2h remaining",
        isLive: false
    },
    {
        title: "Coding Weekender",
        date: "Wednesday, January 29",
        status: "Upcoming",
        registrations: "100+ registrations",
        timeRemaining: "18d 8h remaining",
        isLive: false
    }
]

export default function Events() {
    return (
        <section className="py-16 bg-transparent px-4 md:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-white mb-12">Events</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {eventData.map((event, index) => (
                        <div key={index} className="bg-[#0A0A29] rounded-xl p-6 border border-gray-800">
                            <div className="flex items-center gap-2 text-blue-400 mb-2">
                                <CalendarDays className="w-4 h-4" />
                                <span className="text-sm">{event.date}</span>
                            </div>

                            <h3 className="text-2xl font-semibold text-white mb-4">{event.title}</h3>

                            {event.isLive ? (
                                <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-900/30 text-green-400 text-sm mb-4">
                                    <span className="w-2 h-2 rounded-full bg-green-400 mr-2"></span>
                                    LIVE
                                </div>
                            ) : (
                                <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-900/30 text-blue-400 text-sm mb-4">
                                    {event.timeRemaining}
                                </div>
                            )}

                            <p className="text-gray-400 mb-6">
                                A symposium to encourage students to make projects that have the capability to change something
                            </p>

                            <div className="text-sm text-gray-400 mb-6">
                                {event.registrations}
                            </div>

                            <div className="space-y-3">
                                <button className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors">
                                    Register Now
                                </button>
                                <button className="w-full py-2 px-4 bg-transparent border border-gray-700 text-gray-300 hover:bg-gray-800 rounded-md transition-colors">
                                    Add to Calendar
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
