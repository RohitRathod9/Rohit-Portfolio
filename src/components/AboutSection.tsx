import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById("about");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2
          className={`text-3xl md:text-4xl font-bold font-display text-center mb-12 ${
            isVisible ? "animate-fade-in" : "opacity-0"
          }`}
        >
          About <span className="text-primary">Me</span>
        </h2>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div
            className={`w-full ${
              isVisible ? "animate-fade-in-right" : "opacity-0"
            } delay-100`}
          >
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-center md:text-left">
              A passionate developer and designer
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 text-center md:text-left">
              I'm a full stack developer with expertise in the MERN stack and a 
              keen eye for UI/UX design. With a background in both frontend and 
              backend development, I create seamless digital experiences that 
              not only look great but also perform exceptionally well.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 text-center md:text-left">
              Currently pursuing my MCA at BAMU, I bring my academic knowledge 
              and practical experience together to deliver innovative solutions.
            </p>
            <div className="mt-6">
              <h4 className="font-semibold text-lg mb-2 text-center md:text-left">My Skills:</h4>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {[
                  "React", "Node.js", "Express", "MongoDB", "JavaScript", "TypeScript", 
                  "HTML/CSS", "Tailwind CSS", "UI/UX Design", "Figma", "RESTful APIs", 
                  "Git", "React Native", "NextJS"
                ].map((skill) => (
                  <span
                    key={skill}
                    className="bg-gray-200 dark:bg-gray-800 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div
            className={`${
              isVisible ? "animate-fade-in-left" : "opacity-0"
            } delay-200`}
          >
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <div className="glassmorphism absolute inset-0 z-10 p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white">Education & Certifications</h3>
                <ul className="mt-4 space-y-3 text-white">
                  <li className="flex flex-col">
                    <span className="font-medium">MCA, BAMU</span>
                    <span className="text-sm text-gray-200">2024 – Present</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="font-medium">BCA, BAMU</span>
                    <span className="text-sm text-gray-200">2020 – 2023</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="font-medium">AI Prompt Engineering</span>
                    <span className="text-sm text-gray-200">Coursera</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="font-medium">Full Stack Development</span>
                    <span className="text-sm text-gray-200">Naresh I Technologies</span>
                  </li>
                </ul>
              </div>
              
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700"></div>
              
              {/* Code-like pattern background */}
              <div className="absolute inset-0 opacity-10">
                <pre className="text-xs text-white p-4">
                  {`function Developer() {
  const skills = ['React', 'Node', 'MongoDB'];
  const passion = 'Creating amazing UIs';
  
  return (
    <Portfolio 
      name="Rohit Rathod"
      expertise={skills}
      goal="Building great products"
    />
  );
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
