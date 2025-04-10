
import { useEffect, useState } from "react";
import { ExternalLink } from "lucide-react";

const FrontendShowcase = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleProjects, setVisibleProjects] = useState(12);

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

    const section = document.getElementById("frontend");
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);
  
  const frontendProjects = [
    {
      title: "Raw Portfolio",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=400",
      url: "https://raw-portfolio7.netlify.app",
    },
    {
      title: "Sundown Studio",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=400",
      url: "https://sundown-studio-1.netlify.app",
    },
    {
      title: "Duo Studio 2",
      image: "https://images.unsplash.com/photo-1493421419110-74f4e85ba126?q=80&w=400",
      url: "https://duo-studio-2.netlify.app",
    },
    {
      title: "Coffeee Brew",
      image: "https://images.unsplash.com/photo-1497515114629-f71d768fd07c?q=80&w=400",
      url: "https://coffeee-brew.netlify.app",
    },
    {
      title: "Cafe Racers",
      image: "https://images.unsplash.com/photo-1558981852-426c6c22a060?q=80&w=400",
      url: "https://cafe-racers.netlify.app",
    },
    {
      title: "Buano Showcase",
      image: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?q=80&w=400",
      url: "https://buano-showcase.netlify.app",
    },
    {
      title: "Streamo Movie",
      image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=400",
      url: "https://streamo-movie.netlify.app",
    },
    {
      title: "Reeinder See",
      image: "https://images.unsplash.com/photo-1606471191009-63994c53433b?q=80&w=400",
      url: "https://reeinder-see.netlify.app",
    },
    {
      title: "Hoodies Love",
      image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=400",
      url: "https://hoodies-love.netlify.app",
    },
    {
      title: "One Punch Man",
      image: "https://images.unsplash.com/photo-1610296669228-602fa827fc1f?q=80&w=400",
      url: "https://1-punch-man.netlify.app",
    },
    {
      title: "British Newsy",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=400",
      url: "https://british-newsy.netlify.app",
    },
    {
      title: "Spidey Man",
      image: "https://images.unsplash.com/photo-1635805737707-575885ab0820?q=80&w=400",
      url: "https://spidey-man.netlify.app",
    },
    {
      title: "Wahl Burger",
      image: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=400",
      url: "https://wahl-burger.netlify.app",
    },
    {
      title: "Green Grenade",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=400",
      url: "https://green-grenade7.netlify.app",
    },
    {
      title: "Alphine Gamepad",
      image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?q=80&w=400",
      url: "https://alphine-gamepad.netlify.app",
    },
    {
      title: "Fanta Animated",
      image: "https://images.unsplash.com/photo-1624517452488-04869289c4ca?q=80&w=400",
      url: "https://fanta-animated9.netlify.app",
    },
    {
      title: "Cyberfiction Model",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=400",
      url: "https://cyberfiction-model.netlify.app",
    },
    {
      title: "Chocolate Can",
      image: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?q=80&w=400",
      url: "https://chocholate-can.netlify.app",
    },
    {
      title: "Marvel Heroes",
      image: "https://images.unsplash.com/photo-1612036782180-6f0822045d55?q=80&w=400",
      url: "https://marvel-heroes3.netlify.app",
    },
    {
      title: "Car Show Autosculpt",
      image: "https://images.unsplash.com/photo-1494905998402-395d579af36f?q=80&w=400",
      url: "https://car-show-autosculpt.netlify.app",
    },
    {
      title: "Apex Legend",
      image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=400",
      url: "https://apex-legend69.netlify.app",
    },
    {
      title: "Maldives Beauty",
      image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=400",
      url: "https://maldives-beauty.netlify.app",
    },
    {
      title: "Restaurant GetFood",
      image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=400",
      url: "https://restaurant-getfood.netlify.app",
    },
    {
      title: "Eraf Photography",
      image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=400",
      url: "https://eraf-photography.netlify.app",
    },
    {
      title: "Magna Real Estate",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=400",
      url: "https://magna-real-estate.netlify.app",
    },
    {
      title: "Build Archit",
      image: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?q=80&w=400",
      url: "https://build-archit.netlify.app",
    },
    {
      title: "Lagunitas Beer",
      image: "https://images.unsplash.com/photo-1528823872057-9c018a7a7553?q=80&w=400",
      url: "https://lagunitass-beer.netlify.app",
    },
    {
      title: "Gravity Scroll",
      image: "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?q=80&w=400",
      url: "https://gravity-scroll.netlify.app",
    },
    {
      title: "Paper Page",
      image: "https://images.unsplash.com/photo-1518281361980-b26bfd556770?q=80&w=400",
      url: "https://paper-page.netlify.app",
    },
    {
      title: "iPhone 15 Launch",
      image: "https://images.unsplash.com/photo-1606041008023-472dfb5b530f?q=80&w=400",
      url: "https://iphone15-launch.netlify.app",
    },
    {
      title: "Brainwave AI Connect",
      image: "https://images.unsplash.com/photo-1677442135096-fa70d9055fb8?q=80&w=400",
      url: "https://brainwave-ai-connect.netlify.app",
    },
    {
      title: "Tour Travel Book",
      image: "https://images.unsplash.com/photo-1500835556837-99ac94a94552?q=80&w=400",
      url: "https://tour-travel-book.netlify.app",
    },
    {
      title: "Madiera Beauty",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=400",
      url: "https://madiera-beauty.netlify.app",
    },
    {
      title: "Axel Furniture",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=400",
      url: "https://axel-furniture.netlify.app",
    },
    {
      title: "Shopsy Easy Shopping",
      image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=400",
      url: "https://shopsy-easy-shopping.netlify.app",
    },
    {
      title: "GPT3 AI Future",
      image: "https://images.unsplash.com/photo-1677442136019-40ba3380f268?q=80&w=400",
      url: "https://gpt3-ai-future.netlify.app",
    },
    {
      title: "Apply Zen",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=400",
      url: "https://apply-zen.netlify.app",
    },
    {
      title: "Left Right",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400",
      url: "https://left-right.netlify.app",
    },
  ];

  const loadMoreProjects = () => {
    setVisibleProjects(frontendProjects.length);
  };

  return (
    <section
      id="frontend"
      className="section-padding bg-white dark:bg-gray-950"
    >
      <div className="container mx-auto px-4">
        <h2
          className={`text-3xl md:text-4xl font-bold font-display text-center mb-6 ${
            isVisible ? "animate-fade-in" : "opacity-0"
          }`}
        >
          Front-End & <span className="text-primary">UI/UX</span> Showcase
        </h2>
        
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Many include unique scroll animations — experience them on desktop!
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {frontendProjects.slice(0, visibleProjects).map((project, index) => (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className={`group relative overflow-hidden rounded-lg aspect-square shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                isVisible ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${index % 12 * 100}ms` }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 className="text-white font-medium text-sm md:text-base">
                  {project.title}
                </h3>
                <div className="flex items-center mt-2 text-xs text-white/90">
                  <span>Visit site</span>
                  <ExternalLink className="h-3 w-3 ml-1" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {visibleProjects < frontendProjects.length && (
          <div className="flex justify-center mt-10">
            <button
              onClick={loadMoreProjects}
              className="px-6 py-2 bg-primary/10 text-primary font-medium rounded-full hover:bg-primary/20 transition-colors"
            >
              Load More Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FrontendShowcase;
