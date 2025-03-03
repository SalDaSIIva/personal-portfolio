import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import facelessPortrait from '../assets/facelessPortrait.png';
import TypingEffect from './TypingEffect';
import phrases from '../data/heroPhrases';


const Hero = ({ sections, scrollToRef }) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);



    const handleScrollToProjects = () => {
        const projectsRef = sections
            .filter(section => section.id === "projects")[0].ref;
        const navbarHeight = document.getElementById('myNavBar')?.offsetHeight || 0;
        scrollToRef(projectsRef, navbarHeight);
    };


    useEffect(() => {
        setIsVisible(true);

        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const moveX = (clientX - window.innerWidth / 2) / 50;
            const moveY = (clientY - window.innerHeight / 2) / 50;
            setMousePosition({ x: moveX, y: moveY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Define jiggle animation variants
    const jiggleVariants = {
        animate: {
            rotate: [0, 2, 0, -2, 0],
            y: [0, -4, 0, 4, 0],
            transition: {
                duration: 5,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "mirror"
            }
        }
    };

    return (
        <div className="relative h-screen overflow-hidden">

            {/* Main content container */}
            <div className="relative h-full flex flex-col items-center justify-center px-4">
                {/* Portrait container with parallax effect */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                        opacity: isVisible ? 1 : 0,
                        x: mousePosition.x,
                        y: mousePosition.y
                    }}
                    variants={jiggleVariants}
                    whileInView="animate"
                    transition={{ duration: 0.8 }}
                    className="mb-8 relative"
                >
                    {/* Drop shadow container */}
                    <div className="relative w-48 h-48 md:w-64 md:h-64 filter drop-shadow-2xl portrait-hover">
                        {/* Main portrait */}
                        <img
                            src={facelessPortrait}
                            alt="Portrait"
                            className="absolute inset-0 w-full h-full object-contain"
                        />

                    </div>
                </motion.div>

                {/* Text content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: isVisible ? 1 : 0, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-center"
                >
                    <h1 className="text-2xl md:text-6xl font-bold  mb-4">
                        Hi! <br />
                        My friends call me <br />
                        <span className="text-primary">Alex,</span> <br />
                        and I'm
                    </h1>
                    <div className="h-16 flex items-center justify-center">
                        <span className="text-xl md:text-2xl text-gray-300 mr-2"> </span>
                        <TypingEffect phrases={phrases} />
                    </div>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0, y: 0 }}
                    animate={{
                        opacity: isVisible ? 1 : 0,
                        y: [0, 10, 0]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: 1
                    }}
                    className="cursor-pointer"
                    onClick={handleScrollToProjects}
                >
                    <ChevronDown className="w-8 h-8 text-primary opacity-75" />
                </motion.div>
            </div>
        </div>

    );
};

export default Hero;