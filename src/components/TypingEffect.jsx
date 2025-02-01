import React from "react";
import { ReactTyped } from "react-typed";


function TypingEffect({ prefix = "and I'm ", strings, typeSpeed = 70, backSpeed = 50, backDelay = 1500 }) {
    return (
        <h2 className="py-6 text-3xl">
            {prefix}
            <ReactTyped strings={strings} typeSpeed={typeSpeed} backSpeed={backSpeed} backDelay={backDelay} loop />
        </h2>
    );
}


export default TypingEffect;
