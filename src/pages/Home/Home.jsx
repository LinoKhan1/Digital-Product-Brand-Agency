import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import Accordion from "../../components/specific/Accordion.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faRocket } from "@fortawesome/free-solid-svg-icons";
import Test2 from '../../assets/images/test2.jpg';
import Test3 from '../../assets/images/test3.jpg';
import Test4 from '../../assets/images/test4.jpg';
import Footer from "../../components/layout/Footer.jsx";
import Image from '../../assets/images/Image.jpg';
import '../../pages/Home/Home.scss';
import ServiceSection from "../../components/specific/Service.jsx";
import AuthorInfo from "../../components/specific/AuthorInfo.jsx";
import Scroller from "../../components/specific/Scroller.jsx";
import { Link } from "react-router-dom";

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
                    <Link to="/get_proposal">
                      <button className="btn-primary"><FontAwesomeIcon className="rocket" icon={faRocket} />
                        Get a proposal</button>
                    </Link>

                    <button onClick={()=> document.getElementById('service').scrollIntoView({behavior: 'smooth'})} className="btn-secondary"> View services</button>
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
                  <p>Our new site has a 60% higher conversion rate than our old one. I highly recommend their services.</p>
                  <AuthorInfo name="Olena Kovalenko" imageSrc={Test2} />
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
                <p>Our new site has a 60% higher conversion rate than our old one. I highly recommend their services.</p>
                <AuthorInfo name="Olena Kovalenko" imageSrc={Test2} />
              </div>
              <div className="col">
                <span>
                  <FontAwesomeIcon className="star" icon={faStar} />
                  <FontAwesomeIcon className="star" icon={faStar} />
                  <FontAwesomeIcon className="star" icon={faStar} />
                  <FontAwesomeIcon className="star" icon={faStar} />
                  <FontAwesomeIcon className="star" icon={faStar} />
                </span>
                <p>I cannot speak highly enough of the team at linokhan. Their expertise in web design and development is unmatched. </p>
                <AuthorInfo name="Andriy Petrov" imageSrc={Test3} />

              </div>
              <div className="col">
                <span>
                  <FontAwesomeIcon className="star" icon={faStar} />
                  <FontAwesomeIcon className="star" icon={faStar} />
                  <FontAwesomeIcon className="star" icon={faStar} />
                  <FontAwesomeIcon className="star" icon={faStar} />
                  <FontAwesomeIcon className="star" icon={faStar} />
                </span>
                <p>Leur équipe a su comprendre nos besoins et a créé un site web qui correspond parfaitement à notre image de marque.</p>
                <AuthorInfo name="Antoine Dubois" imageSrc={Test4} />

              </div>
            </div>

          </div>

        </div>

        {/** Services */}

        <ServiceSection />


        {/** Results  */}
        <Scroller />

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
                    <h2>Best Practices for <strong><em>SEO:</em></strong> Boosting Your Website Visibility </h2>
                    <Link to="/blog">Read on</Link>
                  </div>
                </div>


              </div>
              <div className="col">
                <div className="blog">
                  <div className="img">
                    <img className="img-fluid" src={Image} alt="Image" />
                  </div>
                  <div className="blog-preview">
                    <h2>Best Practices for <strong><em>SEO:</em></strong> Boosting Your Website Visibility </h2>
                    <Link to="/blog">Read on</Link>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="blog">
                  <div className="img">
                    <img className="img-fluid" src={Image} alt="Image" />
                  </div>
                  <div className="blog-preview">
                    <h2>Best Practices for <strong><em>SEO:</em></strong> Boosting Your Website Visibility </h2>
                    <Link to="/blog">Read on</Link>
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