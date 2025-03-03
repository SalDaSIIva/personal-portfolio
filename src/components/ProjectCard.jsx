import React from 'react';
import tbd from '../assets/tbd.jpg';
import interiorRemodeling from '../assets/interior-remodeling.jpg';
//import accountingAssistant from '../assets/accounting-assistant.jpg';
import dogo from '../assets/dogo.jpg';

function ProjectCard({ project }) {
    // Try to import the image dynamically, fallback to tbd if not found
    let projectImage;

    switch (project.image) {
        case 'interior-remodeling.jpg':
            projectImage = interiorRemodeling;
            break;
        // case 'accounting-assistant.jpg':
            // projectImage = accountingAssistant;
            // break;
        case 'dogo.jpg':
            projectImage = dogo;
            break;
        default:
            projectImage = tbd;
    }

    return (
        <div className="card bg-base-100/70 shadow-2xl w-96 transform hover:scale-110 active:scale-95 transition-all duration-300">

            <figure>
                <img
                    src={projectImage}
                    alt={project.title}
                    className="object-contain w-full h-auto"
                />
            </figure>

            <div className="card-body py-4">
                <h3 className="card-title text-primary text-2xl mb-2">{project.title}</h3>

                <p className="mb-4">{project.description}</p>

                <div className="card-actions justify-end">

                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-sm btn-primary hover:btn-primary-focus transition-all duration-300"
                    >
                        GitHub
                    </a>

                    <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-sm btn-secondary hover:btn-secondary-focus transition-all duration-300"
                    >
                        Live Demo
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;