import React from "react";
import BlogCard from "../AllBlogsPageContent/blogCard";
import BlogsNavWrap from "../BlogsNavWrap";

import "./similarBlogs.scss";

const dat = {
  title: "Lorem Ipsum is simply dummy text industry",
  desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, wnturies, but also the leaptypesetting, remaining eersions of Lorem Ipsum. Lorem Ipsum is simplsum has been the industry's stany text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n\nRemaining eersions of Lorem Ipsum. Lorem Ipsum is simplsum has been the industry's stany text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n\nLorem Ipsum is simply dummy text of the printing and typesetting industry.\nLorem Ipsum has been the industry's \nStandard dummy text ever since the 1500s, \nWnturies, but also the leaptypesetting,\nremaining eersions of Lorem Ipsum.\n\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, wnturies, but also the leaptypesetting, remaining eersions of Lorem Ipsum. Lorem Ipsum is simplsum has been the industry's stany text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  blog_image: {
    asset: {
      gatsbyImageData: {
        images: {
          sources: [],
          fallback: {
            src: "https://cdn.sanity.io/images/94xksvt2/production/b79926a89cb4c394351e02a71cad47ecaf3de6b3-790x436.png?w=790&h=436&auto=format",
            srcSet:
              "https://cdn.sanity.io/images/94xksvt2/production/b79926a89cb4c394351e02a71cad47ecaf3de6b3-790x436.png?rect=1,0,788,436&w=320&h=177&auto=format 320w,\nhttps://cdn.sanity.io/images/94xksvt2/production/b79926a89cb4c394351e02a71cad47ecaf3de6b3-790x436.png?w=654&h=361&auto=format 654w,\nhttps://cdn.sanity.io/images/94xksvt2/production/b79926a89cb4c394351e02a71cad47ecaf3de6b3-790x436.png?w=768&h=424&auto=format 768w,\nhttps://cdn.sanity.io/images/94xksvt2/production/b79926a89cb4c394351e02a71cad47ecaf3de6b3-790x436.png?w=790&h=436&auto=format 790w",
            sizes: "(min-width: 790px) 790px, 100vw",
          },
        },
        layout: "constrained",
        backgroundColor: "#9f724d",
        width: 790,
        height: 436,
      },
    },
  },
  created_date: "2022-11-07",
  tags: [{ tag_name: " #lorem" }, { tag_name: "#new" }, { tag_name: "#HowTo" }],
  blog_categories: [
    {
      category_name: "Sweatshirts",
      slug: { _key: null, _type: "slug", current: "sweatshirts" },
    },
    {
      category_name: "Accessories",
      slug: { _key: null, _type: "slug", current: "accessories" },
    },
  ],
};

const SimilarBlogs = ({ similarBlogs }) => {
  return (
    <BlogsNavWrap title="Similar Blogs">
      <div className="similarBlogs">
        {similarBlogs?.length > 0 ? (
          <>
            {similarBlogs?.map(({ node }) => (
              <BlogCard {...node} customClass={"similarBlogs__card"} />
            ))}
          </>
        ) : (
          <>
            <h2 className="similarBlogs__notfound"> No Blogs Found </h2>
          </>
        )}
      </div>
    </BlogsNavWrap>
  );
};

export default SimilarBlogs;
