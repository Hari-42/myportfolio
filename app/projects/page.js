import Link from "next/link";

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
                                <Link href="/aboutme" className="inline-flex items-center justify-center text-sm font-medium h-10 px-4 py-2">
                                    About Me
                                </Link>
                                <Link href="/projects" className="inline-flex items-center justify-center text-sm font-bold h-10 px-4 py-2">
                                    Projects
                                </Link>
                            </nav>
                        </div>

                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 flex flex-col items-center justify-start text-center px-4 py-10 space-y-6">
                <h1 className="text-3xl font-bold text-black mb-8">Projects</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
                    {/* project 1 */}
                    <a
                        href="https://harigamesdev.itch.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block bg-white rounded-2xl shadow-lg p-6 text-left transition-transform hover:scale-105 hover:shadow-xl"
                    >
                        <h2 className="text-xl font-semibold text-[#5E8FB8] mb-2">MKH-GAMES</h2>
                        <p className="text-sm text-gray-700">
                            This is a collection of games that I have developed, showcasing my creativity in games.
                        </p>
                    </a>

                    {/* project 2 */}
                    <a
                        href="https://start-up-szene-zh-vs-sv.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block bg-white rounded-2xl shadow-lg p-6 text-left transition-transform hover:scale-105 hover:shadow-xl"
                    >
                        <h2 className="text-xl font-semibold text-[#5E8FB8] mb-2">PRWR-Facharbeit</h2>
                        <p className="text-sm text-gray-700">
                            A group project about the differences between the start-up scenes in Zurich and Silicon Valley.
                        </p>
                    </a>

                    {/* project 3 */}
                    <a
                        href="https://gamma-dashboard.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block bg-white rounded-2xl shadow-lg p-6 text-left transition-transform hover:scale-105 hover:shadow-xl"
                    >
                        <h2 className="text-xl font-semibold text-[#5E8FB8] mb-2">PDF-Merger</h2>
                        <p className="text-sm text-gray-700">
                            A Free PDF-Merger for everyone. (still in works)
                        </p>
                    </a>

                    {/* project 4 */}
                    <a
                        href="https://github.com/Hari-42"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block bg-white rounded-2xl shadow-lg p-6 text-left transition-transform hover:scale-105 hover:shadow-xl"
                    >
                        <h2 className="text-xl font-semibold text-[#5E8FB8] mb-2">other projects</h2>
                        <p className="text-sm text-gray-700">
                            You can see my other projects on my Github.
                        </p>
                    </a>
                </div>
            </main>
        </div>
    );
}
