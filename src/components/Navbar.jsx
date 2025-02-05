import React, { useState } from "react";
import ResumeButton from "./ResumeButton";
import facelessPortrait from "../assets/facelessPortrait.png";
import DarkModeToggle from "./DarkModeToggle.jsx";

function Navbar({ sections, scrollToRef }) {
  const [isOpen, setIsOpen] = useState(false);

  const tabs = sections
    .filter(section => section.id !== "home")
    .map(section => (
      <li key={section.id}>
        <div href={`#${section.id}`} onClick={(e) => handleScroll(section.ref, e)} className="block w-full hover:font-bold hover:text-accent">
          {section.label}
        </div>
      </li>
    ));

  const handleScroll = (ref, e) => {
    e.preventDefault();
    setIsOpen(false);
    const navbarHeight = document.getElementById('myNavBar')?.offsetHeight || 0;
    scrollToRef(ref, navbarHeight);
  };

  return (
    <div id="myNavBar" className="navbar fixed z-50 bg-base-200/80 backdrop-blur-sm border-b border-base-300/50">
      {/* Left side */}
      <div className="navbar-start flex items-center">
        <div className="btn btn-ghost text-xl text-primary group relative hover:bg-transparent hover:border-transparent max-w-[40%] truncate">
          <a href={`#home`}
            onClick={(e) => handleScroll(sections.find(section => section.id === 'home').ref, e)}
            className="">
            <img src={facelessPortrait} alt="author faceless portrait" className="w-10 h-10" />
          </a>
        </div>
        <ResumeButton />
      </div>

      {/* Right side */}
      <div className="navbar-end flex items-center">

        {/* Mobile Menu Dropdown */}
        <div className={`absolute top-full left-0 right-0 bg-base-200/80 backdrop-blur-sm border-b border-base-300/50 transform transition-all duration-300 ease-in-out ${isOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-2 pointer-events-none'
          }`}>
          <ul className="menu menu-vertical p-4 gap-2">
            {tabs}
          </ul>
        </div>

        {/* Desktop Navbar */}
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal">
            {tabs}
          </ul>
        </div>

        <DarkModeToggle />

        {/* Mobile Menu Button */}
        <button
          className="btn btn-ghost lg:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-6 relative">
            <span className={`absolute inset-0 w-6 h-0.5 bg-current transform transition-all duration-300 ease-in-out ${isOpen ? 'rotate-45 top-2.5' : 'top-1'
              }`}></span>
            <span className={`absolute inset-0 w-6 h-0.5 bg-current transform transition-all duration-300 ease-in-out ${isOpen ? 'opacity-0 top-2.5' : 'top-2.5'
              }`}></span>
            <span className={`absolute inset-0 w-6 h-0.5 bg-current transform transition-all duration-300 ease-in-out ${isOpen ? '-rotate-45 top-2.5' : 'top-4'
              }`}></span>
          </div>
        </button>
      </div>


    </div>
  );
}

export default Navbar;