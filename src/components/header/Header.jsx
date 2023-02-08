import React from "react";
import logo from "./../../assets/JR .svg";
import "./header.scss"
import Links from "../links/Links";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="this is a image with letters J and R" />
      <nav className="nav">
        <Links path={"#about"} title={"Sobre mi"} />
        <Links path={"#skill"} title={"Skill"} />
        <Links path={"#experience"} title={"Experiencia"} />
      </nav>
    </header>
  );
};

export default Header;
