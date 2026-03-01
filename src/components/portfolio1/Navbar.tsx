import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";


const navItems = [
    { label: "Inicio", href: "#inicio" },
    { label: "Acerca de Mi", href: "#acerca" },
    { label: "Habilidades", href: "#habilidades" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Contacto", href: "#contacto" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : "bg-transparent"
        }`}
    >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
            <a href="#inicio" className="font-heading text-xl font-bold tex-foreground tracking-tight">
                Portfolio<span className="text-muted-foreground"></span>
            </a>
            
            {/* Desktop */}
            <ul className="hidden md:flex items-center gap-8">
                {navItems.map((item) => (
            <li key={item.href}>
            <a
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
                    {item.label}
                    </a>
                </li>
                ))}
            </ul>
            
            {/* Mobile toggle */}
            <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground"
            aria-label="Toggle menu"
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </div>
        {/* Mobile menu */}
    {isOpen && (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-background border-b border-border"
        >
            <ul className="flex flex-col items-center gap-4 py-6">
            {navItems.map((item) => (
                <li key={item.href}>
                <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                    {item.label}
                </a>
            </li>
            ))}
            </ul>
            </motion.div>
            )}
    </motion.nav>
    );
};
export default Navbar;
