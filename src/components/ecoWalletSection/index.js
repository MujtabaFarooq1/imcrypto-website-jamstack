import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";

import DropDownBtn from "../DropDownBtn";
import "./ecowallet.scss";

const EcoWalletSection = (props) => {
  const {
    image,
    wallet_button,
    wallet_description,
    wallet_logos,
    wallet_title,
  } = props;

  return (
    <div className="imwallet-section">
      <div className="container">
        <div className="imwallet-inner">
          <div className="imwallet-left">
            <h2> {wallet_title} </h2>
            <p> {wallet_description} </p>
            <div className="money-wallet-download">
              <DropDownBtn
                btnLabel={wallet_button?.button_label}
                mobilecenter={true}
              />
              <ul>
                {wallet_logos &&
                  wallet_logos?.map((i) => (
                    <li>
                      {" "}
                      <GatsbyImage image={i?.asset?.gatsbyImageData} />
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          <div className="imwallet-right">
            <GatsbyImage image={image?.asset?.gatsbyImageData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcoWalletSection;
