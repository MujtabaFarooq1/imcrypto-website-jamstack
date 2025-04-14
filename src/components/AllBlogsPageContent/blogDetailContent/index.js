import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import "./blogDetailContent.scss";

const BlogDetailContent = ({ blog_categories, blog_image, desc, tags }) => {
  return (
    <>
      <div className="blogDetailPage__content__wrapper">
        <GatsbyImage
          className="blogDetailPage__content_image"
          image={blog_image.asset.gatsbyImageData}
        />

        <div className="blogDetailPage__content__buttons">
          <div className="blogDetailPage__content_buttons--left">
            {tags.map((item) => {
              return (
                <button className="blogDetailPage__content_buttons--left--tags">
                  {item.tag_name}
                </button>
              );
            })}
          </div>
          <div className="blogDetailPage__content_buttons--right">
            {blog_categories.map((item) => {
              return (
                <span className="blogDetailPage__content_buttons--left--text">
                  <span className="blogDetailPage__content__buttons__categorie-bar">
                    <svg
                      width="27"
                      height="18"
                      viewBox="0 0 27 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.77107 2.04372C1.77107 1.90178 1.88614 1.7867 2.0281 1.7867V0.244552C1.03445 0.244552 0.228927 1.05007 0.228927 2.04372H1.77107ZM1.77107 5.32143V2.04372H0.228927V5.32143H1.77107ZM2.0281 5.57844C1.88614 5.57844 1.77107 5.46337 1.77107 5.32143H0.228927C0.228927 6.31508 1.03445 7.12059 2.0281 7.12059V5.57844ZM9.51392 5.57844H2.0281V7.12059H9.51392V5.57844ZM9.77095 5.32143C9.77095 5.46337 9.65588 5.57844 9.51392 5.57844V7.12059C10.5076 7.12059 11.3131 6.31508 11.3131 5.32143H9.77095ZM9.77095 2.04372V5.32143H11.3131V2.04372H9.77095ZM9.51392 1.7867C9.65588 1.7867 9.77095 1.90178 9.77095 2.04372H11.3131C11.3131 1.05007 10.5076 0.244552 9.51392 0.244552V1.7867ZM2.0281 1.7867H9.51392V0.244552H2.0281V1.7867ZM16.6099 2.04372C16.6099 1.90178 16.725 1.7867 16.867 1.7867V0.244552C15.8733 0.244552 15.0678 1.05007 15.0678 2.04372H16.6099ZM16.6099 5.32143V2.04372H15.0678V5.32143H16.6099ZM16.867 5.57844C16.725 5.57844 16.6099 5.46337 16.6099 5.32143H15.0678C15.0678 6.31508 15.8733 7.12059 16.867 7.12059V5.57844ZM24.3528 5.57844H16.867V7.12059H24.3528V5.57844ZM24.6098 5.32143C24.6098 5.46337 24.4947 5.57844 24.3528 5.57844V7.12059C25.3464 7.12059 26.152 6.31507 26.152 5.32143H24.6098ZM24.6098 2.04372V5.32143H26.152V2.04372H24.6098ZM24.3528 1.7867C24.4947 1.7867 24.6098 1.90178 24.6098 2.04372H26.152C26.152 1.05007 25.3464 0.244552 24.3528 0.244552V1.7867ZM16.867 1.7867H24.3528V0.244552H16.867V1.7867ZM2.0281 10.1508C1.03445 10.1508 0.228927 10.9563 0.228927 11.95H1.77107C1.77107 11.808 1.88614 11.6929 2.0281 11.6929V10.1508ZM9.51392 10.1508H2.0281V11.6929H9.51392V10.1508ZM11.3131 11.95C11.3131 10.9563 10.5076 10.1508 9.51392 10.1508V11.6929C9.65588 11.6929 9.77095 11.808 9.77095 11.95H11.3131ZM11.3131 15.2277V11.95H9.77095V15.2277H11.3131ZM9.51392 17.0268C10.5076 17.0268 11.3131 16.2213 11.3131 15.2277H9.77095C9.77095 15.3696 9.65588 15.4847 9.51392 15.4847V17.0268ZM2.0281 17.0268H9.51392V15.4847H2.0281V17.0268ZM0.228927 15.2277C0.228927 16.2213 1.03445 17.0268 2.0281 17.0268V15.4847C1.88614 15.4847 1.77107 15.3696 1.77107 15.2277H0.228927ZM0.228927 11.95V15.2277H1.77107V11.95H0.228927ZM16.6099 11.95C16.6099 11.808 16.725 11.6929 16.867 11.6929V10.1508C15.8733 10.1508 15.0678 10.9563 15.0678 11.95H16.6099ZM16.6099 15.2277V11.95H15.0678V15.2277H16.6099ZM16.867 15.4847C16.725 15.4847 16.6099 15.3696 16.6099 15.2277H15.0678C15.0678 16.2213 15.8733 17.0268 16.867 17.0268V15.4847ZM24.3528 15.4847H16.867V17.0268H24.3528V15.4847ZM24.6098 15.2277C24.6098 15.3696 24.4947 15.4847 24.3528 15.4847V17.0268C25.3464 17.0268 26.152 16.2213 26.152 15.2277H24.6098ZM24.6098 11.95V15.2277H26.152V11.95H24.6098ZM24.3528 11.6929C24.4947 11.6929 24.6098 11.808 24.6098 11.95H26.152C26.152 10.9563 25.3464 10.1508 24.3528 10.1508V11.6929ZM16.867 11.6929H24.3528V10.1508H16.867V11.6929Z"
                        fill="#737373"
                      />
                    </svg>
                  </span>

                  <span className="blogDetailPage__content__buttons__categorie-name">
                    {item.category_name}
                  </span>
                </span>
              );
            })}
          </div>
        </div>
        <p className="blogDetailPage__content_buttons--center--paragraph">
          <ReactMarkdown
            children={desc}
            rehypePlugins={[rehypeRaw]}
            remarkPlugins={[remarkGfm]}
          />
        </p>
      </div>
    </>
  );
};

export default BlogDetailContent;
