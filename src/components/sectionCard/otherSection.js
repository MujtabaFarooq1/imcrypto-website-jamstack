import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import './othersection.scss';

const OtherSection = (props) => {
  return (
    <li className="othersection-col">
      <div className="list-img">
        <GatsbyImage image={getImage(props.image)} />
      </div>
      <h6>{props.title.toUpperCase()}</h6>
      <p>{props.description}</p>
    </li>
  );
};

export default OtherSection;
