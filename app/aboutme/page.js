"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.9,
            ease: [0.25, 0.8, 0.25, 1],
        },
    },
};

export default function Aboutme() {
    const [isOpen, setIsOpen] = useState(false);

    const sections = [
        {
            title: "Playing Piano",
            img: "/piano.jpg",
            text: "Playing piano lets me express emotions I can't always put into words. It fuels my creativity.",
            type: "Hobby",
        },
        {
            title: "Fitness",
            img: "/fitness.jpg",
            text: "Fitness grounds me. It keeps me strong, focused, and helps balance my life.",
            type: "Hobby",
        },
        {
            title: "Game Development",
            img: "/superflexagon.png",
            text: "Game dev is my creative playground. SUPER-FLEXAGON was my first creation!",
            type: "Hobby",
        },
        {
            title: "Psychology & The Mind",
            img: "/psychology.jpg",
            text: "I'm fascinated by human behavior and thought. Psychology opens up new insights.",
            type: "Interest",
        },
        {
            title: "Filmmaking",
            img: "/filmmaking.jpg",
            text: "Storytelling through film allows me to guide emotion and narrative with visuals.",
            type: "Interest",
        },
        {
            title: "Astrophysics",
            img: "/astrophysics.jpg",
            text: "Exploring the universe reminds me how small we are, yet how much there is to learn.",
            type: "Interest",
        },
    ];

    function TiltCard({ item }) {
        const [rotateX, setRotateX] = useState(0);
        const [rotateY, setRotateY] = useState(0);

        const handleMouseMove = (e) => {
            const card = e.currentTarget;
            const rect = card.getBoundingClientRect();

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const offsetX = (x - centerX) / centerX;
            const offsetY = (y - centerY) / centerY;

            const maxRotate = 10;

            // Inverted tilt: card tilts toward mouse
            setRotateX(offsetY * maxRotate);
            setRotateY(-offsetX * maxRotate);
        };

        const handleMouseLeave = () => {
            setRotateX(0);
            setRotateY(0);
        };

        return (
            <motion.div
                className="bg-zinc-900 rounded-xl overflow-hidden shadow-lg transition-shadow duration-300"
                style={{ transformStyle: "preserve-3d" }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                animate={{
                    rotateX,
                    rotateY,
                    scale: rotateX || rotateY ? 1.05 : 1,
                    boxShadow:
                        rotateX || rotateY
                            ? "0 15px 25px rgba(255, 255, 255, 0.15), 0 10px 10px rgba(255, 255, 255, 0.1)"
                            : "0 5px 15px rgba(0,0,0,0.4)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
                <img src={item.img} alt={item.title} className="w-full h-48 object-cover" />
                <div className="p-5">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-300">{item.text}</p>
                    <span className="mt-4 inline-block text-sm text-gray-500 uppercase tracking-wide">
            {item.type}
          </span>
                </div>
            </motion.div>
        );
    }

    return (
        <div className="flex flex-col min-h-screen font-sans text-white bg-gradient-to-br from-zinc-900 via-black to-zinc-800">
            <header className="text-white py-3">
                <div className="px-4 lg:px-8 mx-auto w-full max-w-7xl">
                    <div className="border-b relative flex h-16 items-center justify-between w-full">
                        <div className="flex items-center">
                            <Link href="/" className="flex items-center space-x-2 text-2xl font-bold">
                                HARI
                            </Link>
                        </div>
                        <nav className="hidden md:flex space-x-4">
                            <Link href="/" className="inline-flex items-center text-lg font-medium h-10 px-4 py-2">
                                Home
                            </Link>
                            <Link href="/projects" className="inline-flex items-center text-lg font-medium h-10 px-4 py-2">
                                Projects
                            </Link>
                            <Link href="/aboutme" className="inline-flex items-center text-lg font-bold h-10 px-4 py-2">
                                About Me
                            </Link>
                            <Link href="/contact" className="inline-flex items-center text-lg font-medium h-10 px-4 py-2">
                                Contact
                            </Link>
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
                            <Link href="/" className="block text-sm font-medium py-2">
                                Home
                            </Link>
                            <Link href="/projects" className="block text-sm font-medium py-2">
                                Projects
                            </Link>
                            <Link href="/aboutme" className="block text-sm font-bold py-2">
                                About Me
                            </Link>
                            <Link href="/contact" className="block text-sm font-medium py-2">
                                Contact
                            </Link>
                        </div>
                    )}
                </div>
            </header>

            <main className="flex-grow">
                <section className="py-20 px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.h1
                            className="text-5xl font-bold mb-6"
                            initial="hidden"
                            animate="visible"
                            variants={fadeUp}
                            transition={{ duration: 0.6 }}
                        >
                            Hello, I’m Hari
                        </motion.h1>
                        <motion.p
                            className="text-xl max-w-2xl mx-auto leading-relaxed text-gray-300"
                            initial="hidden"
                            animate="visible"
                            variants={fadeUp}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            I create free games and apps out of pure passion. Programming is my creative way to express
                            myself, where ideas come to life and fun begins. Every project is a new adventure to explore,
                            experiment, and share joy with others. Check out my work, there’s always something exciting to
                            discover!
                        </motion.p>
                    </div>
                </section>

                {/* Cards Section */}
                <section className="py-20 px-6">
                    <div className="max-w-7xl mx-auto" style={{ perspective: 1200 }}>
                        <motion.h2
                            className="text-4xl font-bold text-center mb-12"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            transition={{ duration: 0.6 }}
                        >
                            Hobbies & Interests
                        </motion.h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                            {sections.map((item) => (
                                <TiltCard key={item.title} item={item} />
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <footer className="w-full text-white">
                <div className="px-4 lg:px-8 mx-auto w-full max-w-7xl p-4">
                    <hr className="my-6" />
                    <div className="flex items-center justify-between">
                        <div className="text-2xl font-bold">HARI</div>
                        <span className="text-sm">© 2025 HARI, All Rights Reserved.</span>
                        <div className="flex items-center space-x-4">
                            <a href="https://github.com/Hari-42" target="_blank" rel="noopener noreferrer">
                                <img src="https://cdn.simpleicons.org/github/FFFFFF" alt="GitHub" className="w-6 h-6" />
                            </a>
                            <a href="https://harigamesdev.itch.io/" target="_blank" rel="noopener noreferrer">
                                <img src="https://cdn.simpleicons.org/itchdotio/FFFFFF" alt="Itch.io" className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
