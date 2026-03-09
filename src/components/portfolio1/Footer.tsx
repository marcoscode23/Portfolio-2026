import { Github, Linkedin } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Social = {
    name: string
    url: string
    icon: LucideIcon
}

const socials: Social[] = [
    {
        name: "GitHub",
        url: "https://github.com/marcoscode23",
        icon: Github
    },
    {
        name: "GitHub",
        url: "https://www.linkedin.com/in/marcosjmi%C3%B1o/",
        icon: Linkedin
    }
]


const Footer = () => {
    return (
        <footer className="bg-primary border-t border-primary-foreground/10 py-8 px-6 md:px-12">
            <div className="max-w-6xl mx-auto flex flex-auto md:flex-row items-center justify-between gap-4">
                <p className="font-heading text-sm text-primary-foreground/40">
                    © {new Date().getFullYear()} Marcos Miño. Todos los derechos reservados. 
                </p>
                <div className="flex gap-6">
                    {socials.map((social) => {
                        const Icon = social.icon;
                        return (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_black"
                                rel="noopener noreferrer"
                                className="text-sm text-primary-foreground/40 hover:text-primary-foreground transition-colors"
                            >   
                                <Icon size={18} />
                                {social.name}
                            </a>
                        );
                    })}

                </div>
            </div>
        </footer>
    )
}

export default Footer;