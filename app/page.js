export default function Home() {
    return (
        <div className="flex flex-col min-h-screen font-sans bg-white">
            {/* Header */}
            <header className="py-3 border-b bg-white w-full">
                <div className="flex items-center justify-between">
                    <a className="inline-flex items-center justify-center text-xl font-bold h-10 px-4 py-2 text-black">
                        HARI
                    </a>
                    <div className="px-4 lg:px-8 mx-auto w-full max-w-4xl">
                        <div className="relative flex h-16 items-center justify-between w-full">
                            <nav className="flex items-center space-x-4 ml-auto">
                                <a className="inline-flex items-center justify-center text-sm font-medium h-10 px-4 py-2 text-black hover:font-semibold">Home</a>
                                <a className="inline-flex items-center justify-center text-sm font-medium h-10 px-4 py-2 text-black hover:font-semibold">About Me</a>
                                <a className="inline-flex items-center justify-center text-sm font-medium h-10 px-4 py-2 text-black hover:font-semibold">Projects</a>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 flex flex-col items-center justify-center text-center">
                <h1 className="text-[12rem] font-bold text-black leading-none">HARI</h1>
                <h2 className="text-xl md:text-3xl font-bold text-black mt-4">
                    SOFTWARE / GAME DEVELOPER
                </h2>
            </main>

            {/* Footer */}
            <footer className="bg-white text-center py-8 w-full">
                <div className="mx-auto w-full max-w-screen-xl p-4">
                    <hr className="my-6 border-gray-300"/>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-left">
                        <div>
                            <span className="text-2xl font-bold text-black">HARI</span>
                        </div>

                        <div>
                            <h2 className="mb-4 text-2xl font-bold text-black">Resources</h2>
                            <ul className="text-gray-800 font-medium">
                                <li className="mb-2">
                                    <a
                                        href="https://tailwindcss.com/"
                                        className="hover:text-blue-500 transition-colors duration-300"
                                    >
                                        Tailwind CSS
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="mb-4 text-2xl font-bold text-black">Socials</h2>
                            <ul className="text-gray-800 font-medium">
                                <li className="mb-2">
                                    <a
                                        href="https://discord.gg/mjNcZFHnf5"
                                        className="hover:text-blue-500 transition-colors duration-300"
                                    >
                                        Discord - Community Server
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a
                                        href="https://github.com/Hari-42"
                                        className="hover:text-blue-500 transition-colors duration-300"
                                    >
                                        Github - Hari-42
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a
                                        href="https://mkh-games.vercel.app/"
                                        className="hover:text-blue-500 transition-colors duration-300"
                                    >
                                        Games - MKH-GAMES
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr className="my-6 border-gray-300" />
                    <div className="flex items-center justify-center">
            <span className="text-sm text-gray-800">
              © 2025 MKH-GAMES All Rights Reserved.
            </span>
                    </div>
                </div>
            </footer>
        </div>
    );
}
