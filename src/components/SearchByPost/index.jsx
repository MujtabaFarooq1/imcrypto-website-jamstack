import React from "react";
import BlogsNavWrap from "../BlogsNavWrap";
import InputWithButton from "../shared/InputWithButton/index";

const SearchByPost = ({ allData, setFilteredData }) => {
  return (
    <BlogsNavWrap title="Search By Post">
      <div className="searchByPost">
        <InputWithButton
          buttonLink={"/"}
          buttonText={"Search"}
          inputPlaceHolder={"Search..."}
          inputType="text"
          onClick={() => {
            return (e) => {
              const searchTerm = e.value?.toLowerCase();
              setFilteredData(
                [...allData].filter((item) =>
                  item?.node?.title?.toLowerCase()?.includes(searchTerm)
                )
              );
            };
          }}
        />
      </div>
    </BlogsNavWrap>
  );
};

export default SearchByPost;
