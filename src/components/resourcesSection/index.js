import { graphql, Link, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React, { useContext, useState } from "react";
import { getLink } from "../../utils/helper";
import ResourcesVideoSection from "../resourcesVideoSection";
import ResourceArticleSection from "../resourceArticleSection";
import ResourcesHelpfullinksSection from "../resourcesHelpful-linksSection";
import "./video-section.scss";
import { GlobalContext } from "../../context";
import ResourceStatisticsSection from "../resourceStatisticsSection";
const ResourcesSection = ({ location }) => {
  const { resources } = useContext(GlobalContext);
  const { data, method } = resources;
  const { tab } = data;
  const { setTab } = method;
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="ressource-section">
      <div className="container">
        <div className="reasource-tab-section">
          <ul>
            <li>
              <button
                onClick={() => setTab("Statistics")}
                className={tab === "Statistics" && "active"}
              >
                Statistics
              </button>
            </li>
            <li>
              <button
                onClick={() => setTab("Videos")}
                className={tab === "Videos" && "active"}
              >
                Videos
              </button>
            </li>
            <li>
              <button
                onClick={() => setTab("Articles")}
                className={tab === "Articles" && "active"}
              >
                Articles
              </button>
            </li>
            <li>
              <button
                onClick={() => setTab("Helpful Links")}
                className={tab === "Helpful Links" && "active"}
              >
                Helpful Links
              </button>
            </li>
          </ul>
        </div>
        <div className="video-section">
          <div className={data.tab !== 'Statistics' ? "video-searchbar" : ""}>
            {data.tab !== 'Statistics' && <input
              type="text"
              placeholder={`Search ${tab}...`}
              value={searchValue}
              name={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />}
          </div>
          {tab === "Videos" && (
            <ResourcesVideoSection searchValue={searchValue} extra_props={{location}}/>
          )}
          {tab === "Statistics" && (
            <h2 style={{ color: "#FFFFFF" }}>
              {" "}
              <ResourceStatisticsSection searchValue={searchValue} />{" "}
            </h2>
          )}
          {tab === "Articles" && (
            <h2 style={{ color: "#FFFFFF" }}>
              {" "}
              <ResourceArticleSection searchValue={searchValue} />{" "}
            </h2>
          )}
          {tab === "Helpful Links" && (
            <h2 style={{ color: "#FFFFFF" }}>
              {" "}
              <ResourcesHelpfullinksSection searchValue={searchValue} />{" "}
            </h2>
          )}
        </div>
      </div>
    </div>
  );
};
export default ResourcesSection;