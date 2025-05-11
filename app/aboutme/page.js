"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image"; // Required for optimized images

export default function Aboutme() {
    const [isOpen, setIsOpen] = useState(false);


    return (
        <div className="flex flex-col min-h-screen font-sans bg-black text-white">
            <header className="bg-black text-white py-3">
                <div className="px-4 lg:px-8 mx-auto w-full max-w-4xl">
                    <div className="border-b relative flex h-16 items-center justify-between w-full">
                        <div className="flex items-center">
                            <Link href="/" className="flex items-center space-x-2 text-lg font-bold">
                                HARI
                            </Link>
                        </div>
                        <nav className="hidden md:flex space-x-4">
                            <Link href="/" className="inline-flex items-center text-sm font-medium h-10 px-4 py-2">Home</Link>
                            <Link href="/projects" className="inline-flex items-center text-sm font-medium h-10 px-4 py-2">Projects</Link>
                            <Link href="/aboutme" className="inline-flex items-center text-sm font-bold h-10 px-4 py-2">About Me</Link>
                            <Link href="/contact" className="inline-flex items-center text-sm font-medium h-10 px-4 py-2">Contact</Link>
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
                    I create games and applications, and I make them for free because I love sharing my passion with everyone.
                    Programming is my way of unleashing my creativity, letting ideas flow, and turning them into
                    something people can enjoy.
                    Each project is a unique journey where I experiment, innovate, and just have fun.
                    It’s about bringing joy to others while doing something I genuinely love.
                    So, if you’re curious, dive into my applications and games.
                    There’s always something exciting waiting for you!
                </p>
            </main>
        </div>
    );
}


