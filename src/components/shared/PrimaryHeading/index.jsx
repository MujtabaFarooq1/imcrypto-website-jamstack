import React from "react";
import "./primaryHeading.scss";

const PrimeryHeading = ({
  headingText,
  customClass,
  subtitle,
  hideSubtitle = false,
  align,
}) => {
  return (
    <h1
      className={`primaryHeading ${customClass || ""}`}
      style={{ textAlign: align || "center" }}
    >
      {headingText}

      {!hideSubtitle && (
        <span className="primaryHeading__subtitle">{subtitle}</span>
      )}
    </h1>
  );
};

export default PrimeryHeading;
