import { Link } from "gatsby";
import React, { useContext } from "react";
import { useState } from "react";
import { GlobalContext } from "../../context";
import _ from "lodash";

// import { getAssetURL } from "../../utils/helper";
// getAssetURL(asset.file);

const NavItem = (props) => {
  const { link, label, assets } = props || {};
  const [isActive, setIsActive] = useState(false);
  const { global } = useContext(GlobalContext);
  const { data: {location}, method } = global;
  const { setNavOpen } = method;
  if (Array.isArray(assets) && assets.length > 0) {
    return (
      <div className="dropDown">
        <a onClick={() => setIsActive(!isActive)}>{label}</a>
        <ul className={isActive ? "active" : ""}>
          {assets.map((asset, idx) => (
            <li key={asset._key || idx}>
              <a
                href={`/${_.kebabCase(asset?.label || "")}.pdf`}
                target={"_blank"}
              >
                {" "}
                {asset.label || ""}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  return link ? (
    <Link
      to={link}
      className={ location?.pathname?.toString().includes(label?.toLowerCase()) && "active"}
      partiallyActive={true}
      onClick={() => setNavOpen(false)}
    >
      {label || ""}
    </Link>
  ) : (
    <a onClick={() => setNavOpen(false)}>{label || ""}</a>
  );
};

export default NavItem;
