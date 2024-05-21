import React, { useRef } from "react";
import Logo from '../../assets/images/Logo-white.JPG';
import '../Contact/contact.scss';
import { Link } from "react-router-dom";
import emailjs from '@emailjs/browser';

const Client = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ni8hifm', 'template_gkzkq4u', form.current, 'xBUmFOBzOS0lwWZLY')
            .then((result) => {
                console.log(result.text);
                console.log("message sent")
                alert("Your message has been sent!")

            }, (error) => {
                console.log(error.text);
            });
    }


    return (
        <>
            <div className="Contact-content">
                <div className="main contact-form">
                    <div className="options">
                        <div className="section">
                            <Link to="/"><img src={Logo} alt="logo-image" /></Link>
                            <h1 className="display-1">Get In Touch</h1>
                            <p>
                                Please submit the form below. We will get back to you soon 😃.

                            </p>
                            <form ref={form} onSubmit={sendEmail}>
                                <div className="row">
                                    <div className="col">
                                        <label htmlFor="user_name">First name</label>
                                        <input type="text" id="user_name" name="user_name" placeholder="John" />

                                    </div>
                                    <div className="col">
                                        <label htmlFor="lastName">Last name</label>
                                        <input type="text" id="lastName" name="lastName" placeholder="Smith" />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col">
                                        <label htmlFor="user_email">Email address</label>
                                        <input type="email" id="user_email" name="user_email" placeholder="johnsmith@gmail.com" />

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

                                    <textarea name="message" id="message" placeholder="Type your message here..."></textarea>
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