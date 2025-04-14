import React from "react";
import "./sacrificeDescription.scss";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

const SacrificeDescription = ({ title, content }) => {
  return (
    <div className="Scrifice_Description_Section">
      <div className="description_heading">
        <h1 className="text">{title}</h1>
      </div>

      <div className="description_content_container">
        <ReactMarkdown
          children={content}
          rehypePlugins={[rehypeRaw]}
          remarkPlugins={[remarkGfm]}
        />
      </div>
    </div>
  );
};

export default SacrificeDescription;
