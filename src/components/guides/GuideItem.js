import React from "react";
import BackgroundImage from "gatsby-background-image";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { convertToBgImage } from 'gbimage-bridge';
import Button from "../button";
import './guideitem.scss';
// import Button fromsections "../button";

const GuideItem = (props) => {

    const image=getImage(props.backgroundImage?.asset);
    const bgImage=convertToBgImage(image)
            
  return (
      
    <li className="guides-col">
        <div className="blur-cover"></div>
        <div className="guides-img-cover">
        <BackgroundImage {...bgImage} className="bg-img">
          <h3>{props.title}</h3>
          <p>{props.description}</p>
              <Button link={props.button?.button_link}>
                {props.button?.button_label || " "}
              </Button>
        </BackgroundImage>
        </div>
    </li>
  );
};

export default GuideItem;
