import React, {Component} from "react";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from "react-simple-captcha";
import "./css/Captcha.css";

class Captcha extends Component {

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

        <div>

            <div className="container justify-content-center">
                <div id="captcha" className="form-group justify-content-center">

                <div className="col mt-3">
                    <LoadCanvasTemplate />
                </div>

                <div className="col mt-3">
                    <div>
                        <input id="userInput" className="form-control" type="text" name="userInput" placeholder="Enter Capture Code..."></input>
                    </div>
                </div>

                <div className="col mt-3">
                    <div className="form-row justify-content-center" id="buttons">
                        <button className="btn btn-primary" id="submit-code" onClick={ () => this.submitMyForm() }>
                            <i id="code" class="fa-solid fa-qrcode"></i> - Submit
                        </button>
                    </div>
                </div>

                </div>
            </div>
        </div>
        );
    }
};

export default Captcha;