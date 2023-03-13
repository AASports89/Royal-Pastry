import React, {useEffect} from "react";
import Aos from "aos";
import SmoothScrollTo from "../hooks/smoothScrollTo";
import './css/Header.css';

export default function Header() {
	
    useEffect(() => {
		Aos.init({duration:2000});
		window.addEventListener("scroll", () => {
			var navBar = document.getElementById("#navbar");
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
		<div className="container-fluid bg-light mt-5" id="navbar-div">

			<nav data-aos="slide-down" class="navbar navbar-expand-lg navbar-light bg-light" id="nav-cont">
				<a data-aos="slide-down" className="home-style navbar-brand" id="main-logo-link" href="www.ligolab.com" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
					<img id="logo" className="img-fluid" src="https://res.cloudinary.com/dhqsixgmo/image/upload/v1678591972/LIGOLAB_FULL_LOGO_mbj5er.svg" alt="ligolab"></img>
				</a>
				<div className="navbar-nav" data-aos="slide-down" id="nav-links">
					<a onClick={() => SmoothScrollTo("contact-form")} href="#contact-form" id="nav-link" className="btn-style nav-item nav-link">SCHEDULE FREE CONSULTATION</a>
					<a onClick={() => SmoothScrollTo("revenue_gaps")} href="#revenue_gaps" id="nav-link" className="btn-style nav-item nav-link">A SINGLE-SOURCE OF TRUTH</a>
					<a onClick={() => SmoothScrollTo("carousel")} href="#carousel" id="nav-link" className="btn-style nav-item nav-link">LIGOLAB™ PARTNERSHIPS</a>
				</div>
			</nav>

			<div id="nav-divider"></div>
		</div>
	);
}