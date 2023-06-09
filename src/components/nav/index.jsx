import { useState } from "react";
import "./nav.css";

const Nav = () => {
  const [bgColor, setBgColor] = useState("transparent");

  window.addEventListener("scroll", () => {
    window.scrollY >= 500 ? setBgColor("black") : setBgColor("transparent");
  });

  document.getElementsByName("nav").forEach((element) => {
    element.style.backgroundColor = bgColor;
  });

  return (
    <>
      <div className="nav-fade-top"></div>
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
