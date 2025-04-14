import React from "react";
import Layout from "../components/layout";
import SectionHero from "../components/shared/SectionHero/indes";
import Email from "../components/email";
import BlogDetailHeroMeta from "../components/blogDetailsHeroMeta";
import BlogDetailPagination from "../components/AllBlogsPageContent/blogDetailPagination/index";
import BlogDetailContent from "../components/AllBlogsPageContent/blogDetailContent/index";
import SimilarBlogs from "../components/SimilarBlogs";

const AllBlogs = ({ location, pageContext }) => {
  const { data } = pageContext;

  const {
    title,
    author,
    created_date,
    nextNodeSlug,
    prevNodeSlug,
    similarBlogs,
  } = data;

  return (
    <Layout location={location} hideBlogs={true}>
      <section id="blogDetailsPage" className="blogDetailsPage">
        <SectionHero title={title} headerStyle={"secondary"}>
          <BlogDetailHeroMeta author={author} created_date={created_date} />
        </SectionHero>

        <div className="allBlogsPageContent">
          <div className="row">
            <div className="lg-col-8 md-col-12 w-mx-100">
              <div className="row">
                <div className="lg-col-12">
                  <BlogDetailContent {...data} />
                </div>
              </div>

              <div className="row">
                <div className="lg-col-12 pagination__col">
                  <BlogDetailPagination
                    nextNodeSlug={nextNodeSlug}
                    prevNodeSlug={prevNodeSlug}
                  />
                </div>
              </div>
            </div>

            <div className="lg-col-4 md-col-12 sm-col-12">
              <SimilarBlogs similarBlogs={similarBlogs} />
            </div>
          </div>
        </div>

        <Email />
      </section>
    </Layout>
  );
};

export default AllBlogs;
