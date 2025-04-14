import React from "react";
import KeySection from "../sectionCard/keySection";
import OtherSection from "../sectionCard/otherSection";
import './features.scss';

const Features = (props) => {
  const {
    section_title,
    title,
    description,
    section,
    sub_section_title,
    sub_title,
    sub_description,
    sub_sections,
  } = props || {};

  return (
    <div className="features-section">
      <div className="container">

        <div className="features-inner-section">

          <div className="section-header">
            <h6>{section_title}</h6>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
          <div className="features-col-cover">
            <ul>
              {Array.isArray(section) &&
                section.map((i) => {
                  return (
                    <KeySection
                      title={i.title}
                      description={i.description}
                      image={i.image.asset}
                      button={i.button}

                    />
                  );
                })}
            </ul>
          </div>

          <div className="other-features-inner">
            <div className="section-header">
              <h6>{sub_section_title}</h6>
              <h2>{sub_title}</h2>
              <p>{sub_description}</p>
            </div>

            <div className="other-features-list">
              <ul>
                {Array.isArray(sub_sections) &&
                  sub_sections.map((k) => {
                    return (
                      <OtherSection
                        title={k.title}
                        description={k.description}
                        image={k.image.asset}
                      />
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
