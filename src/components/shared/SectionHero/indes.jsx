import React from "react";
import Lines from "../../Line";
import PrimeryHeading from "../PrimaryHeading";

import "./sectionHero.scss";
import SecondaryHeading from "../SecondaryHeading/index";

// style={{ backgroundImage: `url(${background_image.asset.url})` }}

const SectionHero = ({
  title = "section Title",
  sub_title = "section Subtitle",
  description,
  background_image = { asset: { url: "/images/hero.png" } },
  lines = true,
  headerStyle = "primary",
  children,
}) => {
  return (
    <div className="sectionHero">
      {headerStyle === "primary" && (
        <SecondaryHeading
          primaryText={title}
          secondaryText={sub_title}
          center={true}
        />
      )}

      {headerStyle === "secondary" && <PrimeryHeading headingText={title} />}

      {/* secondary */}

      {description && <p className="sectionHero__desc"> {description} </p>}

      {children && <div className="sectionHero__children"> {children} </div>}

      {lines && <Lines />}
    </div>
  );
};

export default SectionHero;
