import { useState, useEffect } from "react";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
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

    const section = document.getElementById("projects");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const projects = [
    {
      title: "AI Text-to-Image Generator",
      description:
        "Web application that uses AI to convert text prompts into images. Built with React, Node.js and integrated with OpenAI API.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=500",
      tags: ["React", "Node.js", "OpenAI API", "Express"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "E-commerce App",
      description:
        "Full-featured e-commerce platform with product listings, cart functionality, user authentication and payment processing.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=500",
      tags: ["MERN Stack", "Redux", "Stripe", "JWT"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "Job Portal App",
      description:
        "Platform connecting job seekers with employers. Features include job posting, application tracking, and resume builder.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=500",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      demoLink: "#",
      githubLink: "#",
    },
  ];

  const freelanceProjects = [
    {
      title: "Sunlight Enterprises Pune",
      description:
        "Corporate website with service showcase, team profiles and contact integration.",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=500",
      tags: ["React", "Tailwind CSS", "CMS Integration"],
      demoLink: "#",
    },
    {
      title: "Active NDT and Inspection Services",
      description:
        "Developed the frontend for an industrial inspection services company website.",
      image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?q=80&w=500",
      tags: ["React", "Responsive Design", "UI/UX"],
      demoLink: "#",
    },
  ];

  const openSourceProjects = [
    {
      title: "React Spinner Kit",
      description:
        "Open-source library of customizable loading spinners for React applications.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=500",
      tags: ["React", "TypeScript", "NPM Package"],
      demoLink: "#",
      githubLink: "#",
    },
  ];

  const mobileApps = [
    {
      title: "Self Medicare App",
      description:
        "Mobile application for medication reminders, symptom tracking, and health advice.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=500",
      tags: ["React Native", "Firebase", "Health API"],
      demoLink: "#",
      githubLink: "#",
    },
  ];

  const featuredProjects = [
    {
      title: "Marvel Heroes",
      description: "Interactive showcase of Marvel superheroes with dynamic animations and responsive design.",
      image: "https://images.unsplash.com/photo-1635805737707-575885ab0820?q=80&w=500",
      link: "https://marvel-heroes3.netlify.app",
    },
    {
      title: "iPhone 15 Launch",
      description: "Immersive product launch experience for the iPhone 15 with 3D animations and feature highlights.",
      image: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?q=80&w=500",
      link: "https://iphone15-launch.netlify.app",
    },
    {
      title: "Brainwave AI Connect",
      description: "AI interface demo showcasing modern design principles and interactive AI capabilities.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=500",
      link: "https://brainwave-ai-connect.netlify.app",
    },
    {
      title: "GPT3 AI Future",
      description: "Futuristic UI presenting GPT-3 capabilities and potential applications in everyday technology.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=500",
      link: "https://gpt3-ai-future.netlify.app",
    }
  ];

  return (
    <section
      id="projects"
      className="section-padding bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto px-4">
        <h2
          className={`text-3xl md:text-4xl font-bold font-display text-center mb-12 ${
            isVisible ? "animate-fade-in" : "opacity-0"
          }`}
        >
          Full-Stack <span className="text-primary">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`project-card ${
                isVisible ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-card-image"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <a
                    href={project.demoLink}
                    className="flex items-center text-sm font-medium text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo <ExternalLink className="ml-1 h-3.5 w-3.5" />
                  </a>
                  <a
                    href={project.githubLink}
                    className="flex items-center text-sm font-medium hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Source <Github className="ml-1 h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-2xl font-bold mt-16 mb-8 text-center">
          Freelance Work
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          {freelanceProjects.map((project, index) => (
            <div
              key={index}
              className={`project-card ${
                isVisible ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 150 + 300}ms` }}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-card-image"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <a
                    href={project.demoLink}
                    className="flex items-center text-sm font-medium text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Website <ExternalLink className="ml-1 h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <div>
            <h3 className="text-2xl font-bold mb-8">Open Source</h3>
            {openSourceProjects.map((project, index) => (
              <div
                key={index}
                className={`project-card ${
                  isVisible ? "animate-fade-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 150 + 450}ms` }}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-card-image"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4">
                    <a
                      href={project.demoLink}
                      className="flex items-center text-sm font-medium text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Demo <ExternalLink className="ml-1 h-3.5 w-3.5" />
                    </a>
                    <a
                      href={project.githubLink}
                      className="flex items-center text-sm font-medium hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Source <Github className="ml-1 h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8">Mobile App</h3>
            {mobileApps.map((project, index) => (
              <div
                key={index}
                className={`project-card ${
                  isVisible ? "animate-fade-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 150 + 450}ms` }}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-card-image"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4">
                    <a
                      href={project.demoLink}
                      className="flex items-center text-sm font-medium text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Preview <ExternalLink className="ml-1 h-3.5 w-3.5" />
                    </a>
                    <a
                      href={project.githubLink}
                      className="flex items-center text-sm font-medium hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Source <Github className="ml-1 h-3.5 w-3.5" />
                    </a>
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

export default ProjectsSection;
