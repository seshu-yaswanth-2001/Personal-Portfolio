import { navConfig } from "@/config/config";
import { navMotionTransitionConfig } from "@/config/config";
import "./navbar.css";
import { motion } from "motion/react";
import { useContext } from "react";
import { NavContext } from "@/context/NavContext";

const Navbar = (props) => {

  const {scrollToSection, home, about, experience, testimonials, contact} = props;

  const {navItemSelected, setNavItemSelected} = useContext(NavContext);

  const jumpToScetion = (sectionName) => {
    setNavItemSelected(sectionName);
    switch(sectionName.toLowerCase()) {
      case "home":
        scrollToSection(home);
        break;
      case "about":
        scrollToSection(about);
        break;
      case "experience":
        scrollToSection(experience);
        break;
      case "testimonials":
        scrollToSection(testimonials);
        break;
      case "contact":
        scrollToSection(contact);
        break;
      default:
        break;
    }
  }

  return (
      <nav>
        <ul className="nav-wrapper">
          {navConfig.map((navItem) => (
            <li 
            key={navItem.id}
            className={`nav-item ${navItemSelected === navItem.name ? "active" : ""}`}
            onClick={() => jumpToScetion(navItem.name)}
            >
              {navItem.name}
              {navItemSelected === navItem.name && 
              <motion.div 
              layoutId="highlight"
              className="highlight"
              transition={navMotionTransitionConfig}
             />}
            </li>
          ))}
        </ul>
      </nav>
  )
}

export default Navbar;