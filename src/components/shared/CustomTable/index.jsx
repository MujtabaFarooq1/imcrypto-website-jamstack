import React from "react";
import _ from "lodash";
import InputWithButton from "../InputWithButton";
import GearIcon from "../../../../src/images/gearIcon.svg";
import "./customTable.scss";
import CustomSelect from "../CustomSelect";
import { arrayify } from "ethers/lib/utils";

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
  ],
  controlFunctions: {
    goToLink: (link) => {
      alert("visit the link");
    },
  },
};

const CustomTable = ({
  data,
  hideFooter = false,
  searchField,
  initialRowsToShow = 10,
  defaultSortBy = "None",
  setSortProperty = () => {},
  setSortOrder = () => {},
  excludeSortValues = [],
}) => {
  const [curPage, setCurPage] = React.useState(1);
  const [itemToShowPerPage, setItemToShowPerPage] =
    React.useState(initialRowsToShow);
  const [rowDataToDisplay, setRowDataToDisplay] = React.useState([]);
  const [searchFieldName, setSearchFieldName] = React.useState("from");
  const [searchString, setSearchString] = React.useState("");
  const [filteredSearchData, setFilteredSearchData] = React.useState([
    ...(data?.tableData || []),
  ]);

  const [sortBy, setSortBy] = React.useState(defaultSortBy);
  const [sortDesc, setSortDesc] = React.useState(true);

  const scrollContainerRef = React.useRef();
  const customTableRef = React.useRef();

  //------------------
  const checkIfIsNum = (n) => {
    return /^-?[\d.]+(?:e-?\d+)?$/.test(n);
  };
  //--------------------

  const showPaginatedRowData = () => {
    if (data?.tableData) {
      let tempData = [];
      let dataFromFilter = [];
      let sortedData = [...data?.tableData];

      let indexToSort = data?.tableHeads.findIndex(
        (item) => item.toLowerCase() === sortBy.toLocaleLowerCase()
      );

      let finalArr = [];

      if (indexToSort !== -1) {
        sortedData = [...data?.tableData].sort(function (a, b) {
          const prevStr = a[indexToSort].replaceAll(",", "");
          const nextStr = b[indexToSort].replaceAll(",", "");

          if (checkIfIsNum(prevStr) && checkIfIsNum(nextStr)) {
            const prevVal = parseFloat(prevStr);
            const nextVal = parseFloat(nextStr);

            return prevVal - nextVal;
          }

          finalArr = [...finalArr, prevStr, nextStr];

          return ("" + prevStr).localeCompare(nextStr);
        });

        let changeToDesc = new Set(finalArr).size !== 1;

        if (sortDesc && changeToDesc) {
          sortedData.reverse();
        }
      }

      if (!searchField) {
        dataFromFilter = [...sortedData];
      } else {
        dataFromFilter = setDataAfterSearch(sortedData);
      }

      if (dataFromFilter) {
        tempData = _.slice(
          [...dataFromFilter],
          (curPage - 1) * itemToShowPerPage,
          (curPage - 1) * itemToShowPerPage + itemToShowPerPage
        );
      }

      setRowDataToDisplay(tempData);
    }
  };

  const setDataAfterSearch = (sortedData = []) => {
    let tempData = [];

    if (data?.tableData && data?.tableHeads && searchField) {
      let indexToSearch = data.tableHeads
        .map((item) => item.toLowerCase())
        .indexOf(searchFieldName);
      tempData = sortedData.filter((item) => {
        return item[indexToSearch].includes(searchString);
      });
    }

    setFilteredSearchData(tempData);

    return tempData;
  };

  React.useEffect(() => {
    showPaginatedRowData();
    setSortProperty(sortBy);
    setSortOrder(sortDesc ? "descending" : "ascending");
  }, [data, curPage, sortBy, sortDesc]);

  React.useEffect(() => {
    setCurPage(1);
    showPaginatedRowData();
  }, [itemToShowPerPage]);

  React.useEffect(() => {
    if (searchField && Object.keys(searchField).length > 0) {
      setSearchFieldName(Object.keys(searchField)[0]);
      setSearchString(searchField[Object.keys(searchField)[0]]);
      showPaginatedRowData();
      setCurPage(1);
    }
  }, [searchField, searchString]);

  React.useEffect(() => {
    setSortBy(defaultSortBy);
  }, [defaultSortBy]);

  return (
    <>
      {data ? (
        <div className="container">
          <div className="customTable" ref={customTableRef}>
            <table>
              <thead>
                <tr>
                  {data.tableHeads.map((item) => (
                    <th
                      onClick={() => {
                        setSortBy((prev) => {
                          if (
                            excludeSortValues.includes(
                              item.toLowerCase().trim()
                            )
                          ) {
                            return prev;
                          }

                          if (item.toLowerCase().trim() === "") {
                            return prev;
                          }
                          if (item.toLowerCase() === prev.toLowerCase()) {
                            setSortDesc((prev) => !prev);
                          } else {
                            setSortDesc(true);
                          }
                          return item.toLowerCase();
                        });
                      }}
                      className="t-heading"
                    >
                      <div>
                        {sortBy?.toLowerCase() === item.toLowerCase() && (
                          <span
                            style={{
                              transform: `${
                                sortDesc ? "rotate(90deg)" : "rotate(270deg)"
                              }`,
                            }}
                            className="t-heading__sortArrow"
                          >
                            {" "}
                            &#x27A4;{" "}
                          </span>
                        )}
                        {item}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rowDataToDisplay?.length > 0 &&
                  rowDataToDisplay.map((td) => (
                    <tr>
                      {td.map((item, i) => (
                        <td>
                          {typeof item === "string" ? (
                            <div className={`tableData`}>
                              {item?.length > 41
                                ? `${item.slice(0, 8)}...${item.slice(
                                    item.length - 6
                                  )}`
                                : item}
                            </div>
                          ) : (
                            <a
                              className={`tableLink ${
                                item.btnType === 2 ? "tableLink--two" : ""
                              }`}
                              data-btnid={item.btnId}
                              link={`/`}
                              onClick={(e) => {
                                e.preventDefault();
                                if (
                                  typeof window !== "undefined" &&
                                  item?.link
                                ) {
                                  return window.open(`${item?.link || ""}/`);
                                }
                                const actionFunc =
                                  data.controlFunctions[item.btnAction];
                                actionFunc(e);
                              }}
                            >
                              {item.btnText}
                            </a>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>

          {!hideFooter && (
            <div className="row">
              <div className="md-col-12 sm-col-12">
                <div className="containerBox">
                  <button
                    className={`tablePaginationBtn tablePaginationBtn--outlined ${
                      curPage !== 1
                        ? "tablePaginationBtn--outlined--active"
                        : ""
                    } `}
                    onClick={() => {
                      setCurPage(1);
                    }}
                  >
                    {/* <span className="tablePaginationBtn__icon--first">
                      {" "}
                      &larr;{" "}
                    </span>
                    First */}

                    <svg
                      width="61"
                      height="13"
                      viewBox="0 0 61 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.52027 8.5595C2.18783 8.16272 1.83931 7.81956 1.4747 7.53001C1.12082 7.22975 0.745482 6.9831 0.348701 6.79007V6.09838C1.14226 5.69088 1.86612 5.09571 2.52027 4.31287H3.75887C3.64091 4.62386 3.5015 4.91876 3.34064 5.19758C3.19051 5.46568 3.02965 5.72305 2.85807 5.9697V6.91876C3.02965 7.14396 3.19051 7.39596 3.34064 7.67478C3.5015 7.94288 3.64091 8.23778 3.75887 8.5595H2.52027ZM2.76156 7.0957L2.77764 5.77667H11.6087V7.0957H2.76156ZM18.4277 11.9375H21.1783V7.36916H24.6207V5.22975H21.1783V2.84907H25.7788V0.645324H18.4277V11.9375ZM27.2245 11.9375H29.9752V0.645324H27.2245V11.9375ZM37.9364 4.31287C37.9364 5.19758 37.4538 5.72841 36.4243 5.72841H34.7192V2.9295H36.4243C37.4538 2.9295 37.9364 3.47641 37.9364 4.31287ZM31.9686 0.645324V11.9375H34.7192V7.67478H35.3787L37.7273 11.9375H40.8318L38.2259 7.46567C39.9632 6.95093 40.7353 5.61581 40.7353 4.20027C40.7353 2.23781 39.3519 0.645324 36.5852 0.645324H31.9686ZM50.6657 8.57558C50.6657 4.79544 45.084 5.68015 45.084 3.7177C45.084 3.00993 45.5826 2.67212 46.2421 2.68821C46.9821 2.7043 47.4968 3.13861 47.5451 3.86247H50.5209C50.4083 1.70698 48.7515 0.484467 46.2904 0.484467C43.9258 0.484467 42.1725 1.67481 42.1725 3.81421C42.1403 7.81956 47.7864 6.69356 47.7864 8.7847C47.7864 9.44421 47.2716 9.84636 46.4673 9.84636C45.6952 9.84636 45.1483 9.42813 45.0679 8.5595H42.1403C42.2207 10.8437 44.1188 12.0501 46.5478 12.0501C49.1858 12.0501 50.6657 10.4737 50.6657 8.57558ZM51.7472 2.84907H54.7392V11.9375H57.4898V2.84907H60.4818V0.645324H51.7472V2.84907Z"
                        fill="#FBA81A"
                      />
                    </svg>
                  </button>

                  <button
                    className="tablePaginationBtn tablePaginationBtn--filled"
                    disabled={!(curPage > 1)}
                    onClick={() => {
                      if (curPage > 1) {
                        setCurPage((prev) => prev - 1);
                      }
                    }}
                  >
                    &lsaquo;
                  </button>

                  <div className="tablePaginationBtn__pageContainer">
                    <div
                      ref={scrollContainerRef}
                      className="tablePaginationBtn__pageContainer--scroller"
                    >
                      {Array.from(
                        {
                          length:
                            Math.ceil(
                              filteredSearchData?.length / itemToShowPerPage
                            ) || 1,
                        },
                        (_, i) => i + 1
                      )
                        .slice(curPage - 1, filteredSearchData.length)
                        .map((item) => (
                          <button
                            className={`tablePaginationBtn tablePaginationBtn--pageItem ${
                              curPage === item
                                ? "tablePaginationBtn--pageItem--active"
                                : ""
                            }`}
                            onClick={() => {
                              setCurPage(item);
                            }}
                          >
                            {item}
                          </button>
                        ))}
                    </div>
                  </div>

                  <button
                    className="tablePaginationBtn tablePaginationBtn--filled"
                    disabled={
                      !(
                        curPage <
                        Math.ceil(
                          filteredSearchData?.length / itemToShowPerPage
                        )
                      )
                    }
                    onClick={() => {
                      if (
                        curPage <
                        Math.ceil(
                          filteredSearchData?.length / itemToShowPerPage
                        )
                      ) {
                        setCurPage((prev) => prev + 1);
                      }
                    }}
                  >
                    &rsaquo;
                  </button>

                  <button
                    className={`tablePaginationBtn tablePaginationBtn--outlined ${
                      curPage <
                      Math.ceil(filteredSearchData?.length / itemToShowPerPage)
                        ? "tablePaginationBtn--outlined--active"
                        : ""
                    }  `}
                    onClick={() => {
                      setCurPage(
                        Math.ceil(
                          filteredSearchData?.length / itemToShowPerPage
                        )
                      );

                      if (typeof window !== "undefined") {
                        window.scrollTo(
                          0,
                          customTableRef?.current?.offsetTop - 300
                        );
                      }
                    }}
                  >
                    <svg
                      className="tablePaginationBtn__icon"
                      width="56"
                      height="12"
                      viewBox="0 0 56 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.586771 0.598449V11.8906H6.94063V9.76731H3.33743V0.598449H0.586771ZM15.9577 11.8906H18.8692L14.7834 0.598449H11.5985L7.51268 11.8906H10.392L11.0676 9.896H15.2821L15.9577 11.8906ZM14.5743 7.77268H11.7915L13.1749 3.63865L14.5743 7.77268ZM28.3164 8.52871C28.3164 4.74856 22.7347 5.63328 22.7347 3.67082C22.7347 2.96305 23.2333 2.62525 23.8928 2.64134C24.6328 2.65742 25.1475 3.09174 25.1958 3.81559H28.1716C28.059 1.66011 26.4022 0.437592 23.9411 0.437592C21.5765 0.437592 19.8232 1.62794 19.8232 3.76734C19.791 7.77268 25.4371 6.64668 25.4371 8.73782C25.4371 9.39734 24.9223 9.79948 24.118 9.79948C23.3459 9.79948 22.799 9.38125 22.7186 8.51262H19.791C19.8714 10.7968 21.7695 12.0032 24.1985 12.0032C26.8365 12.0032 28.3164 10.4268 28.3164 8.52871ZM29.3979 2.80219H32.3899V11.8906H35.1405V2.80219H38.1325V0.598449H29.3979V2.80219ZM52.171 8.51262C52.2783 8.2338 52.3962 7.97643 52.5249 7.74051C52.6536 7.49386 52.7984 7.2633 52.9592 7.04882H44.3373V5.72979H52.9592C52.8091 5.51532 52.6697 5.29012 52.541 5.05419C52.4123 4.80755 52.2944 4.54481 52.1871 4.26599H53.4096C54.0745 5.04883 54.8037 5.644 55.5973 6.05151V6.74319C54.8037 7.12925 54.0745 7.71906 53.4096 8.51262H52.171Z"
                        fill="#FBA81A"
                      />
                    </svg>

                    {/* Last
                    <span className="tablePaginationBtn__icon--last">
                      {" "}
                      &rarr;{" "}
                    </span> */}
                  </button>
                </div>
              </div>
              {/* <div className="md-col-3 sm-col-12">
                <div className="containerBox d-block">
                  <CustomSelect
                    options={[20]}
                    curSelected={itemToShowPerPage}
                    setCurSelected={setItemToShowPerPage}
                    icon={GearIcon}
                    itemsLength={filteredSearchData?.length}
                    curPage={curPage}
                  />
                </div>
              </div> */}
            </div>
          )}
        </div>
      ) : (
        <h1 className="tablePagination__loading">Loading ...</h1>
      )}
    </>
  );
};

export default CustomTable;
