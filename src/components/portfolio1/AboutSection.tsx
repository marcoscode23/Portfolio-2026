import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Github, FileText } from "lucide-react";



const socialLinks = [
    { icon: Linkedin, href:"https://www.linkedin.com/in/marcosjmi%C3%B1o/", label: "Linkedin" },
    { icon: FileText, href:"/MarcosMiñoCV2026.pdf", label: "CV" },
    { icon: Github, href:"https://github.com/marcoscode23", label: "GitHub" },
];


export default function AboutSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true, margin:"-100px"});

    return (
        <section id="acerca" className="section-padding bg-background" ref={ref}>
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-[1fr_auto] gap-12 md:gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="flex flex-col justify-center"
                    >
                        <p className="text-sm tracking-[0.3em] uppercase mb-4">
                            Acerca de Mí
                        </p>
                        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-2">
                            
                            Hola, <span className="animated-text-yellow">soy Marcos</span>
                        </h2>
                        <p className="text-bold text-lg mb-6">
                            Developer FrontEnd
                        </p>
                        <p className="text-bold leading-relaxed mb-6 max-w-xl">
                                Construyo interfaces rápidas, accesibles y escalables. <span className="animated-text-yellow">Me gusta trabajar con buenas prácticas, optimización y un diseño.</span> Siempre busco aportar soluciones claras a problemas reales.
                        </p>

                        <div className="flex items-center gap-5">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target="_black"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-xl border border-foreground/20 flex items-center justify-center text-muted-foreground hover:text-blue-500 hover:border-blue-500 hover:scale-110 transition-all duration-300 ease-out hover:shadow-[0_0_15px_#60a5fa]"
                                    aria-label={link.label}
                                >
                                    <link.icon size={22} />
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Foto de Perfil */}
                    <motion.div
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 "
                    >
                        <img
                            className="rounded-full h-full object-cover p-[3px] animated-border"
                            src="fotoperfil.jpeg"
                            alt="Foto de perfil"
                        >
                        </img>

                    </motion.div>
                </div>
            </div>
        </section>
    )
}

