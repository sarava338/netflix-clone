import { useState } from "react";
import { Link } from "react-router-dom";

import "./nav.css";

const Nav = () => {
  const [bgColor, setBgColor] = useState("black");

  window.addEventListener("scroll", () => {
    window.scrollY >= 500 ? setBgColor("black") : setBgColor("transparent");
  });

  return (
    <>
      <nav
        className="navbar"
        style={{
          backgroundColor: bgColor,
        }}
      >
        <p>Sarava338-netflix-clone</p>

        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/sarava338/"
        >
          @sarava338
        </a>
      </nav>
    </>
  );
};

export default Nav;
