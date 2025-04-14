import { GatsbyImage } from "gatsby-plugin-image";
import moment from "moment";
import React from "react";
import "./blogDetailsHeroMeta.scss";

const BlogDetailHeroMeta = ({ author, created_date }) => {
  return (
    <div className="blogDetailHeroMeta">
      <div className="blogDetailHeroMeta__profile">
        <GatsbyImage image={author?.author_image?.asset?.gatsbyImageData} />
        <p className="authorName"> {author?.author_name} </p>
      </div>

      <div className="blogDetailHeroMeta__date">
        {moment(created_date).format("MMM DD, YYYY")}
      </div>
    </div>
  );
};

export default BlogDetailHeroMeta;
