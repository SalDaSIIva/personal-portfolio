import React from "react";

function Footer() {
    return (
        <footer className="footer bg-primary text-neutral-content items-center p-4">
            <aside className="grid-flow-col items-center justify-self-center">
                <p>Overthought by Alexandre. All right reserved © {new Date().getFullYear()}</p>
            </aside>
        </footer>
    );
}

export default Footer;
