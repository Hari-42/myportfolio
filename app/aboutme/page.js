import Link from "next/link";

export default function aboutme() {
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
                                      className="inline-flex items-center justify-center text-sm font-medium h-10 px-4 py-2">Home</Link>
                                <Link href="/aboutme"
                                      className="inline-flex items-center justify-center text-sm font-bold h-10 px-4 py-2">
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
                <h1 className="text-2xl font-bold text-white leading-none">About Me</h1>
                <p className="text-lg leading-relaxed mb-6 max-w-6xl mx-auto text-center text-white block text-justify">
                    Hi, My name is Hari!
                    I create games, and I make them for free because I love sharing my passion with everyone.
                    Making games is my way of unleashing my creativity, letting ideas flow, and turning them into
                    something people can enjoy.
                    Each game is a unique journey where I experiment, innovate, and just have fun.
                    It’s about bringing joy to others while doing something I genuinely love.
                    So, if you’re curious, dive into my world of free games.
                    There’s always something exciting waiting for you!
                </p>
            </main>
        </div>
    );
}
