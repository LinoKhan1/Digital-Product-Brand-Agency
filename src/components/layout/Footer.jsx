import React from "react";
import Logo from '../../assets/images/Logo-yellow.JPG';
import { faLinkedin, faSquareInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {

    return (
        <div className="footer">
            <div className="main">
                <div className="section">
                    {/** Contact Section */}
                    <div className="contact">

                        <img src={Logo} alt="logo-image" />
                        <h1>As you partner, we treat your website like it is our own</h1>
                        <p>
                            Let’s find out if we’re a good fit for each other.
                        </p>
                        <span>
                            <button className="btn-primary">Get a proposal</button>
                            <button className="btn-primary">View services</button>
                        </span>



                    </div>
                    {/** Footer content */}
                    <div className="footer-content">

                        <div className="row">
                            <div className="col">
                                <h2>About us</h2>
                                <ul>
                                    <li>learn more</li>
                                    <li>Services</li>
                                    <li>Testimonials</li>
                                    <li>Meet the team</li>
                                </ul>

                            </div>
                            <div className="col">
                                <h2>Resources</h2>
                                <ul>
                                    <li>Top Software Developer Skills to Learn in 2024</li>
                                    <li>React 19 is changing everything</li>
                                    <li>Surfing the SEO Tide: A review of Surfer SEOs AI Tools</li>
                                </ul>
                            </div>
                            <div className="col">
                                <h2>Get in touch</h2>
                                <ul>
                                    <li>Get a proposal</li>
                                    <li>Contact us</li>
                                    <li>Careers</li>
                                    <li>Apply now</li>
                                </ul>
                            </div>


                            <div className="col">
                                <div className="social">
                                    <span>
                                        <FontAwesomeIcon className="social-icon" icon={faLinkedin}/>
                                        <FontAwesomeIcon className="social-icon" icon={faSquareInstagram}/>
                                    </span>
                                </div>

                            </div>
                        </div>



                    </div>
                </div>
                {/** Copyright */}
                <div className="copyright">


                    <div className="row">
                        <div className="col">
                            <p>
                                Copyright 2024, Linokhan All Righs Reserved
                            </p>
                        </div>
                        <div className="col">
                            <p>
                                Privacy policy
                            </p>
                        </div>
                        <div className="col">
                            <p>
                                Cape Town, Western Cape, South Africa
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default Footer;