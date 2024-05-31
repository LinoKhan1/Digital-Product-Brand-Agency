import React, { useState } from "react";
import Logo from '../../assets/images/Logo-white.JPG';
import '../Contact/contact.scss';
import { Link } from "react-router-dom";
import { useRef } from "react";
import emailjs from '@emailjs/browser';

const Proposal = () => {
    const [fileError, setFileError] = useState(null);


    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file && file.size > 10 * 1024 * 1024) {
            setFileError('File size must be less than 10MB');
        } else {
            setFileError(null);
        }
    };

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_725gn2g', 'template_gkzkq4u', form.current, 'kLCfazak-ocrHLbKy')
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
                            <h1 className="display-1">Get a proposal</h1>
                            <p>
                                We will be in touch to book a discovery call shortly after you submit the form below 😃.
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
                                        <label htmlFor="company">Company name</label>
                                        <input type="text" id="company" name="company" placeholder="Helix Consulting LLC" />

                                    </div>
                                    <div className="col">
                                        <label htmlFor="website">Website url (if applicable)</label>
                                        <input type="text" id="website" name="website" placeholder="helixconsulting.com" />
                                    </div>

                                </div>
                                <div className="row">
                                    <label htmlFor="projectFile">Upload project file (optional)</label>
                                    <span>
                                        <input
                                            type="file"
                                            id="projectFile"
                                            name="projectFile"
                                            accept=".pdf"
                                            onChange={handleFileChange}
                                        />
                                        Max file size 10MB
                                    </span>
                                    {fileError && <p className="file-error">{fileError}</p>}
                                    <p>Project Summary</p>
                                    <p>If you already uploaded a file containing all project information, you can type N/A below unless you want to add anything else.</p>
                                    <textarea name="message" id="message" placeholder="i.e. page count, functionality, design preferences, timeline, etc..."></textarea>
                                    <input type="submit" value="Submit request" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Proposal;
