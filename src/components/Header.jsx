"use client";

import { useState, useEffect } from "react";

/**
 * Header - Navigation header with glassmorphism effect
 */
export default function Header() {
    const [activeSection, setActiveSection] = useState("hero");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { id: "hero", label: "Home" },
        { id: "about", label: "About" },
        { id: "services", label: "Services" },
        { id: "why-us", label: "Why Us" },
        { id: "process", label: "Process" },
        { id: "faq", label: "FAQ" },
        { id: "contact", label: "Contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map((item) => document.getElementById(item.id));
            const scrollPosition = window.scrollY + window.innerHeight / 3;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(navItems[i].id);
                    break;
                }
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setIsMenuOpen(false);
    };

    return (
        <header className="header">
            <nav className="navbar">
                <a className="navbar-brand" href="/">
                    LOGA
                </a>
                <button
                    className="mobile-menu-toggle"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <div className={`navbar-nav ${isMenuOpen ? "open" : ""}`}>
                    {navItems.map((item) => (
                        <a
                            key={item.id}
                            className={`nav-link ${activeSection === item.id ? "active" : ""}`}
                            href={`#${item.id}`}
                            onClick={(e) => handleNavClick(e, item.id)}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            </nav>
        </header>
    );
}
