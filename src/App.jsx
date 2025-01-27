import React from "react";
import Navbar from "./sections/navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Clients from "./sections/Clients";
import Contact from "./sections/Contact";

const App = () => {
  return (
    <main className="max-w-8xl mx-auto">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Clients />
      <Contact />
    </main>    
  )
}

export default App; 