// React
import React from "react";

// React Lazy Load
import LazyLoad from "react-lazyload";

// React Helmet
import { Helmet } from "react-helmet";

// React Routing
import { Link } from "react-router-dom";

// Images
import Logo from '../../assets/images/Logo-white.webp';

// Styles and CSS
import './contact.scss';

/* Apply Page Component */
const Apply = () => {
    return (

        <div className="Contact-content">
            <Helmet>
                <title></title>
                <meta />
                <meta />
            </Helmet>
            <div className="main">
                {/** Options Section */}
                <div className="options">
                    <div className="section">
                        <Link to="/">
                            <LazyLoad height={200}>
                                <img src={Logo} alt="Logo of Linokhan" />
                            </LazyLoad>

                        </Link>

                        <h1 className="display-1">
                            Job Application
                        </h1>
                        <p>We are not hiring at this time, and we apologize for the inconvenience. We will post jobs on Indeed and/or LinkedIn when we are hiring.

                        </p>
                        <Link to="/"><button>Back to homepage</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Apply;