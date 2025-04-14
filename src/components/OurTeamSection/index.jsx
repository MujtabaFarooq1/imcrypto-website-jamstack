import React, { useState } from "react";
import ExpandColapsableText from "../shared/ExpandColapsableText/indes";
import MainButton from "../shared/MainButton";
import PrimeryDiscription from "../shared/PrimaryDescription";

import SecondaryHeading from "../shared/SecondaryHeading";

import "./index.scss";

const OurTeamSection = ({ title, sub_title, description, experts }) => {
  return (
    <div className="ourTeam">
      <div className="container text-center">
        <div className="container text-center">
          <SecondaryHeading
            primaryText={sub_title}
            secondaryText={title}
            center={true}
          />
          <PrimeryDiscription
            paragraphText={description}
            customClass="primary-description"
          />
        </div>

        <div className="row text-light text-center user-row">
          {experts.map(({ title, description, image }) => (
            <div className="lg-col-6 team_img">
              <img
                src={image.asset.url}
                alt="user_image"
                className="our-team"
              />
              <h4 className="user-title">{title}</h4>
              {/* <div className="user-desc">{description}</div> */}
              <ExpandColapsableText
                cusomClass={"user-desc"}
                text={description}
                wordToShow={195}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeamSection;
