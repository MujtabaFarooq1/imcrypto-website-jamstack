import React from "react";
import "./primaryDescription.scss";

const PrimeryDiscription = ({
  textColorClass,
  paragraphText,
  customClass,
  alignCenter = false,
}) => {
  return (
    <p
      className={`primeryDiscription--${
        textColorClass ? textColorClass : "primary"
      } primeryDiscription ${customClass} ${
        alignCenter ? "primeryDiscriptionCenter" : ""
      }`}
    >
      {paragraphText}
    </p>
  );
};

export default PrimeryDiscription;
