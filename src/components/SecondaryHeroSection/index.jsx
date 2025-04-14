import React from "react";
import Lines from "../Line";
import PrimeryHeading from "../shared/PrimaryHeading";
import "./secondaryHeroSection.scss";

const SecondaryHeroSection = ({
  title,
  sub_title,
  children,
  background_image,
}) => {
  return (
    <section
      id="secondaryHeroSection"
      className="secondaryHeroSection"
      style={{ backgroundImage: `url(${background_image?.asset?.url})` }}
    >
      <PrimeryHeading headingText={title} subtitle={sub_title} />

      <Lines />
      {children}
    </section>
  );
};

export default SecondaryHeroSection;
