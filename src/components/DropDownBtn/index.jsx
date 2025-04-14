import React from "react";
import "./dropDownBtn.scss";

import androidIcon from "./android.svg";
import appleIcon from "./apple.svg";
import chromeIcon from "./chrome.svg";

const imageUrl =
  "https://cdn.sanity.io/images/94xksvt2/production/bfd969c4156436388083aeab688259081dd4f2cc-58x58.svg?w=58&h=58&auto=format";

const DropDownBtn = ({
  btnLabel = "Download Wallet",
  dropDownItems = [
    { text: "iOS", icon: appleIcon, link: "/ios", enabled: true },
    { text: "Android", icon: androidIcon, link: "/android", enabled: true },
    { text: "Chrome", icon: chromeIcon, link: "/chrome", enabled: true },
  ],
  hasIcon = false,
  mobilecenter = false,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    const closeDropOnWindowClick = (e) => {
      if (e.target.className !== "dropDownBtn__label") {
        setIsOpen(false);
      }
    };
    if (typeof window !== "undefined") {
      window.addEventListener("click", closeDropOnWindowClick);
    }

    return () => {
      window.removeEventListener("click", closeDropOnWindowClick);
    };
  }, []);

  //---------------------------------------
  return (
    <div
      className={`dropDownBtn  ${
        mobilecenter ? "dropDownBtn--mobilecenter" : ""
      }`}
    >
      <button
        className="dropDownBtn__label"
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        {btnLabel}{" "}
        {hasIcon && (
          <svg
            width="28"
            height="19"
            viewBox="0 0 28 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M27.1025 8.05212L27.1012 8.05073L19.4405 0.426928C18.8666 -0.144197 17.9383 -0.142072 17.367 0.431912C16.7958 1.00582 16.798 1.93409 17.3719 2.50529L22.5154 7.62379H1.46611C0.65638 7.62379 0 8.28017 0 9.08991C0 9.89964 0.65638 10.556 1.46611 10.556H22.5153L17.372 15.6745C16.7981 16.2457 16.7959 17.174 17.3671 17.7479C17.9384 18.322 18.8667 18.3239 19.4405 17.7529L27.1013 10.1291L27.1026 10.1277C27.6768 9.55459 27.675 8.62332 27.1025 8.05212Z"
              fill="black"
            />
          </svg>
        )}
      </button>
      <div
        className={`dropDownBtn__items dropDownBtn__items--${
          isOpen ? "open" : "close"
        } `}
      >
        {dropDownItems.map((item) => (
          <>
            <a
              className="dropDownBtn__item"
              href={item.enabled ? item.link : "javascript: void(0)"}
              target={item.enabled ? "_blank" : "_self"}
              style={{ cursor: `${item.enabled ? "pointer" : "not-allowed"}` }}
            >
              {item.icon && (
                <img className="dropDownBtn__item__img" src={item.icon} />
              )}
              <p className="dropDownBtn__item__txt">
                {" "}
                {item.text}
                {!item.enabled && <span> (Coming Soon) </span>}
              </p>
            </a>
          </>
        ))}
      </div>
    </div>
  );
};

export default DropDownBtn;
