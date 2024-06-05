import React from "react";
import Logo from '../../assets/images/Logo-white.JPG';
import './contact.scss';
import { Link } from "react-router-dom";
const Apply = () => {
    return (

        <div className="Contact-content">
            <div className="main">
                <div className="options">
                    <div className="section">
                        <Link to="/"><img src={Logo} alt="logo-image" /></Link>

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