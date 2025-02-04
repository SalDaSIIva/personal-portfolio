import React from "react";
import Hero from "../components/Hero";


function Home({ sections, scrollToRef }) {
  return (
    <Hero sections={sections} scrollToRef={scrollToRef} />
  );
}

export default Home;

