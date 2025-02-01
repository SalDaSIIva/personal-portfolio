import React from 'react';

function ProjectCard({ project }) {

    return (
        <div className="card bg-base-100 shadow-2xl w-96 transform hover:scale-110 active:scale-95 transition-all duration-300">

            <figure>
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes"
                    className="object-contain w-full h-auto"
                />

            </figure>

            <div className="card-body">
                <h3 className="card-title text-primary text-2xl mb-2">{project.title}</h3>

                <p className="mb-4">{project.description}</p>

                <div className="card-actions justify-end">

                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary hover:btn-secondary transition-all duration-300"
                    >
                        GitHub
                    </a>

                    <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary hover:btn-primary transition-all duration-300"
                    >
                        Live Demo
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;