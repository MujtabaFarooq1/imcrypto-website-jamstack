import { graphql, Link, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image';
import { getImage } from 'gatsby-plugin-image';
import { convertToBgImage } from 'gbimage-bridge';
import React from 'react'
import { useState } from 'react';
import { getLink } from '../../utils/helper';
import Button from '../button';

import "./article-section.scss";

const ResourceArticleSection = (props) => {

  const { searchValue } = props || {}
  const [loadNo, setLoadNo] = useState(3);
  const { allArticles } = useStaticQuery(graphql`
      {
        allArticles: allSanityArticlesDetailPage {
          edges {
            node {
              section_background_image {
                asset {
                  gatsbyImageData(formats: WEBP, placeholder: NONE)
                }
              }
              background_image {
                asset {
                  gatsbyImageData(formats: WEBP, placeholder: NONE)
                }
              }
              title
              tags {
                tag_name
                _id
              }
              recent_section {
                title
                description
              }
              sub_description
              description: _rawDescription
              slug {
                current
                _key
              }
            }
          }
        }
      }
    `);
  const renderItem = (i) => {
    const img = getImage(i?.node?.background_image?.asset);
    const bgImg = convertToBgImage(img);
    return (
      <li>
        <div>
          <BackgroundImage {...bgImg}>
            <div className="article-col-item">
              <h3> {i?.node?.title} </h3>
              <h4> {i?.node?.sub_description} </h4>
              <div className='article-col-tags'>
                <ul>
                  {i?.node?.tags?.map((i) => (
                    <li><a>{i?.tag_name} </a></li>
                  ))}
                </ul>
              </div>
              <div className='article-learnmore'>
                <Link to={getLink('resources/' + i?.node?.slug?.current)}> LEARN MORE </Link>
              </div>
            </div>
          </BackgroundImage>
        </div>
      </li>
    );
  }
  const getItems = (items, count = 3, index = 0) => {
    let content = [<li ><ul className={(index) % 2 != 0 ?'col-3 primary' : 'col-3 bg-img'}>{items.slice(0, count)?.map(i => renderItem(i))}</ul></li>]
    if (items.slice(count).length > 0) {
      content.push(getItems(items.slice(count), count, typeof parseInt(index) === 'number' ? parseInt(index) + 1 : 1))
    }
    return content
  }
  return (
    <div className="article-section">
      <ul>
        {(allArticles?.edges?.filter(i => i?.node?.title?.toLowerCase()?.includes(searchValue?.toLowerCase())).length !== 0) ? getItems(allArticles?.edges?.slice(0, loadNo)?.filter(i => i?.node?.title?.toLowerCase()?.includes(searchValue?.toLowerCase()))) : <h4> No Article Found </h4>}
      </ul>
      {(loadNo < allArticles?.edges?.length && (allArticles?.edges?.filter(i => i?.node?.title?.toLowerCase()?.includes(searchValue?.toLowerCase())).length != 0)) && (
        <Button onClick={() => setLoadNo(loadNo + 6)}>
          Load More Article
        </Button>
      )}
    </div>
  );
}

export default ResourceArticleSection