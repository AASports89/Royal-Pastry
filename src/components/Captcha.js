import React, {Component} from "react";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from "react-simple-captcha";
import "./css/Captcha.css";
import './css/Main_Content.css'; 

class Captcha extends Component {

    componentDidMount () {
        loadCaptchaEnginge(6); 
     };

     submitMyForm = () => {
        let user_captcha = document.getElementById('user_captcha_input').value;
  
        if (validateCaptcha(user_captcha)===true) {
            alert("✅ - Success! - ✅");
            loadCaptchaEnginge(6);
            document.getElementById('user_captcha_input').value = "";
        }
  
        else {
            alert("⛔ - Invalid Captcha®, enter valid code❗ - ⛔");
            document.getElementById('user_captcha_input').value = "";
        }
    };


render() {
    return (
        <div id="captcha" className="form-row justify-content-center">
               <div className="form-group">
                    <div className="col mt-3">
                        <LoadCanvasTemplate />
                    </div>

                    <div className="col mt-3">
                        <div><input placeholder="Enter Captcha® code..." id="user_captcha_input" name="user_captcha_input" type="text"></input></div>
                    </div>

                <div className="col mt-3">
                    <div><button id="submit-1" class="btn btn-primary" onClick={() => this.submitMyForm()}>Schedule Free Consultation</button></div>
                </div>
   
                </div>
                
        </div>  
    )}
};
 export default Captcha;