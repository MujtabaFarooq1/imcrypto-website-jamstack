// import React from "react";
// import { StaticImage } from "gatsby-plugin-image";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import './recentblogs.scss';


// const responsive = {
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 5,
//       slidesToSlide: 1 // optional, default to 1.
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 3,
//       slidesToSlide: 2 // optional, default to 1.
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 3,
//       slidesToSlide: 1 // optional, default to 1.
//     }
//   }

// const Recentblogs = () => {
//   return (
//         <div className='recentblogs-scetion'>
//              <div className='container'>
//                   <div className='recentblogs-inner-section'>
//                         <div className='recentblog-main-content'>
//                               <div className='recentblog-slider-info'>
//                                    <div className="section-header">
//                                         <h6>Blogs</h6>
//                                         <h1>Recent Articles</h1>
//                                         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
//                                    </div>
//                               </div>
//                               <div className='recentblog-main-slider'>
//                                     <Carousel
//                                             swipeable={false}
//                                             draggable={false}
//                                             showDots={true}
//                                             responsive={responsive}
//                                             ssr={true} 
//                                             autoPlaySpeed={1000}
//                                             keyBoardControl={true}
//                                             customTransition="all .5"
//                                             transitionDuration={500}
//                                             containerClass="carousel-container"
                                         
//                                             dotListClass="custom-dot-list-style"
//                                             itemClass="carousel-item-padding-40-px"
//                                             >
//                                             <div className="blog-slider-col">
//                                                  <div className="blog-slider-img">
//                                                       <StaticImage src='../../blog-feature.png' />  
//                                                  </div>      
//                                                  <div className="blog-header">
//                                                       <h6>Jan 21, 2022</h6>
//                                                       <p>Category 1</p>
//                                                  </div>
//                                                  <div className="blog-info">
//                                                       <h5>Lorem Ipsum is simply dummy text industry</h5>
//                                                       <p>Lorem Ipsum is simply dummy text typesetting industry. </p>
//                                                       <div className="blogs-learn-more">
//                                                            <button>
//                                                                <a>learn more</a>
//                                                            </button>
//                                                       </div>
//                                                  </div>
//                                             </div>
//                                             <div className="blog-slider-col">
//                                                  <div className="blog-slider-img">
//                                                       <StaticImage src='../../blog-feature.png' />  
//                                                  </div>      
//                                                  <div className="blog-header">
//                                                       <h6>Fab 21, 2022</h6>
//                                                       <p>Category 2</p>
//                                                  </div>
//                                                  <div className="blog-info">
//                                                       <h5>Lorem Ipsum is simply dummy text industry</h5>
//                                                       <p>Lorem Ipsum is simply dummy text typesetting industry. </p>
//                                                       <div className="blogs-learn-more">
//                                                            <button>
//                                                                <a>learn more</a>
//                                                            </button>
//                                                       </div>
//                                                  </div>
//                                             </div>
//                                             <div className="blog-slider-col">
//                                                  <div className="blog-slider-img">
//                                                       <StaticImage src='../../blog-feature.png' />  
//                                                  </div>      
//                                                  <div className="blog-header">
//                                                       <h6>Mar 21, 2022</h6>
//                                                       <p>Category 3</p>
//                                                  </div>
//                                                  <div className="blog-info">
//                                                       <h5>Lorem Ipsum is simply dummy text industry</h5>
//                                                       <p>Lorem Ipsum is simply dummy text typesetting industry. </p>
//                                                       <div className="blogs-learn-more">
//                                                            <button>
//                                                                <a>learn more</a>
//                                                            </button>
//                                                       </div>
//                                                  </div>
//                                             </div>
//                                             <div className="blog-slider-col">
//                                                  <div className="blog-slider-img">
//                                                       <StaticImage src='../../blog-feature.png' />  
//                                                  </div>      
//                                                  <div className="blog-header">
//                                                       <h6>Apr 21, 2022</h6>
//                                                       <p>Category 4</p>
//                                                  </div>
//                                                  <div className="blog-info">
//                                                       <h5>Lorem Ipsum is simply dummy text industry</h5>
//                                                       <p>Lorem Ipsum is simply dummy text typesetting industry. </p>
//                                                       <div className="blogs-learn-more">
//                                                            <button>
//                                                                <a>learn more</a>
//                                                            </button>
//                                                       </div>
//                                                  </div>
//                                             </div>
//                                             <div className="blog-slider-col">
//                                                  <div className="blog-slider-img">
//                                                       <StaticImage src='../../blog-feature.png' />  
//                                                  </div>      
//                                                  <div className="blog-header">
//                                                       <h6>May 21, 2022</h6>
//                                                       <p>Category 5</p>
//                                                  </div>
//                                                  <div className="blog-info">
//                                                       <h5>Lorem Ipsum is simply dummy text industry</h5>
//                                                       <p>Lorem Ipsum is simply dummy text typesetting industry. </p>
//                                                       <div className="blogs-learn-more">
//                                                            <button>
//                                                                <a>learn more</a>
//                                                            </button>
//                                                       </div>
//                                                  </div>
//                                             </div>
//                                     </Carousel>

//                               </div>  
//                         </div>
//                   </div>
//              </div>
//         </div>
//   );
// };
// export default Recentblogs;