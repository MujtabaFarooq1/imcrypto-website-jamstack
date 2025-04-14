import axios from "axios";
import BigNumber from "bignumber.js";
import { APICONFIG } from "../config/apiConfigs";

const getPointsSummary = async (version = "v2") => {
  const pointsURL = `${APICONFIG.baseUrl.PRODUCTION_PROD}${
    version === "v1" ? "" : "/" + version
  }/sacrifice-points`
  const { data } = await axios?.get(
    pointsURL
  );
  console.log(
    "URL to visit is ",
    pointsURL,
    data
  );

  const initialPointsData = data?.points || [];
  let groupedPoints = {};

  initialPointsData.map((item) => {
    if (!groupedPoints[item.from]) {
      groupedPoints[item.from] = {
        currencies: [item],
        totalValue: item.usdValue * 1,
        totalPoints: item.points * 1,
        // totalValue: new BigNumber(item.usdValue),
        // totalPoints: new BigNumber(item.points),
      };
    } else {
      groupedPoints[item.from].currencies.push(item);
      groupedPoints[item.from].totalValue += item.usdValue * 1;
      groupedPoints[item.from].totalPoints += item.points * 1;
      //   groupedPoints[item.from].totalValue.plus(item.usdValue.toString());
      //   groupedPoints[item.from].totalPoints.plus(item.points.toString());
    }
  });

  return groupedPoints;
};

export default getPointsSummary;
