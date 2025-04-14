import React from "react";

import Blogs from "../../components/blogs";
import DynamicComponent from "../../components/dynamicComponent";
import Email from "../../components/email";
import Layout from "../../components/layout";
import TopEcoSection from "../../components/topEcoSection";

const InternetMoneyWDPage = (props) => {
  const content = props?.pageContext?.data;
  const header = content?.header;
  const footer = content?.footer;
  const { sections } = content;
  const seo = content?.seo;

  return (
    <Layout seo={seo} header={header} footer={footer} location={props.location}>
      <div>
        <TopEcoSection {...content} />
        {Array.isArray(sections) &&
          sections.map((i) => <DynamicComponent {...i} />)}
        {/* <Blogs /> */}
        <Email />
      </div>
    </Layout>
  );
};

export default InternetMoneyWDPage;