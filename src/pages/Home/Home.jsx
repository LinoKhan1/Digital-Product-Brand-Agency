import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import Accordion from "../../components/specific/Accordion.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar,  faRocket } from "@fortawesome/free-solid-svg-icons";

import Test1 from '../../assets/images/test1.jpg';
import Test2 from '../../assets/images/test2.jpg';
import Test3 from '../../assets/images/test3.jpg';
import Test4 from '../../assets/images/test4.jpg';
import Footer from "../../components/layout/Footer.jsx";
import Image from '../../assets/images/Image.jpg';
import '../../pages/Home/Home.scss';
import ServiceSection from "../../components/specific/Service.js";
import AuthorInfo from "../../components/specific/AuthorInfo";
import Scroller from "../../components/specific/Scroller.jsx";

const Home = () => {
  return (

    /*Home Page Content */
    <div className="Home-content">
      <div className="main">

        {/** Hero */}
        <div className="Hero">
          <div className="section">

            <div className="row">
              <div className="col-lg-7">
                <div className="hero-text">

                  <h1 className="display-1">Get a beautiful website that drives revenue</h1>
                  <p>Results-driven web design, development, SEO, branding, copywriting & digital strategy.</p>
                  <span>
                    <button className="btn-primary"><FontAwesomeIcon className="rocket" icon={faRocket} />
                      Get a proposal</button>
                    <button className="btn-secondary"> View services</button>
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
              <div className="col-lg-5">

              </div>
            </div>
          </div>


        </div>


        {/** Testimonials */}
        <div className="Testimonial">
          <div className="section">

            <div className="row">
              <div className="col">
                <span>
                  <FontAwesomeIcon className="star" icon={faStar} />
                  <FontAwesomeIcon className="star" icon={faStar} />
                  <FontAwesomeIcon className="star" icon={faStar} />
                  <FontAwesomeIcon className="star" icon={faStar} />
                  <FontAwesomeIcon className="star" icon={faStar} />
                </span>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
                <AuthorInfo name="John Doe" imageSrc={Test2} />
              </div>
              <div className="col">
                <span>
                  <FontAwesomeIcon className="star" icon={faStar} />
                  <FontAwesomeIcon className="star" icon={faStar} />
                  <FontAwesomeIcon className="star" icon={faStar} />
                  <FontAwesomeIcon className="star" icon={faStar} />
                  <FontAwesomeIcon className="star" icon={faStar} />
                </span>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
                <AuthorInfo name="John Doe" imageSrc={Test3} />

              </div>
              <div className="col">
                <span>
                  <FontAwesomeIcon className="star" icon={faStar} />
                  <FontAwesomeIcon className="star" icon={faStar} />
                  <FontAwesomeIcon className="star" icon={faStar} />
                  <FontAwesomeIcon className="star" icon={faStar} />
                  <FontAwesomeIcon className="star" icon={faStar} />
                </span>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
                <AuthorInfo name="John Doe" imageSrc={Test4} />

              </div>
            </div>

          </div>

        </div>

        {/** Services */}
        
        
        <ServiceSection/>

       
        <Scroller/>

        {/** Resources */}
        <div className="Resources">
          <div className="section">

            <div className="title">
              <h1>Helpful resources</h1>
            </div>
            <div className="row">
              <div className="col">
                <div className="blog">
                  <div className="img">
                    <img className="img-fluid" src={Image} alt="Image" />
                  </div>
                  <div className="blog-preview">
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h2>
                    <a href="">Read on</a>
                  </div>
                </div>


              </div>
              <div className="col">
                <div className="blog">
                  <div className="img">
                    <img className="img-fluid" src={Image} alt="Image" />
                  </div>
                  <div className="blog-preview">
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h2>
                    <a href="">Read on</a>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="blog">
                  <div className="img">
                    <img className="img-fluid" src={Image} alt="Image" />
                  </div>
                  <div className="blog-preview">
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h2>
                    <a href="">Read on</a>
                  </div>
                </div>
              </div>
            </div>
          </div>



        </div>
        {/** Questions */}
        <div className="Questions">
          <div className="section">

            <div className="row">
              <div className="title">
                <h1 className="text-center">Frequently asked questions</h1>
              </div>
              <Accordion />
            </div>
          </div>


        </div>
      </div>
      {/** Footer */}
      <Footer />

    </div>
  )
};

export default Home;