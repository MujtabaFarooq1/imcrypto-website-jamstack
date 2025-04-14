import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Button from "../button";
import './keysection.scss';
import { Link } from "gatsby";
import { getLink } from "../../utils/helper";

const KeySection = (props) => {

  return (
    <li className="features-col">
      <div className="feature-img-cover">
        <GatsbyImage image={getImage(props.image)} />
      </div>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <div className="learn-more">
        <Button link={props.button?.button_link}>
          {props.button?.button_label || ""}
        </Button>

      </div>
    </li>
  );
};

export default KeySection;
