import Link from "next/link";
import { FaFilePdf } from 'react-icons/fa';


export default function Projects() {
    return (
        <div className="flex flex-col min-h-screen font-sans bg-black">
            {/* Header */}
            <header className="bg-black text-white sm:flex sm:justify-between py-3">
                <div className="px-4 lg:px-8 mx-auto w-full max-w-4xl">
                    <div className="border-b relative flex h-16 items-center justify-between w-full">

                        <div className="flex items-center">
                            <Link href="/" className="flex items-center space-x-6">
                                HARI
                            </Link>
                        </div>

                        <div className="flex items-center">
                            <nav className="flex items-center hidden md:block">
                                <Link href="/" className="inline-flex items-center justify-center text-sm font-medium h-10 px-4 py-2">
                                    Home
                                </Link>
                                <Link href="/projects" className="inline-flex items-center justify-center text-sm font-bold h-10 px-4 py-2">
                                    Projects
                                </Link>
                                <Link href="/aboutme" className="inline-flex items-center justify-center text-sm font-medium h-10 px-4 py-2">
                                    About Me
                                </Link>
                                <Link href="/contact"
                                      className="inline-flex items-center justify-center text-sm font-medium h-10 px-4 py-2">
                                    Contact
                                </Link>
                            </nav>
                        </div>

                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 flex flex-col items-center justify-start text-center px-4 py-10 space-y-6">


                <h1 className="text-3xl font-bold text-white mb-8">Projects</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
                    {/* project 1 */}
                    <a
                        href="https://harigamesdev.itch.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block bg-black rounded-2xl shadow-lg p-6 text-left transition-transform hover:scale-105 hover:shadow-xl outline outline-2 outline-white"
                    >
                        <h2 className="text-xl font-semibold text-[#5E8FB8] mb-2">MKH-GAMES</h2>
                        <p className="text-sm text-white">
                            This is a collection of games that I have developed, showcasing my creativity in games.
                        </p>
                    </a>

                    {/* project 2 */}
                    <a
                        href="https://start-up-szene-zh-vs-sv.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block bg-black rounded-2xl shadow-lg p-6 text-left transition-transform hover:scale-105 hover:shadow-xl outline outline-2 outline-white"
                    >
                        <h2 className="text-xl font-semibold text-[#5E8FB8] mb-2">PRWR-Facharbeit</h2>
                        <p className="text-sm text-white">
                            A group project about the differences between the start-up scenes in Zurich and Silicon
                            Valley.
                        </p>
                    </a>

                    {/* project 3 */}
                    <a
                        href="https://gamma-dashboard.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block bg-black rounded-2xl shadow-lg p-6 text-left transition-transform hover:scale-105 hover:shadow-xl outline outline-2 outline-white"
                    >
                        <h2 className="text-xl font-semibold text-[#5E8FB8] mb-2">PDF-Merger</h2>
                        <p className="text-sm text-white">
                            A Free PDF-Merger for everyone.
                        </p>
                    </a>

                    {/* project 4 */}
                    <a
                        href="https://github.com/Hari-42"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block bg-black rounded-2xl shadow-lg p-6 text-left transition-transform hover:scale-105 hover:shadow-xl outline outline-2 outline-white"
                    >
                        <h2 className="text-xl font-semibold text-[#5E8FB8] mb-2">other projects</h2>
                        <p className="text-sm text-white">
                            You can see my other projects on my Github.
                        </p>
                    </a>
                </div>

                <h1 className="text-3xl font-bold text-white mb-8">Certifications</h1>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
                    {/* certification 1 */}
                    <a
                        href="/B2_Cambridge.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-2xl bg-black/50 backdrop-blur-md shadow-lg p-4 transition-transform hover:scale-105 hover:shadow-2xl w-full text-white outline outline-2 outline-white"
                    >
                        <div
                            className="flex flex-col items-center justify-center bg-gradient-to-r from-blue-800 via-indigo-900 to-purple-900 rounded-xl py-6 mb-4 hover:opacity-90 transition-opacity">
                            <FaFilePdf className="text-white text-4xl mb-2"/>
                            <span className="bg-white/10 px-4 py-1 rounded-full text-sm">Click to view PDF</span>
                        </div>
                        <div className="px-1 text-center md:text-left ">
                            <h3 className="text-lg font-semibold">B2 - Cambridge</h3>
                            <p className="text-sm opacity-80">Cambridge English Qualification</p>
                            <p className="text-sm opacity-50">2022</p>
                        </div>
                    </a>

                    {/* certification 2 */}
                    <a
                        href="/DELF_B1.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-2xl bg-black/50 backdrop-blur-md shadow-lg p-4 transition-transform hover:scale-105 hover:shadow-2xl w-full text-white outline outline-2 outline-white"
                    >
                        <div
                            className="flex flex-col items-center justify-center bg-gradient-to-r from-emerald-700 via-green-800 to-teal-900 rounded-xl py-6 mb-4 hover:opacity-90 transition-opacity">
                            <FaFilePdf className="text-white text-4xl mb-2"/>
                            <span className="bg-white/10 px-4 py-1 rounded-full text-sm">Click to view PDF</span>
                        </div>
                        <div className="px-1 text-center md:text-left">
                            <h3 className="text-lg font-semibold">B1 - DELF</h3>
                            <p className="text-sm opacity-80">French Language Certification</p>
                            <p className="text-sm opacity-50">2025</p>
                        </div>
                    </a>
                </div>


            </main>
        </div>
    );
}
