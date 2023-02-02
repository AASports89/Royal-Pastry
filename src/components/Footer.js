import React from "react";
//IMPORT CSS --> FOOTER//
import './css/Footer.css';

export default function Footer() {

		const year = new Date().getFullYear();
		
		return (
			
			<div id="footer" className="container-fluid text-center py-5">
			<div id="footer-divider"></div>
				<div className="container">
					<div className="row">
						<div className="col-12 mx-auto">
							<a
								href="https://www.ligolab.com"
								target="_blank"
								rel="noopener noreferrer">
								<img id="footer-logo" className="img-fluid" src="https://res.cloudinary.com/dhqsixgmo/image/upload/v1675156396/LigoLab_Template_Scratch_10_kbzvqf.svg"/>
							</a>

							<div className="row justify-content-md-center">
								<h5 id="footer-logo-sub">Laboratory Information System & </h5>
							</div>
							<div className="row justify-content-md-center">
								<h5 id="footer-logo-sub">Revenue Cycle Management Operating Platform</h5>
							</div>

							<a
								className="px-3"
								href="https://#"
								target="_blank"
								rel="noopener noreferrer">
								<i id="footer-font" className="fa-brands fa-square-twitter"></i>
							</a>

							<a
								className="px-3"
								href="https://#"
								target="_blank"
								rel="noopener noreferrer">
								<i id="footer-font" className="fa-brands fa-linkedin"></i>
							</a>

							<a
								className="px-3"
								href="https://#"
								target="_blank"
								rel="noopener noreferrer">
								<i id="footer-font" className="fa-brands fa-square-facebook"></i>
							</a>

						</div>
					</div>
					<div className="row justify-content-center">
					<div className="col-12 justify-content-center" id="footer-div">
						<p id="footer-title">LigoLab™ Information System 2006 - {year}</p>
						<p id="footer-title-1">Terms & Conditions | Privacy Policy</p>
					</div>
					</div>
					
				</div>
			</div>
		);
}
