import React from "react";
import "./customSelect.scss";

const defaultOptions = [5, 10, 20, 40];

const CustomSelect = ({
  options = defaultOptions,
  curSelected,
  setCurSelected,
  icon,
  itemsLength,
  curPage,
  isSelectable = false,
}) => {
  return (
    <div className="customSelect__box">
      <select
        className={`customSelect`}
        onChange={(e) => {
          if (setCurSelected) {
            setCurSelected(e.target.value * 1);
          }
        }}
        disabled={!isSelectable}
      >
        {options.map((item) => (
          <option
            key={item}
            selected={curSelected === item ? "selected" : ""}
            value={item}
          >
            {`${curPage * item - item + 1}-${
              curPage * item <= itemsLength ? curPage * item : itemsLength
            }/${itemsLength}`}
          </option>
        ))}
      </select>
      {isSelectable && icon && (
        <img
          className="customSelect__icon"
          src={icon}
          alt="customSelect-icon"
        />
      )}
    </div>
  );
};

export default CustomSelect;
