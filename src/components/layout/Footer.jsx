import React from "react";
import { Link } from "react-router-dom";
import Logo from '../../assets/images/Logo-black.jpg';
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
                            <Link to="/get_proposal">
                                <button className="btn-primary">Get a proposal</button>
                            </Link>
                   
                            <button onClick={()=> document.getElementById('service').scrollIntoView({behavior: 'smooth'})} className="btn-secondary"> View services</button>

                   
                        </span>



                    </div>
                    {/** Footer content */}
                    <div className="footer-content">

                        <div className="row">
                            <div className="col">
                                <h2>About us</h2>
                                <ul>

                                    <li>
                                        <Link className="link" to="/about">
                                            learn more
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/#services">
                                            Services
                                        </Link>
                                    </li>
                                    <li>Testimonials</li>
                                </ul>

                            </div>
                            <div className="col">
                                <h2>Resources</h2>
                                <ul>
                                    <li>
                                        <Link className="link" to="/blog">
                                            Best Practices for SEO: Boosting Your Website Visibility
                                        </Link>
                                    </li>

                                </ul>
                            </div>
                            <div className="col">
                                <h2>Get in touch</h2>
                                <ul>
                                    <li>
                                        <Link className="link" to="/get_proposal">
                                            Get a proposal
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="link" to="/contact">
                                            Contact us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="link" to="/apply">
                                            Careers
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="link" to="/apply">
                                            Apply now
                                        </Link>
                                    </li>
                                </ul>
                            </div>


                            <div className="col">
                                <div className="social">
                                    <span>
                                        <a className="link" href="https://www.linkedin.com/company/93390939/">
                                            <FontAwesomeIcon className="social-icon" icon={faLinkedin} />
                                        </a>
                                        <a className="link" href="https://www.instagram.com/linokhan_com/">
                                            <FontAwesomeIcon className="social-icon" icon={faSquareInstagram} />
                                        </a>
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