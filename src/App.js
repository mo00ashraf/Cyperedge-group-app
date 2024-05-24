import React, { useEffect } from "react";
import Header from "./components/Header";
import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Works from "./components/Works";
import AOS from "aos";
import "aos/dist/aos.css";
import Teams from "./components/Teams";
import Test from "./components/testimonials";
import Pricing from "./components/Pricing";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="App">
      <header id="header">
        <Header />
      </header>
      <main>
        <div data-aos="flip-left">
          <Hero />
        </div>
        <div data-aos="flip-right">
          <About />
        </div>
        <div data-aos="slide-left">
          <Services />
        </div>
        <div data-aos="slide-right">
          <Works />
        </div>
        <div data-aos="flip-left">
          <Teams />
        </div>

        <Test />

        <div data-aos="fade-up-right">
          <Pricing />
        </div>
        <div data-aos="zoom-out">
          <Blog />
        </div>
        <div data-aos="zoom-in">
          <Contact />
        </div>
        <footer id="footer">
          <Footer />
        </footer>
      </main>
    </div>
  );
};

export default App;
