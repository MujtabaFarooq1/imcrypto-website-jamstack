import { graphql, useStaticQuery } from "gatsby";
/* global BigInt */
import { first } from "lodash";
import { props } from "lodash/fp";
import React, { useEffect } from "react";
import { Fragment } from "react";
import { useState } from "react";
import { Strings } from "../../resources/localization";
import { BACKEND_SERVER } from "../../utils/apis/backendServer";
import { getActiveLanguage } from "../../utils/helper";
import Button from "../button";
import { NetworkDetails } from "../NetworkDetails";
import "./statistics-section.scss";

export const displayDecimalWithCommas = (
  value,
  minDecimal,
  isCommas = false
) => {
  try {
    let resValue;

    if (!value) {
      value = 0;
    }

    let bigN = value.toString().split(".")[1] || "0000000000000";
    let valueNum = BigInt(parseInt(value)).toString();

    resValue = valueNum + "." + bigN.toString().slice(0, minDecimal);
    if (isCommas) {
      resValue = displayCommas(resValue);
    }
    return resValue;
  } catch (er) {
    return "0." + "0".repeat(minDecimal);
  }
};
export const displayCommas = (number) => {
  try {
    const splitedNumber = number.split(".");
    const firstPart = BigInt(splitedNumber[0]).toLocaleString("en-US");
    const finalNumber =
      splitedNumber.length == 1
        ? firstPart
        : firstPart + "." + splitedNumber[1];
    return finalNumber;
  } catch (er) {
    return er.message;
  }
};

const ResourcesStatisticPage = (props) => {
  const { } = props || {};
  const [statsData, setStatsData] = useState([])
  const [message, setMessage] = useState('');

  const ResourceStatisticsQuery = useStaticQuery(graphql`
    {
      allSanityStatisticsPage {
        edges {
          node {
            title
            sub_title  
            contact_address {
              sub_title
              title
            }
            current_card {
              title
              sub_title
              text
            }
            total_liquidity {
              title
              sub_title
            }
            title_subtitle {
              title
              sub_title
            }
            statistics {
              ... on SanityStatistic {
                title
                sub_title
                coming_soon
                main_card {
                  title
                  sub_title
                }
                other_cards {
                  title
                  sub_title
                  text
                }
              }
            }
          }
        }
      }
    }
  `);
  const data = Object.assign(
    {},
    ResourceStatisticsQuery.allSanityStatisticsPage.edges[0].node
  );
  const {
    title,
    sub_title,
    contact_address,
    current_card,
    total_liquidity,
    title_subtitle,
    statistics,
  } = data || {};

  useEffect(async () => {
    const baseURL = `${BACKEND_SERVER.BASE_URL}` + `${BACKEND_SERVER.GET_IMTOKEN_DETAILS}`
    const selectedNetwork = NetworkDetails[0]
    const body = {
      chainId: selectedNetwork.chainId
    };

    const response = await fetch(baseURL, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    const data = await response.json();
    /* istanbul ignore else */
    if (response.status === 200) {
      setStatsData(data.data);
    } else {
      setMessage(data.message);
    }
  }, [])

  const renderContractAddress = (title, subtitle) => {
    console.log(title);
    return (
      <div className='stats-contract-address'>
        <div className="current-box-title">
          {title && <h6 className="opacity">{title}</h6>}
          {subtitle && <p>{subtitle}</p>}
        </div>
      </div>
    );
  };

  const renderNetworkState = (title, subtitle, value) => {
    console.log(title, subtitle, value, "jhkhgbjkhgb");
    return (
      <div className='stats-current-box'>
        <div className="current-box-title">
          {title && <h6>{title}</h6>}
          {subtitle && <p>{subtitle}</p>}
        </div>
        {value &&
          <div className="current-box-details">
            <p className="state-value text-theme-color">{value}</p>
          </div>
        }
      </div>
    );
  };

  const renderTotal = (title, totalLiquidityInUSD, value) => {
    return (
      <div className='stats-total-liquidity'>
        <div className="stats-liquidity-box ">
          {title && <h4>{title}</h4>}
          {totalLiquidityInUSD &&
            <h5 className="state-value text-theme-color">{totalLiquidityInUSD}</h5>
          }
          {value &&
            <h5 className="state-value text-theme-color">{value}</h5>
          }
        </div>
      </div>
    );
  };
  const renderNetworkContent = (title, childern) => {
    return (
      <div className='statistics-title'>
        {title && <h6 className="statistics-sub-title">{title}</h6>}
        <div>
          {childern}
        </div>
      </div>
    );
  };

  return (
    <div className="statistics-section">
      <div className="container">
        {/* <div className="statistics-header-section"> */}
        {/* <div className="statistics-title">
            <h2 className="statistics-main-title">{title}</h2>
            <h5 className="statistics-sub-title">{sub_title}</h5>
          </div> */}
        <ul>
          {Array.isArray(statistics) &&
            statistics.map((i, index) => (
              <>
              { index == 0 ? (
                <li key={index} className="statistics-header-section">
                  <div className="statistics-title">
                    <h5 className="statistics-main-title">{i.title}</h5>
                    <h6 className="statistics-sub-title">{i.sub_title}</h6>
                  </div>
                  <Fragment>
                    <div className="stats-content">
                         <div className="stats-current">
                              <ul>
                                {Array.isArray(statsData) && statsData.map(item => {
                                  return (
                                    <li>
                                      <div className="stats-current-box">
                                      {!item?.isComingSoon ? <>{renderContractAddress(
                                        Strings.CONTRACT_ADDRESS,
                                        item?.imTokenDetails?.address
                                      )}
                                      <div className="stats-current-box-cover">
                                      {renderNetworkState(
                                        Strings.CURRENT_PRICE,
                                        Strings.formatString(Strings.HOURS_PRICE, [
                                          displayDecimalWithCommas(
                                            item?.imTokenPrice,
                                            10,
                                            true
                                          ),
                                          item?.h24PriceChange,
                                        ]),
                                        `$1 = ${displayDecimalWithCommas(
                                          item?.oneDollarIMAmount,
                                          6,
                                          false
                                        )} ${item?.imTokenDetails?.symbol}`
                                      )}
                                      {renderNetworkState(
                                        Strings.CURRENT_HOLDERS,
                                        Strings.INTERNET_MONEY_DAY,
                                        Strings.formatString(Strings.COUNT_UP_HERE, [
                                            "Day 1 is 11/30/2021 UTC",
                                        ])
                                      )}
                                      </div>
                                      {renderTotal(
                                        Strings.TOTAL_LIQUIDITY,
                                        `$ ${displayDecimalWithCommas(
                                          item?.totalLiquidityInUSD,
                                          2,
                                          true
                                        )}`,
                                        `${item?.liquidityInIM} ${item?.imTokenDetails?.symbol} / ${item?.liquidityInQUOTE} ${item?.quoteTokenDetails?.symbol}`
                                      )}</> : <div className="statistics-coin-section">
                                      {renderNetworkContent(
                                        item.networkName,
                                        <h2 className="coming-soon-title">
                                          {Strings.COMING_SOON}
                                        </h2>
                                      )}
                                      </div>}
                                      </div>
                                    </li>
                                  );
                                })}
                              </ul>
                      </div>
                    </div>
                  </Fragment>
              </li>
              ) : (
              <li
                key={index}
                className={
                  index == 0
                    ? "statistics-header-section"
                    : "statistics-coin-section"
                }
              >
                <div className="statistics-title">
                  <h5 className="statistics-main-title">{i.title}</h5>
                  <h6 className="statistics-sub-title">{i.sub_title}</h6>
                </div>
                {(i.coming_soon || i?.coming_soon == null) ? (
                  <div className="coin-row-setion">
                    <h2 className="coming-soon-title">{Strings.COMING_SOON}</h2>
                  </div>
                ) : (
                  <Fragment>
                    <div className="stats-content">
                      <div className="stats-contract-address">
                        <h6>{i.main_card?.title}</h6>
                        <p>{i.main_card?.sub_title}</p>
                      </div>
                      <div className="stats-current">
                        <ul className={i.other_cards?.length % 2 == 0 ? 'list-even' : 'list-odd'}>
                          {Array.isArray(i.other_cards) &&
                            i.other_cards.map((i, index) => (
                              <li key={index} >
                                <div className="stats-current-box">
                                  <div className="current-box-title">
                                    <h6>{i.title}</h6>
                                    <p>{i.sub_title}</p>
                                  </div>
                                  <div className="current-box-details">
                                    <p>{i.text}</p>
                                  </div>
                                </div>
                              </li>
                            ))}
                        </ul>
                      </div>
                    </div>
                  </Fragment>
                )}
              </li>)}
              </>
            ))}
        </ul>
        {/* <div className="stats-content">
            <div className="stats-contract-address">
              <h6>{contact_address.title}</h6>
              <p>{contact_address.sub_title}</p>
            </div>
            <div className="stats-current">
              <ul>
                {current_card.map((i) => (
                  <li>
                    <div className="stats-current-box">
                      <div className="current-box-title">
                        <h6>{i.title}</h6>
                        <p>{i.sub_title}</p>
                      </div>
                      <div className="current-box-details">
                        <p>{i.text}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="stats-total-liquidity">
              <div className="stats-liquidity-box">
                <h5>{total_liquidity.title}</h5>
                <p>{total_liquidity.sub_title}</p>
              </div>
            </div>
          </div> */}
        {/* </div> */}

        {/* <div className="statistics-coin-section">
          <ul>
            {title_subtitle.map((i) => {
              return (
                <li>
                  <div className="coin-row-setion">
                    <h5>{i.title}</h5>
                    <h6>{i.sub_title}</h6>
                    <h2>Coming Soon</h2>
                  </div>
                </li>
              );
            })}
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default ResourcesStatisticPage;
