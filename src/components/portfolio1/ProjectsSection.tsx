import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MoveRight } from "lucide-react";

type Icon = {
    src: string;
    alt: string;
};

type Project = {
    category: string;
    title: string;
    description: string;
    imgUrl: string;
    icons: Icon[];
    linkProject?: string;
};

const projects: Project[] = [
    {
        category: "Proyecto Personal",
        title:"PrototipoDelta",
        description: "El proyecto Deltastore es una plataforma web desarrollada con Reflex y Python, enfocada en la creación de una experiencia moderna, escalable y totalmente integrada. El siguiente cronograma detalla el proceso de desarrollo dividido en fases que abarcan desde la planificación inicial hasta el lanzamiento final, incluyendo las herramientas utilizadas para garantizar un flujo de trabajo eficiente y profesional.",
        imgUrl: "PrototipoDelta.png",
        icons: [
            { src:"https://raw.githubusercontent.com/devicons/devicon/670a611ad1c3e057ee385168d65c8ab27a7e1be5/icons/trello/trello-original.svg", alt: "Trello"},
            { src:"https://raw.githubusercontent.com/devicons/devicon/670a611ad1c3e057ee385168d65c8ab27a7e1be5/icons/python/python-original.svg", alt: "Python"},
            { src:"https://raw.githubusercontent.com/devicons/devicon/670a611ad1c3e057ee385168d65c8ab27a7e1be5/icons/reflex/reflex-original.svg", alt: "Reflex"},
            { src:"https://raw.githubusercontent.com/devicons/devicon/670a611ad1c3e057ee385168d65c8ab27a7e1be5/icons/css3/css3-original.svg", alt: "CSS"},
        ],
        linkProject: "https://deltastore-teal-wood.reflex.run/",
    },
];

const ProjectCard = ({
    project, 
    index, 
    isInView,
    reverse,
}: {
    project: Project;
    index: number;
    isInView: boolean;
    reverse:  boolean;
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 + index * 0.15 }}
            className={` relative flex flex-col ${
                reverse ? "md:flex-row-reverse" : "md:flex-row"
            } items-center justify-between gap-6 md:gap-8 p-6 min-h-[400px]`}
        >
            {/* Info side */}
            <div
                className={`relative md:h-[341px] md:max-w-lg z-10 mb-4 md:mb-0 text-center ${
                        reverse ? "md:text-right" : "md:text-left"
                    }` }
            >
                <h3 className="font-semibold text-sm text-blue-400">
                    {project.category}
                </h3>
                <h2 className="font-heading text-2xl md:text-3xl font-bold mb-2 text-foreground truncate">
                    {project.title}
                </h2>
                <div
                    className={`w-full flex gap-2 items-center justify-center ${
                        reverse ? "md:justify-end" : "md:justify-start"
                    }`}
                >
                    {project.icons.map((icon) => (
                        <div
                            key={icon.src}
                            className="icon-badge"
                        >
                            <img className="w-full h-full" 
                                src={icon.src} 
                                alt={icon.alt} 
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Image side */}
            <div
                className={`relative w-full md:w-[600px] h-[341px] rounded-xl overflow-hidden project-card group ${
                        reverse ? "hover:rotate-3" : "hover:rotate-3"
                    }`}
            >
                <a
                    href={project.linkProject}
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <img 
                        src={project.imgUrl}
                        alt={`Preview de ${project.title}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                    />
                    <div
                        className={`absolute top-3 ${
                            reverse ? "left-3" : "right-3"
                        } bg-foreground/60 text-background text-xs px-3 py-1 rounded-md opacity-80 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1`}
                    >
                        Ver proyecto
                        <MoveRight size={12}/>
                    </div>
                </a>
            </div>
            
            {/* Description overlay */}
            <div
                className={`relative w-full md:absolute md:top-1/3 ${
                    reverse ? "md:right-0" : "md:left-0"
                } md:max-w-[500px]
                    p-4 md:p-6 rounded-xl glass-card z-20 mt-4 md:mt-0 `} 
            >
                <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
                    {project.description}
                </p>
            </div>
        </motion.div>
    );
};

const ProjectsSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px"});
    return (
        <section id="proyectos" className="section-padding bg-background" ref={ref}>
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="mb-6"
                >
                    <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
                        Proyectos
                    </h2>
                </motion.div>
                
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : undefined}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="text-muted-foreground text-base md:text-lg leading-relaxed mb-20 max-w-4xl"
                >
                    Mis proyectos reflejan mi evolución como desarrollador. Desde experimentos técnicos hasta aplicaciones completas donde
                    puse en práctica conceptos de{" "}
                    <span className="animated-text-yellow">
                        diseño, performance y usabilidad
                    </span>
                    . Cada uno muestra una parte de mi proceso de aprendizaje y consolidación del stack.
                </motion.p>    
                
                <div className="space-y-24">
                    {projects.map((project, i) => (
                        <ProjectCard
                            key={project.title}
                            project={project}
                            index={i}
                            isInView={isInView}
                            reverse={i % 2 !== 0}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProjectsSection;