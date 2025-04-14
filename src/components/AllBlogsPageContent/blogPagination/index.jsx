import _, { set } from "lodash";
import React from "react";
import "./blogPagination.scss";

const BlogPagination = ({
  totalItems,
  itemToShowPerPage,
  setDataToShow,
  filteredData,
  minAdditionalPaginationToShow = 2,
}) => {
  const [curPage, setCurPage] = React.useState(1);
  const [threshold, setThreshold] = React.useState(
    Math.ceil(totalItems / itemToShowPerPage)
  );
  const [paginationThreshold, setPaginationThreshold] = React.useState(
    threshold === 1 ? 0 : threshold - minAdditionalPaginationToShow
  );

  const [hidePagination, setHidePagination] = React.useState(false);

  React.useEffect(() => {
    const res = _.slice(
      [...filteredData],
      (curPage - 1) * itemToShowPerPage,
      (curPage - 1) * itemToShowPerPage + itemToShowPerPage
    );
    setDataToShow(res);
    setHidePagination(!(res.length > 0));
  }, [curPage, filteredData]);

  React.useEffect(() => {
    setCurPage(1);
  }, [filteredData]);

  return (
    <div>
      {!hidePagination && (
        <div className="blogPagination">
          <button
            className="blogPagination__btn blogPagination__btn--end"
            disabled={!(curPage > 1)}
            onClick={() => {
              setCurPage((prev) => prev - 1);
            }}
          >
            <svg
              width="13"
              height="5"
              viewBox="0 0 13 5"
              className="blogPagination__btn__icon blogPagination__btn--left-icon"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.94196 4.5595C2.60952 4.16272 2.261 3.81956 1.89639 3.53001C1.5425 3.22975 1.16717 2.9831 0.770389 2.79007V2.09838C1.56395 1.69088 2.28781 1.09571 2.94196 0.312868H4.18056C4.0626 0.623859 3.92319 0.918764 3.76233 1.19758C3.6122 1.46568 3.45134 1.72305 3.27976 1.9697V2.91876C3.45134 3.14396 3.6122 3.39596 3.76233 3.67478C3.92319 3.94288 4.0626 4.23778 4.18056 4.5595H2.94196ZM3.18325 3.0957L3.19933 1.77667H12.0304V3.0957H3.18325Z"
                fill="#FBA81A"
              />
            </svg>
            Newer posts
          </button>
          <div className="blogPagination__btn blogPagination__btn--normal">
            {Array.from(
              {
                length: threshold,
              },
              (_, i) => i + 1
            )
              .slice(
                curPage >= paginationThreshold
                  ? paginationThreshold - 1
                  : curPage - 1,
                curPage + paginationThreshold
              )
              .map((item) => (
                <button
                  className={`blogPagination__btn--normalBtn  ${curPage === item
                      ? "blogPagination__btn--normal--btn--active"
                      : "blogPagination__btn--normal--btn--unactive"
                    }`}
                  onClick={() => {
                    setCurPage(item);
                  }}
                >
                  {item}
                </button>
              ))}
          </div>
          <button
            className="blogPagination__btn blogPagination__btn--end"
            disabled={
              !(curPage < Math.ceil(filteredData?.length / itemToShowPerPage))
            }
            onClick={() => {
              setCurPage((prev) => prev + 1);
            }}
          >
            older posts
            <svg
              width="13"
              height="5"
              viewBox="0 0 13 5"
              className="blogPagination__btn__icon blogPagination__btn--right-icon"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.85882 4.5595C10.1913 4.16272 10.5398 3.81956 10.9044 3.53001C11.2583 3.22975 11.6336 2.9831 12.0304 2.79007V2.09838C11.2368 1.69088 10.513 1.09571 9.85882 0.312868H8.62022C8.73818 0.623859 8.87759 0.918764 9.03845 1.19758C9.18858 1.46568 9.34944 1.72305 9.52102 1.9697V2.91876C9.34944 3.14396 9.18858 3.39596 9.03845 3.67478C8.87759 3.94288 8.73818 4.23778 8.62022 4.5595H9.85882ZM9.61753 3.0957L9.60145 1.77667H0.770388V3.0957H9.61753Z"
                fill="#FBA81A"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogPagination;
