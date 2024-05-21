import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/Logo-black.jpg";
import '@fortawesome/fontawesome-free/css/all.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"> <img className="logo" src={Logo} alt="Image" /></a>
                    <button className="navbar-toggler" type="button" onClick={toggleNav}>
                        <span className="navbar-toggler-icon text-white"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link text-white" aria-current="page" to="/" onClick={toggleNav}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/about" onClick={toggleNav}>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/blog" onClick={toggleNav}>Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/contact" onClick={toggleNav}>Contact</Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <button className="btn-primary"><FontAwesomeIcon className="rocket" icon={faRocket} />Get a proposal</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
