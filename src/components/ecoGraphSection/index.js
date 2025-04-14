import { Link } from "gatsby";
import React, { useEffect } from "react";
import "./ecograph.scss";

const EcoGraphSection = (props) => {
  const { image, buttons } = props;
  useEffect(() => {
    var script = document.createElement("script");
    script.src = "https://widget.nomics.com/embed.js";
    document.getElementById("graph-container")?.appendChild(script);
  }, []);

  return (
    <div className="internet-money-section">
      <div className="container">
        <div className="internet-money-graph" id="graph-container">
          <div class="nomics-ticker-widget" data-name="Internet Money"  data-theme="dark" data-base="IM2" data-quote="BNB" ></div>
        </div>
        <div className="graph-nav">
          <ul>
            {Array.isArray(buttons) &&
              buttons.map((btn, idx) => (
                <li>
                  {btn.button_link ? (
                    <Link to={btn.button_link} target="_blank">
                      {btn.button_label}
                    </Link>
                  ) : (
                    <a>{btn.button_label}</a>
                  )}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EcoGraphSection;
