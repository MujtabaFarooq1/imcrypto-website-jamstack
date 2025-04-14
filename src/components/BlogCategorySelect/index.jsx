import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import BlogsNavWrap from "../BlogsNavWrap/index";
import "./blogCategorySelect.scss";

const query = graphql`
  query allCategories {
    # --------------------------
    # --------------------------
    # --------------------------
    # All Categories
    # --------------------------
    # --------------------------
    # --------------------------

    allSanityCategories {
      edges {
        node {
          category_name
          slug {
            _key
            _type
            current
          }
        }
      }
    }

    # --------------------------
    # --------------------------
    # --------------------------
    #  All Categories
    # --------------------------
    # --------------------------
    # --------------------------
  }
`;

const BlogCategorySelect = ({ allData, setFilteredData }) => {
  const { allSanityCategories } = useStaticQuery(query);
  const [selectedOption, setSelectedOption] = React.useState("");
  const [firstInitialization, setFirstInitialization] = React.useState(true);

  React.useEffect(() => {
    if (!firstInitialization && selectedOption !== "") {
      // console.clear();
      // console.log(selectedOption);
      // console.log(allData);
      setFilteredData(
        [...allData].filter(({ node }) =>
          node?.blog_categories?.some(
            ({ category_name }) =>
              category_name.toLowerCase() === selectedOption
          )
        )
      );
    } else {
      setFirstInitialization(false);
    }
  }, [selectedOption]);

  return (
    <BlogsNavWrap title={"Categories"}>
      <div className="blogCategorySelect">
        <select
          onChange={(e) => {
            setSelectedOption(e?.target?.value?.toLowerCase());
          }}
        >
          <option value={``} disabled selected={selectedOption === ""} hidden>
            Select Category
          </option>

          {allSanityCategories.edges.map((item) => (
            <option value={item?.node?.slug?.current || ""}>
              {item?.node?.category_name || "Option"}
            </option>
          ))}
        </select>
      </div>
    </BlogsNavWrap>
  );
};

export default BlogCategorySelect;
