import React from "react";
import "./nav.css";

const Nav = () => {
  const netflixLogo =
    "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg";
  return (
    <>
      <nav>
        <img
          src={netflixLogo}
          alt="Netflix 2015 logo.svg"
          width="120"
          height="25"
        />
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/sarava338/"
        >
          @ sarava338
        </a>
      </nav>
    </>
  );
};

export default Nav;
