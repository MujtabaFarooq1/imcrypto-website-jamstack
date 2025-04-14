import React, { useEffect } from "react";
import _ from "lodash";
import PrimeryDiscription from "../shared/PrimaryDescription";
import PrimeryHeading from "../shared/PrimaryHeading";
import Lines from "../Line";
import "./index.scss";
import { fetchSacrificesTotals } from "../../utils/apis/getTotalSacrifice";
import getInitialValueForSacrifice from "../../utils/apis/getInitialValueForSacrifice";
import presentableNum from "../../utils/presentableNum";
import BigNumber from "bignumber.js";

const cryptoValues = [
  {
    value: "508,413.44",
    symbol: "HEX",
  },
  {
    value: "491,881.19",
    symbol: "USDC",
  },
  {
    value: "55,718.64",
    symbol: "BNB",
  },
  {
    value: "138,223.99",
    symbol: "BUSD",
  },
  {
    value: "111,505.43",
    symbol: "USDT",
  },
  {
    value: "88,136.04",
    symbol: "DAI",
  },
  {
    value: "188,872.37",
    symbol: "BSC-USD",
  },
];

const PulseChainSacrifice = ({
  title,
  description,
  button_text,
  button_link,
  desclaimerSection,
}) => {
  const [initialSacrificeData, setInitialSacrificeData] =
    React.useState(undefined);
  const [totalSacrifice, setTotalSacrifice] = React.useState(undefined);
  const [dataForIcons, setDataForIcons] = React.useState([]);

  // Api fetching Stuff
  //---------------------------------------------------------//
  //---------------------------------------------------------//
  //---------------------------------------------------------//

  React.useEffect(() => {
    fetchSacrificesTotals()
      .then((data) => {
        setTotalSacrifice(data.totalAmmount);
        setDataForIcons(data.totals);
      })
      .catch((er) => alert(er.message));

    getInitialValueForSacrifice()
      .then((e) => {
        setInitialSacrificeData(e);
        // console.log("Data Initial Sacrifice is -->", e);
      })
      .catch((err) => console.log(err));
  }, []);

  //---------------------------------------------------------//
  //---------------------------------------------------------//
  //---------------------------------------------------------//

  // sacrificeStart

  return (
    <>
      <div className="pulsechainsection">
        <div className="wrapper-section">
          <PrimeryHeading headingText={title} />
          <button
            className="primary_button"
            onClick={() => {
              if (typeof window !== "undefined") {
                window.location = `/points`;
              }
            }}
          >
            {button_text}
          </button>
          <PrimeryDiscription
            paragraphText={`
            Sacrifice begins with "Pool A" on ${new Date(
              initialSacrificeData?.sacrificeStart
            )
              ?.toUTCString()
              ?.replace(
                "GMT",
                "UTC"
              )} and ends when $1,200,000 USD is sacrificed or on April 14th, 2022 at 00:00 UTC. If sacrifice Pool A is filled before April 14th, 2022 at 00:00 UTC, sacrifice "Pool B" will open Immediately upon "Pool A" being filled.
            `}
            customClass="primary-desc"
          />
          <PrimeryDiscription
            paragraphText={`
            "Pool B" will stay open with no monetary cap for five (5) days. Any sacrifices received at the end of the fifth (5th) day after "Pool B" opens, will be returned to the wallet address that sent them, minus gas fees to return.
            `}
            customClass="primary-desc"
          />
          {initialSacrificeData && (
            <PrimeryDiscription
              paragraphText={`Pool B closes at  ${new Date(
                initialSacrificeData?.endPoolBTime
              )
                ?.toUTCString()
                ?.replace("GMT", "UTC")} (${new Date(
                initialSacrificeData?.endPoolBTime
              ).toLocaleString()} your time)`}
              customClass="primary-desc"
            />
          )}
        </div>

        <div className="wrapper-section">
          <PrimeryHeading headingText={"00:00:00:00"} hideSubtitle={true} />
          <p className="sacrify-desc">ONLY USE THE ADDRESS YOU FIND BELOW.</p>
          <p className="sacrify-descrption">
            If you see an address anywhere else, or someone reaches out to you
            privately
          </p>
          <p className="sacrify-descrtion">Consider it a scam.</p>

          <div className="accordian">
            {initialSacrificeData?.address} &nbsp;
          </div>
        </div>

        <div className="total_sacrifice_container">
          <p className="sacrify-descritionns">
            {new Date(initialSacrificeData?.endPoolBTime) > +new Date()
              ? "The total amount that has been sacrificed thus far:"
              : "Sacrifice is over, do not send any more funds as they will not be returned"}
          </p>

          <PrimeryHeading
            headingText={`$${totalSacrifice || "-----"}`}
            hideSubtitle={true}
            customClass="update-class-date"
          />

          <p className="secondary-desc">
            This is only an estimation of usd value
          </p>
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
                    {" "}
                    {presentableNum(
                      new BigNumber(dataForIcons[key].usdValue)
                    )}{" "}
                  </>
                </p>
              );
            })}
        </div>

        <div className="cards-wrapper">
          <div className="bg-botto-linear">
            <div className="wraper poolcontainer">
              <div className="row ">
                <div className="lg-col-6 sm-col-12">
                  <div className="card-box">
                    <PrimeryHeading
                      headingText={"pool A"}
                      customClass="pool-card"
                      hideSubtitle={true}
                    />
                    <h5 className="polmiliancards"> 1.2 Millian</h5>
                    <h5 className="polmiliancards">=</h5>
                    <h5 className="polmiliancards">~70.8% of WD</h5>
                    <PrimeryDiscription
                      paragraphText={
                        'Once the 1.2 Million is sacrificed, all additional funds pour over into "Pool B".'
                      }
                      customClass="desc"
                    />
                  </div>
                </div>

                <div className="lg-col-6 sm-col-12">
                  <div className="card-box">
                    <PrimeryHeading
                      headingText={"pool B"}
                      customClass="pool-card"
                      hideSubtitle={true}
                    />
                    <h5 className="polmiliancards"> No Cap </h5>
                    <h5 className="polmiliancards">=</h5>
                    <h5 className="polmiliancards">~10% of WD</h5>
                    <PrimeryDiscription
                      paragraphText={
                        '1,200,001 to 1.3m sacrificed, unlocks an additional 1%. Every 100k sacrificed thereafter is an additional 1% unlocked. This rate will continue until 10% is unlocked. Once 10% is unlocked there will be NO CAP on the total sacrifice. The 10% will be distributed proportionally to the individuals sacrificed amount in "Pool B"'
                      }
                      customClass="desc"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="wrapper-disclamir">
            <h1 className="main-heading">{desclaimerSection.title}</h1>
            <p className="desc">{desclaimerSection.description}</p>
          </div>
          <Lines />
        </div>
      </div>
    </>
  );
};
export default PulseChainSacrifice;
