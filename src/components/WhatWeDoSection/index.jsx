import React from "react";
import DropDownBtn from "../DropDownBtn";

import PrimeryDiscription from "../shared/PrimaryDescription";
import SecondaryHeading from "../shared/SecondaryHeading";

import "./whatWeDoSection.scss";

const WhatWeDoSection = ({
  background_image,
  title,
  sub_title,
  description,
  left_section_image,
  start_now_btn_text,
  start_now_btn_link,
}) => {
  return (
    <div className="wraper">
      <div className="row">
        <div className="md-col-6">
          <img
            src={left_section_image.asset.url}
            alt=""
            className="left-section-img"
          />
        </div>
        <div className="md-col-6 content-box">
          <SecondaryHeading
            align="left"
            primaryText={sub_title}
            secondaryText={title}
          />
          <PrimeryDiscription align="left" paragraphText={description} />

          <DropDownBtn btnLabel={start_now_btn_text} />
        </div>
      </div>
    </div>
  );
};

export default WhatWeDoSection;
