import './globals.css';


export const metadata = {
    title: "HARI-Portfolio",
    description: "Portfolio site of Hari, Software/Game Developer",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body className="bg-white text-black">
        {children}
        {/* Footer */}
        <footer className="bg-[#5E8FB8] text-center py-8 w-full">
            <div className="mx-auto w-full max-w-screen-xl p-4">
                <hr className="my-6 border-black"/>
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
                <hr className="my-6 border-black" />
                <div className="flex items-center justify-center">
            <span className="text-sm text-gray-800">
              © 2025 MKH-GAMES All Rights Reserved.
            </span>
                </div>
            </div>
        </footer>
        </body>
        </html>
    );
}
