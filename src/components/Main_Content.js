import React, {Component} from "react";
import './css/Main_Content.css'; 

class Main_Content extends Component {

render() {

  return (
    <div data-aos="slide-right" className="col-12 justify-content-center" id="main">
        <div className="card-body">
            <h6 className="card-subtitle" id="subtitle">How much revenue is your laboratory leaving on the table?</h6>
        </div>

        <div className="col-12 justify-content-center">
            <p className="card-text" id="sub-title-1">
                <ul id="line-1" data-aos="flip-left">
                    <span id="badge" data-aos="zoom-in-left" className="badge">
                        <img id="icon-ligo" src="https://res.cloudinary.com/dhqsixgmo/image/upload/v1678594129/FULL_LOGO_LIGOLAB_zzgwms.svg" alt="ligo icon"></img>
                    </span>
                        Schedule a free consultation to learn how you can integrate custom revenue cycle management, automation & executive-level analytics to secure sustained long-term profitability & growth.
                </ul>

                <ul id="line-2" data-aos="flip-right">
                    <span id="badge" data-aos="zoom-in-right" className="badge">
                        <img id="icon-ligo" src="https://res.cloudinary.com/dhqsixgmo/image/upload/v1678594129/FULL_LOGO_LIGOLAB_zzgwms.svg" alt="ligo icon"></img>
                    </span>
                        Take advantage of this opportunity to sit down with leading industry professionals responsible for setting the bar, when it comes to laboratory operational success!
                </ul>
            </p>    
        </div>
</div>

  )}}

export default Main_Content;