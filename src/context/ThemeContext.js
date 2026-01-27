"use client";

import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext({
    theme: "system",
    setTheme: () => {},
    resolvedTheme: "light",
});

export function useTheme() {
    return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
    const [theme, setThemeState] = useState("system");
    const [resolvedTheme, setResolvedTheme] = useState("light");
    const [mounted, setMounted] = useState(false);

    // Get system preference
    const getSystemTheme = () => {
        if (typeof window !== "undefined") {
            return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        }
        return "light";
    };

    // Initialize theme from localStorage on mount
    useEffect(() => {
        const stored = localStorage.getItem("theme");
        if (stored && ["light", "dark", "system"].includes(stored)) {
            setThemeState(stored);
        }
        setMounted(true);
    }, []);

    // Apply theme to document and update resolvedTheme
    useEffect(() => {
        if (!mounted) return;

        const applyTheme = () => {
            const resolved = theme === "system" ? getSystemTheme() : theme;
            setResolvedTheme(resolved);

            // Apply to document
            document.documentElement.setAttribute("data-theme", resolved);

            // Store preference
            localStorage.setItem("theme", theme);
        };

        applyTheme();

        // Listen for system theme changes
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        const handleChange = () => {
            if (theme === "system") {
                applyTheme();
            }
        };

        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, [theme, mounted]);

    const setTheme = (newTheme) => {
        setThemeState(newTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, setTheme, resolvedTheme, mounted }}>
            {children}
        </ThemeContext.Provider>
    );
}
