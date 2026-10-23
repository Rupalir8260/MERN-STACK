import { useContext } from "react";
import { ThemeContext } from "../../../myapp/src/ThemeContext";

function Navbar() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <nav className="navbar">
      <h2>My React App</h2>

      <button
        className="theme-btn"
        onClick={() =>
          setTheme(theme === "light" ? "dark" : "light")
        }
      >
        {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </button>
    </nav>
  );
}

export default Navbar;