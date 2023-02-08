import React, { useState } from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import Cube from "../cube/Cube"
import "./timeLine.scss";

export default function ExperienceTime() {
  const [show, setShow] = useState(false);
  const [company, setCompany] = useState({});

  const onModal = (company) => {
    const experience = {
      devsavant: {
        name: "DevSavant S.A",
        rol: "Desarrollador de software",
        description: `He realizado AppWeb para compañias con herramientas como React Angular, Node JS; donde he hecho labores como prograamdor, review code, testing`,
      },
      globant: {
        name: "Globant",
        rol: "College Student",
        description: `He realizado mis practicas laborales donde he acquerido nuevos conocimientos en el lado frontend, en base de datos como MySQL y Mongo DB, tambien pyShark, python`,
      },
      opportunit: {
        name: "OpportunIT",
        rol: "Software Developer (Apprentice)",
        description: `Durante mi preparacion que esta estudiando y practicando conocimietos sobre frontend, backend con Python y Node JS`,
      },
    };

    setCompany(experience[company]);
  };
  return (
    <div className="timeLine" id="experience">
      <Cube setStyle={{top:80,right:"5rem"}}/>
      <div className="contentTime">
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              Enero/2022 - Enero/2023
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="info" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <span
                className="companies"
                onClick={() => {
                  setShow(true);
                  onModal("devsavant");
                }}
              >
                DevSavant
              </span>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              Agosto/2021 - Enero/2022
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="info" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <span
                className="companies"
                onClick={() => {
                  setShow(true);
                  onModal("globant");
                }}
              >
                Globant
              </span>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              Marzo/2020 - julio/2021
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="info" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <span
                className="companies"
                onClick={() => {
                  setShow(true);
                  onModal("opportunit");
                }}
              >
                OpportunIT
              </span>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
      {show && (
        <div
          className="modal"
          onClick={() => {
            setShow(false);
            setCompany({});
          }}
        >
          <span className="rol">
            <b className="nameCompany">{company.name}</b>
          </span>
          <span className="rol">
            <b>Rol:</b> {company.rol}
          </span>
          <span className="rol">
            <b>Experiencia</b>
          </span>
          <p className="description">{company.description}</p>
        </div>
      )}
      <Cube setStyle={{bottom:60,left:"5rem"}}/>
    </div>
  );
}
