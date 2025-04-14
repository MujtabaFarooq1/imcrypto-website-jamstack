import React from "react";
import "./sacrificePool.scss";

const SacrificePool = ({
  Pool_a_title,
  Pool_a_cap_value,
  Pool_a_cap_percentage,
  Pool_a_desc,
  Pool_b_title,
  Pool_b_cap_value,
  Pool_b_cap_percentage,
  Pool_b_desc,
}) => {
  return (
    <div className="Sacrifice_Pool_Section">
      <div className="pool_wrapper">
        <div className="first_pool">
          <h3 className="pool_heading">{Pool_a_title}</h3>
          <p className="pool_price">{Pool_a_cap_value}</p>
          <p className="pool_equal">=</p>
          <p className="pool_percent">{Pool_a_cap_percentage}</p>
          <p className="pool_text">{Pool_a_desc}</p>
        </div>
        <div className="second_pool">
          <h3 className="pool_heading">{Pool_b_title}</h3>
          <p className="pool_price">{Pool_b_cap_value}</p>
          <p className="pool_equal">=</p>
          <p className="pool_percent">{Pool_b_cap_percentage}</p>
          <p className="pool_text">{Pool_b_desc}</p>
        </div>
      </div>
    </div>
  );
};

export default SacrificePool;
