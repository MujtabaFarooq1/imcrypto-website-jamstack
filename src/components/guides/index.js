import React from "react";
import Button from "../button";
import GuideItem from "./GuideItem";
import "./guides.scss";

const Guides = (props) => {
  const {
    title,
    description,
    section_title,
    sections,
    view_button,
    background_image,
    image,
  } = props || {};

  return (
    <div className="guide-section" id={"resources"}>
      <div className="container">
        <div className="guide-inner-section">
          <div className="section-header">
            <h6>{section_title}</h6>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>

          <div className="guides-col-cover">
            <ul>
              <div className="overlay-text">
                <div className="overlay-header">
                  <h2>Coming Soon...</h2>
                  <h6>We are still working on it.</h6>
                </div>
                {/* <div className="visit-btn">   
                         <a>Visit the Resources</a>
                    </div> */}
              </div>
              {/* <BackgroundImage  {...bgImage} className='banner-bg' > */}
              {Array.isArray(sections) &&
                sections.map((i, index) => {
                  // const image=getImage(i.background_image?.asset);
                  // const bgImage=convertToBgImage(image);
                  return (
                    <div key={index} className="guide-cover">
                      <GuideItem
                        title={i.title}
                        description={i.description}
                        button={i.button}
                        backgroundImage={i.background_image}
                      />
                    </div>
                  );
                })}
            </ul>
          </div>

          {/* <div className="viewMore-guides">
            <Button link={view_button?.button_link}>
              {view_button?.button_label || ""}
            </Button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Guides;
