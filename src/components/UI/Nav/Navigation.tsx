"use client"
import React, { useState } from 'react';
import { navLinks } from './data';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed w-full z-10 bg-transparent backdrop-blur-md">
            <nav className="container mx-auto flex items-center justify-between p-4">
                {/* Logo */}
                <a href="#" className="text-white text-2xl font-semibold">Logo</a>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8">
                    {navLinks.map((link) => (
                        <a key={link.href} href={link.href} className="text-white hover:text-gray-300">
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-white focus:outline-none"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </nav>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-transparent backdrop-blur-md p-4">
                    {navLinks.map((link) => (
                        <a key={link.href} href={link.href} className="block text-white py-2 hover:text-gray-300">
                            {link.label}
                        </a>
                    ))}
                </div>
            )}
        </header>
    );
};

export default Navigation;
