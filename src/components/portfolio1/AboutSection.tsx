import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="acerca" className="section-padding bg-background" ref={ref} >
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                >
                    <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
                        Acerca de Mí
                    </p>
                    <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-12">
                        Quién soy
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 md:gap-20">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <div className="flex items-center justify-center h-full">
                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut"}}
                                className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl"
                            >
                                <img src="/fotoperfil.png" alt="Foto de perfil" className="w-full h-full object-cover" />

                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="flex flex-col justify-center"
                    >
                        <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">
                            Hola, soy Marcos
                        </h3>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            Contruyo interfaces rápidas, accesibles y escalables. Me
                            gusta trabajar con buenas prácticas, optimizaciones y un
                            diseño consistente. Siempre busco aportar soluciones claras
                            a problemas reales
                        </p>
                        <p className="text-muted-foreground leading-relaxed mb-8">
                            Cuando no estoy programando, me gusta explorar nuevas tendencias de diseño,
                            contribuir a proyectos open source y compartir conocimiento con la comunidad.
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            {[
                                { num: "1+", label: "Años de experiencia" },
                                { num: "2+", label: "Proyectos completados" },
                            ].map((stat) => (
                                <div key={stat.label} >
                                    <p className="font-heading text-3xl font-bold text-foreground">{stat.num}</p>
                                    <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
