import Navbar from "../components/portfolio1/Navbar";
import HeroSection from "../components/portfolio1/HeroSection";
import AboutSection from "../components/portfolio1/AboutSection";
import ProjectsSection from "../components/portfolio1/ProjectsSection";

const Index = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            
            
        </div>
    );
};

export default Index;