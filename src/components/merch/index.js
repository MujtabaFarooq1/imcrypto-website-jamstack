import React from "react";
import { getImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from "gatsby-background-image";
import "../../styles/globalstyle.scss";
import "./merch.scss";

const Merch = (props) => {
  const { title, sub_title, description, background_image } = props || {};
  const image = getImage(background_image?.asset);
  const bgImage = convertToBgImage(image);
  
  return (
    <div className="merch-section">
      <BackgroundImage fluid={bgImage?.fluid}>
        <div className="container">
          <div className="section-header">
            <h6>{title}</h6>
            <h1>{sub_title}</h1>
            <p>{description}</p>
          </div>
        </div>
      </BackgroundImage>
    </div>
  );
};

export default Merch;
