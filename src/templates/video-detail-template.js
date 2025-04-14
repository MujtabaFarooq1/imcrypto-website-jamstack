import React from 'react'
import Email from '../components/email';
import Layout from '../components/layout'
import VideoDetailSection from '../components/videoDetailPage';

const VideoDetailPage = (props) => {
    const { location, pageContext } = props;
    const { data } = pageContext;
    const { header, footer } = data;
    console.log(data, "[DATA]");
    return (
        <Layout seo={data?.seo} header={header} footer={footer} location={location}>
            <VideoDetailSection videodetail={data}/>
            <Email/>
        </Layout>
    )
}

export default VideoDetailPage