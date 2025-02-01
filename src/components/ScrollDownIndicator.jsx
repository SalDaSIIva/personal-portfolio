import React from "react";

function ScrollDownIndicator() {
    return (
        <div className="flex justify-center mt-10">
            <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center items-start p-1 overflow-hidden">
                <div className="w-2 h-2 bg-primary rounded-full animate-move-down"></div>
            </div>
        </div>
    );
}

export default ScrollDownIndicator;

