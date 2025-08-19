import React from 'react'
import { Menu, X } from 'lucide-react';

const Navigation = ({ isMenuOpen, setIsMenuOpen, scrollToSection }) => {
    return (
        <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-blue-900/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                        Portfolio
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item.toLowerCase())}
                                className="text-blue-200 hover:text-violet-300 transition-colors duration-300 relative group"
                            >
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-violet-500 group-hover:w-full transition-all duration-300"></span>
                            </button>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-blue-300 hover:text-violet-300 transition-colors duration-300"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden bg-black/95 transition-all duration-300 ${isMenuOpen ? 'max-h-64' : 'max-h-0 overflow-hidden'}`}>
                <div className="px-4 py-2 space-y-2">
                    {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                        <button
                            key={item}
                            onClick={() => {
                                scrollToSection(item.toLowerCase());
                                setIsMenuOpen(false);
                            }}
                            className="block w-full text-left py-2 text-blue-200 hover:text-violet-300 transition-colors duration-300"
                        >
                            {item}
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navigation