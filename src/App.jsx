// src/App.jsx
import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import Portrait from "./components/Portrait";


function App() {

  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const contactsRef = useRef(null);

  const sections = [
    { id: 'home', label: 'Home', ref: homeRef },
    { id: 'projects', label: 'Projects', ref: projectsRef },
    { id: 'contacts', label: 'Contacts', ref: contactsRef },
  ];


  return (
    <>
      <div className="scroll-smooth">
        <Navbar sections={sections} />

        <section id="home" className="min-h-screen pt-4" ref={homeRef}>
          <Home />
        </section>

        <section id="projects" className="min-h-screen pt-4" ref={projectsRef}>
          <Projects />
        </section>

        <section id="contacts" className="min-h-screen pt-4" ref={contactsRef}>
          <Contacts />
        </section>

        <Portrait />


        <Footer />
      </div>
    </>
  );
}

export default App;
