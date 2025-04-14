import React from "react";
import "./sacrificeDisclaimer.scss";
import presentableNum from "../../utils/presentableNum";
import BigNumber from "bignumber.js";
import { fetchSacrificesTotals } from "../../utils/apis/getTotalSacrifice";
import getInitialValueForSacrifice from "../../utils/apis/getInitialValueForSacrifice";
import PoolCalculators from "../PoolCalculators";

const SacrificeDisclaimer = ({ title, description, totalAmmount, totals }) => {
  const [initialSacrificeData, setInitialSacrificeData] =
    React.useState(undefined);
  const [totalSacrifice, setTotalSacrifice] = React.useState(undefined);
  const [dataForIcons, setDataForIcons] = React.useState([]);
  // Api fetching Stuff
  //---------------------------------------------------------//

  React.useEffect(() => {
    // fetchSacrificesTotals("v1")
    //   .then((data) => {
    //     console.log("sacrifice desclaimer data", data);
    // setTotalSacrifice(data.totalAmmount);
    // setDataForIcons(data.totals);
    //   })
    //   .catch((er) => alert(er.message));

    getInitialValueForSacrifice()
      .then((e) => {
        setInitialSacrificeData(e);
        // console.log("Data Initial Sacrifice is -->", e);
      })
      .catch((err) => console.log(err));
  }, []);

  React.useEffect(() => {
    setTotalSacrifice(totalAmmount);
    setDataForIcons(totals);
  }, [totalAmmount, totals]);

  //---------------------------------------------------------//

  return (
    <div className="Sacrifice_Disclaimer_Section">
      <div className="disclaimer_wrapper">
        <h1 className="disclaimer_heading">
          Sacrifice for WD on PulseChain (Concluded)
        </h1>
        <div className="multiChain_result">
          <p className="text">
            Total Sacrificed
            <br /> Value
          </p>
          <p className="value">${totalSacrifice}</p>
        </div>
        <div className="disclaimer_btn_wrapper">
          <button type="submit" className="disclaimer_btn">
            <a className="btn_text" href="/points">
              View Sacrifice Points
            </a>
          </button>
        </div>

        <div className="wrapper-cards">
          {dataForIcons &&
            Object?.keys(dataForIcons).map((key) => {
              return (
                <p className="cards" key={key}>
                  <span>
                    <img
                      src={`/images/crypto/${key.toLowerCase()}.png`}
                      className="icon-tab"
                    />
                  </span>
                  {key}{" "}
                  <>
                    {" $"}
                    {dataForIcons[key]}
                    {/* {presentableNum(
                      new BigNumber(dataForIcons[key].usdValue)
                    )}{" "} */}
                  </>
                </p>
              );
            })}
        </div>

        <div className="disclaimer_comment_wrapper">
          <div className="disclaimer_comment">
            <h3 className="disclaimer_comment_heading">
              <span>{title}</span>
            </h3>
            <p className="disclaimer_comment_text">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SacrificeDisclaimer;
