import React from "react";
import thumbImage from "./mi.png";
import "./blackpaperGallerySection.scss";

const BlackpaperGallerySection = ({
  im_btn,
  im_subtitle,
  im_thumb,
  im_title,
  wd_btn,
  wd_subtitle,
  wd_thumb,
  wd_title,
}) => {
  return (
    <section className="blackpaperGallerySection" id="blackpaperGallerySection">
      <div className="row gutters">
        <div className="lg-col-6 md-col-12 sm-col12  item">
          <div className="blackpaperGallerySection__item">
            <div className="blackpaperGallerySection__item__wrapper">
              <h2 className="blackpaperGallerySection__item__heading">
                {im_title}
              </h2>
              <p className="blackpaperGallerySection__item__desc">
                {im_subtitle}
              </p>

              <a
                href={im_btn.button_link}
                target={"_blank"}
                className="blackpaperGallerySection__item__btn"
              >
                <span> {im_btn.button_label} </span>
                <svg
                  width="28"
                  height="19"
                  viewBox="0 0 28 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27.1025 8.05212L27.1012 8.05073L19.4405 0.426928C18.8666 -0.144197 17.9383 -0.142072 17.367 0.431912C16.7958 1.00582 16.798 1.93409 17.3719 2.50529L22.5154 7.62379H1.46611C0.65638 7.62379 0 8.28017 0 9.08991C0 9.89964 0.65638 10.556 1.46611 10.556H22.5153L17.372 15.6745C16.7981 16.2457 16.7959 17.174 17.3671 17.7479C17.9384 18.322 18.8667 18.3239 19.4405 17.7529L27.1013 10.1291L27.1026 10.1277C27.6768 9.55459 27.675 8.62332 27.1025 8.05212Z"
                    fill="#fba81a"
                  />
                </svg>
              </a>

              <img
                className="blackpaperGallerySection__item__img"
                src={im_thumb.asset.url}
              />
            </div>
          </div>
        </div>

        <div className="lg-col-6 md-col-12 sm-col12 item">
          <div className="blackpaperGallerySection__item">
            <div className="blackpaperGallerySection__item__wrapper">
              <h2 className="blackpaperGallerySection__item__heading">
                {wd_title}
              </h2>
              <p className="blackpaperGallerySection__item__desc">
                {wd_subtitle}
              </p>

              <a
                href={wd_btn.button_link}
                target={"_blank"}
                className="blackpaperGallerySection__item__btn"
              >
                <span> {wd_btn.button_label} </span>
                <svg
                  width="28"
                  height="19"
                  viewBox="0 0 28 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27.1025 8.05212L27.1012 8.05073L19.4405 0.426928C18.8666 -0.144197 17.9383 -0.142072 17.367 0.431912C16.7958 1.00582 16.798 1.93409 17.3719 2.50529L22.5154 7.62379H1.46611C0.65638 7.62379 0 8.28017 0 9.08991C0 9.89964 0.65638 10.556 1.46611 10.556H22.5153L17.372 15.6745C16.7981 16.2457 16.7959 17.174 17.3671 17.7479C17.9384 18.322 18.8667 18.3239 19.4405 17.7529L27.1013 10.1291L27.1026 10.1277C27.6768 9.55459 27.675 8.62332 27.1025 8.05212Z"
                    fill="#fba81a"
                  />
                </svg>
              </a>

              <img
                className="blackpaperGallerySection__item__img"
                src={wd_thumb.asset.url}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlackpaperGallerySection;
