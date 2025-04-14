// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";
// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
import page from "./page";
import footer from "./global/footer";
import footer_logo from "./global/footer/object/footer_logos/index";
import header from "./global/header/documents";
import about_us from "./Pages/about_us";
import merch from "./Pages/merch";
import home from "./Pages/home";
import how_to from "./Pages/how_to";
import ecosystem from "./Pages/ecosystem";
import points_summary from "./Pages/points_summary";
import contactDetails from "./global/footer/object/contact-details";
import other_menu_items from "./global/footer/object/other_menu_items";
import footer_nav_items from "./global/footer/object/footer_nav_items";
import logo from "./Components/logo";
import purpose_section from "./Pages/home/objects/purpose_section";
import hero_section from "./Pages/home/objects/hero_section";
import about_hero_section from "./Pages/about_us/objects/about_hero_section";
import sacrifice_desclaimer from "./Pages/sacrifice_page/objects/sacrifice_desclaimer";
import sacrifice_pool_cap_sections from "./Pages/sacrifice_page/objects/sacrifice_pool_cap_sections";
import sacrifice_pulsechain from "./Pages/sacrifice_page/objects/sacrifice_pulsechain";
import sarifice_hero_section from "./Pages/sacrifice_page/objects/sarifice_hero_section";
import sacrifice_what_are_details_section from "./Pages/sacrifice_page/objects/sacrifice_what_are_details_section";
import pointsSummary_hero_section from "./Pages/points_summary/objects/pointsSummary_hero_section";
import what_we_do_section from "./Pages/about_us/objects/what_we_do_section";
import button from "./Components/button";
import features_section from "./Pages/home/objects/features_section";
import objects from "./Pages/home/objects/features_section/objects";
import subObjects from "./Pages/home/objects/features_section/subObjects";
import guides_section from "./Pages/home/objects/guides_section";
import guides_objects from "./Pages/home/objects/guides_section/guides_objects";
import products_section from "./Pages/home/objects/products_section";
// import productsObjects from "./Pages/home/objects/products_section/productsObjects";
import story_section from "./Pages/about_us/objects/story_section";
import mission_section from "./Pages/about_us/objects/mission_section";
import missionObjects from "./Pages/about_us/objects/mission_section/missionObjects";
import act_section from "./Pages/about_us/objects/act_section";
import ImgObject from "./Pages/about_us/objects/act_section/ImgObject";
import userObject from "./Pages/about_us/objects/act_section/userObject";
import crypto_guide_section from "./Pages/about_us/objects/crypto_guide_section";
import team_section from "./Pages/about_us/objects/team_section";
import teamObjects from "./Pages/about_us/objects/team_section/teamObjects";
import articles_section from "./Pages/about_us/objects/articles_section";
import ecosystem_section from "./Pages/ecosystem/objects/ecosystem_section";
import walletType_section from "./Pages/ecosystem/objects/walletType_section";
import walletObjects from "./Pages/ecosystem/objects/walletType_section/walletObjects";
import recent_blogs_section from "./Pages/ecosystem/objects/recent_blogs_section";
import email_section from "./Pages/ecosystem/objects/email_section";
import buttons from "./blog_detail/objects/buttons";
import tag_list from "./blog_detail/objects/tag_list";
import comment from "./blog_detail/objects/comment";
import add_ques from "./Pages/home/objects/faq_section/add_ques";
import faq_section from "./Pages/home/objects/faq_section";
import emailbox_section from "./Components/emailbox_section";
import merch_hero_section from "./Pages/merch/objects/merch_hero_section";
import products_card_section from "./Pages/merch/objects/products_card_section";
import merch_product_cards from "./Pages/merch/objects/products_card_section/objects/merch_product_cards";
import cardObject from "./Pages/merch/objects/cardObject";
// import cardSubObject from "./Pages/merch/merchdetailpage/objects/cardObject/cardSubObject";
// import categories from "./Pages/merch/merchdetailpage/objects/categories";
// import categories_list from "./Pages/merch/merchdetailpage/objects/categories/categories_list";
// import description from "./Pages/merch/merchdetailpage/objects/description";
// import filter from "./Pages/merch/merchdetailpage/objects/filter";
import tags from "./Pages/merch/objects/tags";
import merch_detail from "./Pages/merch/documents/merch_detail";
import cardSubObject from "./Pages/merch/objects/cardObject/cardSubObject";
import categories from "./Pages/merch/objects/categories";
import categories_list from "./Pages/merch/objects/categories/categories_list";
import description from "./Pages/merch/objects/description";
import filter from "./Pages/merch/objects/filter";
import tagList from "./Pages/merch/objects/tags/tagList";
import emailstatic from "./global/emailstatic";
import blogs_hero_section from "./Pages/blogs_page/objects/blogs_hero_section";
import blogs_card_section from "./Pages/blogs_page/objects/blogs_card_section";
import blog_detail from "./blog_detail";
import blogs_page from "./Pages/blogs_page";
import sacrifice_page from "./Pages/sacrifice_page";
import Categories from "./Categories";
import Tags from "./Tags";
import merch_blog_section from "./Pages/merch/objects/merch_blog_section";
import internet_money_wallet from "./Pages/ecosystem/documents/internet_money_wallet";
import eco_hero_section from "./Pages/ecosystem/objects/eco_hero_section";
import imw_main_section from "./Pages/ecosystem/objects/imw_main_section";
import sub_main_section from "./Pages/ecosystem/objects/imw_main_section/sub_main_section";
import internet_money_im from "./Pages/ecosystem/documents/internet_money_im";
import internet_money_wd from "./Pages/ecosystem/documents/internet_money_wd";
import eco_graph_section from "./Pages/ecosystem/objects/eco_graph_section";
import eco_wallet_section from "./Pages/ecosystem/objects/eco_wallet_section";
import wd_work_section from "./Pages/ecosystem/objects/wd_work_section";
import description_card_array from "./Pages/ecosystem/objects/wd_work_section/description_card_array";
import blogs_section from "./global/blogs_section";
import asset from "./global/footer/object/asset";
import reviews from "./reviews";
import video_detail_page from "./video_detail_page";
import articles_detail_page from "./articles_detail_page";
import resources_page from "./Pages/resources_page";
import resources_hero_section from "./Pages/resources_page/objects/resources_hero_section";
import recent_section from "./global/recent_section";
import helpful_links_page from "./helpful_links_page";
import title_links from "./helpful_links_page/objects/title_links";
// Black Paper Page
import blackpaper_page from "./Pages/blackpaper";
import blackpaper_hero from "./Pages/blackpaper/objects/blackpaper_hero";
import blackpaper_gallery from "./Pages/blackpaper/objects/blackpaper_gallery";
// Black Paper Page End

// Download Wallet links
import download_wallet_links from "./global/download_wallet_links";
import download_wallet_redirect_link from "./global/download_wallet_links/objects/download_wallet_redirect_link";

// Authors
import authors from "./autors";
// Authors End

// Blogs
import blogs from "./blogs";
// Blogs End

// All Blogs Page
import all_blogs_page from "./Pages/all_blogs_page";
import blog_hero from "./Pages/all_blogs_page/objects/blog_hero";
// All Blogs Page End

import seo from "./global/seo";
import internet_money_state from "./Pages/resources_page/objects/internet_money_state";
import internet_money_title from "./Pages/resources_page/objects/internet_money_state/internet_money_title";
import current_state from "./Pages/resources_page/objects/internet_money_state/current_state";
import wallet_section from "./Pages/resources_page/objects/wallet_section";
import wallet_section_details from "./Pages/resources_page/objects/wallet_section/wallet_section_details";
import statistic_page from "./statistic_page";
import statistic from "./statistic_page/objects/statistic";
import secondary_hero_section from "./Components/secondary_hero_section";
import rich_text from "./Components/rich_text";
import privacy_policy from "./Pages/privacy_policy";
import terms_and_conditions from "./Pages/terms_and_conditions";
import four_zero_four_page from "./404_page";
import subscriber from "./subscriber";
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    page,
    footer,
    footer_logo,
    header,
    // purpose,
    about_us,
    about_hero_section,
    what_we_do_section,
    sacrifice_page,
    sacrifice_desclaimer,
    sacrifice_pulsechain,
    sarifice_hero_section,
    sacrifice_what_are_details_section,
    sacrifice_pool_cap_sections,
    // BlackPaper Page
    blackpaper_hero,
    blackpaper_page,
    blackpaper_gallery,
    // -----------------------

    // Download Wallet links
    download_wallet_redirect_link,
    download_wallet_links,

    // Authors
    authors,
    // Authors End

    // Blogs
    blogs,
    // Blogs End

    // All Blogs Page
    all_blogs_page,
    blog_hero,
    // All Blogs Page End

    merch,
    home,
    points_summary,
    pointsSummary_hero_section,
    // guides,
    how_to,
    ecosystem,
    blog_detail,
    contactDetails,
    other_menu_items,
    footer_nav_items,
    logo,
    purpose_section,
    hero_section,
    button,
    features_section,
    objects,
    subObjects,
    guides_section,
    guides_objects,
    products_section,
    // productsObjects,
    blogs_section,
    story_section,
    mission_section,
    missionObjects,
    act_section,
    ImgObject,
    userObject,
    crypto_guide_section,
    team_section,
    teamObjects,
    articles_section,
    ecosystem_section,
    walletType_section,
    walletObjects,
    recent_blogs_section,
    email_section,
    cardObject,
    cardSubObject,
    categories,
    categories_list,
    description,
    filter,
    tags,
    tagList,
    buttons,
    tag_list,
    comment,
    add_ques,
    faq_section,
    emailbox_section,
    merch_hero_section,
    products_card_section,
    merch_product_cards,
    merch_detail,
    emailstatic,
    blogs_hero_section,
    blogs_card_section,
    blogs_page,
    Categories,
    Tags,
    merch_blog_section,
    internet_money_wallet,
    eco_hero_section,
    imw_main_section,
    sub_main_section,
    internet_money_im,
    internet_money_wd,
    eco_graph_section,
    eco_wallet_section,
    wd_work_section,
    description_card_array,
    asset,
    reviews,
    resources_page,
    resources_hero_section,
    internet_money_state,
    internet_money_title,
    current_state,
    wallet_section,
    wallet_section_details,
    // resources_videos,
    video_detail_page,
    articles_detail_page,
    recent_section,
    helpful_links_page,
    title_links,
    seo,
    statistic_page,
    statistic,
    privacy_policy,
    terms_and_conditions,
    secondary_hero_section,
    rich_text,
    four_zero_four_page,
    subscriber,
  ]),
});
