"use client";

import Link from 'next/link';
import { useState } from "react";
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

export default function Home() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex flex-col min-h-screen font-sans bg-black">
            {/* Header */}
            <header className="bg-black text-white py-3">
                <div className="px-4 lg:px-8 mx-auto w-full max-w-7xl">
                    <div className="border-b relative flex h-16 items-center justify-between w-full">
                        <div className="flex items-center">
                            <Link href="/" className="flex items-center space-x-2 text-2xl font-bold">
                                HARI
                            </Link>
                        </div>

                        {/* Desktop Nav */}
                        <nav className="hidden md:flex space-x-4">
                            <Link href="/" className="inline-flex items-center text-lg font-bold h-10 px-4 py-2">Home</Link>
                            <Link href="/projects" className="inline-flex items-center text-lg font-medium h-10 px-4 py-2">Projects</Link>
                            <Link href="/aboutme" className="inline-flex items-center text-lg font-medium h-10 px-4 py-2">About Me</Link>
                            <Link href="/contact" className="inline-flex items-center text-lg font-medium h-10 px-4 py-2">Contact</Link>
                        </nav>

                        {/* Mobile menu button */}
                        <div className="md:hidden flex items-center">
                            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    {isOpen && (
                        <div className="md:hidden mt-2 space-y-2">
                            <Link href="/" className="block text-sm font-bold py-2">Home</Link>
                            <Link href="/projects" className="block text-sm font-medium py-2">Projects</Link>
                            <Link href="/aboutme" className="block text-sm font-medium py-2">About Me</Link>
                            <Link href="/contact" className="block text-sm font-medium py-2">Contact</Link>
                        </div>
                    )}
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 flex items-center justify-center text-white px-8 bg-gradient-to-br from-zinc-800 via-black to-zinc-800">
            <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    transition={{ duration: 0.6 }}
                >
                    {/* Left side - Text */}
                    <motion.div
                        className="flex flex-col justify-center space-y-4"
                        variants={fadeUp}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <h1 className="text-6xl md:text-8xl font-bold leading-none">Hello, I&#39;m Hari</h1>
                        <p className="text-xl md:text-2xl">I&#39;m a game/software developer.</p>
                    </motion.div>

                    {/* Right side - Picture placeholder */}
                    <motion.div
                        className="flex items-center justify-center"
                        variants={fadeUp}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="w-64 h-64 bg-gray-300 rounded-2xl flex items-center justify-center text-gray-700 text-xl">
                            Picture Placeholder
                        </div>
                    </motion.div>
                </motion.div>
            </main>
        </div>
    );
}
