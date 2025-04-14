import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import loadable from "@loadable/component";
import SacrificeHeroSection from "../components/SacrificeHeroSection";
import SacrificeDescription from "../components/sacrificeDescription/index";
import SacrificePool from "../components/sacrificePool/index";
import { fetchSacrificesTotals } from "../utils/apis/getTotalSacrifice";
import { APICONFIG } from "../utils/config/apiConfigs";
import presentableNum from "../utils/presentableNum";
import BigNumber from "bignumber.js";

// ----------- Loadable Components
const SacrificeAssetTable = loadable(() =>
  import("../components/sacrificeAssetTable/index")
);

const PoolCalculators = loadable(() => import("../components/PoolCalculators"));

const SacrificeRoadMap = loadable(() =>
  import("../components/sacrificeRoadMap")
);

const SacrificePageDesclaimerPopup = loadable(() =>
  import("../components/sacrificePageDesclaimerPopup")
);

const SacrificeMultiCHain = loadable(() =>
  import("../components/sacrificeMultiChainSection/index")
);

const SacrificeDisclaimer = loadable(() =>
  import("../components/sacrificeDisclaimer/index")
);

//---------------------
const tableOneData = {
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

const tableTwoData = {
  heading: "Pool A Points Breakdown",
  columns: ["range", "total_sacrificed_value", "points_per_dollar"],
  columnData: {
    range: [
      { value: "1" },
      { value: "2" },
      { value: "3" },
      { value: "4" },
      { value: "5" },
      { value: "6" },
      { value: "7" },
      { value: "8" },
      { value: "9" },
    ],
    total_sacrificed_value: [
      { value: "$1 - $1,999,999" },
      { value: "$2,000,000 - $3,999,999" },
      { value: "$4,000,000 - $5,999,999" },
      { value: "$6,000,000 - $6,999,999" },
      { value: "$7,000,000 - $7,999,999" },
      { value: "$8,000,000 - $8,999,999" },
      { value: "$9,000,000 - $9,999,999" },
      { value: "$10,000,000 - $10,999,999" },
      { value: "$11,000,000 - $12,000,000" },
    ],
    points_per_dollar: [
      { value: "100" },
      { value: "101" },
      { value: "102" },
      { value: "103" },
      { value: "105" },
      { value: "107" },
      { value: "110" },
      { value: "113" },
      { value: "118" },
    ],
  },
};

export default function Sacrificepage({ data, ...props }) {
  const { sanitySacrificePage } = data || {};
  const { sections, seo } = sanitySacrificePage || {};

  const [desclaimerPopupOpen, setDesclaimerPopupOpen] = React.useState(false);
  const [tableOneDataState, setTableOneDataState] = React.useState();
  const [totalAmount, setTotalAmount] = React.useState(0.0);
  const [walletAddress, setWalletAddress] = React.useState(null);

  const [v1Data, setV1Data] = React.useState();

  React.useEffect(() => {
    setDesclaimerPopupOpen(true);

    return () => {
      setDesclaimerPopupOpen(false);
    };
  }, []);

  //--------------

  const fetchAndSetTableOneData = () => {
    fetchSacrificesTotals()
      .then((data) => {
        setTableOneDataState(data?.tableOneData);
        setTotalAmount(data?.totalAmmount);
        setWalletAddress(
          data?.walletAddress || "0xceBA0659AeB8527B47E9B176237361dDEe352001"
        );
      })
      .catch((er) => alert(er.message));
  };

  React.useEffect(() => {
    fetchSacrificesTotals("v1")
      .then((data) => {
        setV1Data(data);
      })
      .catch((er) => alert(er.message));
  }, []);

  React.useEffect(() => {
    fetchAndSetTableOneData();
    const FSTI = setInterval(() => {
      fetchAndSetTableOneData();
    }, APICONFIG.timeOutInterval);
    return () => {
      clearInterval(FSTI);
      setTableOneDataState(tableOneData);
      setTotalAmount("0.00");
      setWalletAddress(null);
    };
  }, []);

  // Api fetching Stuff
  //---------------------------------------------------------//
  //---------------------------------------------------------//

  return (
    <Layout seo={seo} hideBlogs={true} location={props.location}>
      <SacrificeHeroSection
        {...sections?.find(
          (item) => item.__typename === "SanitySarificeHeroSection"
        )}
      />

      <SacrificeMultiCHain
        totalAmount={presentableNum(
          new BigNumber(
            (totalAmount ? totalAmount?.replaceAll(",", "") * 1 : 0) +
              (v1Data ? v1Data?.totalAmmount.replaceAll(",", "") * 1 : 0)
          )
        )}
        walletAddress={walletAddress}
        currentAmountSacrificed={totalAmount}
        firstCreaditSacrificed={v1Data?.totalAmmount}
      />

      {tableOneData && (
        <SacrificeAssetTable
          defaulTableData={tableOneDataState || tableOneData}
        />
      )}

      <SacrificeDescription
        {...sections?.find(
          (item) => item.__typename === "SanitySacrificeWhatAreDetailsSection"
        )}
      />
      <SacrificePool
        {...sections?.find(
          (item) => item.__typename === "SanitySacrificePoolCapSections"
        )}
      />
      <SacrificeAssetTable
        defaulTableData={tableTwoData}
        customClass="table_center custom-width"
      />
      <PoolCalculators />
      <SacrificeRoadMap />

      <SacrificeDisclaimer
        {...sections?.find(
          (item) => item.__typename === "SanitySarificeDesclaimer"
        )}
        totalAmmount={v1Data?.totalAmmount}
        totals={v1Data?.totals}
      />
      <SacrificePageDesclaimerPopup
        isOpen={desclaimerPopupOpen}
        closeModal={() => {
          setDesclaimerPopupOpen(false);
        }}
      />
    </Layout>
  );
}

export const query = graphql`
  query Sacrificepage {
    # --------------------------
    # --------------------------
    # --------------------------
    # Sacrifice Pagen Start
    # --------------------------
    # --------------------------
    # --------------------------
    sanitySacrificePage {
      seo {
        title
        og_title
        og_description
        meta_description
        _type
        twitter_creator
        twitter_description
        twitter_title
        twitter_url
        twitter_card {
          asset {
            gatsbyImageData(formats: WEBP)
          }
        }
        twitter_image {
          asset {
            gatsbyImageData(formats: WEBP)
          }
        }
      }
      sections {
        ... on SanitySarificeHeroSection {
          __typename
          title
          left_asset {
            asset {
              url
            }
          }
          right_asset {
            asset {
              url
            }
          }
          begins_title
        }

        ... on SanitySacrificePoolCapSections {
          __typename
          Pool_a_title
          Pool_a_cap_value
          Pool_a_cap_percentage
          Pool_a_desc
          Pool_b_title
          Pool_b_cap_value
          Pool_b_cap_percentage
          Pool_b_desc
        }

        ... on SanitySacrificeWhatAreDetailsSection {
          __typename
          title
          content
        }
        ... on SanitySarificePulsechain {
          __typename
          title
          description
          button_text
          button_link
        }
        ... on SanitySarificeDesclaimer {
          __typename
          title
          description
        }
      }
    }
    # --------------------------
    # --------------------------
    # --------------------------
    # Sacrifice Page End
    # --------------------------
    # --------------------------
    # --------------------------
  }
`;
