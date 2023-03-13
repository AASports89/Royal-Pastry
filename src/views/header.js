import React from "react";
import SmoothScrollTo from "../hooks/smoothScrollTo";

export default function Header_nav() {

    return (
		<React.Fragment>
			<div className="container-fluid bg-light mt-5">
	
				<h5 data-aos="zoom-in" id="h5"  className="card-title">Discover the Power of Implementing Innovation & Automation:</h5>
                <h4 data-aos="zoom-out" className="card-title" id="m-sub"> A Single-Source of Truth For Laboratory Operational Success</h4>
				<div className="form-row justify-content-center mx-auto">
					
						<button data-aos="slide-up" id="submit-top" className={"btn btn-outline-light wow bounceIn"} data-wow-offset="0"
							onClick={() => SmoothScrollTo("contact-form")}>
								Schedule Free Consultation
						</button>
				
				</div>
			</div>
		</React.Fragment>
	);
}