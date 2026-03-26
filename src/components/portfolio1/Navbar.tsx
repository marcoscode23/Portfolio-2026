import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
    { label: "Inicio", href: "#inicio" },
    { label: "Acerca de mi", href: "#acerca" },
    { label: "Habilidades", href: "#habilidades" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Contacto", href: "#contacto" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            {/* LOGO ARRIBA IZQUIERDA */}
            <motion.div
                animate={{ x: [ -15, 15, -15] }}
                transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                className="fixed top-6 left-6 z-50"
            >
                <img 
                    src="logo.png"
                    alt="Logo de Marcos"
                    className="w-32 md:w-36 aspect-square rounded-full object-cover border-2 neon-border hover:scale-110 transition"
                />
                
            </motion.div>

            {/* NAVBAR */}
            <header className="fixed top-6 left-0 right-0 z-40 flex justify-center px-4">
                <motion.nav
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="w-full max-w-fit bg-black/80 backdrop-blur-md neon-border rounded-full px-6 py-2 md:px-10 flex items-center justify-between gap-8"
                >
                    {/* Desktop Menu */}
                    <ul className="hidden md:flex items-center gap-6 lg:gap-10">
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <a
                                    href={item.href}
                                    className="text-[13px] font-medium text-gray-300 hover:text-blue-400 transition-colors duration-200"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-white hover:text-blue-400 transition"
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
                                className="absolute top-16 left-0 right-0 mx-auto min-w-[200px] bg-black border border-blue-400/30 rounded-2xl p-4 md:hidden"
                            >
                                <ul className="flex flex-col items-center gap-4">
                                    {navItems.map((item) => (
                                        <li key={item.label}>
                                            <a
                                                href={item.label}
                                                onClick={() => setIsOpen(prev => !prev)}
                                                className="text-sm font-medium text-gray-300 hover:text-blue-400 tracking-wide"
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
        </div>
    );
};

export default Navbar;