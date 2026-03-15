import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Send } from "lucide-react";

const ContacSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin:"-100px" });
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("¡Mensaje enviado! (Demo)");
        setFormData({name: "", email: "", message: "" });
    };

    return (
        <section id="contacto" className="section-padding bg-primary" ref={ref}>
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                >
                    <p className="text-sm tracking-[0.3] uppercase text-primary-foreground/50 mb-4">
                        Contacto
                    </p>
                    <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                        Hablemos
                    </h2>
                    <p className="text-primary-foreground/60 text-lg mb-16 max-w-lg">
                        ¿Tienes un proyecto en mente? Me encantaria escuchar tu idea.
                    </p>
                </motion.div>
                
                <div className="grid md:grid-cols-5 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7,delay: 0.2 }}
                        className="md:coll-span-2 space-y-8"
                    >
                        <div className="flex items-start gap-4">
                            <Mail size={20} className="text-primary-foreground/50 mt-1" />
                            <div>
                                <p className="text-sm text-primary-foreground/50 mb-1">Ubicación</p>
                                <p className="text-primary-foreground/50 font-medium">Corrientes, Argentina</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.form
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7,delay: 0.3 }}
                        className="md:col-span-3 space-y-5"
                    >
                        <input
                            type="text"
                            placeholder="Tu nombre"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full bg-transparent border-b border-primary-foreground/20 py-3 text-primary-foreground placeholder:text-primary-foreground/30 focus:border-primary-foreground/60 focus:outline-none transition-colors text-sm"
                        />
                        <input
                            type="text"
                            placeholder="Tu email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full bg-transparent border-b border-primary-foreground/20 py-3 text-primary-foreground placeholder:text-primary-foreground/30 focus:border-primary-foreground/60 focus:outline-none transition-colors text-sm"
                        />
                        <textarea
                            placeholder="Tu mensaje"
                            rows={3}
                            required
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            className="w-full bg-transparent border-b border-primary-foreground/20 py-3 text-primary-foreground placeholder:text-primary-foreground/30 focus:border-primary-foreground/60 focus:outline-none transition-colors resize-none text-sm"
                        />
                        <button
                            type="submit"
                            className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-8 py-3 text-sm font-heading font-medium tracking-wide hover:opacity-90 transition-opacity rounded-sm mt-4"
                        >
                            Enviar mensaje
                            <Send size={14} />
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};



export default ContacSection;