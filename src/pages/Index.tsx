import Navbar from "@/components/portfolio1/Navbar";
import HeroSection from "@/components/portfolio1/HeroSection";
import AboutSection from "@/components/portfolio1/AboutSection";
import SkillsSection from "@/components/portfolio1/SkillsSection";
import ProjectsSection from "@/components/portfolio1/ProjectsSection";
import ContacSection from "@/components/portfolio1/ContacSection";
import Footer from "@/components/portfolio1/Footer";
import { Toaster } from "sonner";


const Index = () => {
    return (
        <div className="min-h-screen">
            <Navbar />
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ContacSection />
            <Footer />
            <Toaster />
            
            
            
            
            
        </div>
    );
};

export default Index;