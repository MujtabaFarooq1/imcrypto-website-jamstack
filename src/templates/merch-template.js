import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import DynamicComponent from "../components/dynamicComponent";
import Blogs from "../components/blogs";

import Email from "../components/email";
import GlobalBlogsSection from "../components/globalBlog";

const MerchPage = (props) => {
  const content = props?.pageContext?.data;
  const header = content?.header;
  const footer = content?.footer;
  const sections = content?.sections;
  const { skip, limit, nextPagePath: next, previousPagePath: prev, pageNumber: cur, humanPageNumber: cur_str, numberOfPages: total, pathPrefix } = props?.pageContext || {}
  const extra_props = {
    pagination: { skip, limit, next, prev, cur, cur_str, total, pathPrefix },
    location: props.location
  }
  const blogData = sections?.find( i => i?._type === 'merch_blog_section')
  return (
    <Layout
      seo={content?.seo}
      header={header}
      footer={footer}
      location={props.location}
    >
      {Array.isArray(sections) &&
        sections.map((i) => <DynamicComponent {...i} extra_props={extra_props} />)}
      <GlobalBlogsSection {...blogData} />
      <Email />
    </Layout>
  );
};

export default MerchPage;
