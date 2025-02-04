import React, { useState, useEffect } from "react";
import { ReactTyped } from "react-typed";


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
        <span className="text-xl md:text-2xl ">
            {currentPhrase}
            <span className="animate-pulse">|</span>
        </span>
    );
};


export default TypingEffect;
