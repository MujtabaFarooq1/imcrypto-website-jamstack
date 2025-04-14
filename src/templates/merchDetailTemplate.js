import React from 'react'

import Layout from '../components/layout';
import MerchDetailPage from '../components/merchDetailPage';

const MerchDetailTemplate = (props) => {
    const content = props?.pageContext?.data;
    const header = content?.header;
    const footer = content?.footer;
    console.log(content , "[CONTENT]");
    return (
        <Layout seo={content?.seo} header={header} footer={footer} location={props.location}>
            <div>
                <MerchDetailPage content={content} location={props.location} />
            </div>
        </Layout>
    )
}

export default MerchDetailTemplate