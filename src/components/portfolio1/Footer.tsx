
const Footer = () => {
    return (
        <footer className="bg-primary border-t border-primary-foreground/10 py-8 px-6 md:px-12">
            <div className="max-w-6xl mx-auto flex flex-auto md:flex-row items-center justify-between gap-4">
                <p className="font-heading text-sm text-primary-foreground/40">
                    © {new Date().getFullYear()} Marcos Miño. Todos los derechos reservados. 
                </p>
            </div>
        </footer>
    )
}

export default Footer;