import './globals.css';


export const metadata = {
    title: "HARI-Portfolio",
    description: "Portfolio site of Hari, Software/Game Developer",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className="bg-white text-white">
        {children}
        {/* Footer */}
        <footer className="bg-black text-white pt-8 w-full">
            <div className="px-4 lg:px-8 mx-auto w-full max-w-7xl p-4">
                <hr className="my-6" />

                <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold">HARI</div>

                    <span className="text-sm">
        © 2025 HARI, All Rights Reserved.
      </span>

                    <div className="flex items-center space-x-4">
                        <a
                            href="https://github.com/Hari-42"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub Hari-42"
                            className="hover:text-blue-500 transition-colors duration-300"
                        >
                            <img
                                src="https://cdn.simpleicons.org/github/FFFFFF"
                                alt="GitHub"
                                className="w-6 h-6"
                            />
                        </a>
                        <a
                            href="https://harigamesdev.itch.io/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="itch.io"
                            className="hover:text-blue-500 transition-colors duration-300"
                        >
                            <img
                                src="https://cdn.simpleicons.org/itchdotio/FFFFFF"
                                alt="GitHub"
                                className="w-6 h-6"
                            />
                        </a>

                    </div>
                </div>
            </div>
        </footer>
        </body>
        </html>
    );
}
