import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/Logo-black.jpg";
import '@fortawesome/fontawesome-free/css/all.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faRocket } from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {

    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"> <img className="" src={Logo} alt="Image" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link text-white active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/about">About</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link text-white " to="/blog">Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/contact">Contact</Link>
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