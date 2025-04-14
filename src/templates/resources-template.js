import React from "react";
import Layout from "../components/layout";
import DynamicComponent from "../components/dynamicComponent";
import Email from "../components/email";
import ResourcesSection from "../components/resourcesSection";
import Blogs from "../components/blogs";

const Resources = (props) => {
  const { location, pageContext } = props;
  const { data } = pageContext;
  const { header, footer, sections, seo } = data;

  return (
    <Layout seo={seo} header={header} footer={footer} location={props.location}>
      {Array.isArray(sections) &&
        sections.map((i) => (
          <DynamicComponent {...i} />
        ))}
        <ResourcesSection location={props.location} />
        <Email />
    </Layout>
  );
};

export default Resources;
