import React from "react";
import "./sacrificeRoadMap.scss";
import { StaticImage } from "gatsby-plugin-image";

const SacrificeRoadMap = () => {
  return (
    <section className="sacrificeRoadMap">
      <StaticImage src="../../images/sacrifice_roadmap1.png" loading="lazy" />
      <StaticImage src="../../images/sacrifice_roadmap2.png" loading="lazy" />
      <StaticImage src="../../images/sacrifice_roadmap3.png" loading="lazy" />
    </section>
  );
};

export default SacrificeRoadMap;
