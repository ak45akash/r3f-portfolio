import React from "react";
import Navbar from "./sections/navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";

const App = () => {
  return (
    <main className="max-w-8xl mx-auto">
      <Navbar />
      <Hero />
      <About />
    </main>    
  )
}

export default App; 