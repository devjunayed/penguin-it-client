"use client";
import React, { useState } from 'react';
import { navLinks } from './data';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Define animation variants for Framer Motion
    const menuVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <header className="fixed w-full z-10 bg-transparent backdrop-blur-md">
            <nav className="container mx-auto flex items-center justify-between p-4">
                <a href="#" className="text-white text-2xl font-semibold">Logo</a>
                <div className="hidden md:flex space-x-8">
                    {navLinks.map((link) => (
                        <motion.a
                            key={link.href}
                            href={link.href}
                            className="text-white hover:text-gray-300"
                            initial="hidden"
                            animate="visible"
                            variants={itemVariants}
                            transition={{ duration: 0.3 }}
                        >
                            {link.label}
                        </motion.a>
                    ))}
                </div>
                <div
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-white focus:outline-none"
                >
                    {isOpen ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    )}
                </div>
            </nav>
            
            {/* Mobile Menu with Animation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="md:hidden bg-transparent backdrop-blur-md p-4"
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={menuVariants}
                        transition={{ duration: 0.5 }}
                    >
                        {navLinks.map((link) => (
                            <motion.a
                                key={link.href}
                                href={link.href}
                                className="block text-white py-2 hover:text-gray-300"
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                variants={itemVariants}
                                transition={{ duration: 0.3 }}
                            >
                                {link.label}
                            </motion.a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navigation;
