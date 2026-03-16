import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
    { label: "Inicio", href: "#inicio" },
    { label: "Experiencia", href: "#acerca" },
    { label: "Tecnologías", href: "#habilidades" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Contacto", href: "#contacto" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* LOGO ARRIBA IZQUIERDA */}
            <motion.div
                initial={{ x: 80, opacity: 0 }}
                animate={{ x: [0, 12, 0, 12, 0], opacity: 1 }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="fixed top-6 left-6 z-50"
            >
                <img 
                    src="logo.png"
                    className="w-32 h-32 md:w-36 md:h-36 rounded-full object-cover border-2 border-lime-400 shadow-[0_0_15px_rgba(163,230,53,0.5)] hover:scale-110 transition"
                />
                
            </motion.div>

            {/* NAVBAR */}
            <header className="fixed top-6 left-0 right-0 z-40 flex justify-center px-4">
                <motion.nav
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="w-full max-w-fit bg-black/80 backdrop-blur-md border-2 border-lime-400/50 rounded-full px-6 py-2 md:px-10 flex items-center justify-between gap-8 shadow-[0_0_15px_rgba(163,230,53,0.2)]"
                >
                    {/* Desktop Menu */}
                    <ul className="hidden md:flex items-center gap-6 lg:gap-10">
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <a
                                    href={item.href}
                                    className="text-[13px] font-medium text-gray-300 hover:text-lime-400 transition-colors duration-200"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-white hover:text-lime-400 transition p-1"
                    >
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>

                    {/* Mobile Menu */}
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="absolute top-16 left-0 right-0 mx-auto min-w-[200px] w-fit bg-black border border-lime-400/30 rounded-2xl p-4 md:hidden"
                            >
                                <ul className="flex flex-col items-center gap-4">
                                    {navItems.map((item) => (
                                        <li key={item.href}>
                                            <a
                                                href={item.href}
                                                onClick={() => setIsOpen(false)}
                                                className="text-sm font-medium text-gray-300 hover:text-lime-400 tracking-wide"
                                            >
                                                {item.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.nav>
            </header>
        </>
    );
};

export default Navbar;