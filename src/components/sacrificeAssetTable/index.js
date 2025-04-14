import React from "react";
import "./sacrificeAssetTable.scss";
import dumy_img from "../../images/IMD 500px 1.png";

const SacrificeAssetTable = ({ defaulTableData, customClass }) => {
  const [maxLength, setMaxLength] = React.useState(0);

  const getMaxLength = (
    columns = defaulTableData.columns,
    columnData = defaulTableData.columnData
  ) => {
    let maxLength = 0;

    columns.forEach((item) => {
      let colDataLength = columnData[item].length;
      if (maxLength < colDataLength) {
        maxLength = colDataLength;
      }
    });

    console.log('maxLength', maxLength)
    return maxLength;
  };

  React.useEffect(() => {
    setMaxLength(getMaxLength());
  }, []);

  return (
    <div className={`Scrifice_Asset_Table_Section ${customClass || ""}`}>
      <div className="table_heading">
        <h3 className="table_heading_text">{defaulTableData.heading}</h3>
      </div>
      <div className="table_wrapper">
        <div className="table_container">
          <table className="Scrifice_Asset_Table_Section__table" id="style-2">
            <thead>
              {defaulTableData.columns.map((item) => (
                <th>{item.split("_").join(" ")}</th>
              ))}
            </thead>

            <>
              {Array(maxLength)
                .fill("")
                .map((item, idx) => (
                  <tr>
                    {defaulTableData.columns.map((colName) => (
                      <td>
                        <div className="table_data_container">
                          {defaulTableData.columnData[colName][idx]?.icon && (
                            <img
                              src={
                                defaulTableData.columnData[colName][idx]?.icon
                              }
                              className="table_img"
                            />
                          )}

                          <span className="table_field_data">
                            {defaulTableData.columnData[colName][idx]?.value ||
                              ""}
                          </span>
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
            </>

            {/* <tr>
            <td>
              <img src={dumy_img} className="table_img" />
              <span className="table_field_data">Ether $0</span>
            </td>
            <td>
              <img src={dumy_img} className="table_img" />
              <span className="table_field_data">Ether $0</span>
            </td>
            <td>
              <img src={dumy_img} className="table_img" />
              <span className="table_field_data">Ether $0</span>
            </td>
            <td>
              <img src={dumy_img} className="table_img" />
              <span className="table_field_data">Ether $0</span>
            </td>
          </tr>
          <tr>
            <td>
              <img src={dumy_img} className="table_img" />
              <span className="table_field_data">Ether $0</span>
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>

          <tr>
            <td>
              <img src={dumy_img} className="table_img" />
              <span className="table_field_data">Ether $0</span>
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>

          <tr>
            <td>
              <img src={dumy_img} className="table_img" />
              <span className="table_field_data">Ether $0</span>
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>

          <tr>
            <td>
              <img src={dumy_img} className="table_img" />
              <span className="table_field_data">Ether $0</span>
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>

          <tr>
            <td>
              <img src={dumy_img} className="table_img" />
              <span className="table_field_data">Ether $0</span>
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>

          <tr>
            <td>
              <img src={dumy_img} className="table_img" />
              <span className="table_field_data">Ether $0</span>
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>

          <tr>
            <td>
              <img src={dumy_img} className="table_img" />
              <span className="table_field_data">Ether $0</span>
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr> */}
          </table>
        </div>
      </div>
    </div>
  );
};

export default SacrificeAssetTable;
