import React from "react";
import Logo from '../../assets/images/Logo-white.JPG';
import './contact.scss';
import { Link } from "react-router-dom";
const Contact = () => {
    return (
        /* Contact Page */
        <div className="Contact-content">
            <div className="main">

                {/** Contact Options */}
                <div className="options">
                    <div className="section">

                        <Link to="/"><img src={Logo} alt="logo-image" /></Link>
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