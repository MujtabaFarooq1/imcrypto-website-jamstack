import React from "react";
import "./blogsNavWrap.scss";

const BlogsNavWrap = ({ children, title }) => {
  return (
    <div className="blogsNavWrap">
      <h2 className="blogsNavWrap__title"> {title} </h2>

      <div className="blogsNavWrap__children">{children}</div>
    </div>
  );
};

export default BlogsNavWrap;
