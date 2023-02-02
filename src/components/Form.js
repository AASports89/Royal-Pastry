import React from "react";
import './css/Form.css';

export default function ContactForm() {
    return(
        <div className="container contact-form" id="contact-form">
            <h2 className="card-title" id="title-m">Schedule A Free RCM Consultation Today!</h2>
        <form className="wow pulse" action="https://formspree.io/f/maykpnjz" method="POST">
            <div data-aos="zoom-in" className="form-group">

                <div className="row justify-content-center">
                        <div className="col-4-mx-auto">
                            <label id="label" htmlFor="first-name">First Name: <i id="ast"
                                                                       className="fa-solid fa-asterisk"></i></label>
                            <input type="text" className="form-control" id="first-name" placeholder="John" required/>
                        </div>

                        <div className="col-4-mx-auto">
                            <label id="label" htmlFor="last-name">Last Name: <i id="ast"
                                                                     className="fa-solid fa-asterisk"></i></label>
                            <input type="text" className="form-control" id="last-name" placeholder="Doe" required/>
                        </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-4-mx-auto">
                        <label id="label" htmlFor="email"><i className="fa-solid fa-envelope"></i> Email: <i id="ast"
                                                                                                  className="fa-solid fa-asterisk"></i></label>
                        <input type="email" className="form-control" id="email" placeholder="JohnD@ligolab.com"
                               required/>
                    </div>

                    <div className="col-4-mx-auto">
                        <label id="label" htmlFor="phone"><i className="fa-solid fa-phone"></i> Phone Number:</label>
                        <input type="text" className="form-control" id="phone" placeholder="(555) 5555-5555"/>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-4-mx-auto">
                        <label id="label" htmlFor="company"><i className="fa-regular fa-registered"> </i> Company/Laboratory
                            Name: <i id="ast" className="fa-solid fa-asterisk"></i></label>
                        <input type="text" className="form-control" id="company"
                               placeholder="LigoLab™ Information System" required/>
                    </div>

                    <div className="col-4-mx-auto">
                        <label id="label" htmlFor="state"><i className="fa-solid fa-map-pin"></i> State: <i id="ast"
                                                                                                 className="fa-solid fa-asterisk"></i></label>
                        <input type="text" className="form-control" id="state" placeholder="CA or California" required/>
                    </div>
                </div>

                <div className="row justify-content-center" id="heading">

                    <div className="col-7-mx-auto">
                        <label id="label" htmlFor="select"><i className="fa-solid fa-clipboard-check"></i> Please Select An Area of
                            Opportunity: <i id="ast" className="fa-solid fa-asterisk"></i></label>
                        <select className="custom-select" id="select" required>
                            <option selected disabled value="">Select an Option...</option>
                            <option>Revenue Cycle Management</option>
                            <option>Regulatory Compliance</option>
                            <option>Productivity/Metrics Analytics</option>
                            <option>Start-Up Consultation</option>
                            <option>Other: (Please explain below)</option>
                        </select>
                    </div>

                </div>

                <div className="row justify-content-center">
                    <div className="col-7 mb-4">
                        <label id="label" htmlFor="details"> <i className="fa-solid fa-briefcase"></i> Please Share Laboratory
                            Operation & Workflow Details Below: <i id="ast" className="fa-solid fa-asterisk"></i></label>
                        <textarea className="form-control" id="details" rows="3"
                                  placeholder="Laboratory workflow details include..." required></textarea>
                    </div>
                </div>

            </div>
            <div className="row text-center">
                <div className="col-12 mx-auto">
                    <button id="submit-1" className="btn btn-primary" type="submit">Schedule Free Consultation</button>
                </div>
            </div>
        </form>
        </div>
    )
}