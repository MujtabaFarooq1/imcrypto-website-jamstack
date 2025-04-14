import BackgroundImage from "gatsby-background-image";
import { getImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";
import { graphql, useStaticQuery } from "gatsby";
import React, { useContext, useEffect, useState } from "react";
import Button from "../button";
import addToMailchimp from "gatsby-plugin-mailchimp";
import "./email.scss";
import { Strings } from "../../resources";
import { GlobalContext } from "../../context";
import { client } from "../../utils/config/sanity-client";

const Email = (props) => {
  const { global } = useContext(GlobalContext);
  const { data } = global;
  const { location } = data;
  const { emails } = useStaticQuery(graphql`
    query EmailQuery {
      emails: sanityEmailG {
        title
        section_title
        placeholder
        description
        button {
          button_link
          button_label
          background
        }
        background_image {
          asset {
            gatsbyImageData(placeholder: NONE, formats: WEBP)
          }
        }
      }
    }
  `);
  const [email, setEmail] = useState({_type: "subscriber", email:""});
  const [subscription, setSubscription] = useState(null);
  const { background_image, section_title, description, placeholder, button } =
    emails || {};
  const image = getImage(background_image?.asset);
  const bgImage = convertToBgImage(image);
  const [errorEmail, setErrorEmail] = useState("");
  const handleSubmit = () => {
    if (email.email !== "") {
      setErrorEmail("");
      addToMailchimp(email.email) // listFields are optional if you are only capturing the email address.
        .then((data) => {
          setSubscription(data);
          setEmail({_type: "subscriber",email:""});
          const res = client.create(email);
        })
        .catch(() => {});
      setTimer(true);
    } else {
      setErrorEmail("");
      setErrorEmail("please enter email address");
      setTimer(true);
    }
  };
  const [timer, setTimer] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimer(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, [timer]);

  return (
    <div
      className={`email-section ${location?.pathname == "/" ? "home-bg" : ""}`}
    >
      <div className="container">
        <div className="email-inner-section">
          <div className="email-left">
            <BackgroundImage
              {...bgImage}
              className="banner-bg"
            ></BackgroundImage>
            <div className="section-header">
              <h2>{section_title}</h2>
              <p>{description}</p>
            </div>
          </div>
          <div className="email-right">
            <div className="email-input">
              <input
                type="email"
                value={email.email}
                placeholder={placeholder}
                onChange={(e) => setEmail({...email,email:e.target.value})}
              />

              {true && (
                <div className="input-msg input-msg--desktop">
                  <p>{subscription?.msg?.replaceAll("0", "") || errorEmail}</p>
                </div>
              )}

              <Button link={button?.button_link} onClick={handleSubmit}>
                {button?.button_label || ""}
              </Button>
            </div>

            {timer && (
              <div className="input-msg input-msg--mobile">
                <p>{subscription?.msg?.replaceAll("0", "") || errorEmail}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Email;
