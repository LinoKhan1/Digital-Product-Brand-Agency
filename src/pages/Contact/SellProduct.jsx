import React from "react";
import Logo from '../../assets/images/Logo-white.JPG';
import './contact.scss';
import { Link } from "react-router-dom";

const Sell = () => {
    return (
        <div className="Contact-content">
            <div className="main">
                <div className="options">
                    <div className="section">
                        <Link to="/"><img src={Logo} alt="Linokhan Logo" /></Link>


                        <h1 className="display-1">
                            Please Do not Contact
                        </h1>
                        <p>If you are selling backlinks, software, white label services, or anything else, we are not interested. Please do not contact us. If you are contacting us about an award or a high-profile press release, contact us here.

                        </p>
                        <Link to="/"><button>Back to homepage</button></Link>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default Sell;