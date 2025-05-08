"use client";

import Link from "next/link";
import { useState } from "react";

export default function Contact() {
    const [isOpen, setIsOpen] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    return (
        <div className="flex flex-col min-h-screen font-sans bg-black text-white">
            {/* Header */}
            <header className="bg-black text-white py-3">
                <div className="px-4 lg:px-8 mx-auto w-full max-w-4xl">
                    <div className="border-b relative flex h-16 items-center justify-between w-full">
                        <Link href="/" className="flex items-center space-x-2 text-lg font-bold">
                            HARI
                        </Link>

                        <nav className="hidden md:flex space-x-4">
                            <Link href="/" className="inline-flex items-center text-sm font-medium h-10 px-4 py-2">Home</Link>
                            <Link href="/projects" className="inline-flex items-center text-sm font-medium h-10 px-4 py-2">Projects</Link>
                            <Link href="/aboutme" className="inline-flex items-center text-sm font-medium h-10 px-4 py-2">About Me</Link>
                            <Link href="/contact" className="inline-flex items-center text-sm font-bold h-10 px-4 py-2">Contact</Link>
                        </nav>

                        <div className="md:hidden flex items-center">
                            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M4 6h16M4 12h16M4 18h16"/>
                                </svg>
                            </button>
                        </div>
                    </div>

                    {isOpen && (
                        <div className="md:hidden mt-2 space-y-2">
                            <Link href="/" className="block text-sm font-medium py-2">Home</Link>
                            <Link href="/projects" className="block text-sm font-medium py-2">Projects</Link>
                            <Link href="/aboutme" className="block text-sm font-medium py-2">About Me</Link>
                            <Link href="/contact" className="block text-sm font-bold py-2">Contact</Link>
                        </div>
                    )}
                </div>
            </header>

            {/* Contact Section */}
            <main className="flex-1 flex justify-center items-center px-4 py-10">
                <div className="flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-lg w-full max-w-4xl">
                    {/* Info Panel */}
                    <div className="bg-black text-white p-6 md:p-10 md:w-1/2">
                        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
                        <p className="mb-6">Feel free to reach out for collaborations, questions, or just to say hi 👋</p>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-center gap-2">
                                🖥️ Github Hari-42
                            </li>
                            <li className="flex items-center gap-2">
                                📍 Zurich, CH
                            </li>
                        </ul>
                    </div>

                    {/* Form Panel */}
                    <div className="bg-black text-white p-6 md:p-10 md:w-1/2 border border-white rounded-lg">
                        {!submitted ? (
                            <form
                                action="https://formspree.io/f/xgvkyqzn"
                                method="POST"
                                onSubmit={() => setSubmitted(true)}
                                className="space-y-4"
                            >
                                <div>
                                    <label className="block text-sm font-medium mb-1">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        className="w-full px-4 py-2 border rounded"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        className="w-full px-4 py-2 border rounded"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Message</label>
                                    <textarea
                                        name="message"
                                        rows={4}
                                        required
                                        className="w-full px-4 py-2 border rounded"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="bg-black text-white px-4 py-2 hover:bg-blue-900 border border-white rounded-lg"
                                >
                                    Send Message
                                </button>
                            </form>
                        ) : (
                            <p className="text-white">Thanks! Looking forward to connecting with you soon!</p>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}
