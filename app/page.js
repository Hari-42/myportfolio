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
            <main className="flex-1 flex items-center justify-center text-white px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
                    {/* left side - Text */}
                    <div className="flex flex-col justify-center space-y-4">
                        <h1 className="text-6xl md:text-8xl font-bold leading-none">Hello, I&#39;m Hari</h1>
                        <p className="text-xl md:text-2xl">I&#39;m a game/software developer.</p>
                    </div>

                    {/* right side - picture placeholder */}
                    <div className="flex items-center justify-center">
                        <div
                            className="w-64 h-64 bg-gray-300 rounded-2xl flex items-center justify-center text-gray-700 text-xl">
                            Picture Placeholder
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
