import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
    return (
        <section
            id="inicio"
            className="relative min-h-screen flex items-center justify-center section-padding bg-primary"
        >
            <div className="max-w-4x1 mx-auto text-center">
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
                    className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground leading-[0.95] mb-6"
                >
                    Software
                <br />
                <span className="text-primary-foreground/40">Developer</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-primary-foreground/60 font-body text-lg md:text-xl max-w-xl mx-auto mb-10"
                >
                    Construyo experiencias digitales únicas con pasión por el diseño y la tecnología.
                </motion.p>
                
                <motion.a
                    href="#acerca"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="inline-flex items-center gap-2 text-primary-foreground/50 hover:text-primary-foreground transition-colors text-sm tracking-widest uppercase"
                >
                    Descubre más
                    <ArrowDown size={16} className="animate-bounce" />
                </motion.a>
            </div>
            
            {/* Decorative grid */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
                <div className="w-full h-full" style={{
                    backgroundImage: "linear-gradient(hsl(0 0% 100%) 1px, transparent 1px)",
                    backgroundSize: "60px 60px"
                }} />
            </div>
        </section>
    );
};

export default HeroSection;