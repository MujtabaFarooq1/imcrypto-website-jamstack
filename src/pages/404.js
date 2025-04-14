import * as React from "react"
import Layout from "../components/layout"
import './errorpage.scss'

export default function NotFound({ children }) {
  const seo={
    title : "404"
  }
  return (
    <Layout title="404: Page not found" hideBlogs={true} seo={seo}>
      {children}
      <div className="errorpage-section">
           <div className="container">
                <div className="errorpage-content">
                   <h3 className="errorpage-main-title">That's An Error!</h3>
                   <h6 className="errorpage-sub-title">404 Unfortunately, There is no such page on the site. </h6>
                </div>
           </div> 
      </div>
    </Layout>
  );
}
