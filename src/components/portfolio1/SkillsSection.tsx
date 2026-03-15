import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const categories = [
    {
        title: "Frontend",
        skills: [
            { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"},
            { name: "CSS", icon: "https://raw.githubusercontent.com/devicons/devicon/670a611ad1c3e057ee385168d65c8ab27a7e1be5/icons/css3/css3-original.svg"},
            { name: "JavaScript", icon: "https://raw.githubusercontent.com/devicons/devicon/670a611ad1c3e057ee385168d65c8ab27a7e1be5/icons/javascript/javascript-original.svg"},
            { name: "TypeScript", icon: "https://raw.githubusercontent.com/devicons/devicon/670a611ad1c3e057ee385168d65c8ab27a7e1be5/icons/typescript/typescript-original.svg"},
            { name: "Tailwindcss", icon: "https://raw.githubusercontent.com/devicons/devicon/670a611ad1c3e057ee385168d65c8ab27a7e1be5/icons/tailwindcss/tailwindcss-original.svg"},
            { name: "React", icon: "https://raw.githubusercontent.com/devicons/devicon/670a611ad1c3e057ee385168d65c8ab27a7e1be5/icons/react/react-original.svg"},
            { name: "Reflex", icon: "https://raw.githubusercontent.com/devicons/devicon/670a611ad1c3e057ee385168d65c8ab27a7e1be5/icons/reflex/reflex-original.svg"},
        ],
    },
    {
        title: "Herramientas y Bases de Datos",
        skills: [
            { name: "Git", icon:"https://raw.githubusercontent.com/devicons/devicon/670a611ad1c3e057ee385168d65c8ab27a7e1be5/icons/git/git-original.svg"},
            { name: "Github", icon:"https://raw.githubusercontent.com/devicons/devicon/670a611ad1c3e057ee385168d65c8ab27a7e1be5/icons/github/github-original.svg"},
            { name: "SQlite", icon:"https://raw.githubusercontent.com/devicons/devicon/670a611ad1c3e057ee385168d65c8ab27a7e1be5/icons/sqlite/sqlite-original.svg"},
            { name: "PostgreSQL", icon:"https://raw.githubusercontent.com/devicons/devicon/670a611ad1c3e057ee385168d65c8ab27a7e1be5/icons/postgresql/postgresql-plain.svg"},
            { name: "Docker", icon:"https://raw.githubusercontent.com/devicons/devicon/670a611ad1c3e057ee385168d65c8ab27a7e1be5/icons/docker/docker-original.svg"},
            { name: "Trello", icon:"https://raw.githubusercontent.com/devicons/devicon/670a611ad1c3e057ee385168d65c8ab27a7e1be5/icons/trello/trello-original.svg"},
            
        ],
    },
    {
        title: "Testing / QA",
        skills: [
            { name: "Cypress", icon: "https://raw.githubusercontent.com/devicons/devicon/670a611ad1c3e057ee385168d65c8ab27a7e1be5/icons/cypressio/cypressio-plain.svg"}
        ]
    }
];

const SkillsSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px"});

    return (
        <section id="habilidades" className="section-padding bg-secondary" ref={ref}>
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
                        Habilidades
                    </p>
                    <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
                        Tecnologías
                    </h2>
                    <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-6" />
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        A lo largo de mi recorrido profesional fui incorporando herramientas y tecnología que hoy forman
                        parte de mi pila principal. las uso para desarrollar interfaces limpias, escalables y centradas en el usuario.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((category, catIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: catIndex * 0.15 }}
                            className="rounded-xl border border-border bg-card p-6"
                        >
                            <h3 className="font-heading text-lg font-semibold text-foreground text-center mb-6">
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap justify-center gap-4">
                                {category.skills.map((skill, i) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                        transition={{ duration: 0.3, delay: 0.3 + catIndex * 0.1 + i * 0.05 }}
                                        whileHover={{ scale: 1.15, backgroundColor: "hsl(215, 50%, 20%)", transition: {duration: 0.1} }}
                                        className="flex flex-col items-center gap-2 w-20 rounded-lg bg-background p-3 shadow-sm border border-border/50 cursor-auto"
                                    >
                                        <img
                                            src={skill.icon}
                                            alt={skill.name}
                                            loading="lazy"
                                        />
                                        <span className="text-xs font-medium text-foreground text-center leading-tight">
                                            {skill.name}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;