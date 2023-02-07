import React from "react";
import "./link.scss"

const Links = ({ path, title }) => {
  return <a className="link" href={path}>{title}</a>;
};

export default Links;
