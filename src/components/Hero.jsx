import React from "react";
import ScrollDownIndicator from "../components/ScrollDownIndicator";
import TypingEffect from "../components/TypingEffect";


function Hero() {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content text-center flex flex-col">
                <div className="max-w-md mx-auto">

                    <h2 className="text-3xl font-bold leading-tight flex items-center gap-2"> Hi! </h2>
                    <h2 className="text-3xl font-bold leading-tight flex items-center gap-2"> My Friends Call Me </h2>
                    <h2 className="text-6xl font-bold leading-tight flex items-center gap-2 text-primary"> Alex, </h2>

                    <TypingEffect
                        strings={[
                            " a Full-Stack Developer", " a Gamer", " a Web 3.0 Enthusiast", " Addicted to Learning", " an Enduro Rider",
                        ]}
                    />

                    <ScrollDownIndicator />

                </div>
            </div>
        </div>
    );
}
export default Hero;
