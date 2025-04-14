import React from "react";
import { AlignCenter } from "react-feather";
import Lines from "../Line";
import PrimeryDiscription from "../shared/PrimaryDescription";
import PrimeryHeading from "../shared/PrimaryHeading";
import SecondaryHeading from "../shared/SecondaryHeading";
import handPic from "../../images/hand-pic.png";
import "./about-hero.scss";

const AboutHeroSection = ({
  title,
  sub_title,
  rs_title,
  rs_sub_title,
  rs_description,
  background_image,
}) => {
  return (
    <div
      className="aboutHeroSections"
      style={{ backgroundImage: `url(${background_image?.asset?.url})` }}
    >
      <div className="top-sec">
        <PrimeryHeading headingText={title} subtitle={sub_title} />
      </div>
      <Lines className={"my-5"} />
      <div className="row about-internet-money mt-2">
        <div className="md-col-6 img-box">
          <img src={handPic} alt="hand_image" />
        </div>
        <div className="md-col-6 content-box">
          {/* <small className="heading">{rs_sub_title}</small> */}
          <SecondaryHeading
            align="left"
            primaryText={rs_sub_title}
            secondaryText={rs_title}
          />
          <PrimeryDiscription align="left" paragraphText={rs_description} />
        </div>
      </div>
    </div>
  );
};

export default AboutHeroSection;
