"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Projects() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex flex-col min-h-screen font-sans bg-black text-white">
            {/* Header */}
            <header className="bg-black text-white py-3">
                <div className="px-4 lg:px-8 mx-auto w-full max-w-4xl">
                    <div className="border-b relative flex h-16 items-center justify-between w-full">
                        <div className="flex items-center">
                            <Link href="/" className="flex items-center space-x-2 text-lg font-bold">HARI</Link>
                        </div>

                        {/* Desktop Nav */}
                        <nav className="hidden md:flex space-x-4">
                            <Link href="/" className="inline-flex items-center text-sm font-medium h-10 px-4 py-2">Home</Link>
                            <Link href="/projects" className="inline-flex items-center text-sm font-bold h-10 px-4 py-2">Projects</Link>
                            <Link href="/aboutme" className="inline-flex items-center text-sm font-medium h-10 px-4 py-2">About Me</Link>
                            <Link href="/contact" className="inline-flex items-center text-sm font-medium h-10 px-4 py-2">Contact</Link>
                        </nav>

                        {/* Mobile menu button */}
                        <div className="md:hidden flex items-center">
                            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
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
            <main className="flex-1 flex flex-col items-center justify-start px-6 py-12">
                <h1 className="text-4xl font-bold text-center mb-10">Projects</h1>

                {/* Project 1 */}
                <div className="flex flex-col md:flex-row items-center mb-16 max-w-6xl w-full gap-8">
                    <Image src="/mkhgames.jpg" alt="MKH Games" width={600} height={400} className="w-full md:w-1/2 rounded-xl shadow-lg" />
                    <div className="md:w-1/2">
                        <h2 className="text-2xl font-bold mb-2 text-center md:text-left text-[#5E8FB8]">MKH-GAMES</h2>
                        <p className="text-lg leading-relaxed text-justify mb-4">
                            This is a collection of games that I have developed, showcasing my creativity in games.
                        </p>
                        {/* Buttons */}
                        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                            <a href="https://mkh-games.vercel.app/index.html" target="_blank" rel="noopener noreferrer"
                               className="bg-white text-black font-semibold px-4 py-2 rounded-lg hover:bg-gray-300 transition">Homepage</a>
                            <a href="https://harigamesdev.itch.io/" target="_blank" rel="noopener noreferrer"
                               className="bg-white text-black font-semibold px-4 py-2 rounded-lg hover:bg-gray-300 transition">Download Site</a>
                        </div>
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mt-4 justify-center md:justify-start">
                            <span className="bg-gray-800 text-white text-sm px-3 py-1 rounded-full">Unity</span>
                            <span className="bg-gray-800 text-white text-sm px-3 py-1 rounded-full">C#</span>
                            <span className="bg-gray-800 text-white text-sm px-3 py-1 rounded-full">Blender</span>
                        </div>
                    </div>
                </div>

                {/* Project 2 */}
                <div className="flex flex-col md:flex-row-reverse items-center mb-16 max-w-6xl w-full gap-8">
                    <Image src="/startup.jpg" alt="Startup Project" width={600} height={400} className="w-full md:w-1/2 rounded-xl shadow-lg" />
                    <div className="md:w-1/2">
                        <h2 className="text-2xl font-bold mb-2 text-center md:text-left text-[#5E8FB8]">PRWR-Facharbeit</h2>
                        <p className="text-lg leading-relaxed text-justify mb-4">
                            A group project about the differences between the start-up scenes in Zurich and Silicon Valley.
                        </p>
                        {/* Buttons */}
                        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                            <a href="https://start-up-szene-zh-vs-sv.vercel.app/" target="_blank" rel="noopener noreferrer"
                               className="bg-white text-black font-semibold px-4 py-2 rounded-lg hover:bg-gray-300 transition">Website</a>
                            <a href="https://github.com/Hari-42/PRWR_Facharbeit" target="_blank" rel="noopener noreferrer"
                               className="bg-white text-black font-semibold px-4 py-2 rounded-lg hover:bg-gray-300 transition">Source</a>
                        </div>
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mt-4 justify-center md:justify-start">
                            <span className="bg-gray-800 text-white text-sm px-3 py-1 rounded-full">HTML</span>
                            <span className="bg-gray-800 text-white text-sm px-3 py-1 rounded-full">Tailwind/CSS</span>
                            <span className="bg-gray-800 text-white text-sm px-3 py-1 rounded-full">Jacascript</span>
                        </div>
                    </div>
                </div>

                {/* Project 3 */}
                <div className="flex flex-col md:flex-row items-center mb-16 max-w-6xl w-full gap-8">
                    <Image src="/pdf.jpg" alt="PDF Merger" width={600} height={400} className="w-full md:w-1/2 rounded-xl shadow-lg" />
                    <div className="md:w-1/2">
                        <h2 className="text-2xl font-bold mb-2 text-center md:text-left text-[#5E8FB8]">PDF-Merger</h2>
                        <p className="text-lg leading-relaxed text-justify mb-4">
                            A free PDF merging tool available online.
                        </p>
                        {/* Buttons */}
                        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                            <a href="https://pdf-merger-hari-42.vercel.app/" target="_blank" rel="noopener noreferrer"
                               className="bg-white text-black font-semibold px-4 py-2 rounded-lg hover:bg-gray-300 transition">Website</a>
                            <a href="https://github.com/Hari-42/PDF-Merger" target="_blank" rel="noopener noreferrer"
                               className="bg-white text-black font-semibold px-4 py-2 rounded-lg hover:bg-gray-300 transition">Source</a>
                        </div>
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mt-4 justify-center md:justify-start">
                            <span className="bg-gray-800 text-white text-sm px-3 py-1 rounded-full">HTML</span>
                            <span className="bg-gray-800 text-white text-sm px-3 py-1 rounded-full">Tailwind</span>
                            <span className="bg-gray-800 text-white text-sm px-3 py-1 rounded-full">Jacascript</span>
                        </div>
                    </div>
                </div>

                {/* Project 4 */}
                <div className="flex flex-col md:flex-row-reverse items-center mb-16 max-w-6xl w-full gap-8">
                    <Image src="/github.jpg" alt="GitHub Projects" width={600} height={400} className="w-full md:w-1/2 rounded-xl shadow-lg" />
                    <div className="md:w-1/2">
                        <h2 className="text-2xl font-bold mb-2 text-center md:text-left text-[#5E8FB8]">Other Projects</h2>
                        <p className="text-lg leading-relaxed text-justify mb-4">
                            You can see my other projects on my GitHub.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                            <a href="https://github.com/Hari-42" target="_blank" rel="noopener noreferrer"
                               className="bg-white text-black font-semibold px-4 py-2 rounded-lg hover:bg-gray-300 transition">Github</a>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    );
}
