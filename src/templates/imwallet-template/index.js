import React from "react";

import Blogs from "../../components/blogs";
import DynamicComponent from "../../components/dynamicComponent";
import Email from "../../components/email";
import Layout from "../../components/layout";
import TopEcoSection from "../../components/topEcoSection";
import "./imwallet.scss";

const IMWalletPage = (props) => {
  const content = props?.pageContext?.data;
  const header = content?.header;
  const footer = content?.footer;
  const seo = content?.seo;
  const { section } = content;

  return (
    <Layout seo={seo} header={header} footer={footer} location={props.location}>
      <div className="internetmoney-wallet-section">
        <TopEcoSection {...content} />
        {Array.isArray(section) &&
          section.map((i) => <DynamicComponent {...i} />)}

        {/* <Blogs /> */}
        <Email />
      </div>
    </Layout>
  );
};

export default IMWalletPage;
