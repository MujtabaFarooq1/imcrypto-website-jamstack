import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import "./header.scss";
import { useContext } from "react";
import { GlobalContext } from "../../context";

import NavItem from "../nav-item";
import DropDownBtn from "../DropDownBtn";

export default function Header({ headerData }) {
  const {
    logo,
    logo_label,
    logo_link,
    download_button,
    join_button,
    navItems,
  } = headerData || {};

  const { asset } = logo || {};
  const { gatsbyImageData } = asset || {};
  const { global } = useContext(GlobalContext);
  const { data, method } = global;
  const { navOpen } = data;
  const { setNavOpen } = method;
  const showNavItems = (navItems) => {
    return (
      Array.isArray(navItems) &&
      navItems?.map((item, idx) => <NavItem {...item} key={item._key || idx} />)
    );
  };

  return (
    <div className="header">
      <div className="container">
        <div className="top-header">
          <div className="logo-part">
            <Link to="/">
              <GatsbyImage image={gatsbyImageData} />
              <p> {logo_label} </p>
            </Link>
          </div>
          <div className="nav-header">
            <div className={`navbar ${navOpen ? "open" : ""}`}>
              <div
                className="mobile-menu-close"
                onClick={() => setNavOpen(false)}
              >
                <div class="bar1"></div>
                <div class="bar2"></div>
              </div>
              <div className="navBox">{showNavItems(navItems)}</div>
              <div className="community-btn">
                <button>
                  <Link target={"_blank"} to={join_button?.button_link}>
                    {join_button?.button_label}
                  </Link>
                </button>

                <DropDownBtn />
              </div>
            </div>
            {/* <div className={`mobile-menu${openNav?' active':''}`} onClick={()=>{setOpenNav(!openNav)}}> */}
            <div className="mobile-menu-open" onClick={() => setNavOpen(true)}>
              <a>
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
