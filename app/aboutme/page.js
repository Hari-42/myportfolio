import Link from "next/link";

export default function aboutme() {
    return (
        <div className="flex flex-col min-h-screen font-sans bg-[#5E8FB8]">
            <header className="bg-[#5E8FB8] text-black sm:flex sm:justify-between py-3">
                <div className="px-4 lg:px-8 mx-auto w-full max-w-4xl">
                    <div className="border-b relative flex h-16 items-center justify-between w-full">

                        <div className="flex items-center">
                            <a href="page.js" className="flex items-center space-x-6">
                                HARI
                            </a>
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
                <h1 className="text-2xl font-bold text-black leading-none">About Me</h1>
            </main>
        </div>
    );
}
