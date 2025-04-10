import { ArrowDownToLine, Github, ExternalLink, FileText, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showResume, setShowResume] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleViewResume = () => {
    setShowResume(true);
  };

  const handleCloseResume = () => {
    setShowResume(false);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center pt-16 pb-12 relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-950"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-40 left-10 w-72 h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full filter blur-3xl opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 flex flex-col items-center justify-center gap-10 mt-10 max-w-4xl">
        <div
          className={`w-full transition-all duration-700 delay-300 ${
            isLoaded ? "opacity-100" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-sm md:text-base text-primary font-medium mb-4 tracking-wide">
            Hello, I'm
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-4">
            Rohit Rathod
          </h1>
          <div className="mb-6">
            <h2 className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300 mb-2">
              Front-End Developer & AI Integration Specialist
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 max-w-xl leading-relaxed">
              Crafting seamless user experiences with modern front-end technologies 
              and building full-stack applications enhanced with AI capabilities.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mt-8">
            <Button 
              className="rounded-md" 
              onClick={handleViewResume}
            >
              View Resume <FileText className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              className="rounded-md"
              onClick={() => window.open("https://github.com/RohitRathod9", "_blank")}
            >
              GitHub <Github className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="secondary" 
              className="rounded-md"
              onClick={() => window.open("https://honored-brochure-4a4.notion.site/Rohit-Rathod-10c460bd15cf8009b76dda5fef3bb9a6?pvs=4", "_blank")}
            >
              Notion Portfolio <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="mt-16 hidden md:block">
            <a
              href="#about"
              className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
            >
              Scroll down <ArrowDownToLine className="h-4 w-4 animate-bounce" />
            </a>
          </div>
        </div>
      </div>

      {/* Resume Modal */}
      {showResume && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={handleCloseResume}>
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-white dark:bg-gray-900 p-4 border-b flex justify-between items-center">
              <h3 className="font-medium text-lg">Resume - Rohit Rathod</h3>
              <Button variant="ghost" size="icon" onClick={handleCloseResume} aria-label="Close resume">
                <span className="sr-only">Close</span>
                <X className="h-5 w-5" />
              </Button>
            </div>
            <div className="p-4">
              <img 
                src="/lovable-uploads/3696af5c-be18-4fbe-acfe-f1e750ef2eee.png" 
                alt="Rohit Rathod's Resume" 
                className="w-full h-auto" 
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
