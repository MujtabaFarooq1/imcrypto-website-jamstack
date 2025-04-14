import BackgroundImage from "gatsby-background-image";
import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";

import Button from "../button";
import "./purpose.scss";
import DropDownBtn from "../DropDownBtn";

const Purpose = (props) => {
  const {
    background_image,
    section_title,
    title,
    description,
    section_button,
    wallet_title,
    wallet_description,
    wallet_button,
    wallet_logos,
    image: wallet_image,
  } = props || {};
  console.log(props, "props");
  const image = getImage(background_image?.asset);
  const bgImage = convertToBgImage(image);

  return (
    <>
      {section_title &&
      title &&
      description &&
      section_button &&
      background_image ? (
        <div className="purpose-section">
          <BackgroundImage {...bgImage}>
            <div className="container">
              <div className="purpose-inner-section">
                <div className="section-header">
                  {section_title && <h6>{section_title}</h6>}
                  {title && <h2>{title} </h2>}
                  {description && <p>{description}</p>}
                  {section_button && (
                    <div className="learn-more">
                      <Button link={section_button?.button_link}>
                        {section_button?.button_label || ""}
                      </Button>
                    </div>
                  )}
                </div>

                <div className="purpose-money-wallet">
                  <div className="purpose-money-left">
                    <div className="section-header">
                      <h2>{wallet_title}</h2>
                      <p>{wallet_description}</p>
                    </div>

                    <div className="money-wallet-download">
                      <DropDownBtn
                        btnLabel={wallet_button?.button_label}
                        mobilecenter={true}
                      />
                      <ul>
                        {Array.isArray(wallet_logos) &&
                          wallet_logos?.map((i) => (
                            <li>
                              <GatsbyImage image={getImage(i?.asset)} />
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>
                  <div className="purpose-money-right">
                    <GatsbyImage image={getImage(wallet_image?.asset)} />
                  </div>
                </div>
              </div>
            </div>
          </BackgroundImage>
          <div className="lines-bg"></div>
        </div>
      ) : (
        <div className="wd_purpose purpose-section">
          <div className="container">
            {" "}
            <div className="purpose-money-wallet">
              <div className="purpose-money-left">
                <div className="section-header">
                  <h2>{wallet_title}</h2>
                  <p>{wallet_description}</p>
                </div>

                <div className="money-wallet-download">
                  <DropDownBtn
                    btnLabel={wallet_button?.button_label}
                    mobilecenter={true}
                  />
                  <ul>
                    {Array.isArray(wallet_logos) &&
                      wallet_logos?.map((i) => (
                        <li>
                          <GatsbyImage image={getImage(i?.asset)} />
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
              <div className="purpose-money-right">
                <GatsbyImage image={getImage(wallet_image?.asset)} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Purpose;
