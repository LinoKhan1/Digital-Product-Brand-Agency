import React from "react";
import Logo from '../../assets/images/Logo-white.JPG';
import '../Contact/contact.scss';
const Client = () => {

    return (
        <>
            <div className="Contact-content">
                <div className="main">
                    <div className="options">
                        <div className="section">
                            <img src={Logo} alt="logo-image" />
                            <h1 className="display-1">Get In Touch</h1>
                            <p>
                                Please submit the form below. We will get back to you soon 😃.

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
                                    <label>Message</label>

                                    <textarea name="" id="" placeholder="Type your message here..."></textarea>
                                    <input type="submit" value="Submit inquiry" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Client;