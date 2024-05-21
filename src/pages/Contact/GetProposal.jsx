import React from "react";
import Logo from '../../assets/images/Logo-white.JPG';
import '../Contact/contact.scss';


const Proposal = () => {
    return (

        <>
            <div className="Contact-content">
                <div className="main">
                    <div className="options">
                        <div className="section">
                            <img src={Logo} alt="logo-image" />
                            <h1 className="display-1">Get a proposal</h1>
                            <p>
                                We will be in touch to book a discovery call shortly after you submit the form below 😃.
                            </p>
                            <form action="">
                                <div className="row">
                                    <div className="col">
                                        <label htmlFor="name">First name</label>
                                        <input type="text" id="name" name="name" placeholder="John" />

                                    </div>
                                    <div className="col">
                                        <label htmlFor="lastName">Last name</label>
                                        <input type="text" id="lastName" name="lastName" placeholder="Smith" />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col">
                                        <label htmlFor="email">Email address</label>
                                        <input type="email" id="email" name="email" placeholder="johnsmith@gmail.com" />

                                    </div>
                                    <div className="col">
                                        <label htmlFor="phone">Phone number</label>
                                        <input type="text" id="phone" name="phone" placeholder="+27765905100" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <label htmlFor="company">Compay name</label>
                                        <input type="text" id="company" name="company" placeholder="Helix Consulting LLC" />

                                    </div>
                                    <div className="col">
                                        <label htmlFor="webiste">Webiste url (if applicable)</label>
                                        <input type="text" id="website" name="webiste" placeholder="helixconsulting.com" />
                                    </div>

                                </div>
                                <div className="row">
                                    <label>Upload project file (optional)</label>
                                    <span><input type="button" value="Upload" /> Max file size 10MB</span>
                                    <p>Project Summary</p>
                                    <p>If you already uploaded a file containing all project information, you can type N/A below unless you want to add anything else.</p>
                                    <textarea name="" id="" placeholder="i.e. page count, functionality, design preferences, timeline, etc..."></textarea>
                                    <input type="submit" value="Submit request" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Proposal;