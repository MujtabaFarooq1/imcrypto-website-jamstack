import BackgroundImage from "gatsby-background-image";
import { getImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";
import React from "react";
import Button from "../button";
import MainButton from "../shared/MainButton";

import "./topecosection.scss";

const TopEcoSection = (content) => {
  const { title, page_title, top_description, background_image, top_btn } =
    content;
  const img = getImage(background_image?.asset);
  const bgImg = convertToBgImage(img);
  return (
    <BackgroundImage {...bgImg}>
      <div className="imwalletmoney-section-header">
        <div className="container">
          <div className="section-header">
            <div className="subTitle"> {page_title} </div>
            <div className="bannerTitle"> {title} </div>
            <p> {top_description} </p>

            {typeof window !== "undefined" &&
              !window.location?.pathname.includes("wd") && (
                <MainButton
                  btnLabel={top_btn?.button_label || "Read Blackpaper"}
                  isCenter={true}
                  buttonOnClick={() => {
                    // window.location =
                    //   top_btn?.button_link || "/im-blackpaper.pdf";

                    typeof window !== "undefined" &&
                      window.open(
                        top_btn?.button_link || "/imblackpaper.pdf",
                        "_blank"
                      );
                  }}
                />
              )}
          </div>
        </div>
      </div>
    </BackgroundImage>
  );
};

export default TopEcoSection;
