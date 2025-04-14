import React from "react";
import lines from "../../images/lines.png";
import "./lines.scss";

const Lines = ({ className }) => {
  return (
    <>
      <img className={`lines ${className}`} src={lines} alt="lines" />
    </>
  );
};

export default Lines;
