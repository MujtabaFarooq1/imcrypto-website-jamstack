import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Blogs from "../components/blogs";
import Email from "../components/email";
import PointsSummaryHeroSection from "../components/PointsSummaryHeroSection";
import CustomTable from "../components/shared/CustomTable";

import PointsSummaryPopup from "../components/PointsSummaryPopup";
import getPointsSummary from "../utils/apis/getPointsSummary";
import presentableNum from "../utils/presentableNum";
import Lines from "../components/Line";

export default function PointsSummaryPage({ data, ...props }) {
  const { sanityHome, sanityPointsSummary } = data || {};
  const { sections, seo } = sanityPointsSummary || {};
  const [originalApiData, setOriginalApiData] = React.useState({});
  const [dataForTable, setDataForTable] = React.useState({});

  //----------
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [currentActiveTableData, setCurrentActiveTableData] =
    React.useState("");

  const [searchAddress, setSearchAddress] = React.useState("");
  const [tableVersion, setTableVersion] = React.useState("v2");

  const tableData = {
    tableHeads: ["Address", "$Value", "Points", "Count", ""],
    tableData: [],
    controlFunctions: {
      showDetails: (msg) => {
        setIsModalOpen(true);
      },
    },
  };

  React.useEffect(() => {
    getPointsSummary(tableVersion).then((data) => {
      setOriginalApiData(data);

      setDataForTable({
        tableHeads: ["Address", "$Value", "Points", "Count", ""],
        tableData: Object.keys(data).map((key) => [
          key,
          presentableNum(data[key]?.totalValue || 0, true),
          presentableNum(data[key]?.totalPoints || 0),
          data[key].currencies.length.toString(),

          {
            type: "btn",
            btnText: "Details",
            btnAction: "showDetails",
            btnId: key,
          },
        ]),
        controlFunctions: {
          showDetails: (e) => {
            setCurrentActiveTableData(e.target.getAttribute("data-btnid"));
            setIsModalOpen(true);
          },
        },
      });
    });
  }, [
    tableVersion,
    setOriginalApiData,
    setDataForTable,
  ]);

  const [sortProperty, setSortProperty] = React.useState("$value");
  const [sortOrder, setSortOrder] = React.useState("descending");

  return (
    <Layout seo={seo} location={props.location}>
      <PointsSummaryHeroSection
        setSearchAddress={setSearchAddress}
        sortProperty={sortProperty}
        sortOrder={sortOrder}
        tableVersion={tableVersion}
        setTableVersion={setTableVersion}
        {...sections?.find(
          (item) => item.__typename === "SanityPoinstsSummaryHeroSection"
        )}
      />

      <section className="pointSumamryTableSection">
        <CustomTable
          searchField={{ address: searchAddress }}
          initialRowsToShow={20}
          defaultSortBy={"$value"}
          excludeSortValues={["address"]}
          data={
            Object.keys(dataForTable).length !== 0 ? dataForTable : tableData
          }
          setSortProperty={setSortProperty}
          setSortOrder={setSortOrder}
        />
      </section>

      {/* <Blogs
        {...sanityHome.sections?.find(
          (item) => item.__typename === "SanityBlogsSection"
        )}
      /> */}
      <div className="pointSummaryImg">
        <Lines />
      </div>
      <Email />

      <PointsSummaryPopup
        isOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        dataForTable={originalApiData[currentActiveTableData] || undefined}
      />
    </Layout>
  );
}

export const query = graphql`
  query PointsSummaryPage {
    sanityHome {
      id
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
      footer {
        logo {
          asset {
            url
            alt
            gatsbyImageData(formats: WEBP, placeholder: NONE)
          }
        }
        description
        nav_label
        contact_details {
          email_id
          link
        }
        id
        social_media_logos {
          image {
            asset {
              gatsbyImageData(
                formats: WEBP
                placeholder: NONE
                layout: FULL_WIDTH
              )
            }
          }
          logo_link
        }
        other_menu_items {
          label
          link
          _key
          target
          assets {
            asset {
              url
            }
          }
        }
        copy_right_text
      }
      header {
        logo_link
        navItems {
          label
          link
          _key
          assets {
            file {
              asset {
                url
              }
            }
            label
            _key
          }
        }
        join_button {
          button_label
          button_link
        }
        download_button {
          button_label
          button_link
        }
        logo {
          asset {
            gatsbyImageData(formats: WEBP)
          }
        }
      }
    }

    # --------------------------
    # --------------------------
    # --------------------------
    # Points Summary Us Section Start
    # --------------------------
    # --------------------------
    # --------------------------
    sanityPointsSummary {
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
        ... on SanityPoinstsSummaryHeroSection {
          __typename
          background_image {
            asset {
              url
            }
          }
          title
          sub_title
          description
        }
      }
    }
    # --------------------------
    # --------------------------
    # --------------------------
    # Points Summary Us Section End
    # --------------------------
    # --------------------------
    # --------------------------
  }
`;
