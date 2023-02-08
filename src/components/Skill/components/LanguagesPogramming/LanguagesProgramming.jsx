import React, { useState } from "react";
import html from "../../../../assets/html.svg";
import sass from "../../../../assets/sass.svg";
import react from "../../../../assets/react.svg";
import angular from "../../../../assets/angular.svg";
import next from "../../../../assets/next.svg";
import git from "../../../../assets/git.svg";
import mysql from "../../../../assets/mysql.svg";
import mongo from "../../../../assets/mongoDB.svg";
import node from "../../../../assets/node.svg";
import "./LanguagesProgramming.scss";

const LanguagesProgramming = ({ onRol }) => {
  const [selected, isSelected] = useState("frontend");

  const isSelectedBtn = (type, selected) => {
    return selected === type;
  };

  const setListLanguages = (rol) => {
    const listLanguages = {
      frontend: [
        { name: "HTML", icon: html },
        { name: "Sass", icon: sass },
        { name: "React", icon: react },
        { name: "Angular", icon: angular },
        { name: "Next JS", icon: next },
        { name: "Git", icon: git },
      ],
      backend: [
        { name: "Node JS", icon: node },
        { name: "MySQL", icon: mysql },
        { name: "MongoDB", icon: mongo },
        { name: "Git", icon: git },
      ],
    };

    return listLanguages[rol] || [];
  };

  return (
    <div className="languages">
      <div className="TypeRol">
        <button
          className={`btn Frontend ${
            isSelectedBtn("frontend", selected) && "selected"
          }`}
          onClick={() => {
            isSelected("frontend");
            onRol("frontend");
          }}
        >
          Frontend
        </button>
        <button
          className={`btn Backend ${
            isSelectedBtn("backend", selected) && "selected"
          }`}
          onClick={() => {
            isSelected("backend");
            onRol("backend")
          }}
        >
          Backend
        </button>
      </div>
      <div className="listLanguages">
        {setListLanguages(selected).map((item, index) => (
          <div className="contentLanguage" key={index}>
            <img
              className="icon"
              src={item.icon}
              alt={`icon from ${item.name}`}
            />
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguagesProgramming;
