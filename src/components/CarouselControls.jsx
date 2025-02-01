import React from 'react';

function CarouselControls({ activeIndex, setActiveIndex, projects }) {

    return (
        <div className="absolute flex justify-between w-full top-1/2 transform -translate-y-1/2 px-4">
            <button
                onClick={() =>
                    setActiveIndex((activeIndex - 1 + projects.length) % projects.length)
                }
                className="btn btn-circle hover:bg-accent transition-all duration-300 transform hover:scale-125"
            >
                ❮
            </button>
            <button
                onClick={() => setActiveIndex((activeIndex + 1) % projects.length)}
                className="btn btn-circle  hover:bg-accent transition-all duration-300 transform hover:scale-125"
            >
                ❯
            </button>
        </div>
    );

}

export default CarouselControls;