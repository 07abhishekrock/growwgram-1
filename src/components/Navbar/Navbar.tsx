import React from "react";
import { updateThemeColors } from "utils/helpers";
import { ToggleTheme } from "..";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const toggleColorMode = () => {
    const currentTheme = document.firstElementChild?.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";

    localStorage.setItem("color-mode", newTheme);
    document.firstElementChild!.setAttribute("data-theme", newTheme);

    updateThemeColors(newTheme);
  };

  return (
    <nav className="nb23Wrapper">
      <div className="nb23Container">
        <Link to="/" className="nb23Logo">
          Growwgram
        </Link>
        <div className="nb23Toggle" onClick={toggleColorMode}>
          <ToggleTheme />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
