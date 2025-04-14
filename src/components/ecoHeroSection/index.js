import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import "./ecohero.scss";
import { PortableText } from "@portabletext/react";
const EcoHeroSection = (props) => {
  const { title, sub_title, section_title, image, description_rich, button } =
    props || {};

  return (
    <div className="what-imwallet-section">
      <div className="container">
        <div className="what-imwallet-inner">
          <div className="what-imwallet-left">
            <h6> {section_title} </h6>
            <h2> {title} </h2>
            <PortableText value={description_rich} />
            {sub_title && <span> {sub_title} </span>}
            {button && (
              <button>
                <a href={button?.button_link} target={"_blank"}>
                  {" "}
                  {button?.button_label}{" "}
                </a>
              </button>
            )}
          </div>
          <div className="what-imwallet-right">
            <GatsbyImage image={getImage(image?.asset?.gatsbyImageData)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcoHeroSection;
