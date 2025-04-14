import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import BlogsArchives from "../BlogArchives";
import BlogCategorySelect from "../BlogCategorySelect";
import BlogTags from "../BlogTags";
import SearchByPost from "../SearchByPost";
import PrimeryHeading from "../shared/PrimaryHeading";
import "./allBlogsPageContent.scss";
import BlogCard from "./blogCard";
import BlogPagination from "./blogPagination";
import Lines from "../../components/Line/index";

const query = graphql`
  query blogsContent {
    # --------------------------
    # --------------------------
    # --------------------------
    # All Blogs Data
    # --------------------------
    # --------------------------
    # --------------------------

    allSanityBlogs {
      edges {
        node {
          title
          desc
          blog_image {
            asset {
              gatsbyImageData
            }
          }
          created_date
          tags {
            tag_name
          }
          blog_categories {
            category_name
            slug {
              _key
              _type
              current
            }
          }
        }
      }
    }

    # --------------------------
    # --------------------------
    # --------------------------
    #  All Blogs Data End
    # --------------------------
    # --------------------------
    # --------------------------
  }
`;

const AllBlogsPageContent = ({ lines = true }) => {
  const { allSanityBlogs } = useStaticQuery(query);
  const [dataToShow, setDataToShow] = React.useState();
  const [filteredData, setFilteredData] = React.useState(allSanityBlogs?.edges);

  return (
    <section id="allBlogsPageContent" className="allBlogsPageContent">
      <div className="row">
        <div className="lg-col-8 md-col-12 w-mx-100">
          <div className="fullWrapper">
            <div className="row">
              <>
                {dataToShow?.length > 0 ? (
                  dataToShow?.map(({ node }) => (
                    <div className="lg-col-6">
                      <BlogCard {...node} />
                    </div>
                  ))
                ) : (
                  <PrimeryHeading headingText={"No Blogs Found!"} />
                )}
              </>
            </div>
          </div>

          <div className="row">
            <div className="lg-col-12 pagination__col">
              <BlogPagination
                totalItems={filteredData?.length}
                itemToShowPerPage={10}
                setDataToShow={setDataToShow}
                filteredData={filteredData}
              />
            </div>
          </div>
        </div>

        <div className="lg-col-4 md-col-12 sm-col-12">
          <SearchByPost
            allData={allSanityBlogs?.edges}
            setFilteredData={setFilteredData}
          />

          <BlogsArchives />
          <BlogCategorySelect
            allData={allSanityBlogs?.edges}
            setFilteredData={setFilteredData}
          />
          <BlogTags
            allData={allSanityBlogs?.edges}
            setFilteredData={setFilteredData}
          />
        </div>
      </div>
      <div className="news__letter_above_lines">{lines && <Lines />}</div>
    </section>
  );
};

export default AllBlogsPageContent;
