import React from "react";

import Button from "../button";
import CustomModal from "../shared/CustomModal";
import CustomTable from "../shared/CustomTable";

import "./pointsSummaryPopup.scss";

const tableData = {
  tableHeads: ["Network", "Mined Time", "$Value", "Points", "Pool", "Link"],
  tableData: [
    [
      "ethereum",
      "2022-03-14T00:01:47Z",
      "26,000.00",
      "26,000.00",
      "A  ",
      { type: "btn", btnText: "Visit", btnAction: "goToLink", btnType: 2 },
    ],
    [
      "ethereum",
      "2022-03-14T00:01:47Z",
      "26,000.00",
      "26,000.00",
      "A  ",
      { type: "btn", btnText: "Visit", btnAction: "goToLink", btnType: 2 },
    ],
    [
      "ethereum",
      "2022-03-14T00:01:47Z",
      "26,000.00",
      "26,000.00",
      "A  ",
      { type: "btn", btnText: "Visit", btnAction: "goToLink", btnType: 2 },
    ],
    [
      "ethereum",
      "2022-03-14T00:01:47Z",
      "26,000.00",
      "26,000.00",
      "A  ",
      { type: "btn", btnText: "Visit", btnAction: "goToLink", btnType: 2 },
    ],
  ],
  controlFunctions: {
    goToLink: (link) => {
      alert("visit the link");
    },
  },
};

const PointsSummaryPopup = ({ isOpen, setIsModalOpen, dataForTable }) => {
  const tableRowData = dataForTable?.currencies?.map((item) => [
    item?.network,
    item?.minedTimestamp?.replace(/.\d+Z$/g, "Z"),
    parseFloat(item?.usdValue)?.toLocaleString("en-US"),
    parseFloat(item?.points)?.toLocaleString("en-US"),
    item?.pool,
    {
      type: "btn",
      btnText: "Visit",
      btnAction: "goToLink",
      btnType: 2,
      link: `https://etherscan.io/tx/${item?.transactionId}`,
    },
  ]);

  const dataToShow = {
    tableHeads: ["Network", "Mined Time", "$Value", "Points", "Pool", "Link"],
    tableData: tableRowData,
    controlFunctions: {
      goToLink: () => {
        alert("visit the link");
      },
    },
  };

  const num = 5000;
  return (
    <div className="pointsSummaryPopup">
      <CustomModal isOpen={isOpen}>
        {dataForTable ? (
          <div>
            <h2 className="pointsSummaryPopup__body__heading">Summary </h2>
            <p className="pointsSummaryPopup__body__address">
              {dataForTable?.currencies[0]?.from ||
                "x290eb0489026aa63feb8547ee2e93cad053751710"}
            </p>

            <CustomTable
              excludeSortValues={["link"]}
              data={dataToShow}
              hideFooter={true}
            />

            <div className="pointsSummaryPopup__btnContainer">
              <button
                className="pointsSummaryPopup__btn"
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  setIsModalOpen(false);
                }}
              >
                close
              </button>
            </div>
          </div>
        ) : (
          <h1> Loading ...</h1>
        )}
      </CustomModal>
    </div>
  );
};

export default PointsSummaryPopup;
