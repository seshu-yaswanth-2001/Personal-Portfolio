import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import { LightbulbOff, Lightbulb } from "lucide-react";
import "./theme.css";

const Theme = () => {
    const { theme, toggle } = useContext(ThemeContext);

    return (
        <div className="theme">
            <button
                className="theme-button"
                onClick={toggle}
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                title={`Current: ${theme}`}
            >
                {theme === "dark" ? <LightbulbOff /> : <Lightbulb />}
            </button>
        </div>
    );
};

export default Theme;
