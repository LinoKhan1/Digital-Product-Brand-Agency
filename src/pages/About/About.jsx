import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faRocket } from "@fortawesome/free-solid-svg-icons";
import Test1 from '../../assets/images/test1.jpg';
import '../../pages/Home/Home.scss';
import '../../pages/About/about.scss';
import Footer from '../../components/layout/Footer';
import ColumnScroller from "../../components/specific/ColumnScroller";
import { Link } from "react-router-dom";
import AuthorInfo from "../../components/specific/AuthorInfo";





const About = () => {
  return (
    /* About Page */
    <div className="About-content">
      <div className="main">

        {/** Hero */}
        <div className="Hero">
          <div className="section">
            <div className="row">
              <div className="col-lg-7">
                <div className="hero-text">
                  <h1 className="display-1">
                    We work smarter. We can help you.
                  </h1>
                  <span>
                    <button className="btn-primary"><FontAwesomeIcon className="rocket" icon={faRocket} />
                      Get a proposal
                    </button>
                  </span>
                </div>
                <div className="hero-testimonial">
                  <span className="rating">
                    <FontAwesomeIcon className="star" icon={faStar} />
                    <FontAwesomeIcon className="star" icon={faStar} />
                    <FontAwesomeIcon className="star" icon={faStar} />
                    <FontAwesomeIcon className="star" icon={faStar} />
                    <FontAwesomeIcon className="star" icon={faStar} />
                  </span>
                  <p>Our new site has a 60% higher conversion rate than our old one</p>
                  <AuthorInfo name="John Doe" imageSrc={Test1} />

                </div>
              </div>
            </div>
          </div>
        </div>

        {/** About us */}
        <div className="about">
          <div className="section">
            <div className="row">
              <div className="col-lg-5">
                <p>
                  _Smarter
                  Digital.
                </p>
                

              </div>
              <div className="col-lg-6">
              <h2>
                  linokhan.com is a Full Service Digital Brand & Marketing Agency that Delivers Smarter Digital.
                </h2>

                <h2>
                  We are a dedicated team, offering a comprehensive approach to brand strategy, digital design, development, and online marketing. Our team chooses to work with brands that excite and inspire. Together, we are working to grow forward-thinking, relevant brands.
                </h2>
                <h2>
                  We work within many industries, both conventional and unconventional. Specialized in reaching mass market consumers.
                </h2>

              </div>
            </div>
          </div>
        </div>

        {/** Work Ethic */}
        <div className="work-ethic">
          <div className="section">
            
            <div className="title">
              <p>
                _Driving The Work We Create
                Our Code
              </p>

            </div>
            <div className="row">
              <div className="col">
                <h2>
                  Lorem Ipsum

                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi expedita temporibus a, eaque saepe at odit laborum libero explicabo magnam.

                </p>

              </div>
              <div className="col">
                <h2>
                  Lorem Ipsum

                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi expedita temporibus a, eaque saepe at odit laborum libero explicabo magnam.

                </p>



              </div>
             
            </div>
            <div className="row">
              
              <div className="col">
                <h2>
                  Lorem Ipsum

                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi expedita temporibus a, eaque saepe at odit laborum libero explicabo magnam.

                </p>


              </div>
              <div className="col">
                <h2>
                  Lorem Ipsum

                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi expedita temporibus a, eaque saepe at odit laborum libero explicabo magnam.

                </p>


              </div>
            </div>
          </div>
        </div>

       
        {/** Differentiator */}

        <ColumnScroller />

        {/** Resources */}
        <div className="Resources">
          <div className="section">
            <div className="row">
              <div className="col-lg-5">
                <p>
                  _Rousources
                </p>

              </div>
              <div className="col-lg-6">
                <h1>
                  Web Development Trends 2024

                </h1>
                <h2>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi doloremque distinctio, provident rem itaque blanditiis soluta, eligendi, sequi dolorum asperiores adipisci.

                </h2>
                <Link to="/blog">

                  <button>Read more</button>

                </Link>


              </div>
            </div>
          </div>
        </div>


      </div>
      <Footer />
    </div>

  )
};

export default About;