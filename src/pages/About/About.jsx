import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faRocket } from "@fortawesome/free-solid-svg-icons";
import Test1 from '../../assets/images/test1.jpg';
import '../../pages/Home/Home.scss';
import '../../pages/About/about.scss';
import Footer from '../../components/layout/Footer';
import ColumnScroller from "../../components/specific/ColumnScroller";

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
                    We work smarter. We can help your business!
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
                  <span><img className="portrait" src={Test1} alt="portrait" /> <h6>John Smith</h6></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/** About us */}
        <div className="about">
          <div className="section">
            <div className="row">
              <div className="col">
                <h1>
                  Smarter
                  Digital.
                </h1>
                <h2>
                  linokhan.com is a Full Service Digital Brand & Marketing Agency that Delivers Smarter Digital.
                </h2>

              </div>
              <div className="col">
                <p>
                  We are a dedicated team, offering a comprehensive approach to brand strategy, digital design, development, and online marketing. Our team chooses to work with brands that excite and inspire. Together, we are working to grow forward-thinking, relevant brands.
                </p>
                <p>
                  We work within many industries, both conventional and unconventional. Specialized in reaching mass market consumers.
                </p>

              </div>
            </div>
          </div>
        </div>

        {/** Work Ethic */}
        <div className="work-ethic">
          <div className="section">
            <div className="title">
              <h1>Driving The Work We Create
                Our Code</h1>

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
              <div className="col">
                <img src="" alt =""/>

              </div>
              <div className="col">
                <h1>
                  Web Development Trends 2024

                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi doloremque distinctio, provident rem itaque blanditiis soluta, eligendi, sequi dolorum asperiores adipisci. Nobis officiis aliquid amet cupiditate possimus commodi, error aut.

                </p>
                <button>Read more</button>

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