"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.9,
            ease: [0.25, 0.8, 0.25, 1] // smoother cubic-bezier easing
        }
    },
};


const projects = [
    {
        title: "MKH-GAMES",
        description: "This is a collection of games that I have developed, showcasing my creativity in games.",
        image: "/mkhgames.jpg",
        links: [
            { label: "Homepage", href: "https://mkh-games.vercel.app/index.html" },
            { label: "Download Site", href: "https://harigamesdev.itch.io/" }
        ],
        tags: ["Unity", "C#", "Blender"]
    },
    {
        title: "PDF-Merger",
        description: "A free PDF merging tool available online.",
        image: "/pdf.jpg",
        links: [
            { label: "Website", href: "https://pdf-merger-hari-42.vercel.app/" },
            { label: "Source", href: "https://github.com/Hari-42/PDF-Merger" }
        ],
        tags: ["HTML", "Tailwind", "JavaScript"]
    },
    {
        title: "SUPER-FLEXAGON",
        description: "This is my first game I ever released.",
        image: "/superflex.png",
        links: [
            { label: "Download", href: "https://harigamesdev.itch.io/super-flexagon" }
        ],
        tags: ["Unity","C#"]
    },
    {
        title: "learning_pytest",
        description: "During my Python exams, we used Pytest for testing. That got me curious, so I decided to learn it. Around the same time, my brother was interested into learning code, so I started it as a learning project.",
        image: "/pytest.png",
        links: [
            { label: "Source", href: "https://github.com/Hari-42/learning_pytest" }
        ],
        tags: ["Python"]
    },
    {
        title: "experimentwiththreejs",
        description: "This is a playground for me to play and experiment around with three js.",
        image: "/threejs.png",
        links: [
            { label: "Website", href: "https://experimentwiththreejs.vercel.app/" },
            { label: "Source", href: "https://github.com/Hari-42/experimentwiththreejs" }
        ],
        tags: ["Next js","Threejs","Blender"]
    },
    {
        title: "Web-Music-Player",
        description: "It is a Music Player on web made with react. It was made as a group project with two friends of mine.",
        image: "/wmp.png",
        links: [
            { label: "Website", href: "https://music-player-inky.vercel.app/" },
            { label: "Source", href: "https://github.com/mattadosss/Music-Player" }
        ],
        tags: ["React","Tailwind","JavaScript"]
    },
    {
        title: "MEGA-SHOOTER",
        description: "This is a top-down shooter game. Which is designed like a aim trainer.",
        image: "/megashoot.png",
        links: [
            { label: "Download", href: "https://harigamesdev.itch.io/mega-shooter" }
        ],
        tags: ["Unity","C#"]
    },
    {
        title: "calculatorwithui",
        description: "I made a calculator with Python. I used tkinter, which is a python library, for the U.I",
        image: "/calc.png",
        links: [
            { label: "Source", href: "https://github.com/Hari-42/calculatorwithui" }
        ],
        tags: ["Python"]
    },
    {
        title: "PRWR-Facharbeit",
        description: "A group project about the differences between the start-up scenes in Zurich and Silicon Valley.",
        image: "/startup.jpg",
        links: [
            { label: "Website", href: "https://start-up-szene-zh-vs-sv.vercel.app/" },
            { label: "Source", href: "https://github.com/Hari-42/PRWR_Facharbeit" }
        ],
        tags: ["HTML", "Tailwind", "JavaScript", "CSS"]
    },
    {
        title: "AZTEROIDS",
        description: "Azteroids is a fixed-shooter, you have to shoot down the asteroids to get points.",
        image: "/azteroids.png",
        links: [
            { label: "Download", href: "https://harigamesdev.itch.io/azteroids" }
        ],
        tags: ["Unity","C#"]
    },
    {
        title: "URL-Shortener",
        description: "I made a URL-Shortener, which shortens long URLs. I have made one, only to know how it works. It doesn't work, because I don't own a server.",
        image: "/urlshorten.png",
        links: [
            { label: "Source", href: "https://github.com/Hari-42/URL_Shortener" }
        ],
        tags: ["HTML", "Tailwind", "Golang"]
    },
    {
        title: "stopwatch",
        description: "I made a stopwatch with Kotlin, to learn Kotlin.",
        image: "/stopwatch.png",
        links: [
            { label: "Source", href: "https://github.com/Hari-42/stopwatch" }
        ],
        tags: ["Kotlin"]
    },
    {
        title: "catchmeifyoucan",
        description: "A javascript short game ,where you can't click the button.",
        image: "/catchme.png",
        links: [
            { label: "Website", href: "https://catchmeifyoucan-one.vercel.app/" },
            { label: "Source", href: "https://github.com/Hari-42/catchmeifyoucan" }
        ],
        tags: ["HTML", "CSS", "JavaScript"]
    },
    {
        title: "Other Projects",
        description: "You can see my other projects on my GitHub.",
        image: "/github.jpg",
        links: [
            { label: "Github", href: "https://github.com/Hari-42" }
        ],
        tags: []
    }
];

export default function Projects() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeFilter, setActiveFilter] = useState("All");

    const allTags = Array.from(new Set(projects.flatMap(p => p.tags))).sort();

    const filteredProjects = activeFilter === "All"
        ? projects
        : projects.filter(project => project.tags.includes(activeFilter));

    return (
        <div className="flex flex-col min-h-screen font-sans bg-black text-white">
            {/* Header */}
            <header className="bg-black text-white py-3">
                <div className="px-4 lg:px-8 mx-auto w-full max-w-7xl">
                    <div className="border-b relative flex h-16 items-center justify-between w-full">
                        <div className="flex items-center">
                            <Link href="/" className="flex items-center space-x-2 text-2xl font-bold">HARI</Link>
                        </div>

                        <nav className="hidden md:flex space-x-4">
                            <Link href="/" className="inline-flex items-center text-lg font-medium h-10 px-4 py-2">Home</Link>
                            <Link href="/projects" className="inline-flex items-center text-lg font-bold h-10 px-4 py-2">Projects</Link>
                            <Link href="/aboutme" className="inline-flex items-center text-lg font-medium h-10 px-4 py-2">About Me</Link>
                            <Link href="/contact" className="inline-flex items-center text-lg font-medium h-10 px-4 py-2">Contact</Link>
                        </nav>

                        <div className="md:hidden flex items-center">
                            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {isOpen && (
                        <div className="md:hidden mt-2 space-y-2">
                            <Link href="/" className="block text-sm font-medium py-2">Home</Link>
                            <Link href="/projects" className="block text-sm font-bold py-2">Projects</Link>
                            <Link href="/aboutme" className="block text-sm font-medium py-2">About Me</Link>
                            <Link href="/contact" className="block text-sm font-medium py-2">Contact</Link>
                        </div>
                    )}
                </div>
            </header>

            {/* Main Content */}
            <main className="relative flex-1 flex flex-col items-center justify-start px-6 py-12">
                {/* Zinc Gradient Sides */}
                <div className="pointer-events-none absolute inset-0 z-0">
                    <div className="absolute top-0 left-0 right-0 h-128 bg-gradient-to-b from-zinc-800 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 h-128 bg-gradient-to-t from-zinc-800 to-transparent" />
                </div>

                <motion.h1
                    className="text-4xl font-bold text-center mb-6 z-10 relative"
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.6 }}
                >
                    Projects
                </motion.h1>

                {/* Dropdown Filter */}
                <div className="flex justify-end w-full max-w-6xl mb-10 z-10 relative">
                    <select
                        value={activeFilter}
                        onChange={(e) => setActiveFilter(e.target.value)}
                        className="bg-black text-white border border-white px-4 py-2 rounded-md"
                    >
                        <option value="All">All</option>
                        {allTags.map(tag => (
                            <option key={tag} value={tag}>{tag}</option>
                        ))}
                    </select>
                </div>

                {/* Filtered Projects */}
                {filteredProjects.map((project, idx) => (
                    <motion.div
                        key={idx}
                        className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center mb-16 max-w-6xl w-full gap-8 z-10 relative`}
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                    >
                        <Image src={project.image} alt={project.title} width={600} height={400} className="w-full md:w-1/2 rounded-xl shadow-lg" />
                        <div className="md:w-1/2">
                            <h2 className="text-2xl font-bold mb-2 text-center md:text-left text-[#5E8FB8]">{project.title}</h2>
                            <p className="text-lg leading-relaxed text-justify mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                                {project.links.map((link, linkIdx) => (
                                    <a key={linkIdx} href={link.href} target="_blank" rel="noopener noreferrer"
                                       className="bg-white text-black font-semibold px-4 py-2 rounded-lg hover:bg-gray-300 transition">{link.label}</a>
                                ))}
                            </div>
                            <div className="flex flex-wrap gap-2 mt-4 justify-center md:justify-start">
                                {project.tags.map((tag, tagIdx) => (
                                    <span key={tagIdx} className="bg-gray-800 text-white text-sm px-3 py-1 rounded-full">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}

                {filteredProjects.length === 0 && (
                    <p className="text-center text-gray-400 text-lg mt-8 z-10 relative">No projects match the selected filter.</p>
                )}
            </main>
        </div>
    );
}
