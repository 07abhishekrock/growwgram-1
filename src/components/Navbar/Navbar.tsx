import React from "react";
import { AiFillHome } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { FiRefreshCw } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getFeeds } from "store/feed";
import { updateThemeColors } from "utils/helpers";
import { ToggleTheme } from "..";
import "./navbar.css";

const Navbar = () => {
  const dispatch = useDispatch();

  const toggleColorMode = () => {
    const currentTheme = document.firstElementChild?.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";

    localStorage.setItem("color-mode", newTheme);
    document.firstElementChild!.setAttribute("data-theme", newTheme);

    updateThemeColors(newTheme);
  };

  const reloadPosts = () => {
    dispatch(getFeeds(true));
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
        <Link to="/" className="nb23Icon nb23IconHidden">
          <AiFillHome size={22} />
        </Link>
        <button
          className="nb23Button"
          title="Refresh Feed"
          onClick={reloadPosts}
        >
          <FiRefreshCw size={22} className="nb23Icon" />
        </button>
        <div className="nb23Profile nb23Icon">
          <FaUser size={20} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
