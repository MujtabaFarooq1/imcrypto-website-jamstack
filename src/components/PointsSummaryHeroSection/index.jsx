import React from "react";
import Button from "../button";

import Lines from "../Line";
import InputWithButton from "../shared/InputWithButton";
import PrimeryDiscription from "../shared/PrimaryDescription";
import { ToastContainer, toast } from "react-toastify";

import SecondaryHeading from "../shared/SecondaryHeading";
import SearchIcon from "../../../src/images/searchIcon.svg";

import "./pointsSummary.scss";

const VersionDropdown = ({
  tableVersion,
  setTableVersion,
}) => {
  return (
    <div className="version-sorting">
      <select
        onChange={(e) => setTableVersion(e.target.value)}
        value={tableVersion}
      >
        <option value={`v2`}>Multi Chain</option>
        <option value={`v1`}>PulseChain</option>
      </select>
    </div>
  )
}
const PointsSummaryHeroSection = ({
  title,
  sub_title,
  description,
  setSearchAddress,
  sortProperty,
  sortOrder,
  background_image,
  tableVersion,
  setTableVersion,
}) => {
  // const [sorting, setSort] = React.useState()
  return (
    <div
      className="pointsSummaryHeroSection"
      style={{ backgroundImage: `url(${background_image?.asset?.url})` }}
    >
      <div className="top-sec">
        <SecondaryHeading
          primaryText={sub_title}
          secondaryText={title}
          center={true}
        />

        <PrimeryDiscription
          paragraphText={`Sorted by: ${sortProperty} (${sortOrder})`}
          alignCenter={true}
        />
      </div>
      <Lines />

      <div className="container">

        <VersionDropdown
          tableVersion={tableVersion}
          setTableVersion={setTableVersion} />
        <InputWithButton
          buttonLink={"/"}
          buttonText={"Search"}
          inputPlaceHolder={"Check your address"}
          inputType="text"
          preIcon={SearchIcon}
          // prefix={() => (
          // )}
          onClick={() => {
            return (e) => {
              const value = e.value.toLowerCase();

              if (value === "") {
                setSearchAddress("");
              } else if (/^0x[a-fA-F0-9]{40}$/g.test(value)) {
                setSearchAddress(value);
              } else {
                toast("Please Enter a valid address!");
              }
            };
          }}
          // onClick={notify}
        />
        {/* <button onClick={notify}>Notify!</button> */}
        <ToastContainer />
      </div>
    </div>
  );
};

export default PointsSummaryHeroSection;
