import BackgroundImage from "gatsby-background-image";
import { GatsbyImage, getImage, getSrc } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";

import React from "react";

import PrimeryDiscription from "../shared/PrimaryDescription";
import "./hero.scss";
import DropDownBtn from "../DropDownBtn/index";

const Hero = (props) => {
  const {
    app_logos,
    background_image,
    button,
    app_title,
    sub_title,
    title,
    sub_title_description,
    mobile_background_image,
  } = props || {};
  const image = getImage(background_image.asset);
  const bgImage = convertToBgImage(image);
  const [isWalletPopupOpen, setIsWalletPopupOpen] = React.useState(false);
  return (
    <div className="banner-section">
      <div
        className="mobile-banner"
        style={{ backgroundImage: getSrc(mobile_background_image?.asset) }}
      ></div>
      <BackgroundImage {...bgImage} className="banner-bg">
        <div className="container ">
          <div className="hero-inner-banner">
            <div className="banner-cover">
              <div className="hero-download-text">
                <div className="bannerTitle">{title}</div>
                <div className="bannerSubTitle">{sub_title}</div>
                <PrimeryDiscription
                  paragraphText={
                    sub_title_description || "lorem ipsum de mur sdfsdf"
                  }
                />
              </div>

              <div className="hero-download-btn">
                <DropDownBtn btnLabel={button?.button_label} />
              </div>

              <div className="hero-app-download">
                <h3>{app_title}</h3>
                <ul>
                  {Array.isArray(app_logos) &&
                    app_logos.map((i) => (
                      <li>
                        <GatsbyImage
                          image={getImage(i.asset)}
                          className="imgs-icon"
                        />
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </BackgroundImage>
    </div>
  );
};
export default Hero;
