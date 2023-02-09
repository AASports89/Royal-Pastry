import React from "react";
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
								<img data-aos="zoom-in" id="footer-logo" className="img-fluid" src="https://res.cloudinary.com/dhqsixgmo/image/upload/v1675156396/LigoLab_Template_Scratch_10_kbzvqf.svg" alt="ligolab.com" />
							</a>

							<div className="row justify-content-md-center">

								<h5 data-aos="flip-right" id="footer-logo-sub">
									<span id="badge-1" data-aos="zoom-in-right" className="badge">
                            			<img id="icon-ligo" src="https://res.cloudinary.com/dhqsixgmo/image/upload/v1675882601/ligo_logo_k9avxm.svg" alt="ligo icon"></img>
                        			</span>
									<a id="lis" href="https://www.ligolab.com/post/best-lis-laboratory-information-system-software-management">Laboratory Information System (LIS)</a>
								</h5>
							</div>
							<div className="row justify-content-md-center">
								<h5 data-aos="flip-left" id="footer-logo-sub">
									<span id="badge-1" data-aos="zoom-in-right" className="badge">
                            			<img id="icon-ligo" src="https://res.cloudinary.com/dhqsixgmo/image/upload/v1675882601/ligo_logo_k9avxm.svg" alt="ligo icon"></img>
                        			</span>
									<a id="rcm" href="https://wwww.ligolab.com/solutions/revenue-cycle-management">Revenue Cycle Management (RCM)</a>
								</h5>
							</div>

							<a
								className="px-3"
								href="https://#"
								target="_blank"
								rel="noopener noreferrer">
								<i data-aos="slide-left" id="footer-font" className="fa-brands fa-square-twitter"></i>
							</a>

							<a
								className="px-3"
								href="https://#"
								target="_blank"
								rel="noopener noreferrer">
								<i data-aos="slide-down" id="footer-font" className="fa-brands fa-linkedin"></i>
							</a>

							<a
								className="px-3"
								href="https://#"
								target="_blank"
								rel="noopener noreferrer">
								<i data-aos="slide-right" id="footer-font" className="fa-brands fa-square-facebook"></i>
							</a>

						</div>
					</div>
					<div className="row justify-content-center">
					<div className="col-12 justify-content-center" id="footer-div">
						<p id="footer-title">© LigoLab Information System 2006 - {year}</p>
						<p id="footer-title-1"><a id="terms" href="https://www.ligolab.com/terms-and-conditions">Terms</a> <strong>|</strong> <a id="privacy" href="https://www.ligolab.com/privacy-policy">Privacy</a></p>
					</div>
					</div>
					
				</div>
			</div>
		);
}
