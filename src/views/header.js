import React, {useEffect} from "react";
import SmoothScrollTo from "../hooks/smoothScrollTo";
import Aos from "aos";

export default function Header_nav() {
	useEffect(() => {
		Aos.init({duration:2000});
		window.addEventListener("scroll", () => {
			var navBar = document.getElementById("navbar");
			var domRect = navBar.getBoundingClientRect();
			var myBackground = document.getElementById("my-background");
			var domBGRect = myBackground.getBoundingClientRect();

			if (domRect.y <= -domRect.height) {
				navBar.classList.add("fade-in-nav");
			}
			if (-domBGRect.height < domBGRect.top) {
				navBar.classList.remove("fade-in-nav");
			}
		});
	}, [])

    return (
		<div>
	
			<div className="container justify-content-center">
	
				<h5 data-aos="zoom-in" id="h5"  className="card-title">Discover the Power of Implementing Innovation & Automation:</h5>
                <h4 data-aos="zoom-in" className="card-title" id="m-sub"> A Single-Source of Truth For Laboratory Operational Success</h4>
				<div className="form-row justify-content-center mx-auto">
					
						<button data-aos="slide-right" id="submit-top" className={"btn btn-outline-light wow bounceIn"} data-wow-offset="0"
							onClick={() => SmoothScrollTo("contact-form")}>
								Schedule Free Consultation
						</button>
				
				</div>
				
			</div>
		</div>
	);
}