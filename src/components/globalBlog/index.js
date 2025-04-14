import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import { getLink } from "../../utils/helper";
import './globalblog.scss';

const GlobalBlogsSection = (props) => {
    
    return (
    <div className='merchblog-section'>
      <div className='container'>
          <div className='section-header'>
                <h1> Recent Articles </h1>
                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
          </div>
          <div className='merchblog-inner'>
                <ul >
                  { props?.latest_blogs?.map( item => {
                      const { category, description, date, image, slug, sub_title} = item;
                      return (
                        
                          <li className="merchblogs-col">
                            <GatsbyImage
                              image={getImage(image?.asset?.gatsbyImageData)}
                            />
                            <div className='blog-header'>
                              <h6> {date} </h6>
                              <p> {category} </p>
                            </div>
                            <div className='blog-info'>
                              <h5>{sub_title}</h5>
                                {description?.map((i) => (
                                  <p> {i?.children?.map((k) => k?.text?.slice(0, 74))} </p>
                                ))}
                            </div>
                            <div className="blogs-learn-more">
                                <button className="btn-global">
                                  <Link to={getLink(slug?.current)}> LEARN MORE </Link>
                                </button>
                            </div>  
                            
                          </li>
                      
                      );
                  }) }
              </ul>
          </div>
          
    </div>
    </div>
    )
}

export default GlobalBlogsSection