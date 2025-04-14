import React from 'react'
import ArticleDetail from '../components/articleDetailPage';
import Email from '../components/email';
import Layout from '../components/layout'

const ArticlesDetailPage = (props) => {

    const { location, pageContext } = props;
    const { data } = pageContext;
    const { header, footer } = data;
    console.log(data, "[DATA]");
    return (
        <Layout seo={data?.seo} header={header} footer={footer} location={location}>
            <ArticleDetail article={data}/>
            <Email/>
        </Layout>
    )
}

export default ArticlesDetailPage