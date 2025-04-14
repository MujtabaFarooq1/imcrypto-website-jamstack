import React from "react";
import { getImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from "gatsby-background-image";
import "./ecoInnerHeroSection.scss";

const EcoInnerHeroSection = (props) => {
  const { title, section_title, description, background_image } = props || {};
  const image = getImage(background_image?.asset);
  const bgImage = convertToBgImage(image);
  return (
    <div className="ecosystem-section-header">
      <BackgroundImage fluid={bgImage?.fluid}>
        <div className="container">
          <div className="ecosystem-banner">
            <div className="section-header">
              <div className="subTitle">{section_title}</div>
              <div className="bannerTitle">{title}</div>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </BackgroundImage>
    </div>
  );
};

export default EcoInnerHeroSection;
