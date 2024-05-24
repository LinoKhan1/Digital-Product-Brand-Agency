import React from "react";

import '../../pages/Home/Home.scss';
import '../../pages/About/about.scss';
import Footer from '../../components/layout/Footer';
import ColumnScroller from "../../components/specific/ColumnScroller";
import { Link } from "react-router-dom";
import CoreValues from "../../components/specific/Core";





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
                  <h1>
                    Digital Product


                  </h1>
                  <p>
                    linokhan.com is a dynamic digital product and brand agency located in the vibrant city of Cape Town, South Africa. Established in 2023, our agency has quickly emerged as a trusted partner for businesses seeking to establish a formidable online presence and drive tangible returns on their digital investments.                  </p>
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
                  _Who We Are
                </p>


              </div>
              <div className="col-lg-6">
                <h2>
                  linokhan.com is a Full Service Web Development and Brandng Agency.
                </h2>

                <h2>
                  We are a dedicated team, offering a comprehensive approach to brand strategy, digital design, development, and SEOs. Our team chooses to work with brands that excite and inspire. Together, we are working to grow forward-thinking, relevant brands.
                </h2>
                <h2>
                  Our mission at linokhan.com is clear: to empower our clients by establishing their online presence and solving their problems through innovative marketing and design services, ultimately generating a measurable return on investment.
                </h2>
                <Link to="/get_proposal">
                  <button>Get a proposal</button>
                </Link>

              </div>
            </div>
          </div>
        </div>



        {/** Core Values */}
        <CoreValues />



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
                  Best Practices for SEO: Boosting Your Website
                </h1>
                <h2>
                  In the digital age, having a strong online presence is essential for any business or individual looking to reach a wider audience. Search Engine Optimization (SEO) plays a crucial role in enhancing your website visibility and attracting organic traffic.
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