import React from "react";
import "./cube.scss";

const Cube = ({setStyle}) => {
  return (
    <div className="wrap" style={setStyle}>
      <div className="cube">
        <div className="up"></div>
        <div className="down"></div>
        <div className="lado1"></div>
        <div className="lado2"></div>
        <div className="lado3"></div>
        <div className="lado4"></div>
      </div>
    </div>
  );
};

export default Cube;
