import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Send, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import {toast} from "sonner";

const ContacSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
        await emailjs.send(
            "service_8bt25w4",
            "template_rzqo26p",
        {
            from_name: formData.name.trim(),
            from_email: formData.email.trim(),
            message: formData.message.trim(),
        },
        "bpW6evIyJWfWzD7FS"
    );
        toast.success("¡Mensaje enviado correctamente!");
        setFormData({ name: "", email: "", message: "" });
    } catch (err) {
        console.error(err);
        toast.error("Error al enviar el mensaje. Intenta de nuevo.");
    } finally {
        setIsSubmitting(false);
    }
};

    return (
        <section id="contacto" className="section-padding bg-primary" ref={ref}>
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : undefined }
                    transition={{ duration: 0.7 }}
                >
                    <p className="text-sm tracking-[0.3em] uppercase text-blue-400 mb-4">
                        Contacto
                    </p>
                    <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                        Hablemos
                    </h2>
                    <p className="animated-text-yellow text-lg mb-16 max-w-lg">
                        ¿Tienes un proyecto en mente? Me encantaria escuchar tu idea.
                    </p>
                </motion.div>
                
                <div className="grid md:grid-cols-5 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7,delay: 0.2 }}
                        className="md:col-span-2 space-y-8"
                    >
                        <div className="flex items-start gap-4">
                            <Mail size={20} className="text-primary-foreground/50 mt-1" />
                            <div>
                                <p className="text-sm text-primary-foreground/50 mb-1">Email</p>
                                <p className="text-primary-foreground/50 font-medium">marcoscode23@gmail.com</p>
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
                            className="w-full bg-transparent border-b border-primary-foreground/20 py-3 text-primary-foreground placeholder:text-primary-foreground/30 focus:border-primary-foreground/50 focus:outline-none transition-colors text-sm"
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
                            disabled={isSubmitting}
                            className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-8 py-3 text-sm font-heading font-medium tracking-wide hover:opacity-90 transition-opacity rounded-sm mt-4"
                        >
                            {isSubmitting ? (
                                <>
                                    Enviando...
                                    <Loader2 size={14} className="animate-spin"/>
                                </>
                            ) : (
                                <>
                                    Enviar mensaje
                                    <Send size={14} />
                                </>
                            )}
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};



export default ContacSection;