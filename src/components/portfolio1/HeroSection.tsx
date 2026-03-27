import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
    return (
        <section
        id="inicio"
        className="relative min-h-screen flex items-center justify-center section-padding bg-primary"
        >
            <div className="max-w-4xl mx-auto text-center">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-primary-foreground/60 font-body text-sm tracking-[0.3em] uppercase mb-6"
                >
                    Bienvenido a mi portfolio
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.7 }}
                    className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground leading-[0.95] md-6"
                >
                    Frontend
                    <br />
                    <span className="animated-text-yellow">Developer</span>
                </motion.h1>

                <motion.a
                    href="#acerca"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="inline-flex items-center gap-2 text-primary-foreground/50 hover:text-blue-400 transition-colors text-sm tracking-widest uppercase"
                >
                    Descubre más
                    <ArrowDown size={16} className="arrow-bounce opacity-60" />
                </motion.a>
            </div>

            {/* Decorative grid */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
                <div className="w-full h-full grid-background"/>
            </div>
        </section>
    );
};

export default HeroSection;