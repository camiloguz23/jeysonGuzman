import React, { useState } from "react";
import "./Skill.scss";
import Graphic from "./components/Graphic/Graphic";
import LanguagesProgramming from "./components/LanguagesPogramming/LanguagesProgramming";
import Cube from "../cube/Cube";

const Skill = () => {
  const [rol,setRol] = useState("frontend")
  return (
    <div className="skill-content" id="skill">
      <Graphic rol={rol} />
      <div className="contentItem">
        <span className="titleSkill">
          <i className="material-symbols-outlined">stars</i>Skill
        </span>
        <p className="infoSkill">
          Tengo con conocimientos en lenguajes de programacion tanto en Frontend
          y Backend, PWA, manejo de herramientas cloud serve
        </p>
        <div className="itemSkill">
          <LanguagesProgramming onRol={(type) => setRol(type)}/>
        </div>
      </div>
      <Cube setStyle={{bottom:60,left:50}}/>
    </div>
  );
};

export default Skill;
