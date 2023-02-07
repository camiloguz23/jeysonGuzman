import React from "react";
import whatsapp from "../../assets/whatsapp.svg";
import email from "../../assets/email.svg";
import linkedin from "../../assets/linkedin.svg";
import cv from "../../assets/camilo_cv.pdf";
import "./about.scss";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="containerAbout">
        <div className="info">
          <p>
            El es un frontend developer ReactJS, con experiencia en desarrollo
            web con Javascript utilizando frameworks como React JS, y Angular
            con experiencia de 2 años entre las practicas y laboral. Cuenta con
            experiencia con React, Angular, Git, PWA y conocimientos en
            metodología SCRUM.
          </p>
        </div>

        <div className="contact">
          <span className="titleContact">
            <i className="material-symbols-outlined">stars</i>Contactos
          </span>

          <div className="linksContacts">
            <a
              target="_blank"
              href="https://wa.me/573238082776?text=hola%20quiero%20contactar%20con%20usted"
            >
              <img src={whatsapp} alt="icon whatsApp" />
            </a>
            <a target="_blank" href="mailto:jeysonkmguzman@gmail.com">
              <img src={email} alt="icon whatsApp" />
            </a>
            <a
              href="https://www.linkedin.com/in/jeysoncamiloguzmanrico/"
              target="_blank"
            >
              <img src={linkedin} alt="icon from linkedin" />
            </a>
          </div>
        </div>
        <div className="download">
          <a href={cv} download>
            <button className="btnCV">
              Download CV <i className="material-symbols-outlined">download</i>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
