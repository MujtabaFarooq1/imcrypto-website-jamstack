import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";
import React from "react";
import { useState } from "react";
import { LifeBuoy } from "react-feather";
import Button from "../button";
import "./helpful-section.scss";

const ResourcesHelpfullinksSection = (props) => {
  const [loadNo, setLoadNo] = useState(6);
  const { searchValue } = props || {};
  const { allHelpfulLinks } = useStaticQuery(graphql`
    {
      allHelpfulLinks: allSanityHelpfulLinksPage {
        edges {
          node {
            background_image {
              asset {
                gatsbyImageData(formats: WEBP, placeholder: NONE)
              }
            }
            title {
              link
              title
            }
            tags {
              tag_name
              _key
            }
          }
        }
      }
    }
  `);

  const serVal =  allHelpfulLinks?.edges
  ?.slice(0, loadNo)
  ?.filter((i) =>
    i?.node?.title?.title
      .toLowerCase()
      ?.includes(searchValue?.toLowerCase())
  ).length
  return (
    <div className="helpful-section">
      <ul className={searchValue == '' ? "helpfull-grid" : serVal != 0 && "helpfull-grid"}>
        {allHelpfulLinks?.edges?.filter((i) =>
          i?.node?.title?.title
            .toLowerCase()
            ?.includes(searchValue?.toLowerCase())
        ).length !== 0 ? (
          allHelpfulLinks?.edges
            ?.slice(0, loadNo)
            ?.filter((i) =>
              i?.node?.title?.title
                .toLowerCase()
                ?.includes(searchValue?.toLowerCase())
            )
            ?.map((i, index) => {
              // const img = getImage(i?.node?.background_image?.asset);
              // const bgImg = convertToBgImage(img);
              return (
                <li>
                  <div className="help-col">
                    {/* <BackgroundImage {...bgImg}></BackgroundImage> */}
                    <div className="help-col-left">
                      <GatsbyImage
                        image={getImage(i?.node?.background_image?.asset)}
                      />
                    </div>
                    <div className="help-col-right">
                      <div className="help-col-title">
                        <a href={i?.node?.title?.link} target="_blank">{i.node.title.title}</a>
                      </div>
                      <div className="helpful-col-tags">
                        <ul>{i.node.tags.map((i) => <li><a>{i.tag_name}</a></li>)}</ul>
                      </div>
                    </div>

                  </div>
                </li>
              );
            })
        ) : (
          <h4>No Links Found</h4>
        )}
      </ul>
      {(loadNo < allHelpfulLinks?.edges?.length && allHelpfulLinks?.edges?.filter((i) =>
        i?.node?.title?.title
          .toLowerCase()
          ?.includes(searchValue?.toLowerCase())
      ).length !== 0) && (
          <Button onClick={() => setLoadNo(loadNo + 6)}>
            Load More Helpful Links
          </Button>
        )}
    </div>
  );
};

export default ResourcesHelpfullinksSection;
