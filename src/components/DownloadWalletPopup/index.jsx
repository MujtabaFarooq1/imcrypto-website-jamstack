import React from "react";
import CustomModal from "../shared/CustomModal";
import PrimeryHeading from "../shared/PrimaryHeading";

const DownloadWalletPopup = ({ isOpen, closeWalletFunc }) => {
  return (
    <div>
      <CustomModal
        isOpen={isOpen}
        hasCloseBtn={true}
        closeModal={closeWalletFunc}
      >
        <PrimeryHeading
          headingText={"Wallet Beta coming November 2022 "}
          hideSubtitle={true}
        />
      </CustomModal>
    </div>
  );
};

export default DownloadWalletPopup;
