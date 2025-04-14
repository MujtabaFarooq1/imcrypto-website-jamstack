import React from "react";
import "./secondaryHeading.scss";

const SecondaryHeading = ({
  primaryText,
  secondaryText,
  center = false,
  backcroundTextClass,
}) => {
  return (
    <h2
      className={`secondaryHeading  ${
        center ? "secondaryHeading--center" : ""
      }`}
    >
      <span className={`secondaryHeading__subtitle`}>{primaryText}</span>
      {secondaryText}
    </h2>
  );
};

export default SecondaryHeading;
