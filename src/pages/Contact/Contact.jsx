import React from "react";
import { Helmet } from "react-helmet";
import LazyLoad from "react-lazyload";
import Logo from '../../assets/images/Logo-white.webp';
import './contact.scss';
import { Link } from "react-router-dom";
const Contact = () => {
    return (
        /* Contact Page */
        <div className="Contact-content">
            <Helmet>
                <title>Contact Us | Linokhan - Get in Touch for Web Development Services</title>
                <meta name="description" content="Reach out to Linokhan, your trusted web development agency. Contact us for inquiries about web design, custom application development, and user experience optimization. We're here to help you achieve your digital goals." />
                <meta name="keywords" content="contact Linokhan, web development inquiries, custom web application development, user experience optimization, web design, web development agency" />
            </Helmet>
            <div className="main">

                {/** Contact Options */}
                <div className="options">
                    <div className="section">

                        <Link to="/"> <LazyLoad height={200}>
                            <img src={Logo} alt="Logo of Linokhan" />
                        </LazyLoad></Link>
                        <h1 className="display-1">
                            Contact us
                        </h1>
                        <p>
                            To help us connect you with the right person, please tell us what describes you best:
                        </p>
                        <Link to="/get_proposal"> <button>
                            I’m interested in hiring linokhan.com for a project
                        </button></Link>
                        <Link to="/apply">
                            <button>
                                I’m interested in applying for a job a linokhan.com
                            </button>
                        </Link>
                        <Link to="/sell">
                            <button>
                                I’m interested in selling a product to linokhan.com
                            </button>
                        </Link>

                        <Link to="/client">
                            <button>
                                I’m an existing client or past client of linokhan.com
                            </button>
                        </Link>


                    </div>
                </div>


            </div>
        </div>
    )
};

export default Contact;