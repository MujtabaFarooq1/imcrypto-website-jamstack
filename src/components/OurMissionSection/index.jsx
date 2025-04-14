import React from "react";
import Lines from "../Line";
import PrimeryDiscription from "../shared/PrimaryDescription";
import SecondaryHeading from "../shared/SecondaryHeading";

import "./successanduser.scss";
const OurMissionSection = ({ title, sub_title, description, sections }) => {
  return (
    <div className="success-and-users">
      <div className="wraper">
        <div className="row">
          <div className="md-col-6">
            <SecondaryHeading
              align="left"
              primaryText={sub_title}
              secondaryText={title}
            />
          </div>
          <div
            className="md-col-6"
            style={{ display: "flex", alignItems: "center" }}
          >
            <PrimeryDiscription align="left" paragraphText={description} />
          </div>
        </div>
      </div>
      <div>
        <div className="wraper">
          <div className="row ">
            {sections.map(({ title, description, image }) => (
              <div className="lg-col-4 md-col-6 ">
                <div className="card-box">
                  <img src={image.asset.url} alt="logo_image" />
                  <h4 className="title">{title}</h4>
                  <PrimeryDiscription
                    paragraphText={description}
                    customClass="desc"
                  />
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
      <Lines className={"my-5"} />
    </div>
  );
};

export default OurMissionSection;
