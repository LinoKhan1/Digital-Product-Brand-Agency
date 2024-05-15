import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import Accordion from "../../components/specific/Accordion";


const Home = () => {
  return (

    /*Home Page Content */
    <div className="Home-content">
      <div className="container-fluid">

        {/** Hero */}
        <div className="Hero">
          <div className="section">

            <div className="row">
              <div className="col-lg-7">
                <div className="hero-text">

                  <h1 className="display-1">Get a beautiful website that drives revenue</h1>
                  <p className="display-6">Results-driven web design, development, SEO, branding, copywriting & digital strategy.</p>
                  <span>
                    <button> Get a proposal</button>
                    <button> View services</button>
                  </span>

                </div>
                <div className="hero-testimonial">
                  <span>Stars rating</span>
                  <p>Our new site has a 60% higher conversion rate than our old one</p>
                  <span> <h2>John Smith</h2></span>
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
                <span>Rating stars</span>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt ipsum, sit in officiis harum, quidem et accusantium esse culpa debitis nihil eos quibusdam sunt maiores. Debitis rem ipsum veritatis sapiente!</p>
                <span> <h2>John Doe</h2></span>
              </div>
              <div className="col">
                <span>Rating stars</span>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt ipsum, sit in officiis harum, quidem et accusantium esse culpa debitis nihil eos quibusdam sunt maiores. Debitis rem ipsum veritatis sapiente!</p>
                <span> <h2>John Doe</h2></span>

              </div>
              <div className="col">
                <span>Rating stars</span>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt ipsum, sit in officiis harum, quidem et accusantium esse culpa debitis nihil eos quibusdam sunt maiores. Debitis rem ipsum veritatis sapiente!</p>
                <span> <h2>John Doe</h2></span>

              </div>
            </div>

          </div>

        </div>

        {/** Services */}
        <div className="Services">
          <div className="section">

            <div className="row">
              <div className="col-lg-6">
                <img src="" alt="" />

              </div>
              <div className="col-lg-6">
                <h1 className="display-4">Everything your site needs for success</h1>
                <ul>
                  <li>Web design and development</li>
                  <li>Search Engine Optimization SEOs</li>
                  <li>User experience an interface design</li>
                  <li>Brand and identity design</li>
                </ul>

              </div>
            </div>
          </div>


        </div>

        {/** Results */}
        <div className="Result">
          <div className="section">

            <div className="row">
              <div className="col-lg-7">
                <h1 className="display-4">Over the past 5 years, we have delivered measurable results for 113+ businesses.</h1>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h1>26.3</h1>
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h2>

              </div>
              <div className="col">
                <h1>26.3</h1>
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h2>


              </div>
              <div className="col">
                <h1>26.3</h1>
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h2>

              </div>
              <div className="col">
                <h1>26.3</h1>
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h2>

              </div>

            </div>

          </div>



        </div>

        {/** Resources */}
        <div className="Resources">
          <div className="section">

            <div className="title">
              <h1 className="display-4">Helpful resources</h1>
            </div>
            <div className="row">
              <div className="col">
                <div className="img">
                  <img src="" alt="" />
                </div>
                <div className="blog-preview">
                  <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h1>
                  <a href="">Read</a>
                </div>

              </div>
              <div className="col">
                <div className="img">
                  <img src="" alt="" />
                </div>
                <div className="blog-preview">
                  <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h1>
                  <a href="">Read</a>
                </div>
              </div>
              <div className="col">
                <div className="img">
                  <img src="" alt="" />
                </div>
                <div className="blog-preview">
                  <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h1>
                  <a href="">Read</a>
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
                <h1 className="display-4">Frequently asked questions</h1>
              </div>
              <Accordion />
            </div>
          </div>


        </div>
      </div>

    </div>
  )
};

export default Home;