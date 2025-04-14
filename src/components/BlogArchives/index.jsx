import React from "react";
import BlogsNavWrap from "../BlogsNavWrap";
import "./blogArchives.scss";

const BlogsArchives = ({
  archives = ["march 2022", "january 2022", "november 2021", "september 2022"],
}) => {
  return (
    <BlogsNavWrap title="archives">
      <div className="blogArchives">
        {archives.map((item) => (
          <a href="#" className="blogArchives__item">
            {item}
          </a>
        ))}
      </div>
    </BlogsNavWrap>
  );
};

export default BlogsArchives;
