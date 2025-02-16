import React from 'react'
import { Download } from 'lucide-react'

const workshopData = [
    {
        number: "1",
        title: "INTRODUCTION TO DATA SCIENCE",
        duration: "2 days",
        coursePlan: [
            {
                day: "Day 1",
                topics: "What is Data Science, Applications of Data Science, Python Libraries for Data Science, NumPy, Arrays, Standard Data Types, UPipes, Arguments, Broadcasting, Pandas, Series Object, DataFrame Object, Handling Missing Data, Time-GIS in Moving Data Conventions, Matplotlib, Pandas, Univariate and Bivariate Analysis, Format and Styling, Aggregation and Grouping, Matplotlib"
            },
            {
                day: "Day 2",
                topics: "Linear Regression with Boston Housing Price Dataset, Logistic Regression with Titanic Dataset"
            }
        ]
    },
    {
        number: "2",
        title: "C/C++ WORKSHOP",
        duration: "3 days",
        coursePlan: [
            {
                day: "Day 1",
                topics: "Brief history of C, Constants and Variables, Keywords, Data Types in C, Operators, Storage Class, Functions and Conditional statements"
            },
            {
                day: "Day 2",
                topics: "Looping Statements, Introduction to Arrays and Strings in C"
            },
            {
                day: "Day 3",
                topics: "Pointers in C and Transition from C to C++"
            }
        ]
    },
    {
        number: "3",
        title: "DATA STRUCTURES WORKSHOP",
        duration: "3 days",
        coursePlan: [
            {
                day: "Day 1",
                topics: "Introduction to Data Structures, Stacks, Queues, Linked Lists, Linked Stacks and Linked Queues"
            },
            {
                day: "Day 2",
                topics: "Trees, Binary Tree, Binary Tree Traversal, Binary Search Tree and Operations on BST"
            },
            {
                day: "Day 3",
                topics: "Introduction to Graphs, Terminologies, Representation of Graphs, BFS, DFS, Dijkstra's Algorithm, Weighted Graphs, Spanning Trees, Prim's and Kruskal's Algorithm"
            }
        ]
    }
]

export default function Workshops() {
    return (
        <section className="py-16 px-4 md:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-white mb-12">Workshops</h2>

                <div className="space-y-6">
                    {workshopData.map((workshop, index) => (
                        <div key={index} className="bg-[#0A0A29] rounded-xl p-6 border border-gray-800 relative overflow-hidden">
                            {/* Large Number */}
                            <div className="absolute -left-4 top-1/2 -translate-y-1/2 text-[200px] font-bold text-white/5">
                                {workshop.number}
                            </div>

                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-6">
                                    <h3 className="text-2xl font-semibold text-white">{workshop.title}</h3>
                                    <span className="text-blue-400 text-sm flex items-center gap-1">
                                        <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                                        Duration: {workshop.duration}
                                    </span>
                                </div>

                                <div className="mb-6">
                                    <h4 className="text-blue-400 mb-4">Course Planning</h4>
                                    <div className="space-y-4">
                                        {workshop.coursePlan.map((day, dayIndex) => (
                                            <div key={dayIndex}>
                                                <h5 className="text-white mb-2">{day.day}</h5>
                                                <p className="text-gray-400 text-sm">{day.topics}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <button className="flex-1 py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors">
                                        Join
                                    </button>
                                    <button className="flex-1 py-2 px-4 bg-transparent border border-gray-700 text-gray-300 hover:bg-gray-800 rounded-md transition-colors flex items-center justify-center gap-2">
                                        <Download className="w-4 h-4" />
                                        Download Resources
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
} 