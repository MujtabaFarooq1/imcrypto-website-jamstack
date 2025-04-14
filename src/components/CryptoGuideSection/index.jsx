import React, { useState } from "react";
import users from "../../images/wallet.png";
import "./index.scss";

import Lines from "../Line";

import PrimeryDiscription from "../shared/PrimaryDescription";
import SecondaryHeading from "../shared/SecondaryHeading";
import Button from "../button";
import CustomModal from "../shared/CustomModal";

const CryptoGuideSection = ({ title, sub_title, description, video_url }) => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <section className="beginners_and_team">
      <div className="wraper">
        <div className="row">
          <div className="md-col-6 content-box">
            <SecondaryHeading
              align="left"
              primaryText={sub_title}
              secondaryText={title}
            />
            <PrimeryDiscription align="left" paragraphText={description} />
          </div>
          <div className="md-col-6">
            <div className="video-box">
              <img
                className="video_nail"
                src={users}
                alt="video_thembnail"
                onClick={() => setModalShow(true)}
                style={{ cursor: "pointer" }}
              />
              <Button
                className="play"
                onClick={() => setModalShow(true)}
              ></Button>
              {/* modal  */}

              {
                <CustomModal
                  isOpen={modalShow}
                  hasCloseBtn={true}
                  closeModal={() => setModalShow(false)}
                >
                  <iframe
                    width={760}
                    height={415}
                    src={video_url}
                    title="YouTube video player"
                    frameBorder={0}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen=""
                  />
                </CustomModal>
              }
            </div>
          </div>
        </div>
      </div>
      <Lines className={"my-5"} />
    </section>
  );
};

export default CryptoGuideSection;
