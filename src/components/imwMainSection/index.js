import { Link } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";
import React, { useState } from "react";
import Button from "../button";
import './imwalletmain.scss';

const IMWMainSection = (props) => {
  const { title, section_title, description, sub_main_section } = props;
  const [active_tab, setActiveTab] = useState(sub_main_section[0].title || null)
  return (
    <div className='imwallet-main-section'>
      <div className='container'>
        <div className='section-header'>
          <h6> {section_title} </h6>
          <h2> {title} </h2>
          <p> {description} </p>
        </div>
        <div className='imwallet-tab-section'>
          <div className='tab-navbar'>
            <ul>
              {Array.isArray(sub_main_section) &&
                sub_main_section.map(i => <li>
                  <button className={active_tab === i.title ? 'active' : ''} onClick={() => setActiveTab(i.title)}>{i.title}</button>
                  {/* <div className="active"></div> */}
                </li>)}
            </ul>
          </div>
          {Array.isArray(sub_main_section) &&
            sub_main_section.map((item, idx) => {
              const { title, logos, image, description, background_image, button } = item;
              const img = getImage(background_image?.asset);
              const bgImg = convertToBgImage(img);
              return (
                <div className={idx % 2 == 0 ?`imwallet-phone-section ${active_tab == title?'active':''}`:`imwallet-phone-section right ${active_tab == title?'active':''}`}>
                  {/* {idx % 2 == 0 && ( */}
                    <div className='imwallet-phone-left'>
                      <BackgroundImage {...bgImg} className="imwallet-background-image" >
                        <GatsbyImage image={image?.asset?.gatsbyImageData} />
                      </BackgroundImage>
                    </div>
                  {/* )} */}
                  <div className='imwallet-phone-right'>
                    <h2> {title} </h2>
                    <p> {description} </p>
                    <div className='im-wallet-download'>
                      <Button link={button?.button_link}> {button?.button_label} </Button>
                      <ul>
                        {logos?.map((i) => (
                          <li>
                            <GatsbyImage image={getImage(i?.asset?.gatsbyImageData)} />
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {/* {idx % 2 !== 0 && (
                    <div className='imwallet-phone-left'>
                      <BackgroundImage {...bgImg} className="imwallet-background-image" >
                        <GatsbyImage image={image?.asset?.gatsbyImageData} />
                      </BackgroundImage>
                    </div>
                  )} */}
                </div>
              );
            })}
        </div>

      </div>
    </div>
  );
};

export default IMWMainSection;
