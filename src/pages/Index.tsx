
import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import FrontendShowcase from "@/components/FrontendShowcase";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollObserver from "@/components/ScrollObserver";
import { ArrowUp } from "lucide-react";

const Index = () => {
  // Set the page title
  useEffect(() => {
    document.title = "Rohit Rathod - Front-End Developer & AI Integration Specialist";
    
    // Initialize scroll animations
    const addHiddenClass = () => {
      const elements = document.querySelectorAll(".animate-on-scroll");
      elements.forEach((el) => {
        el.classList.add("hidden-element");
      });
    };
    
    // Initialize back-to-top button
    const setupBackToTop = () => {
      const backToTopButton = document.createElement('button');
      backToTopButton.classList.add('back-to-top');
      backToTopButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>';
      backToTopButton.setAttribute('aria-label', 'Back to top');
      document.body.appendChild(backToTopButton);
      
      const toggleBackToTopButton = () => {
        if (window.scrollY > 300) {
          backToTopButton.classList.add('visible');
        } else {
          backToTopButton.classList.remove('visible');
        }
      };
      
      backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
      
      window.addEventListener('scroll', toggleBackToTopButton);
    };
    
    addHiddenClass();
    setupBackToTop();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <FrontendShowcase />
        <ContactSection />
      </main>
      <Footer />
      <ScrollObserver />
    </div>
  );
};

export default Index;
