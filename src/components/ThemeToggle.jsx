"use client";

import { useTheme } from "@/context/ThemeContext";

/**
 * ThemeToggle - Sun/Moon toggle button for switching between light and dark mode
 */
export default function ThemeToggle() {
    const { theme, setTheme, resolvedTheme, mounted } = useTheme();

    // Prevent hydration mismatch
    if (!mounted) {
        return (
            <button className="theme-toggle" aria-label="Toggle theme" disabled>
                <span className="theme-toggle-icon">◐</span>
            </button>
        );
    }

    const toggleTheme = () => {
        // Cycle through: system -> light -> dark -> system
        if (theme === "system") {
            setTheme("light");
        } else if (theme === "light") {
            setTheme("dark");
        } else {
            setTheme("system");
        }
    };

    const getIcon = () => {
        if (theme === "system") {
            return "◐"; // Half circle for system
        }
        return resolvedTheme === "dark" ? "☀" : "☾"; // Show opposite to indicate what clicking will do
    };

    const getLabel = () => {
        if (theme === "system") {
            return `System (${resolvedTheme})`;
        }
        return theme === "dark" ? "Dark mode" : "Light mode";
    };

    return (
        <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Current: ${getLabel()}. Click to change.`}
            title={getLabel()}
        >
            <span className="theme-toggle-icon">{getIcon()}</span>
        </button>
    );
}
