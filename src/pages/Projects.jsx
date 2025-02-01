import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import projects from "../data/projects";
import CarouselControls from "../components/CarouselControls";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length);
    },
    onSwipedRight: () => {
      setActiveIndex((prevIndex) => 
        prevIndex === 0 ? projects.length - 1 : prevIndex - 1
      );
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: false
  });

  // Reset the autoplay timer each time activeIndex changes
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
      <div className="relative min-h-[24rem]" {...handlers}>
        {projects.map((project, index) => (
          <div
            key={index}
            className={`absolute inset-0 flex justify-center transition-opacity duration-700 ease-in-out ${
              activeIndex === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <ProjectCard project={project} />
          </div>
        ))}
        
        {/* Desktop Navigation Buttons */}
        <div className="hidden md:block">
          <button 
            onClick={() => setActiveIndex((prevIndex) => 
              prevIndex === 0 ? projects.length - 1 : prevIndex - 1
            )}
            className="absolute left-0 top-1/2 -translate-y-1/2 btn btn-circle btn-ghost text-2xl"
          >
            ❮
          </button>
          <button 
            onClick={() => setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length)}
            className="absolute right-0 top-1/2 -translate-y-1/2 btn btn-circle btn-ghost text-2xl"
          >
            ❯
          </button>
        </div>
      </div>

      <div className="flex justify-center w-full py-4 gap-2 mt-12">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`btn btn-xs transition-all duration-300 ${
              activeIndex === index 
                ? 'bg-accent scale-125 hover:bg-accent' 
                : 'hover:[@media(hover:hover)]:bg-accent/50'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Projects;
