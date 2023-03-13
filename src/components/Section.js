import React,{ Component } from 'react';
import "./css/Section.css";

class Section extends Component {

    render() {
        return (
            <div className="container-fluid bg-light mt-5" id="dash-cont">
                <h1 cclassName="card-header" id="h8">Real-Time Data Analytics</h1>
                    <div className="row justify-content-md-center">
                        <div data-aos="zoom-in" className="row justify-content-md-center">
                            <p id='dash-text'>
                                Taking into account the current growing trend of reliance on analytical data within the majority of healthcare related services,
                                laboratory executives must leverage analytics tools to streamline workflow management and build accurate fiscal projections.
                                Tools such as the <strong><i>Dashboard Tool</i></strong> hosts a number of customizable data widgets, allowing laboratories to create limitless charts,
                                tables and reports reflecting all a laboratory's workflow needs.
                                Access all analytic workflow data on one user-friendly & intuitive platform window to streamline each step of your revenue cycle.
                            </p>
                        </div>

                    <div data-aos="slide-right" class="col-5">
                        <ul id="check-row-1"><i id="final-check-2" class="fa-solid fa-gauge-high"></i> - CPT Code & Diagnoses Centered Statistics</ul>
                        <ul id="check-row-1"><i id="final-check-2" class="fa-solid fa-gauge-high"></i> - Customizable KPIs & Metrics Tracking</ul>
                        <ul id="check-row-1"><i id="final-check-2" class="fa-solid fa-gauge-high"></i> - Revenue Forecasting & Transparent Bank Deposits</ul>
                        <ul id="check-row-1"><i id="final-check-2" class="fa-solid fa-gauge-high"></i> - Constant "Real-Time" Data Updates</ul>
                        <ul id="check-row-1"><i id="final-check-2" class="fa-solid fa-gauge-high"></i> - Executive-Level Reporting</ul>
                        <div class="form-row justify-content-md-center">
                            <a id="submit-4" class="btn btn-primary" href="#contact-form">Schedule Free Consultation</a>
                        </div>
                    </div>

                    <div className='col-7' id="dashboard">
                        <div data-aos="slide-left" class="card bg-transparent" id="dashboard-img">
                            <img src="https://res.cloudinary.com/dhqsixgmo/image/upload/v1678392306/RCM_DASH_drfv3w.svg" class="card-img" alt="tablet"></img>
                        </div>
                    </div>
                </div>
            </div>
)}};
export default Section;