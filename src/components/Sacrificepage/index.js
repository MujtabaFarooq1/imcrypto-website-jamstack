import React from "react";
import Lines from "../Line";
import PrimeryHeading from "../shared/PrimaryHeading";
import PrimeryDiscription from "../shared/PrimaryDescription";
import handy from "../../images/sacrify.png";
import SecondaryHeading from "../shared/SecondaryHeading";
import "./sacrifice.scss";

const SacrificeSection = ({
  title,
  sub_title,
  left_section,
  rs_title,
  rs_description,
  rs_button_text,
  rs_button_link,
}) => {
  return (
    <div className="aboutHeroSection">
      <div className="top-sec">
        <SecondaryHeading
          center={true}
          primaryText={sub_title}
          secondaryText={title}
        />
      </div>
      <Lines />
      <div className="row about-internet-money mt-2">
        <div className="lg-col-6 md-col-12 img-box">
          <img
            src={left_section.asset.url}
            alt="hand_image"
            className="sacrifice"
          />
        </div>
        <div className="lg-col-6 md-col-12 content-box">
          <PrimeryHeading
            headingText={rs_title}
            customClass="primaryheadings"
          />
          <PrimeryDiscription align="left" paragraphText={rs_description} />
          <PrimeryDiscription
            align="left"
            paragraphText={"Final Details to be announced"}
          />

          <div className="aboutHeroSection__detailsWrapper">
            <h2 className="aboutHeroSection__secondaryHeading">
              What are the details of this new sacrifice?
            </h2>

            <PrimeryDiscription
              paragraphText={` This new sacrifice will NOT take place until sometime after the Beta
          version of the Internet Money Wallet is available for public testing.
          This sacrifice will be for WD on Ethereum, BSC and possibly other
          chains. This sacrifice will not dilute those who participated in the
          first sacrifice for WD on PulseChain in anyway.`}
            />
          </div>

          <div className="aboutHeroSection__detailsWrapper">
            <h2 className="aboutHeroSection__secondaryHeading">
              What about those who participated in the first movement for
              freedom of time?
            </h2>

            <PrimeryDiscription
              paragraphText={` We recognize the value and importance of the early supporters of this movement. We are keeping the 
              first sacrifice set in mind with every conversation. Finding a way to honor this set of people is very 
              important to us. One of the things we are considering at this moment is giving everyone who 
              participated in the first sacrifice some percentage of their first sacrifice value towards the new sacrifice. 
              (Effectively allocating some of the new chain WD towards “airdropping” the original sacrifice set) `}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SacrificeSection;
