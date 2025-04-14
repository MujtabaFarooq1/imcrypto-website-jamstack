import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Button from "../button";
import "./articles.scss";

import categoryicon from "./Combined.png";
const Articles = (props) => {
  const { title, blog_image, desc, created_date, blog_categories, slug } =
    props || {};

  return (
    <div className="blog-col">
      <GatsbyImage image={getImage(blog_image?.asset?.gatsbyImageData)} />
      <div className="blog-header">
        <h6>{created_date}</h6>

        <p className="category-section">
          <span>
            {" "}
            <img src={categoryicon} className="category-icon" />
          </span>
          {blog_categories?.map((i) => i?.category_name)}
        </p>
      </div>
      <div className="blog-info">
        <h5>{title}</h5>
        <p>{desc?.substring(0, 75)}</p>
        <p>
          {Array.isArray(desc) &&
            desc?.map((i) => i?.children.map((k) => k?.text?.substring(0, 75)))}
        </p>
      </div>
      <div className="blogs-learn-more">
        <Button link={`/blogs/${slug?.current}`}>LEARN MORE</Button>
      </div>
    </div>
  );
};

export default Articles;
