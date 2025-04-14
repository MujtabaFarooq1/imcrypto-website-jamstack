import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import * as React from "react";
import NavItem from "../nav-item";
import "./footer.scss";
// import { graphql, useStaticQuery } from "gatsby"
// import {
//   Twitter,
//   Twitch,
//   Instagram,
//   Facebook,
//   Youtube,
//   GitHub,
// } from "react-feather"
// import {
//   Container,
//   Flex,
//   FlexList,
//   Box,
//   Space,
//   NavLink,
//   Text,
//   IconLink,
//   VisuallyHidden,
// } from "./ui"
// import BrandLogo from "./brand-logo"

// const socialMedia = {
//   TWITTER: {
//     url: "https://twitter.com",
//     name: "Twitter",
//     icon: <Twitter />,
//   },
//   INSTAGRAM: {
//     url: "https://instagram.com",
//     name: "Instagram",
//     icon: <Instagram />,
//   },
//   FACEBOOK: {
//     url: "https://facebook.com",
//     name: "Facebook",
//     icon: <Facebook />,
//   },
//   YOUTUBE: {
//     url: "https://youtube.com",
//     name: "YouTube",
//     icon: <Youtube />,
//   },
//   GITHUB: {
//     url: "https://github.com",
//     name: "GitHub",
//     icon: <GitHub />,
//   },
//   TWITCH: {
//     url: "https://twitch.tv",
//     name: "Twitch",
//     icon: <Twitch />,
//   },
// }

// const getSocialURL = ({ service, username }) => {
//   const domain = socialMedia[service]?.url
//   if (!domain) return false
//   return `${domain}/${username}`
// }

// const getSocialIcon = ({ service }) => {
//   return socialMedia[service]?.icon
// }

// const getSocialName = ({ service }) => {
//   return socialMedia[service]?.name
// }

export default function Footer({ footerData }) {
  const {
    logo,
    description,
    nav_label,
    contact_details,
    social_media_logos,
    other_menu_items,
    copy_right_text,
  } = footerData || {};
  const { asset } = logo || {};
  const { alt, gatsbyImageData } = asset || {};
  const { address, email_id, link, telephone_no } = contact_details || {};
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-col">
            <div className="footer-logo">
              <Link to="/">
                <GatsbyImage image={gatsbyImageData} />
              </Link>
            </div>
            <p> {description} </p>
          </div>
          <div className="footer-col">
            <h3> {nav_label} </h3>
            <div className="contact-details">
              {/* <p> {address} </p> */}
              <p>
                {" "}
                Email Us: <a href={`mailto:${email_id}`}>{email_id}</a>{" "}
              </p>
              {/* <p> Tel:{telephone_no} </p> */}
            </div>
            <p> Engage With Us At:</p>
            <div className="social-icon">
              {social_media_logos?.map((i) => {
                const gatsbyImageData = i?.image?.asset?.gatsbyImageData;
                return (
                  <Link to={i.logo_link} target={"_blank"}>
                    <GatsbyImage image={gatsbyImageData} />
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="footer-col">
            <h3>menu</h3>
            <div className="footer-menu">
              <ul>
                {Array.isArray(other_menu_items) &&
                  other_menu_items.map((i, idx) => (
                    <a
                      href={i?.assets?.asset?.url || i?.link || "/"}
                      target={i?.target ? "_blank" : "_self"}
                    >
                      {i?.label || ""}
                    </a>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <p>{copy_right_text}</p>
      </div>
    </div>
  );
}
