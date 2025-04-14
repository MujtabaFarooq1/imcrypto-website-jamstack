import BigNumber from "bignumber.js";
import presentableNum from "../presentableNum";
import axios from "axios";
import _ from "lodash";
import { ethers } from "ethers";
import { APICONFIG } from "../config/apiConfigs";
import { v1setup } from "./staticApiData/v1setup";
import { v1totalSacrifice } from "./staticApiData/v1totalSacrifice";

// ----------------------
// ----------------------
export const totalToCurrencyKey = ({ currencyId, network }) =>
  [currencyId.toLowerCase(), network].join("-");
export const currencyKey = ({ id, network }) =>
  [id.toLowerCase(), network].join("-");

const binancesmartchain = 'binancesmartchain'
const ethereum = 'ethereum'
const avalanche = 'avalanche'
const polygon = 'polygon'
const groupedCurrencies = [
  [{
    id: ethers.constants.AddressZero,
    network: binancesmartchain,
  }, {
    id: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    network: binancesmartchain,
  }],
  [{
    id: ethers.constants.AddressZero,
    network: ethereum,
  }, {
    id: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
    network: ethereum,
  }],
  [{
    id: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
    network: ethereum,
  }, {
    id: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
    network: binancesmartchain,
  }],
  [{
    id: '0xdac17f958d2ee523a2206206994597c13d831ec7',
    network: ethereum,
  }, {
    id: '0x55d398326f99059fF775485246999027B3197955',
    network: binancesmartchain,
  }],
  [{
    id: ethers.constants.AddressZero,
    network: polygon,
  }, {
    id: '0x0000000000000000000000000000000000001010',
    network: polygon,
  }],
  [{
    id: ethers.constants.AddressZero,
    network: avalanche,
  }, {
    id: '0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7',
    network: avalanche,
  }],
];

const findInGroup = (network, id) => {
  return _.find(groupedCurrencies, (group) =>
    _.find(group, {
      network,
      id: id.toLowerCase(),
    })
  );
};

const unwrappedSymbol = (symbol) => {
  if (symbol.toLowerCase().includes("bsc-usd")) {
    return "USDT";
  }
  return symbol.startsWith("W") ? symbol.slice(1) : symbol;
};
// ----------------------
// ----------------------
// ----------------------

const fetchSacrificesTotals = async (version = "v2") => {
  try {
    const addressToCheck =
      version === "v2"
        ? "0xceBA0659AeB8527B47E9B176237361dDEe352001"
        : "0x481E02290322Ce2EE74017BeECBDF40C2D407927";

    let result = null;
    let combinedCurrencies = {};
    let totalFinalAmount = 0.0;

    if (version === "v1") {
      result = v1totalSacrifice;
    } else {
      const sacrificeTotals = await axios.get(
        `${APICONFIG.baseUrl.PRODUCTION_PROD}${
          version === "v1" ? "" : "/" + version
        }/sacrifice-totals/${addressToCheck}`
      );

      // data = setupData.data;
      result = sacrificeTotals.data;
    }

    // =============   Calculating Totals  ================

    totalFinalAmount = result.totals
      .map((item) => item.usdValue * 1)
      .reduce((prev, next) => prev + next);

    // ====================================================

    // ==============   Currencies to map ====================

    let networks = result.totals.map((item) => {
      return {
        ...item,
        sumbol: v1totalSacrifice.currencies.find(
          (curItem) =>
            curItem?.id?.toLowerCase() === item.currencyId?.toLowerCase() &&
            curItem.network?.toLowerCase() === item.network?.toLowerCase()
        )?.symbol,
      };
    });

    networks.map((item) => {
      if (combinedCurrencies[item.sumbol]) {
        combinedCurrencies[item.sumbol] += item.usdValue * 1;
      } else {
        combinedCurrencies[item.sumbol] = item.usdValue * 1;
      }
    });
    Object.keys(combinedCurrencies).map(
      (key) =>
        (combinedCurrencies[key] = presentableNum(
          new BigNumber(combinedCurrencies[key])
        ))
    );
    //=============================================================

    //  ---- Accepted Assets Stuff

    let tableOneData = {
      heading: "Accepted Assets",
      columns: ["Ethereum", "BSC", "Avalanche", "Polygon"],
      columnData: {
        Ethereum: [
          { value: "ETH $0", icon: "/images/crypto/eth.png" },
          { value: "HEX $0", icon: "/images/crypto/hex.png" },
          { value: "USDC $0", icon: "/images/crypto/usdc.png" },
          { value: "USDT $0", icon: "/images/crypto/usdt.png" },
          { value: "DAI $0", icon: "/images/crypto/dai.png" },
          { value: "LUSD $0", icon: "/images/crypto/lusd.png" },
          { value: "LINK $0", icon: "/images/crypto/Rectangle 277 (5).png" },
          { value: "WBTC $0", icon: "/images/crypto/Rectangle 277 (9).png" },
        ],
        BSC: [
          { value: "BNB $0", icon: "/images/crypto/bnb.png" },
          { value: "USDC $0", icon: "/images/crypto/usdc.png" },
          { value: "USDT $0", icon: "/images/crypto/usdt.png" },
          { value: "BUSD $0", icon: "/images/crypto/busd.png" },
        ],
        Avalanche: [
          { value: "AVAX $0", icon: "/images/crypto/Rectangle 277 (11).png" },
        ],
        Polygon: [
          { value: "MATIC $0", icon: "/images/crypto/Rectangle 277 (12).png" },
        ],
      },
    };

    [...result?.totals].forEach((item) => {
      const foundItem = result.currencies.find(
        (cur) =>
          cur.network?.toLowerCase() === item.network?.toLowerCase() &&
          cur.id?.toLowerCase() === item.currencyId?.toLowerCase()
      );

      const foundItemSymbol =
        foundItem?.symbol?.toLowerCase() === "bsc-usd"
          ? "usdt"
          : foundItem?.symbol?.toLowerCase();

      const itemToPush = {
        value: `${foundItemSymbol?.toUpperCase()} $${(
          item?.usdValue * 1
        )?.toFixed(2)}`,
        icon: `/images/crypto/${foundItemSymbol}.png`,
      };

      if (item.network === "binancesmartchain") {
        tableOneData?.columnData["BSC"].map((subItem, idx) => {
          if (subItem.value.split(" $")[0] === foundItemSymbol?.toUpperCase()) {
            tableOneData.columnData["BSC"][idx] = itemToPush;
          }
        });
      } else {
        let curBlock = `${
          item?.network?.charAt(0)?.toUpperCase() + item?.network?.slice(1)
        }`;
        tableOneData.columnData[curBlock].map((subItem, idx) => {
          if (subItem.value.split(" $")[0] === foundItemSymbol?.toUpperCase()) {
            tableOneData.columnData[curBlock][idx] = itemToPush;
          }
        });
      }
    });

    // --- Accepted Asstets Stuff End
    console.log({
      totals: combinedCurrencies,
      currencies: result?.currencies || [],
      totalAmmount: presentableNum(
        new BigNumber(`${totalFinalAmount * 1}` || "0"),
        true
      ),
      tableOneData,
      walletAddress: null,
    })

    return {
      totals: combinedCurrencies,
      currencies: result?.currencies || [],
      totalAmmount: presentableNum(
        new BigNumber(`${totalFinalAmount * 1}` || "0"),
        true
      ),
      tableOneData,
      walletAddress: null,
    };
  } catch (error) {
    console.log("something went wrong :(", error.message);
    return error;
  }
};

export { fetchSacrificesTotals };
