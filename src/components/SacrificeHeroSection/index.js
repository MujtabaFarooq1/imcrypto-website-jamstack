import React from "react";
import Lines from "../Line";
import PrimeryHeading from "../shared/PrimaryHeading";
import PrimeryDiscription from "../shared/PrimaryDescription";
import handy from "../../images/sacrify.png";
import SecondaryHeading from "../shared/SecondaryHeading";
import "./sacrificeHero.scss";

import hero_baner_one from "../../images/IMD 500px 1.png";
import hero_baner_two from "../../images/fwd_logo_f.png";

const SacrificeHeroSection = ({
  title,
  left_asset,
  right_asset,
  begins_title,
}) => {
  return (
    <div className="scrifice_hero_section">
      <div className="sacrifice_hero_banner">
        <div className="hero_banner_one">
          <img
            src={left_asset?.asset?.url || hero_baner_one}
            className="banner_img"
          />
        </div>
        <div className="hero_banner_head">
          <h2 className="sacrifice_hero_heading">{title}</h2>
        </div>
        <div className="hero_banner_two">
          <img
            src={right_asset?.asset?.url || hero_baner_two}
            className="banner_img"
          />
        </div>
      </div>
      <Lines />
      <div className="scrifice_hero_bottom">
        <h3 className="scrifice_hero_bottom_text">{begins_title?.replace('BEGINS', 'ENDS')}</h3>
      </div>
    </div>
  );
};

export default SacrificeHeroSection;
