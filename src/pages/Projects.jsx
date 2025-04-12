import React, { useState, useEffect, useCallback } from 'react';
import { useSwipeable } from 'react-swipeable';
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";


function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplayEnabled, setAutoplayEnabled] = useState(true);

  const nextCardTimer = 5000; // milliseconds

  // Create stable callback functions that won't change on every render
  const goToPrevious = useCallback((e) => {
    if (e) {
      e.stopPropagation();
      // Temporarily disable autoplay when manually navigating
      setAutoplayEnabled(false);
      setTimeout(() => setAutoplayEnabled(true), nextCardTimer);
    }
    
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  }, []);

  const goToNext = useCallback((e) => {
    if (e) {
      e.stopPropagation();
      // Temporarily disable autoplay when manually navigating
      setAutoplayEnabled(false);
      setTimeout(() => setAutoplayEnabled(true), nextCardTimer);
    }
    
    setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length);
  }, []);

  const goToIndex = useCallback((index, e) => {
    if (e) {
      e.stopPropagation();
      // Temporarily disable autoplay when manually navigating
      setAutoplayEnabled(false);
      setTimeout(() => setAutoplayEnabled(true), nextCardTimer);
    }
    
    setActiveIndex(index);
  }, []);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      // Temporarily disable autoplay when swiping
      setAutoplayEnabled(false);
      setTimeout(() => setAutoplayEnabled(true), nextCardTimer);
      goToNext();
    },
    onSwipedRight: () => {
      // Temporarily disable autoplay when swiping
      setAutoplayEnabled(false);
      setTimeout(() => setAutoplayEnabled(true), nextCardTimer);
      goToPrevious();
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: false
  });

  // Autoplay timer
  useEffect(() => {
    let interval;
    
    if (autoplayEnabled) {
      interval = setInterval(() => {
        goToNext();
      }, nextCardTimer);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoplayEnabled, goToNext]);

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
      <div className="relative min-h-[24rem]" {...handlers}>
        {projects.map((project, index) => (
          <div
            key={index}
            className={`absolute inset-0 flex justify-center transition-all duration-700 ease-in-out ${activeIndex === index
                ? 'opacity-100 z-10'
                : 'opacity-0 z-0'
              }`}
          >
            <ProjectCard project={project} />
          </div>
        ))}

        {/* Desktop Only Navigation Buttons */}
        <div className="hidden md:block z-20">
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 btn btn-circle btn-ghost text-2xl z-20"
            aria-label="Previous project"
          >
            ❮
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 btn btn-circle btn-ghost text-2xl z-20"
            aria-label="Next project"
          >
            ❯
          </button>
        </div>
      </div>

      {/*Index Project Icons*/}
      <div className="flex justify-center w-full py-4 gap-2 mt-12">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={(e) => goToIndex(index, e)}
            className={`btn btn-xs transition-all duration-300 ${activeIndex === index
                ? 'bg-accent scale-125 hover:bg-accent'
                : 'hover:[@media(hover:hover)]:bg-accent/50'
              }`}
            aria-label={`Go to project ${index + 1}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Projects;
