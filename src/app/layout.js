import "@/styles/globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";

// Body font - clean, modern sans-serif
const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    display: "swap",
});

// Heading font - elegant serif
const playFairDisplay = Playfair_Display({
    variable: "--font-playfair",
    subsets: ["latin"],
    display: "swap",
});

export const metadata = {
    title: {
        default: "Loga Tech",
        template: "%s | Loga Tech",
    },
    description: "Loga Tech - From Code to Cloud",
};

// Script to prevent flash of wrong theme (runs before React hydration)
const themeScript = `
(function() {
    try {
        var theme = localStorage.getItem('theme');
        var resolved = theme;
        
        if (!theme || theme === 'system') {
            resolved = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
        
        document.documentElement.setAttribute('data-theme', resolved);
    } catch (e) {}
})();
`;

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <script dangerouslySetInnerHTML={{ __html: themeScript }} />
            </head>
            <body
                className={`${inter.variable} ${playFairDisplay.variable} antialiased`}
                suppressHydrationWarning
            >
                <ThemeProvider>{children}</ThemeProvider>
            </body>
        </html>
    );
}
