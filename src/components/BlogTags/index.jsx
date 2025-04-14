import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import BlogsNavWrap from "../BlogsNavWrap/index";
import "./blogTags.scss";

const query = graphql`
  query allBlogTags {
    # --------------------------
    # --------------------------
    # --------------------------
    # All Tags
    # --------------------------
    # --------------------------
    # --------------------------

    allSanityTags {
      edges {
        node {
          tag_name
        }
      }
    }

    # --------------------------
    # --------------------------
    # --------------------------
    #  All Tags
    # --------------------------
    # --------------------------
    # --------------------------
  }
`;

const BlogTags = ({ allData, setFilteredData }) => {
  const { allSanityTags } = useStaticQuery(query);
  const [selectedOption, setSelectedOption] = React.useState("");
  const [firstInitialization, setFirstInitialization] = React.useState(true);

  React.useEffect(() => {
    if (!firstInitialization && selectedOption !== "") {
      setFilteredData(
        [...allData].filter(({ node }) =>
          node?.tags?.some(
            ({ tag_name }) => tag_name.toLowerCase() === selectedOption
          )
        )
      );
    } else {
      setFirstInitialization(false);
    }
  }, [selectedOption]);

  return (
    <BlogsNavWrap title={"Tags"}>
      <div className="blogTags">
        {allSanityTags?.edges?.map(({ node }) => (
          <button
            onClick={() => {
              setSelectedOption(node?.tag_name.toLowerCase());
            }}
            className={`blogTags__item  ${
              selectedOption === node?.tag_name.toLowerCase()
                ? "blogTags__item--active"
                : ""
            }`}
          >
            {node?.tag_name || "#HashTag"}
          </button>
        ))}
      </div>
    </BlogsNavWrap>
  );
};

export default BlogTags;
