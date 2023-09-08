import './App.css';
import React from "react";
import './App.css'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Experience from "./components/Experience";
// import Projects from "./components/Projects";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

function App() {
  return (
    <div className='overflow-hidden'>
      <Navbar />
      <Hero />
      <Education />
      <Experience />
      {/* <Projects /> */}
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
