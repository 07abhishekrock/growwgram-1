import React from "react";
import { updateThemeColors } from "utils/helpers";
import { ToggleTheme } from "..";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { AiFillHome } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { MdExplore } from "react-icons/md";

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
        <Link to="/" className="nb23Logo" state={{ hardRefresh: true }}>
          Growwgram
        </Link>
        <div className="nb23Toggle" onClick={toggleColorMode}>
          <ToggleTheme />
        </div>
        <AiFillHome size={22} className="nb23Icon" />
        <MdExplore size={24} className="nb23Icon" />
        <div className="nb23Profile nb23Icon">
          <FaUser size={20} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
