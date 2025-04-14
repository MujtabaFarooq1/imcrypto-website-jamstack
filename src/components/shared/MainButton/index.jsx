import React from "react";
import "./mainButton.scss";

const MainButton = ({ btnLabel, buttonOnClick, isCenter = true , customclass}) => {
  return (
    <div
      className={`mainButton__container ${
        isCenter ? "mainButton__container__center" : ""
      }`}
    >
      <button className="mainButton" onClick={buttonOnClick}>
        {btnLabel}
    
      </button>
    </div>
  );
};

export default MainButton;
