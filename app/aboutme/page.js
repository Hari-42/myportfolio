"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image"; // Required for optimized images

export default function Aboutme() {
    const [isOpen, setIsOpen] = useState(false);


    return (
        <div className="flex flex-col min-h-screen font-sans bg-black text-white">
            <header className="bg-black text-white py-3">
                <div className="px-4 lg:px-8 mx-auto w-full max-w-7xl pb-2">
                    <div className="border-b relative flex h-16 items-center justify-between w-full">
                        <div className="flex items-center">
                            <Link href="/" className="flex items-center space-x-2 text-2xl font-bold">
                                HARI
                            </Link>
                        </div>
                        <nav className="hidden md:flex space-x-4">
                            <Link href="/" className="inline-flex items-center text-lg font-medium h-10 px-4 py-2">Home</Link>
                            <Link href="/projects" className="inline-flex items-center text-lg font-medium h-10 px-4 py-2">Projects</Link>
                            <Link href="/aboutme" className="inline-flex items-center text-lg font-bold h-10 px-4 py-2">About Me</Link>
                            <Link href="/contact" className="inline-flex items-center text-lg font-medium h-10 px-4 py-2">Contact</Link>
                        </nav>
                        <div className="md:hidden flex items-center">
                            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    {isOpen && (
                        <div className="md:hidden mt-2 space-y-2">
                            <Link href="/" className="block text-sm font-medium py-2">Home</Link>
                            <Link href="/projects" className="block text-sm font-medium py-2">Projects</Link>
                            <Link href="/aboutme" className="block text-sm font-bold py-2">About Me</Link>
                            <Link href="/contact" className="block text-sm font-medium py-2">Contact</Link>
                        </div>
                    )}
                </div>
            </header>

            <main className="flex-1 flex flex-col  px-6 py-12 items-center">
                <h1 className="text-4xl font-bold text-center mb-10">About Me</h1>

                <p className="text-lg leading-relaxed mb-6 max-w-3xl mx-auto text-center text-white block text-justify">
                    Hi, My name is Hari!
                    I create games and applications, and I make them for free because I love sharing my passion with
                    everyone.
                    Programming is my way of unleashing my creativity, letting ideas flow, and turning them into
                    something people can enjoy.
                    Each project is a unique journey where I experiment, innovate, and just have fun.
                    It’s about bringing joy to others while doing something I genuinely love.
                    So, if you’re curious, dive into my applications and games.
                    There’s always something exciting waiting for you!
                </p>

                {/* Hobbies */}
                <h1 className="text-4xl font-bold text-center mb-10 pt-20">Hobbies</h1>

                {/* Piano Playing */}
                <div className="flex flex-col md:flex-row items-center mb-16 max-w-6xl w-full gap-8 text-white">
                    <img
                        src="/piano.jpg"
                        alt="playing piano"
                        className="w-full md:w-1/2 rounded-xl shadow-lg"
                    />
                    <div className="md:w-1/2">
                        <h2 className="text-2xl font-bold mb-2 text-center md:text-left">Playing piano</h2>
                        <p className="text-lg leading-relaxed text-justify">
                            Playing piano lets me express emotions I can&#39;t always put into words. Whether it&#39;s classical melodies or spontaneous improvisations,
                            every session is a new emotional journey. It helps me reset my mind, focus better, and fuels my creativity in other
                            parts of life like programming. There&#39;s something incredibly satisfying about building harmony from silence.
                        </p>
                    </div>
                </div>

                {/* Fitness */}
                <div className="flex flex-col md:flex-row-reverse items-center mb-16 max-w-6xl w-full gap-8 text-white">
                    <img
                        src="/fitness.jpg"
                        alt="Fitness"
                        className="w-full md:w-1/2 rounded-xl shadow-lg"
                    />
                    <div className="md:w-1/2">
                        <h2 className="text-2xl font-bold mb-2 text-center md:text-left">Fitness</h2>
                        <p className="text-lg leading-relaxed text-justify">
                            Fitness is my anchor, it grounds me, strengthens me, and keeps me energized. While lifting weights, every rep is a reminder of growth and discipline.
                            It&#39;s not just about physical strength, but also mental clarity and emotional resilience. The consistency of fitness
                            carries over into my projects, making me more focused and persistent. It&#39;s my way of staying sharp and balanced.
                        </p>
                    </div>
                </div>

                {/* Game Development */}
                <div className="flex flex-col md:flex-row items-center mb-16 max-w-6xl w-full gap-8 text-white">
                    <img
                        src="/superflexagon.png"
                        alt="Game Development"
                        className="w-full md:w-1/2 rounded-xl shadow-lg"
                    />
                    <div className="md:w-1/2">
                        <h2 className="text-2xl font-bold mb-2 text-center md:text-left">Game Development</h2>
                        <p className="text-lg leading-relaxed text-justify">
                            Game development is a way to express my creativity, just like designing levels, storytelling and code into an immersive experience.
                            It challenges every part of my brain, from logical thinking to artistic vision. I love creating worlds that players
                            can explore, shaping mechanics that are fun and intuitive, and watching ideas evolve into interactive adventures.
                            Every bug fixed and every level completed is a tiny victory. It’s more than a hobby, it&#39;s a passion that lets me
                            build joy for others. This is a picture is from my game, it is called SUPER-FLEXAGON. It&#39;s my first game.
                        </p>
                    </div>
                </div>


                {/* Interests */}
                <h1 className="text-4xl font-bold text-center mb-10 pt-20">Interests</h1>

                {/* Psychology */}
                <div className="flex flex-col md:flex-row items-center mb-16 max-w-6xl w-full gap-8 text-white">
                    <img
                        src="/psychology.jpg"
                        alt="Psychology"
                        className="w-full md:w-1/2 rounded-xl shadow-lg"
                    />
                    <div className="md:w-1/2">
                        <h2 className="text-2xl font-bold mb-2 text-center md:text-left">Psychology & The Human Mind</h2>
                        <p className="text-lg leading-relaxed text-justify">
                            I’m fascinated by how the human mind works, how we think, feel, and make decisions. Exploring cognitive patterns, emotions, and behaviors opens
                            up a deeper understanding of ourselves and others. The complexity of the brain and the subtle intricacies of human psychology are
                            both humbling and inspiring. It&#39;s a field that constantly reminds me of how magnificent and mysterious the mind truly is.
                        </p>
                    </div>
                </div>

                {/* Filmmaking */}
                <div className="flex flex-col md:flex-row-reverse items-center mb-16 max-w-6xl w-full gap-8 text-white">
                    <img
                        src="/filmmaking.jpg"
                        alt="Filmmaking"
                        className="w-full md:w-1/2 rounded-xl shadow-lg"
                    />
                    <div className="md:w-1/2">
                        <h2 className="text-2xl font-bold mb-2 text-center md:text-left">Filmmaking & Storytelling</h2>
                        <p className="text-lg leading-relaxed text-justify">
                            Filmmaking excites me because it&#39;s a perfect blend of art and technology. Whether it&#39;s visual effects, editing, or storytelling, each part contributes
                            to building immersive and emotional narratives. I love how every frame, sound, and transition can be used to guide the viewer’s experience.
                            It&#39;s a powerful way to connect with others and bring stories to life.
                        </p>
                    </div>
                </div>

                {/* Astrophysics */}
                <div className="flex flex-col md:flex-row items-center mb-16 max-w-6xl w-full gap-8 text-white">
                    <img
                        src="/astrophysics.jpg"
                        alt="Astrophysics"
                        className="w-full md:w-1/2 rounded-xl shadow-lg"
                    />
                    <div className="md:w-1/2">
                        <h2 className="text-2xl font-bold mb-2 text-center md:text-left">Astrophysics & The Universe</h2>
                        <p className="text-lg leading-relaxed text-justify">
                            The universe is vast and full of mysteries, and astrophysics is my way of exploring those. I&#39;m endlessly curious about stars, black holes,
                            galaxies, and the laws that govern everything. Thinking about space and our place in the cosmos sparks both awe and wonder in me.
                            It’s a subject that constantly reminds me how little we know and how much more there is to learn.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}


