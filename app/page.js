import Link from 'next/link';

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen font-sans bg-black">
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
                                <Link href="/"
                                      className="inline-flex items-center justify-center text-sm font-bold h-10 px-4 py-2">Home</Link>
                                <Link href="/aboutme"
                                      className="inline-flex items-center justify-center text-sm font-medium h-10 px-4 py-2">
                                    About Me
                                </Link>
                                <Link href="/projects"
                                      className="inline-flex items-center justify-center text-sm font-medium h-10 px-4 py-2">
                                    Projects
                                </Link>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 flex flex-col items-center justify-center text-center">
                <h1 className="text-[12rem] font-bold text-white leading-none">HARI</h1>
                <h2 className="text-xl md:text-3xl font-bold text-white mt-4 pb-8">
                    SOFTWARE / GAME DEVELOPER
                </h2>

                {/* Skills Section */}
                <section className="max-w-4xl w-full px-4 text-left">
                    {/* Centered "My Skills" title within a widget */}
                    <div className=" text-white text-xl font-semibold py-3 rounded-lg mb-6 mx-auto w-full max-w-sm text-center">
                        Languages & Tools I&apos;ve worked with
                    </div>

                    <div className="space-y-6">
                        {/* Programming Languages Section */}
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h4 className="text-lg font-medium text-black mb-2">Programming Languages</h4>
                            <div className="space-y-2">
                                <div>
                                    <span className="font-medium text-black">HTML & CSS</span>
                                    <div className="w-full bg-gray-300 rounded-full h-2">
                                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                                    </div>
                                </div>
                                <div>
                                    <span className="font-medium text-black">Python</span>
                                    <div className="w-full bg-gray-300 rounded-full h-2">
                                        <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                                    </div>
                                </div>
                                <div>
                                    <span className="font-medium text-black">C#</span>
                                    <div className="w-full bg-gray-300 rounded-full h-2">
                                        <div className="bg-purple-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                                    </div>
                                </div>
                                <div>
                                    <span className="font-medium text-black">Java</span>
                                    <div className="w-full bg-gray-300 rounded-full h-2">
                                        <div className="bg-red-500 h-2 rounded-full" style={{ width: '70%' }}></div>
                                    </div>
                                </div>
                                <div>
                                    <span className="font-medium text-black">Reactjs/Nextjs</span>
                                    <div className="w-full bg-gray-300 rounded-full h-2">
                                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tools & Technologies */}
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h4 className="text-lg font-medium text-black mb-2">Tools & Technologies</h4>
                            <div className="space-y-2">
                                <div>
                                    <span className="font-medium text-black">Unity</span>
                                    <div className="w-full bg-gray-300 rounded-full h-2">
                                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                                    </div>
                                </div>
                                <div>
                                    <span className="font-medium text-black">Blender</span>
                                    <div className="w-full bg-gray-300 rounded-full h-2">
                                        <div className="bg-green-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                                    </div>
                                </div>
                                <div>
                                    <span className="font-medium text-black">MongoDB</span>
                                    <div className="w-full bg-gray-300 rounded-full h-2">
                                        <div className="bg-teal-500 h-2 rounded-full" style={{ width: '70%' }}></div>
                                    </div>
                                </div>
                                <div>
                                    <span className="font-medium text-black">MySQL</span>
                                    <div className="w-full bg-gray-300 rounded-full h-2">
                                        <div className="bg-purple-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                                    </div>
                                </div>
                                <div>
                                    <span className="font-medium text-black">TailwindCSS</span>
                                    <div className="w-full bg-gray-300 rounded-full h-2">
                                        <div className="bg-teal-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
