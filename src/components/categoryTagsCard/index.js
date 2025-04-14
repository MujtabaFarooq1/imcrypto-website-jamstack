import { useStaticQuery, graphql } from 'gatsby';
import React, { useEffect, useState } from 'react'
import { clearParam, getParam, setParam } from '../../utils/helper';
import Cart from '../cart';

const CategoryTagsCard = (props) => {
  const { location, product_card, onClick } = props || {}



  const showTags = (tag) => {
    return (
      <>
        <a> {tag} </a>
      </>
    );
  };
  const showCategories = (category,) => {
    const count = (product_card?.categories?.category_name?.toString() === category.toString()).length


    return (
      <>
        <a>{category}</a>
      </>
    );
  };

  const { categories, tags } = useStaticQuery(graphql`
    {
      categories: allSanityCategories {
        edges {
          node {
            category_name
            slug {
              current
            }
          }
        }
      }
      tags: allSanityTags {
        edges {
          node {
            tag_name
          }
        }
      }
    }
  `);

  return (
    <div className="merchproduct-cart">

      <div className="merch-category">
        <h6> PRODUCT CATEGORIES </h6>
        {Array.isArray(categories?.edges) &&
          categories?.edges.map((category) =>
            showCategories(
              category?.node?.category_name,
              category?.node?.slug
            )
          )}
      </div>
      <div className="merch-tags">
        <h6> TAGS </h6>
        {Array.isArray(tags?.edges) &&
          tags?.edges?.map((tag) => showTags(tag?.node?.tag_name))}
      </div>
    </div>
  )
}

export default CategoryTagsCard
