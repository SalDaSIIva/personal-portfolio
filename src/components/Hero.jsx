/*
import React from "react";
import ScrollDownIndicator from "../components/ScrollDownIndicator";
import TypingEffect from "../components/TypingEffect";


function Hero() {
    return (
        <>
            <div className="hero min-h-screen">
                <div className="hero-content text-center md:text-left flex flex-col md:flex-row md:justify-between max-w-6xl mx-auto">
                    <div className="md:w-1/2">
                        <h2 className="text-3xl font-display font-bold leading-tight">Hi!</h2>
                        <h2 className="text-3xl font-display font-bold leading-tight">My Friends Call Me</h2>
                        <h2 className="text-6xl font-display font-bold leading-tight text-primary mb-4">Alex,</h2>

                        <TypingEffect
                            strings={[
                                "a Full-Stack Developer", "a Gamer", "a Web 3.0 Enthusiast", "Addicted to Learning", "an Enduro Rider",
                            ]}
                        />

                    </div>



                    <div className="md:w-1/2 mt-8 md:mt-0">
                        <div className="relative">
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent blur opacity-30 rounded-full"></div>
                            <img
                                src="selfie.jpg"
                                alt="Alexandre Silva"
                                className="relative rounded-full w-64 h-64 object-cover mx-auto border-4 border-base-100"
                            />
                        </div>
                    </div>
            <ScrollDownIndicator />
                    
                </div>

            </div>

        </>
    );
}

export default Hero;





*/

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import facelessPortrait from '../assets/facelessPortrait.png';


const TypingEffect = ({ phrases }) => {
    const [currentPhrase, setCurrentPhrase] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const targetPhrase = phrases[currentIndex];
        const typingSpeed = isDeleting ? 50 : 100;
        const pauseDuration = 2000;

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (currentPhrase !== targetPhrase) {
                    setCurrentPhrase(targetPhrase.substring(0, currentPhrase.length + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), pauseDuration);
                }
            } else {
                if (currentPhrase === '') {
                    setIsDeleting(false);
                    setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
                } else {
                    setCurrentPhrase(currentPhrase.substring(0, currentPhrase.length - 1));
                }
            }
        }, typingSpeed);

        return () => clearTimeout(timeout);
    }, [currentPhrase, currentIndex, isDeleting, phrases]);

    return (
        <span className="text-xl md:text-2xl text-gray-300">
            {currentPhrase}
            <span className="animate-pulse">|</span>
        </span>
    );
};

const Hero = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);

    const phrases = [
        "a JuniorFull-Stack Developer",
        "a Gamer",
        "a Web 3.0 Enthusiast",
        "addicted to Learning",
        "an Enduro Rider"
    ];

    const handleScrollToProjects = () => {
        document.getElementById('projects').scrollIntoView({ 
            behavior: 'smooth'
        });
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

    return (
        <div className="relative h-screen overflow-hidden">

            {/* Main content container */}
            <div className="relative h-full flex flex-col items-center justify-center px-4">
                {/* Portrait container with parallax effect */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                        opacity: isVisible ? 1 : 0,
                        y: 0,
                        x: mousePosition.x,
                        y: mousePosition.y
                    }}
                    transition={{ duration: 0.8 }}
                    className="mb-8 relative"
                >
                    {/* Drop shadow container */}
                    <div className="relative w-48 h-48 md:w-64 md:h-64 filter drop-shadow-2xl">
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