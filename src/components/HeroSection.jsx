import React, { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const HeroSection = ({ scrollY, scrollToSection }) => {
    const [buttonOpacity, setButtonOpacity] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            const homeSection = document.getElementById("home");
            if (!homeSection) return;

            const rect = homeSection.getBoundingClientRect();

            // Calculate opacity based on scroll
            const scrolled = Math.min(Math.max(rect.top, -window.innerHeight), window.innerHeight);
            const progress = 1 - Math.abs(scrolled / window.innerHeight);

            setButtonOpacity(progress);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative overflow-hidden"
        >
            {/* Base Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/15 to-black"></div>

            {/* Floating Background Elements */}
            <div className="absolute inset-0">
                {/* Large floating circles */}
                <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-violet-500/5 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-violet-500/15 to-purple-500/10 rounded-full blur-lg animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-br from-blue-400/8 to-violet-600/12 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>

                {/* Medium floating elements */}
                <div className="absolute top-1/3 left-1/3 w-16 h-16 bg-blue-500/20 rounded-full animate-bounce" style={{ animationDuration: '3s', animationDelay: '0.5s' }}></div>
                <div className="absolute top-1/2 right-1/3 w-12 h-12 bg-violet-500/25 rounded-full animate-bounce" style={{ animationDuration: '4s', animationDelay: '1.5s' }}></div>
                <div className="absolute bottom-1/3 right-1/4 w-20 h-20 bg-purple-500/15 rounded-full animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '2.5s' }}></div>

                {/* Small floating dots */}
                <div className="absolute top-1/4 left-1/2 w-4 h-4 bg-blue-400/30 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute top-3/4 left-1/5 w-3 h-3 bg-violet-400/40 rounded-full animate-ping" style={{ animationDelay: '1.2s' }}></div>
                <div className="absolute top-1/6 right-1/6 w-5 h-5 bg-purple-400/35 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
                <div className="absolute bottom-1/4 left-3/4 w-4 h-4 bg-blue-300/25 rounded-full animate-ping" style={{ animationDelay: '2.8s' }}></div>

                {/* Geometric shapes */}
                <div className="absolute top-20 right-1/3 w-8 h-8 border-2 border-blue-400/20 rotate-45 animate-spin" style={{ animationDuration: '8s' }}></div>
                <div className="absolute bottom-20 left-1/3 w-6 h-6 border-2 border-violet-400/25 rotate-12 animate-spin" style={{ animationDuration: '6s', animationDirection: 'reverse' }}></div>

                {/* Gradient orbs with slow floating animation */}
                <div className="absolute top-1/2 left-20 w-24 h-24 bg-gradient-to-r from-blue-500/10 to-transparent rounded-full blur-sm"
                    style={{ animation: 'float 6s ease-in-out infinite' }}></div>
                <div className="absolute top-1/3 right-32 w-32 h-32 bg-gradient-to-l from-violet-500/8 to-transparent rounded-full blur-md"
                    style={{ animation: 'float 8s ease-in-out infinite 2s' }}></div>
                <div className="absolute bottom-1/4 left-1/2 w-20 h-20 bg-gradient-to-t from-purple-500/12 to-transparent rounded-full blur-lg"
                    style={{ animation: 'float 7s ease-in-out infinite 4s' }}></div>

                {/* Animated lines/bars */}
                <div className="absolute top-1/4 right-1/5 w-1 h-16 bg-gradient-to-b from-blue-400/30 to-transparent"
                    style={{ animation: 'fadeInOut 4s ease-in-out infinite' }}></div>
                <div className="absolute bottom-1/3 left-1/6 w-1 h-12 bg-gradient-to-t from-violet-400/25 to-transparent"
                    style={{ animation: 'fadeInOut 3s ease-in-out infinite 1s' }}></div>

                {/* Constellation-like connected dots */}
                <div className="absolute top-40 left-1/4 w-2 h-2 bg-blue-300/40 rounded-full"></div>
                <div className="absolute top-44 left-1/4 w-1 h-1 bg-blue-300/30 rounded-full ml-4"></div>
                <div className="absolute top-48 left-1/4 w-1.5 h-1.5 bg-blue-300/35 rounded-full ml-8"></div>

                {/* Large background blur effects */}
                <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-violet-600/8 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-purple-600/3 to-transparent rounded-full blur-2xl"></div>
            </div>

            <div
                className="relative z-10 text-center px-4"
                style={{ transform: `translateY(${scrollY * 0.5}px)` }}
            >
                <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in">
                    <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
                        Pravas Mohanty
                    </span>
                </h1>
                <p className="text-xl md:text-2xl text-blue-300 mb-8 animate-fade-in-delay">
                    Full Stack Developer & AI Enthusiast
                </p>

                <button
                    onClick={() => scrollToSection("about")}
                    style={{ opacity: buttonOpacity }}
                    className="group inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-violet-600 
             hover:from-blue-500 hover:to-violet-500 rounded-full 
             transition-all duration-300 ease-in-out 
             hover:scale-105 text-white shadow-lg shadow-blue-500/25 hover:shadow-violet-500/25"
                >
                    Explore My Work
                    <ChevronDown
                        className="ml-2 group-hover:translate-y-2 transition-all duration-300"
                        size={20}
                    />
                </button>
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) translateX(0px); }
                    33% { transform: translateY(-20px) translateX(10px); }
                    66% { transform: translateY(10px) translateX(-10px); }
                }
                
                @keyframes fadeInOut {
                    0%, 100% { opacity: 0.3; transform: scaleY(0.5); }
                    50% { opacity: 1; transform: scaleY(1); }
                }
                
                .bg-gradient-radial {
                    background: radial-gradient(circle, var(--tw-gradient-stops));
                }
            `}</style>
        </section>
    );
};

export default HeroSection;