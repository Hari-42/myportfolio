"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

export default function Contact() {
    const [isOpen, setIsOpen] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const form = new FormData(e.target);

        const data = {
            name: form.get('name'),
            email: form.get('email'),
            message: form.get('message'),
        };

        try {
            const response = await fetch("https://formspree.io/f/xgvkyqzn", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setSubmitted(true);
            } else {
                setError("Something went wrong, please try again.");
            }
        } catch (err) {
            setError("Error submitting form. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col min-h-screen font-sans bg-black text-white">
            {/* Header */}
            <header className="bg-black text-white py-3">
                <div className="px-4 lg:px-8 mx-auto w-full max-w-7xl pb-2">
                    <div className="border-b relative flex h-16 items-center justify-between w-full">
                        <Link href="/" className="flex items-center space-x-2 text-2xl font-bold">
                            HARI
                        </Link>

                        <nav className="hidden md:flex space-x-4">
                            <Link href="/" className="inline-flex items-center text-lg font-medium h-10 px-4 py-2">Home</Link>
                            <Link href="/projects" className="inline-flex items-center text-lg font-medium h-10 px-4 py-2">Projects</Link>
                            <Link href="/aboutme" className="inline-flex items-center text-lg font-medium h-10 px-4 py-2">About Me</Link>
                            <Link href="/contact" className="inline-flex items-center text-lg font-bold h-10 px-4 py-2">Contact</Link>
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
                            <Link href="/aboutme" className="block text-sm font-medium py-2">About Me</Link>
                            <Link href="/contact" className="block text-sm font-bold py-2">Contact</Link>
                        </div>
                    )}
                </div>
            </header>

            {/* Contact Section */}
            <main className="flex-1 flex justify-center items-center px-4 py-10">
                <motion.div
                    className="flex flex-col md:flex-row overflow-hidden shadow-lg w-full max-w-4xl"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    variants={fadeUp}
                >
                    {/* Info Panel */}
                    <motion.div
                        className="bg-black text-white p-6 md:p-10 md:w-1/2"
                        variants={fadeUp}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
                        <p className="mb-6">Feel free to reach out for collaborations, questions, or just to say hi 👋</p>
                        <p className="text-red-500 mb-6">Note: use your real mail, so I can write you back</p>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-center gap-2">
                                🖥️ Github Hari-42
                            </li>
                            <li className="flex items-center gap-2">
                                📍 Switzerland
                            </li>
                        </ul>
                    </motion.div>

                    {/* Form Panel */}
                    <motion.div
                        className="bg-black text-white p-6 md:p-10 md:w-1/2 border-2 border-white rounded-lg"
                        variants={fadeUp}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {!submitted ? (
                            <form onSubmit={handleSubmit} className="space-y-4">
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
                                    disabled={loading}
                                >
                                    {loading ? "Sending..." : "Send Message"}
                                </button>
                                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                            </form>
                        ) : (
                            <p className="text-white">Thanks! Looking forward to connecting with you soon!</p>
                        )}
                    </motion.div>
                </motion.div>
            </main>
        </div>
    );
}
