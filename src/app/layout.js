import "@/styles/globals.css";
import { Geist, Geist_Mono, Playfair_Display, Playfair } from "next/font/google";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const playFair = Playfair({
    variable: "--font-playFair",
    subsets: ["latin"],
});

const playFairDisplay = Playfair_Display({
    variable: "--font-playFair-display",
    subsets: ["latin"],
});

export const metadata = {
    title: {
        default: "Logaa",
        template: "%s | Logaa",
    },
    description: "Logaa Smart Solutions",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${playFair.variable} ${playFairDisplay.variable} antialiased`}
                suppressHydrationWarning
            >
                {children}
            </body>
        </html>
    );
}
