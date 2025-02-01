import React, { useState } from "react";
import MenuIcon from "./icons/MenuIcon";
import ThemeToggle from "./ThemeToggle";
import ResumeButton from "./ResumeButton";
import { Link, Element, scroller } from 'react-scroll';

function Navbar({ sections }) {
  const [isOpen, setIsOpen] = useState(false);

  const tabs = sections
    .filter(section => section.id !== "home")
    .map(section => (
      <li key={section.id}>
        <div href={`#${section.id}`} onClick={(e) => handleScroll(section.ref, e)} className="hover:font-bold hover:text-accent">
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

  const scrollToRef = (ref, offset) => {
    const top = ref.current.getBoundingClientRect().top + window.pageYOffset;
    const height = ref.current.getBoundingClientRect().height;
    window.scrollTo({
      top: top - offset,
      behavior: 'smooth',
    });
  };

  return (
    <div id="myNavBar" className="navbar fixed z-50 bg-base-200">
      <div className="navbar-start">
        <div className="dropdown">
          <div 
            tabIndex={0} 
            role="button" 
            className="btn btn-ghost lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <MenuIcon />
          </div>
          <ul
            tabIndex={0}
            className={`menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 p-2 shadow ${
              isOpen ? '' : 'hidden'
            }`}
          >
            {tabs}
          </ul>
        </div>

        <a className="btn btn-ghost text-xl text-primary group relative hover:bg-transparent hover:border-transparent max-w-[40%] truncate">
          <a href={`#home`}
            onClick={(e) => handleScroll(sections.find(section => section.id === 'home').ref, e)}
            className="transition-all duration-300 drop-shadow-none group-hover:drop-shadow-[0_0_10px_currentColor] truncate">
            <span className="hidden md:inline">Alexandre Silva</span>
            <span className="md:hidden">A.S.</span>
          </a>
        </a>

        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {tabs}
          </ul>
        </div>
      </div>

      <div className="navbar-end">
        <ResumeButton />
        <ThemeToggle />
      </div>

    </div>
  );
}

export default Navbar;