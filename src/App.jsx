import Navbar from "./components/Navbar/Navbar";
import "./app.css";
import { NavProvider } from "./context/NavContext";
import { useRef } from "react";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Testimonials from "./components/Testimonials/Testimonials";
import Experience from "./components/Experience/Experience";
import About from "./components/About/About";
import Theme from "./components/Theme/Theme";
import { ThemeProvider } from "./context/ThemeContext";

const App = () => {
  const home = useRef(null);
  const about = useRef(null);
  const experience = useRef(null);
  const testimonials = useRef(null);
  const contact = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({behavior: "smooth"});
  }

  console.log(scrollToSection)

  return (
    <div className="app">
      <div className="navbar">
        <NavProvider>
          <Navbar 
            scrollToSection={scrollToSection}
            home={home}
            about={about}
            experience={experience}
            testimonials={testimonials}
            contact={contact} 
          />
        </NavProvider>
      </div>
      <ThemeProvider>
        <Theme />
      </ThemeProvider>
      <div className="sections">
        <section className="home" id="home" ref={home}><Home /></section>
        <section className="about" id="about" ref={about}><About /></section>
        <section className="experience" id="experience" ref={experience}><Experience /></section>
        <section className="testimonials" id="testimonials" ref={testimonials}><Testimonials /></section>
        <section className="contact" id="contact" ref={contact}><Contact /></section>
      </div>
      
    </div>
  );
};

export default App;
