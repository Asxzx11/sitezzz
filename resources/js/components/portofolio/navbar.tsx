import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const menus = [
    { title: "Home", href: "#home" },
    { title: "About", href: "#about" },
    { title: "Skills", href: "#skills" },
    { title: "Certificate", href: "#certificate" },
    { title: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [active, setActive] = useState("Home");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const closeMenu = (title: string) => {
        setActive(title);
        setIsMobileMenuOpen(false);
    };

    return (
        <motion.header
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="fixed top-0 left-0 z-50 w-full bg-slate-950/70 backdrop-blur-xl border-b border-white/10"
        >
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

                <h1 className="text-3xl font-black text-cyan-400 z-50 relative">
                    Agung<span className="text-white">.</span>
                </h1>

                {/* Desktop Menu */}
                <nav className="hidden lg:flex gap-10">
                    {menus.map((menu) => (
                        <motion.a
                            key={menu.title}
                            href={menu.href}
                            onClick={() => setActive(menu.title)}
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ type: "spring", stiffness: 220, damping: 18 }}
                            className={`transition ${
                                active === menu.title
                                    ? "text-cyan-400"
                                    : "text-gray-300 hover:text-cyan-400"
                            }`}
                        >
                            {menu.title}
                        </motion.a>
                    ))}
                </nav>

                <div className="hidden lg:block">
                    <motion.a
                        href="/cv/download"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center justify-center rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-white transition hover:bg-cyan-400"
                    >
                        Resume
                    </motion.a>
                </div>

                {/* Mobile Menu Toggle Button */}
                <button 
                    onClick={toggleMenu} 
                    className="lg:hidden text-white text-2xl z-50 relative p-2"
                >
                    {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                </button>

            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="absolute top-0 left-0 w-full h-screen bg-slate-950/95 backdrop-blur-3xl flex flex-col items-center justify-center gap-8 lg:hidden z-40"
                    >
                        {menus.map((menu) => (
                            <motion.a
                                key={menu.title}
                                href={menu.href}
                                onClick={() => closeMenu(menu.title)}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3 }}
                                className={`text-2xl font-semibold transition ${
                                    active === menu.title
                                        ? "text-cyan-400"
                                        : "text-gray-300 hover:text-white"
                                }`}
                            >
                                {menu.title}
                            </motion.a>
                        ))}
                        <motion.a
                            href="/cv/download"
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                            className="mt-4 flex items-center justify-center rounded-xl bg-cyan-500 px-8 py-3 text-lg font-bold text-white transition hover:bg-cyan-400"
                        >
                            Resume
                        </motion.a>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}