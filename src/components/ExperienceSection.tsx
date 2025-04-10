
import { useState, useEffect } from "react";
import { Briefcase } from "lucide-react";

const ExperienceSection = () => {
  const [isVisible, setIsVisible] = useState(false);

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

    const section = document.getElementById("experience");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const experiences = [
    {
      role: "React Developer",
      company: "TechMindSystems",
      location: "Pune",
      period: "2024 – Present",
      description:
        "Developing responsive web applications using React, Redux, and modern frontend tools. Collaborating with UI/UX designers to implement visually appealing and user-friendly interfaces.",
      skills: ["React", "Redux", "JavaScript", "Tailwind CSS", "RESTful APIs"],
    },
    {
      role: "Full Stack Developer",
      company: "Naresh I Technologies",
      location: "Hyderabad",
      period: "2023 – 2024",
      description:
        "Built and maintained full-stack applications using the MERN stack. Implemented responsive designs, integrated APIs, and optimized application performance.",
      skills: ["MongoDB", "Express.js", "React", "Node.js", "UI/UX Design"],
    },
  ];

  return (
    <section
      id="experience"
      className="section-padding bg-white dark:bg-gray-950"
    >
      <div className="container mx-auto px-4">
        <h2
          className={`text-3xl md:text-4xl font-bold font-display text-center mb-12 ${
            isVisible ? "animate-fade-in" : "opacity-0"
          }`}
        >
          Professional <span className="text-primary">Experience</span>
        </h2>

        <div className="max-w-3xl mx-auto">
          <div className="relative pl-8 sm:pl-12">
            <div className="absolute top-0 left-0 h-full w-1 bg-gray-200 dark:bg-gray-800"></div>

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`mb-10 relative ${
                  isVisible
                    ? "animate-fade-in"
                    : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="absolute -left-3 sm:-left-6 top-0 mt-1 flex items-center justify-center">
                  <div className="h-10 w-10 rounded-full border-4 border-white dark:border-gray-900 bg-primary flex items-center justify-center">
                    <Briefcase className="h-4 w-4 text-white" />
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <div className="flex flex-wrap justify-between items-center mb-2">
                    <h3 className="text-xl font-semibold">{exp.role}</h3>
                    <span className="text-sm font-medium text-primary">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">
                    {exp.company}, {exp.location}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
