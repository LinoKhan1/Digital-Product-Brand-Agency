import React from "react";
import { Link } from "react-router-dom";
// Images
import Logo from '../../assets/images/Logo-black.jpg';
// Fontawesome Icons
import { faLinkedin, faSquareInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
    return (
        /** Footer */
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    {/** Footer Contact */}
                    <div className="contact">
                        <img src={Logo} alt="logo-image" />
                        <h1>As your partner, we treat your website like it's our own.</h1>
                        <p>Let’s find out if we’re a good fit for each other.</p>
                        <div className="cta-buttons">
                            <Link to="/get_proposal" className="btn-primary">Get a proposal</Link>
                            <button onClick={() => document.getElementById('service').scrollIntoView({ behavior: 'smooth' })} className="btn-secondary">View services</button>
                        </div>
                    </div>
                    {/** Footer Content */}
                    <div className="footer-content">
                        <div className="footer-links">
                            <div className="footer-column">
                                <h2>About us</h2>
                                <ul>
                                    <li><Link to="/about">Learn more</Link></li>
                                    <li><Link to="/#services">Services</Link></li>
                                    <li>Testimonials</li>
                                </ul>
                            </div>
                            <div className="footer-column">
                                <h2>Resources</h2>
                                <ul>
                                    <li><Link to="/blog">Best Practices for SEO: Boosting Your Website Visibility</Link></li>
                                </ul>
                            </div>
                            <div className="footer-column">
                                <h2>Get in touch</h2>
                                <ul>
                                    <li><Link to="/get_proposal">Get a proposal</Link></li>
                                    <li><Link to="/contact">Contact us</Link></li>
                                    <li><Link to="/apply">Careers</Link></li>
                                    <li><Link to="/apply">Apply now</Link></li>
                                </ul>
                            </div>
                            <div className="footer-column">
                                <div className="social">
                                    <a href="https://www.linkedin.com/company/93390939/" className="social-link" rel="noopener noreferrer" target="_blank">
                                        <FontAwesomeIcon className="social-icon" icon={faLinkedin} />
                                    </a>
                                    <a href="https://www.instagram.com/linokhan_com/" className="social-link" rel="noopener noreferrer" target="_blank">
                                        <FontAwesomeIcon className="social-icon" icon={faSquareInstagram} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/** Copyright */}
                <div className="footer-bottom">
                    <div className="copyright">
                        <p>Copyright 2024, Linokhan. All Rights Reserved</p>
                    </div>
                    <div className="privacy-policy">
                        <p>Privacy Policy</p>
                    </div>
                    <div className="location">
                        <p>Cape Town, Western Cape, South Africa</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
