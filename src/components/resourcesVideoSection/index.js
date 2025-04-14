import { graphql, Link, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { isArray } from "lodash";
import React, { useState, useEffect } from "react";
import { getLink, getParam } from "../../utils/helper";
import Button from "../button";
import { clearParam, setParam } from "../../utils/helper";

const ResourcesVideoSection = (props) => {
  const { searchValue } = props || {};
  const [loadItem, setloadItem] = useState(7);
  const [currTags, setcurrTags] = useState([]);
  const { extra_props } = props || {};
  const { pagination, location } = extra_props || {};
  const tagItem = getParam(location, `tags`)?.split("__");
  const { allVideosDetails } = useStaticQuery(graphql`
    {
      allVideosDetails: allSanityVideoDetailPage {
        edges {
          node {
            slug {
              current
              _key
              _type
            }
            thumbnail {
              asset {
                gatsbyImageData(formats: WEBP, placeholder: NONE)
              }
            }
            url
            tags {
              tag_name
              _id
            }
            title
            description {
              children {
                text
                _key
                _type
              }
            }

            sub_description
          }
        }
      }
    }
  `);
  const showTags = (tag) => {
    return (
      <>
        <a
          onClick={() =>
            setcurrTags((state) => {
              if (state.includes(tag.trim()?.replace(/[^a-zA-Z0-9 ]/g, ""))) {
                return state.filter(
                  (i) => i !== tag.trim()?.replace(/[^a-zA-Z0-9 ]/g, "")
                );
              } else {
                return [...state, tag.trim()?.replace(/[^a-zA-Z0-9 ]/g, "")];
              }
            })
          }
        >
          {" "}
          {tag}{" "}
        </a>
      </>
    );
  };
  useEffect(() => {
    if (currTags.length > 0) {
      setParam(location, {
        key: `tags`,
        value: currTags.map((i) => i).join("__"),
      });
    } else {
      clearParam(location, "tags");
    }
  }, [currTags]);
  const allVideosList = (i) => {
    return (
      <>
        <li className="video-col">
          <div className="video-icon">
            <Link to={getLink("resources/" + i?.node?.slug?.current)}>
              <div className="video-col-img">
                <GatsbyImage
                  image={getImage(i?.node?.thumbnail?.asset?.gatsbyImageData)}
                />
                <div class="play-btn"></div>
              </div>
              <a className="title-link"> {i?.node?.title} </a>
            </Link>
          </div>
          <p> {i?.node?.sub_description} </p>
          <div className="video-col-tags">
            <ul>
              <li>
                {Array.isArray(i?.node?.tags) &&
                  i?.node?.tags?.map((tag) => showTags(tag?.tag_name))}
              </li>
            </ul>
          </div>
        </li>
      </>
    );
  };
  const getItems = (items, count = 2) => {
    let content = [
      <li>
        <ul className={count == 3 ? "col-3" : "col-2"}>
          {items.slice(0, count)?.map((i) => allVideosList(i))}
        </ul>
      </li>,
    ];
    if (items.slice(count).length > 0) {
      content.push(getItems(items.slice(count), count == 3 ? 2 : 3));
    }
    return content;
  };
  return (
    <>
      <div className="videos-tab">
        <ul>
          {Array.isArray(allVideosDetails?.edges) &&
          allVideosDetails?.edges
            ?.filter((i) =>
              i?.node?.title
                ?.toLowerCase()
                ?.includes(searchValue?.toLowerCase())
            )
            .filter(
              (i) =>
                i.node.tags.filter(
                  (tg) =>
                    !!!tagItem ||
                    tagItem?.filter(
                      (i) => i == tg?.tag_name?.replace(/[^a-zA-Z0-9 ]/g, "")
                    ).length > 0
                ).length > 0
            ).length !== 0 ? (
            getItems(
              allVideosDetails.edges
                .slice(0, loadItem)
                .filter((i) =>
                  i?.node?.title
                    ?.toString()
                    ?.toLowerCase()
                    ?.includes(searchValue?.toLowerCase())
                )
                .filter(
                  (i) =>
                    i.node.tags.filter(
                      (tg) =>
                        !!!tagItem ||
                        tagItem?.filter(
                          (i) =>
                            i == tg?.tag_name?.replace(/[^a-zA-Z0-9 ]/g, "")
                        ).length > 0
                    ).length > 0
                )
            )
          ) : (
            <h4> No Videos Found! </h4>
          )}
        </ul>
      </div>
      {loadItem < allVideosDetails.edges.length &&
        allVideosDetails?.edges?.filter((i) =>
          i?.node?.title?.toLowerCase()?.includes(searchValue?.toLowerCase())
        ).length !== 0 && (
          <Button onClick={() => setloadItem(loadItem + 5)}>
            Load More videos
          </Button>
        )}
    </>
  );
};

export default ResourcesVideoSection;
