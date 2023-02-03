import React, {Component} from "react";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from "react-simple-captcha";
import "./css/Captcha.css";
import './css/Main_Content.css'; 

class Main_Content extends Component {

    componentDidMount() {
        loadCaptchaEnginge(6);
    };

    submitMyForm = () => {
        let user_captcha = document.getElementById("#userInput").value;

        if (validateCaptcha(user_captcha) === true) {
            alert("✅ - Success! - ✅");
            loadCaptchaEnginge(6);
            document.getElementById("#userInput").value = "";
        }

        else {
            alert("⛔ - Invalid, enter valid code❗ - ⛔");
            document.getElementById("#userInput").value = "";
        }
    };


render() {

  return (

    <div className="container-fluid justify-content-center">

        <div data-aos="slide-right" className="col-12 justify-content-center" id="main">
                <div className="card-body">
                  <h6 className="card-subtitle" id="subtitle">How much revenue is your laboratory leaving on the table?</h6>
                </div>

            <div className="form-row justify-content-center">
                <p className="card-text" id="sub-title-1">
                    <ul id="line-1">
                        <span id="badge" className="badge">
                            <img id="icon-ligo" src="https://res.cloudinary.com/dhqsixgmo/image/upload/v1675075008/LigoLab_Template_Scratch_10_jqgdp8_fwilt8.ico" alt="ligo icon"></img>
                        </span>
                            Schedule a free consultation to learn how you can integrate custom revenue cycle management, automation & executive-level analytics to secure sustained long-term profitability & growth.
                    </ul>
                       

                    <ul id="line-2">
                        <span id="badge" className="badge">
                            <img id="icon-ligo" src="https://res.cloudinary.com/dhqsixgmo/image/upload/v1675075008/LigoLab_Template_Scratch_10_jqgdp8_fwilt8.ico" alt="ligo icon"></img>
                        </span>
                            Take advantage of this opportunity to sit down with leading industry professionals responsible for setting the bar, when it comes to laboratory operational success!
                    </ul>
                </p>
            </div>
        </div>

<div className="col-3 justify-content-center">
    <div className="card" id="form"></div>
</div>

    <div className="row justify-content-center">
        <div data-aos="slide-left" className="col-6 justify-content-center" id="contact-form">
            <h2 className="card-title" id="title-m">Schedule A Free RCM Consultation Today!</h2>

        <form className="wow pulse" action="https://formspree.io/f/maykpnjz" method="POST">

    <div className="row justify-content-center">
        <div className="col-6-mx-auto">
            <label id="label" htmlFor="first-name">First Name: <i id="ast" className="fa-solid fa-asterisk"></i></label>
            <input type="text" className="form-control" id="first-name" placeholder="John" required/>
         </div>

        <div className="col-6-mx-auto">
            <label id="label" htmlFor="last-name">Last Name: <i id="ast" className="fa-solid fa-asterisk"></i></label>
            <input type="text" className="form-control" id="last-name" placeholder="Doe" required/>
        </div>
    </div>


    <div className="row justify-content-center">
        <div className="col-6-mx-auto">
            <label id="label" htmlFor="email"><i className="fa-solid fa-envelope"></i> Email: <i id="ast" className="fa-solid fa-asterisk"></i></label>
            <input type="email" className="form-control" id="email" placeholder="JohnD@ligolab.com" required/>
        </div>

        <div className="col-6-mx-auto">
            <label id="label" htmlFor="phone"><i className="fa-solid fa-phone"></i> Phone Number:</label>
            <input type="text" className="form-control" id="phone" placeholder="(555) 5555-5555"/>
        </div>
    </div>

    <div className="row justify-content-center">
        <div className="col-6-mx-auto">
            <label id="label" htmlFor="company"><i className="fa-regular fa-registered"> </i> Company/Laboratory Name: <i id="ast" className="fa-solid fa-asterisk"></i></label>
            <input type="text" className="form-control" id="company" placeholder="LigoLab™ Information System" required/>
        </div>

        <div className="col-6-mx-auto">
            <label id="label" htmlFor="state"><i className="fa-solid fa-map-pin"></i> Company Location - State: <i id="ast" className="fa-solid fa-asterisk"></i></label>
            <input type="text" className="form-control" id="state" placeholder="CA or California" required/>
        </div>
    </div>

    <div className="row justify-content-center" id="heading">

        <div className="col-7-mx-auto">
            <label id="label" htmlFor="select"><i className="fa-solid fa-clipboard-check"></i> Please Select An Area of Opportunity: <i id="ast" className="fa-solid fa-asterisk"></i></label>
                <select className="custom-select" id="select" required>
                    <option selected disabled value="">Select an Option...</option>
                    <option>Revenue Cycle Management</option>
                    <option>Regulatory Compliance</option>
                    <option>Productivity/Metrics Analytics</option>
                    <option>Start-Up Consultation</option>
                    <option>Other: (lease explain below)</option>
                </select>
        </div>

    </div>

    <div className="row justify-content-center">
        <div className="col-7-mx-auto">
            <label id="label" htmlFor="details"> <i className="fa-solid fa-briefcase"></i> Please Share Laboratory
                    Operation & Workflow Details Below: <i id="ast" className="fa-solid fa-asterisk"></i></label>
            <textarea className="form-control" id="details" rows="3" placeholder="Laboratory workflow details include..." required></textarea>
        </div>
    </div>

            <div className="form-row justify-content-center">
                    <button id="submit-1" className="btn btn-primary" type="submit">
                        Schedule Free Consultation
                    </button>
            </div>

<div id="captcha" className="form-row justify-content-center">

    <div id="canvas" className="form-row mt-3 justify-content-center">
        <LoadCanvasTemplate />
    </div>

        <div className="form-row mt-3 justify-content-center">
            <div className="form-row justify-content-center">
                <input id="userInput" className="form-control" type="text" name="userInput" placeholder="Enter Captcha® code"></input>
            </div>
        </div>

        <div className="form-row mt-3 justify-content-center" id="buttons">
            <button className="btn btn-primary" id="submit-code" onClick={ () => this.submitMyForm() }>
                <i id="code" class="fa-solid fa-qrcode"></i> - Submit
            </button>
</div>
                
</div>
</form>
</div>
</div>
<div data-aos="slide-right" id="qr-card" className="col-5 justify-content-center">
    <div id="qr-card-1" className="card"></div>
</div>
</div>
  )}}

export default Main_Content;