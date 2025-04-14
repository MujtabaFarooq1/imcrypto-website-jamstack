import React from "react";
import DynamicComponent from "../components/dynamicComponent";
import Email from "../components/email";
import Layout from "../components/layout";

const EcosystemPage = (props) => {
  const content = props?.pageContext?.data;
  const header = content?.header;
  const footer = content?.footer;
  const sections = content?.sections;
  const email = content?.email;

  const blogContent =
    sections?.find((i) => i?._type === "recent_blogs_section") || {};
  return (
    <Layout seo={content?.seo} header={header} footer={footer} location={props.location}>
      {Array.isArray(sections) &&
        sections.map((i) => <DynamicComponent {...i} />)}

      {/* <Blogs {...blogContent} /> */}
      {email && <Email />}
    </Layout>
  );
};

export default EcosystemPage;
