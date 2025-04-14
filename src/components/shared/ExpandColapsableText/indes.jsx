import React from "react";
import "./expandColapsableText.scss";

const ExpandColapsableText = ({ wordToShow, text = "", cusomClass }) => {
  const [isCollapsed, setIsCollapsed] = React.useState(true);
  return (
    <div className={`expandColapsableText ${cusomClass}`}>
      {isCollapsed ? `${text.slice(0, wordToShow)} ...   ` : `${text}  `}
      <span
        className="expandColapsableText__colapseToggle"
        onClick={() => {
          setIsCollapsed((prev) => !prev);
        }}
      >
        {isCollapsed ? "show more" : "show less"}
      </span>
    </div>
  );
};

export default ExpandColapsableText;
