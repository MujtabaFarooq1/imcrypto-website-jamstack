import React from "react";
import { getImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from "gatsby-background-image";
import "./ecosystem-card.scss";
import { Link } from "gatsby";
import { getLink } from "../../utils/helper";
import gif1 from "../../images/GIF-1.gif";
import gif2 from "../../images/GIF-2.gif";
import img1 from "../../images/image1.png";
import img2 from "../../images/im_image.png";
import { PortableText } from "@portabletext/react";

const EcosystemCard = (props) => {
  const { wallets } = props || {};
  return (
    <div className="ecosystem-section">
      <div className="container">
        <div className="ecosystem-col-cover">
          <ul>
            {Array.isArray(wallets) &&
              wallets.map((i) => {
                const img = getImage(i?.image?.asset);
                const bgImg = convertToBgImage(img);
                return (
                  <li>
                    {/* <BackgroundImage {...bgImg}>
                          <div className="eco-col-info">
                              <h3>{i?.title}</h3>
                              <p>{i?.top_description}</p>
                              <Link to={getLink('ecosystem/' + i?.slug?.current)} classname="bottom-icon"><span>Lean more</span> </Link>
                          </div>
                        </BackgroundImage> */}

                    {/* <div className='videoBg'>
                        {i?.slug?.current === "internet-money-wallet" && <img src={gif1} title="GIF1" />}
                        {i?.slug?.current === "internet-money-im" &&
                          <div className='imageAnimation'>
                            <img src={img2} alt="image2" className='image2' />
                          </div>
                        }
                        {i?.slug?.current === "internet-money-wallet-dividend-wd" && <img src={gif2} title="GIF3" />}
                      </div> */}
                    {/* <div className="eco-col-info"> */}
                    <BackgroundImage
                      style={{ backgroundSize: "auto" }}
                      {...bgImg}
                    >
                      <div className="eco-col-info">
                        <h3>{i?.preview_title}</h3>
                        {i?.preview_description && (
                          <PortableText value={i?.preview_description} />
                        )}
                        {i?.coming_soon ? (
                          <Link classname="bottom-icon">
                            <span>Coming Soon</span>
                          </Link>
                        ) : (
                          <Link
                            to={getLink(i?.slug?.current)}
                            classname="bottom-icon"
                          >
                            <span>{i.preview_button}</span>
                          </Link>
                        )}
                      </div>
                    </BackgroundImage>
                    {/* </div> */}
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EcosystemCard;
