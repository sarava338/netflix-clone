import { useState } from "react";
import { Link } from "react-router-dom";

import "./nav.css";

const Nav = () => {
  const [bgColor, setBgColor] = useState("black");

  window.addEventListener("scroll", () => {
    window.scrollY >= 500 ? setBgColor("black") : setBgColor("transparent");
  });

document.getElementsByName("nav").forEach((element) => {
  element.style.backgroundColor = bgColor;
});

return (
  <>
    <nav
      name="nav"
      className="navbar"
      style={{
        backgroundColor: bgColor,
      }}
    >
      <p name="nav">Sarava338-netflix-clone</p>

      <a
        name="nav"
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
