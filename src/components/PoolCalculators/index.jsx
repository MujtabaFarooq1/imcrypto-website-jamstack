import React from "react";
import InputWithButton from "../shared/InputWithButton";
import _ from "lodash";

import { toast, ToastContainer } from "react-toastify";
import SacrificeAssetTable from "../sacrificeAssetTable";
import presentableNum from "../../utils/presentableNum";
import BigNumber from "bignumber.js";

import "./poolCalculators.scss";

const removeDecimal = (text) => {
  return text.replace(".", "");
};

const PoolCalculators = () => {
  //-------------------------------------------------------------------------
  const poolARangeChart = [
    {
      min: 1,
      max: 1999999,
      pointsPerDollar: 100,
    },
    {
      min: 2000000,
      max: 3999999,
      pointsPerDollar: 101,
    },
    {
      min: 4000000,
      max: 5999999,
      pointsPerDollar: 102,
    },
    {
      min: 6000000,
      max: 6999999,
      pointsPerDollar: 103,
    },
    {
      min: 7000000,
      max: 7999999,
      pointsPerDollar: 105,
    },
    {
      min: 8000000,
      max: 8999999,
      pointsPerDollar: 107,
    },
    {
      min: 9000000,
      max: 9999999,
      pointsPerDollar: 110,
    },
    {
      min: 10000000,
      max: 10999999,
      pointsPerDollar: 113,
    },
    {
      min: 11000000,
      max: 12000000,
      pointsPerDollar: 118,
    },
  ];

  const poolBRangeChart = [
    {
      min: 12000001,
      max: 12999999,
      tokensUnlocked: 20000000,
    },
    {
      min: 13000000,
      max: 13999999,
      tokensUnlocked: 40000000,
    },
    {
      min: 14000000,
      max: 14999999,
      tokensUnlocked: 60000000,
    },
    {
      min: 15000000,
      max: 15999999,
      tokensUnlocked: 80000000,
    },
    {
      min: 16000000,
      max: 16999999,
      tokensUnlocked: 100000000,
    },
    {
      min: 17000000,
      max: 17999999,
      tokensUnlocked: 120000000,
    },
    {
      min: 18000000,
      max: 18999999,
      tokensUnlocked: 140000000,
    },
    {
      min: 19000000,
      max: 19999999,
      tokensUnlocked: 160000000,
    },
    {
      min: 20000000,
      max: 20999999,
      tokensUnlocked: 180000000,
    },
    {
      min: 21000000,
      max: Number.MAX_VALUE,
      tokensUnlocked: 200000000,
    },
  ];

  const poolADefaultCredits = {
    your_wd_points: "N/A",
    your_percsymbl_of_total_wd_supply: "N/A",
    wallet_daily_fee_collected: "N/A",
    daily_income_usd_value_native_coin: "N/A",
  };

  const calculatePoolACredits = (poolARangeChart = poolARangeChart) => {
    if (
      !walletDailyVolumeA ||
      !yourSacrificedAmountA ||
      !totalUsdValueSacrificedA
    ) {
      return toast("Kindly fill all the fields");
    }

    if (
      totalUsdValueSacrificedA * 1 > 12000000 ||
      yourSacrificedAmountA * 1 > 12000000
    ) {
      return toast("Please enter a value less than $12,000,000 USD");
    }

    if (totalUsdValueSacrificedA * 1 < yourSacrificedAmountA * 1) {
      return toast(
        "Total sacrificed amount must be greater than or equal to your sacrifice amount "
      );
    }

    if (totalUsdValueSacrificedA !== -1) {
      const foundItem = _.find(poolARangeChart, (item) => {
        return (
          totalUsdValueSacrificedA >= item.min &&
          totalUsdValueSacrificedA <= item.max
        );
      });

      if (!foundItem) {
        setPoolAcredits({
          your_wd_points: "N/A",
          your_percsymbl_of_total_wd_supply: "N/A",
          wallet_daily_fee_collected: "N/A",
          daily_income_usd_value_native_coin: "N/A",
        });
        return toast("Kindly enter value between    $1 - $12,000,000");
      }

      const pointsWdTokkens = Math.floor(
        foundItem.pointsPerDollar * yourSacrificedAmountA
      );
      const percentageOfPoolsAchieved = pointsWdTokkens / 2000000000;
      const WalletDailyFeeCollected = walletDailyVolumeA * 0.00729;
      const dailyIncomeUsdValueNativeCoin =
        percentageOfPoolsAchieved * WalletDailyFeeCollected;

      poolADefaultCredits.your_wd_points = presentableNum(
        new BigNumber(pointsWdTokkens || 0),
        true
      );

      poolADefaultCredits.your_percsymbl_of_total_wd_supply =
        percentageOfPoolsAchieved * 100 + " %" || "0%";

      poolADefaultCredits.wallet_daily_fee_collected =
        "$" + presentableNum(new BigNumber(WalletDailyFeeCollected || 0), true);

      poolADefaultCredits.daily_income_usd_value_native_coin =
        "$" +
        presentableNum(new BigNumber(dailyIncomeUsdValueNativeCoin || 0), true);

      setPoolAcredits(poolADefaultCredits);
    }
  };

  const calculatePoolBCreditsTwo = (poolBRangeChart = poolBRangeChart) => {
    if (
      !walletDailyVolumeB ||
      !yourSacrificedAmountB ||
      !totalUsdValueSacrificedB
    ) {
      return toast("Kindly fill all the fields");
    }

    if (yourSacrificedAmountB < 1) {
      return toast(`Your sacrificed amount must be $1 USD or more`);
    }
    if (
      totalUsdValueSacrificedB < 12000001 ||
      totalUsdValueSacrificedB < yourSacrificedAmountB * 1 + 12000000
    ) {
      setPoolBcredits({
        your_wd_points: "N/A",
        your_percsymbl_of_total_wd_supply: "N/A",
        wallet_daily_fee_collected: "N/A",
        daily_income_usd_value_native_coin: "N/A",
      });
      return toast(
        `Minimum value should be ${yourSacrificedAmountB * 1 + 12000000}`
      );
    }

    if (totalUsdValueSacrificedB !== -1) {
      const foundItem = _.find(poolBRangeChart, (item) => {
        return (
          totalUsdValueSacrificedB >= item.min &&
          totalUsdValueSacrificedB <= item.max
        );
      });

      const totalSacrificedAdjusted = totalUsdValueSacrificedB - 12000000;
      const myPercentageOfPool =
        yourSacrificedAmountB / totalSacrificedAdjusted;

      const pointsPerDollar =
        (foundItem.tokensUnlocked * myPercentageOfPool) / yourSacrificedAmountB;

      const pointsWdTokkens = pointsPerDollar * yourSacrificedAmountB;
      const percentageOfPoolsAchieved = pointsWdTokkens / 2000000000;
      const WalletDailyFeeCollected = walletDailyVolumeB * 0.00729;
      const dailyIncomeUsdValueNativeCoin =
        percentageOfPoolsAchieved * WalletDailyFeeCollected;

      poolADefaultCredits.your_wd_points = presentableNum(
        new BigNumber(pointsWdTokkens || 0),
        true
      );

      poolADefaultCredits.your_percsymbl_of_total_wd_supply =
        percentageOfPoolsAchieved * 100 + " %" || "0%";

      poolADefaultCredits.wallet_daily_fee_collected =
        "$" + presentableNum(new BigNumber(WalletDailyFeeCollected || 0), true);

      poolADefaultCredits.daily_income_usd_value_native_coin =
        "$" +
        presentableNum(new BigNumber(dailyIncomeUsdValueNativeCoin || 0), true);

      setPoolBcredits(poolADefaultCredits);
    }
  };

  const calculatePoolBCredits = (x, y) => {
    let ans = 0;
    if (x > 12000000 && x <= 13000000) {
      ans = 20000000 / (x - 12000000);
    } else if (x > 13000000 && x <= 14000000) {
      ans = 40000000 / (x - 12000000);
    } else if (x > 14000000 && x <= 15000000) {
      ans = 60000000 / (x - 12000000);
    } else if (x > 15000000 && x <= 16000000) {
      ans = 80000000 / (x - 12000000);
    } else if (x > 16000000 && x <= 17000000) {
      ans = 100000000 / (x - 12000000);
    } else if (x > 17000000 && x <= 18000000) {
      ans = 120000000 / (x - 12000000);
    } else if (x > 18000000 && x <= 19000000) {
      ans = 140000000 / (x - 12000000);
    } else if (x > 19000000 && x < 20000000) {
      ans = 160000000 / (x - 12000000);
    } else if (x > 20000000 && x < 21000000) {
      ans = 180000000 / (x - 12000000);
    } else if (x > 21000000 && x < 22000000) {
      ans = 200000000 / (x - 12000000);
    }

    if (ans === 0) {
      setPoolBcredits({
        wd_sacrificed_per_dollar: "N/A",
        total_coins: "N/A",
      });
      return toast(
        "enter value of sacrificed in dollars between  $12,000,001 and $21,999,999"
      );
    }

    setPoolBcredits({
      wd_sacrificed_per_dollar: presentableNum(new BigNumber(ans), true),
      total_coins: presentableNum(new BigNumber(ans * y), true),
    });
  };

  //-------------------------------------------------------------------------------
  const [sacValue, setSacValue] = React.useState();
  const [poolACredits, setPoolAcredits] = React.useState(poolADefaultCredits);
  const [poolBCredits, setPoolBcredits] = React.useState(poolADefaultCredits);

  // ---
  const [yourSacrificedAmountA, setYourSacrificedAmountA] = React.useState();
  const [totalUsdValueSacrificedA, setTotalUsdValueSacrificedA] =
    React.useState();
  const [walletDailyVolumeA, setWalletDailyVolumeA] = React.useState();

  // Pool B stuff
  const [totalSacrificedInDollars, setTotalSacrificedInDollars] =
    React.useState();
  const [totalSacrificed, setTotalSacrificed] = React.useState();

  //
  const [yourSacrificedAmountB, setYourSacrificedAmountB] = React.useState();
  const [totalUsdValueSacrificedB, setTotalUsdValueSacrificedB] =
    React.useState();
  const [walletDailyVolumeB, setWalletDailyVolumeB] = React.useState();

  //--------------------------------------------------------------------------------------------
  //--------------------------------------------------------------------------------------------
  //--------------------------------------------------------------------------------------------

  return (
    <section className="PoolCalculators">
      <div className="row PoolCalculators__boxes">
        <div className="sm-col-12 lg-col-6 md-col-12">
          <div className="PoolCalculators__box">
            <h2 className="PoolCalculators__heading">
              {" "}
              Calculate Pool A Points{" "}
            </h2>
            <div className="poweredByText">&nbsp;</div>
            <div className="PoolCalculators__formWrap">
              <div className="row">
                <div className="sm-col-12 lg-col-12 md-col-12">
                  <input
                    type="number"
                    placeholder="Your Sacrificed Amount ($12,000,000 USD Max)"
                    className="primaryInput"
                    value={yourSacrificedAmountA}
                    onChange={(e) => {
                      const val = e.target.value;
                      if (val.trim() === "") {
                        return setYourSacrificedAmountA("");
                      }
                      setYourSacrificedAmountA(removeDecimal(val));
                    }}
                  />
                </div>
                <div className="sm-col-12 lg-col-12 md-col-12">
                  <input
                    type="number"
                    placeholder="Total Value Sacrificed ($12,000,000 USD Max)"
                    className="primaryInput"
                    value={totalUsdValueSacrificedA}
                    onChange={(e) => {
                      const val = e.target.value;
                      if (val.trim() === "") {
                        setTotalUsdValueSacrificedA("");
                      }
                      if (val.match(/^[0-9]+$/) !== null) {
                        setTotalUsdValueSacrificedA(val);
                      }
                    }}
                  />
                </div>
                <div className="sm-col-12 lg-col-12 md-col-12">
                  <input
                    type="number"
                    placeholder="Wallet Daily Volume (USD Value)"
                    className="primaryInput"
                    value={walletDailyVolumeA}
                    onChange={(e) => {
                      const val = e.target.value;
                      if (val.trim() === "") {
                        setWalletDailyVolumeA("");
                      }
                      if (val.match(/^[0-9]+$/) !== null) {
                        setWalletDailyVolumeA(val);
                      }
                    }}
                  />
                </div>
                <div className="sm-col-12 md-col-12 lg-col-12">
                  <button
                    className="primaryBtn"
                    onClick={() => {
                      calculatePoolACredits(poolARangeChart);
                    }}
                  >
                    Calculate
                  </button>
                </div>
              </div>
            </div>

            <div className="PoolCalculators__values row">
              {Object.keys(poolACredits).map((item, i) => {
                return (
                  <div
                    className={`PoolCalculators__values__item sm-col-12 md-col-12 ${
                      Object.keys(poolACredits).length === i + 1 &&
                      (i + 1) % 2 !== 0
                        ? "lg-col-12 full_width_item"
                        : "lg-col-6"
                    }`}
                  >
                    <p className="PoolCalculators__values__item__heading">
                      {item === "daily_income_usd_value_native_coin" ? (
                        <span>
                          Your Daily Income <br /> (USD Value In Native Coin){" "}
                        </span>
                      ) : (
                        _.startCase(item)
                          .replace("Percsymbl", "%")
                          .replace("Wd", "WD")
                      )}
                    </p>
                    <p className="PoolCalculators__values__item__desc">
                      {poolACredits[item]}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="sm-col-12 lg-col-6 md-col-12">
          <div className="PoolCalculators__box">
            <h2 className="PoolCalculators__heading">
              {" "}
              Calculate Pool B Points{" "}
            </h2>
            <div className="poweredByText">
              Powered By
              <a href="https://Twitter.com/TopGunHexadian" target={"_blank"}>
                {" "}
                TopGun
              </a>
            </div>
            <div className="PoolCalculators__formWrap">
              <div className="row">
                <div className="sm-col-12 lg-col-12 md-col-12">
                  <input
                    type="number"
                    placeholder="Your Sacrificed Amount ($USD Value)"
                    className="primaryInput"
                    value={yourSacrificedAmountB}
                    onChange={(e) => {
                      const val = e.target.value;
                      if (val.trim() === "") {
                        setYourSacrificedAmountB("");
                      }
                      if (val.match(/^[0-9]+$/) !== null) {
                        setYourSacrificedAmountB(val);
                      }
                    }}
                  />
                </div>
                <div className="sm-col-12 lg-col-12 md-col-12">
                  <input
                    type="number"
                    placeholder={`Total Value Sacrificed ($${(yourSacrificedAmountB >
                    0
                      ? yourSacrificedAmountB * 1 + 12000000
                      : 12000001
                    ).toLocaleString("us-EN")} USD Minimum)`}
                    className="primaryInput"
                    value={totalUsdValueSacrificedB}
                    onChange={(e) => {
                      const val = e.target.value;
                      if (val.trim() === "") {
                        setTotalUsdValueSacrificedB("");
                      }
                      if (val.match(/^[0-9]+$/) !== null) {
                        setTotalUsdValueSacrificedB(val);
                      }
                    }}
                  />
                </div>
                <div className="sm-col-12 lg-col-12 md-col-12">
                  <input
                    type="number"
                    placeholder="Wallet Daily Volume (USD Value)"
                    className="primaryInput"
                    value={walletDailyVolumeB}
                    onChange={(e) => {
                      const val = e.target.value;
                      if (val.trim() === "") {
                        setWalletDailyVolumeB("");
                      }
                      if (val.match(/^[0-9]+$/) !== null) {
                        setWalletDailyVolumeB(val);
                      }
                    }}
                  />
                </div>
                <div className="sm-col-12 md-col-12 lg-col-12">
                  <button
                    className="primaryBtn"
                    onClick={() => {
                      calculatePoolBCreditsTwo(poolBRangeChart);
                    }}
                  >
                    Calculate
                  </button>
                </div>
              </div>
            </div>

            <div className="PoolCalculators__values row">
              {Object.keys(poolBCredits).map((item, i) => {
                return (
                  <div
                    className={`PoolCalculators__values__item sm-col-12 md-col-12 ${
                      Object.keys(poolBCredits).length === i + 1 &&
                      (i + 1) % 2 !== 0
                        ? "lg-col-12 full_width_item"
                        : "lg-col-6"
                    }`}
                  >
                    <p className="PoolCalculators__values__item__heading">
                      {item === "daily_income_usd_value_native_coin" ? (
                        <span>
                          Your Daily Income <br /> (USD Value In Native Coin){" "}
                        </span>
                      ) : (
                        _.startCase(item)
                          .replace("Percsymbl", "%")
                          .replace("Wd", "WD")
                      )}
                    </p>
                    <p className="PoolCalculators__values__item__desc">
                      {poolBCredits[item]}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <ToastContainer className={"PoolCalculators__toaster"} />
    </section>
  );
};

export default PoolCalculators;
