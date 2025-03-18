import './globals.css';


export const metadata = {
    title: "HARI | Software & Game Developer",
    description: "Portfolio site of Hari, Software/Game Developer",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body className="bg-white text-black">
        {children}
        </body>
        </html>
    );
}
