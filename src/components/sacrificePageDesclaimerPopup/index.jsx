import React from "react";
import CustomModal from "../shared/CustomModal";
import "./sacrificePageDesclaimerPopup.scss";

const SacrificePageDesclaimerPopup = ({ isOpen, closeModal }) => {
  return (
    <CustomModal
      hasCloseBtn={true}
      isOpen={isOpen}
      closeModal={closeModal}
      customCloseText="I Understand, Continue"
    >
      <div className="desclaimerPopup">
        <h1 className="desclaimerPopup__heading"> *Important Disclaimer* </h1>
        <p className="desclaimerPopup__desc">
          If you Choose to sacrifice.... You Must have{" "}
          <span className="desclaimerPopup__desc__yellow">NO Expectation </span>{" "}
          of profit Derived From The Work of Others.
        </p>
      </div>
    </CustomModal>
  );
};

export default SacrificePageDesclaimerPopup;
