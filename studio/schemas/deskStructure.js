import S from "@sanity/desk-tool/structure-builder";

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("global")
        .child(
          S.list()
            .title("header")
            .items([
              S.listItem()
                .title("Header")
                .child(S.document().schemaType("header")),
              S.listItem()
                .title("Footer")
                .child(S.document().schemaType("footer")),
              S.listItem()
                .title("Email G")
                .child(S.document().schemaType("email_g")),
              S.listItem()
                .title("All Download Wallet Links")
                .schemaType("download_wallet_links")
                .child(S.document().schemaType("download_wallet_links")),
              S.listItem()
                .title("Recent Blogs")
                .child(S.document().schemaType("blogs_section")),
              S.listItem()
                .title("Recent Section")
                .schemaType("recent_section")
                .child(
                  S.documentTypeList("recent_section").title("Recent Section")
                ),
            ])
        ),
      S.listItem()
        .title("Pages")
        .child(
          S.list()
            .title("Pages")
            .items([
              S.listItem().title("Home").child(S.document().schemaType("home")),
              S.listItem()
                .title("About Us")
                .schemaType("about_us")
                .child(S.documentTypeList("about_us").title("About Us")),

              S.listItem()
                .title("Points Summary")
                .schemaType("points_summary")
                .child(
                  S.documentTypeList("points_summary").title("Points Summary")
                ),

              S.listItem()
                .title("Blackpaper")
                .child(S.document().schemaType("blackpaper")),

              S.listItem()
                .title("All Blogs Page")
                .child(S.document().schemaType("all_blogs_page")),

              S.listItem()
                .title("Ecosystem")
                .child(S.document().schemaType("ecosystem")),
              S.listItem()
                .title("How To")
                .child(S.document().schemaType("how_to")),
              S.listItem()
                .title("Resources")
                .child(S.document().schemaType("resources_page")),
              S.listItem()
                .title("Blogs")
                // .schemaType("blogs_page")
                // .child(S.documentTypeList("blogs_page").title("About Us")),
                .child(S.document().schemaType("blogs_page")),
              S.listItem()
                .title("Merch")
                .child(S.document().schemaType("merch")),
              S.listItem()
                .title("Internet Money Wallet")
                .child(S.document().schemaType("internet_money_wallet")),
              S.listItem()
                .title("Internet Money IM")
                .child(S.document().schemaType("internet_money_im")),
              S.listItem()
                .title("Internet Money WD")
                .child(S.document().schemaType("internet_money_wd")),
              S.listItem()
                .title("Sacrifice Page")
                .child(S.document().schemaType("sacrifice_page")),
              S.listItem()
                .title("Privacy Policy Page")
                .child(S.document().schemaType("privacy_policy")),
              S.listItem()
                .title("Terms and Conditions")
                .child(S.document().schemaType("terms_and_conditions")),
              S.listItem()
                .title("404")
                .child(S.document().schemaType("four_zero_four_page")),
            ])
        ),
      // S.listItem()
      //   .title("All Blogs")
      //   .schemaType("blog_detail")
      //   .child(S.documentTypeList("blog_detail").title("Blog Detail")),
      S.listItem()
        .title("Products")
        .schemaType("products")
        .child(S.documentTypeList("products").title("Products")),
      S.listItem()
        .title("Categories")
        .schemaType("categories")
        .child(S.documentTypeList("categories").title("Categories")),
      S.listItem()
        .title("Tags")
        .schemaType("tags")
        .child(S.documentTypeList("tags").title("Tags")),

      S.listItem()
        .title("Authors")
        .schemaType("authors")
        .child(S.documentTypeList("authors").title("Authors")),

      S.listItem()
        .title("Blogs")
        .schemaType("blogs")
        .child(S.documentTypeList("blogs").title("Blogs")),

      S.listItem()
        .title("All Resources")
        .child(
          S.list()
            .title("All Resources")
            .items([
              S.listItem()
                .title("Statistics")
                .child(S.document().schemaType("statistics_page")),
              S.listItem()
                .title("Videos")
                .child(
                  S.documentTypeList("video_detail_page").title(
                    "Video Detail Page"
                  )
                ),
              S.listItem()
                .title("Articles")
                .child(
                  S.documentTypeList("articles_detail_page").title(
                    "Articles Detail Page"
                  )
                ),
              S.listItem()
                .title("Helpful Links")
                .child(
                  S.documentTypeList("helpful_links_page").title(
                    "Helpful Links"
                  )
                ),
            ])
        ),
      // .schemaType("video_detail_page")
      // .child(S.documentTypeList("video_detail_page").title("Video Detail Page")),
      S.listItem()
        .title("All Reviews")
        .schemaType("product_review")
        .child(S.documentTypeList("product_review").title("All Reviews")),
      S.listItem()
        .title("Subscriber")
        .schemaType("subscriber")
        .child(S.documentTypeList("subscriber").title("Subscriber")),
    ]);
