import React, { useContext, useState } from "react";
import Blogs from "../blogs";
import EcoGraphSection from "../ecoGraphSection";
import EcoHeroSection from "../ecoHeroSection";
import EcoInnerHeroSection from "../ecoInnerHeroSection";
import EcosystemCard from "../ecosystemCard";
import EcoWalletSection from "../ecoWalletSection";
import EcoWDWorkSection from "../ecoWdWorkSection";
import Email from "../email";
import Faq from "../faq";
import IMWMainSection from "../imwMainSection";

import Merch from "../merch";
import MerchDetailPage from "../merchDetailPage";

import Product from "../merch_product";
import Products from "../products";
import RichText from "../RichText";
import SecondaryHeroSection from "../SecondaryHeroSection";
const { default: Hero } = require("../hero");
const { default: Purpose } = require("../purpose");
const { default: Guides } = require("../guides");
const { default: Features } = require("../features");

const DynamicComponent = (props) => {
  const Components = {
    hero_section: Hero,
    purpose_section: Purpose,
    guides_section: Guides,
    features_section: Features,
    products_section: Products,
    blogs_section: Blogs,
    faq_section: Faq,
    merch_hero_section: Merch,
    products_card_section: Product,
    email_box_section: Email,
    ecosystem_section: EcoInnerHeroSection,
    wallet_type_section: EcosystemCard,
    eco_hero_section: EcoHeroSection,
    imw_main_section: IMWMainSection,
    eco_graph_section: EcoGraphSection,
    eco_wallet_section: EcoWalletSection,
    wd_work_section: EcoWDWorkSection,
    products: MerchDetailPage,
    SanityRichText: RichText,
    SanitySecondaryHeroSection: SecondaryHeroSection,
    rich_text: RichText,
  };
  const Component = Components[props?._type];
  return Component ? <Component {...props} /> : null;
};
export default DynamicComponent;
