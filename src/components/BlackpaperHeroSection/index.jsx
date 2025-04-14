import React from "react";
import Lines from "../Line";
import PrimeryHeading from "../shared/PrimaryHeading";
import BlackpaperGallerySection from "../BlackpaperGallerySection/index";
import "./blackpaperHeroSection.scss";

const BlackpaperHeroSection = ({
  title,
  sub_title,
  children,
  background_image,
}) => {
  return (
    <section
      id="blackpaperHeroSection"
      className="blackpaperHeroSection"
      style={{ backgroundImage: `url(${background_image?.asset?.url})` }}
    >
      <PrimeryHeading headingText={title} subtitle={sub_title} />

      <div className="extraspacing">&nbsp;</div>
      <Lines />
      {children}
    </section>
  );
};

export default BlackpaperHeroSection;
