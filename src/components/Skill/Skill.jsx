import React from "react";
import "./Skill.scss";
import Graphic from "./components/Graphic/Graphic";
import LanguagesProgramming from "./components/LanguagesPogramming/LanguagesProgramming";

const Skill = () => {
  return (
    <div className="skill-content" id="skill">
      <Graphic />
      <div className="contentItem">
        <span className="titleSkill">
          <i className="material-symbols-outlined">stars</i>Skill
        </span>
        <p>
          Tengo con conocimientos en lenguajes de programacion tanto en Frontend
          y Backend, PWA, manejo de herramientas CLoud serve
        </p>
        <div className="itemSkill">
          <LanguagesProgramming />
        </div>
      </div>
    </div>
  );
};

export default Skill;
