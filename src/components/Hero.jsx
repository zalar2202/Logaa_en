"use client";

import ParticleBackground from "./ParticleBackground";

/**
 * Hero - Landing page hero section with particle background
 */
export default function Hero() {
    return (
        <section className="hero" id="hero">
            <ParticleBackground />
            <div className="hero-content animate-fade-in">
                <h1 className="hero-title">LOGA</h1>
                <div className="hero-tagline">
                    <span className="animate-fade-in-up delay-100">Design</span>
                    <span className="hero-dot">·</span>
                    <span className="animate-fade-in-up delay-200">Develop</span>
                    <span className="hero-dot">·</span>
                    <span className="animate-fade-in-up delay-300">Deploy</span>
                    <span className="hero-dot">·</span>
                    <span className="animate-fade-in-up delay-400">Maintain</span>
                </div>
                <p className="hero-description animate-fade-in-up delay-500">
                    Your end-to-end digital partner. We design, build, and grow your online presence
                    — from the first pixel to ongoing success.
                </p>
                <div className="hero-cta animate-fade-in-up delay-600">
                    <a href="#contact" className="loga-btn">
                        Let's Talk
                    </a>
                    <a href="#services" className="loga-alt-btn">
                        Explore Services
                    </a>
                </div>
            </div>
        </section>
    );
}
