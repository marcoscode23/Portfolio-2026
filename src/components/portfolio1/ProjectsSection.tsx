import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";



const projects = [
    {
        title: "E-Commerce Platform",
        description: "Plataforma de comercio electrónico completa con carrito de compras, pagos y panel de administración.",
        tags: ["Python", "Reflex", "Django"],
        github: "https://github.com/marcoscode23/PrototipoDelta",
        demo: "https://deltastore-teal-wood.reflex.run/",
    }
]

const ProjectsSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px"});


    return (
        <section id="proyectos" className="section-padding bg-background" ref={ref}>
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {} }
                    transition={{ duration: 0.7}}
                >
                    <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
                        Proyectos
                    </p>
                    <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-16">
                        Mis Trabajos
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6">
                    {projects.map((project, i ) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            whileHover={{scale: 1.03, transition: {duration: 0.1} }}
                            className="group border border-border bg-white rounded-sm p-8 hover:bg-secondary transition-colors duration-300 hover-lift"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <h3 className="font-heading text-xl font-semibold text-foreground">
                                    {project.title}
                                </h3>
                                <div className="flex gap-3 text-muted-foreground">
                                    <a href={project.github} target="_black" rel="noopener noreferrer">
                                        <Github size={18} className="hover:text-foreground cursor-pointer transition-colors" />
                                    </a>
                                    <a href={project.demo} target=" _black" rel="noopener noreferrer">
                                        <ExternalLink size={18} className="hover:text-foreground cursor-pointer transition-colors" />
                                    </a>
                                </div>
                            </div>

                            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap bg-red gap-4">
                                {project.tags.map((tag) => (
                                    <span
                                    key={tag}
                                    className="text-xs font-medium px-3 py-1 bg-accent bg-muted text-accent-foreground rounded-full"
                                    
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}

                </div>

            </div>
        </section>
    )
}

export default ProjectsSection;